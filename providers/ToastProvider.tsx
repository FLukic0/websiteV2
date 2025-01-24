"use client";

import { uniqueId } from "lodash";
import {
  FC,
  FunctionComponentElement,
  ReactNode,
  createContext,
  createElement,
  useEffect,
  useState,
} from "react";
import { IconBaseProps } from "react-icons";
import { BiErrorCircle, BiCheckCircle } from "react-icons/bi";

interface ToastStructure {
  backgroundColor: string;
  id: string;
  title: string;
  description: string;
  remove: boolean;
  added: boolean;
  icon: FunctionComponentElement<IconBaseProps>;
}

interface ContextInterface {
  setToast: ({
    severity,
    title,
    description,
  }: {
    severity: "success" | "error";
    title: string;
    description: string;
  }) => void;
}

export const ToastContext = createContext<ContextInterface>(
  {} as ContextInterface
);

interface Props {
  children: ReactNode;
}

const ToastProvider: FC<Props> = ({ children }) => {
  const [toastLst, setToastLst] = useState<ToastStructure[]>([]);

  useEffect(() => {
    const deleteInterval = setInterval(() => {
      if (toastLst.length > 0) {
        applyRemoveAnimation(toastLst[0].id);
      }
    }, 3000);
    return () => clearInterval(deleteInterval);
  }, [toastLst]);

  const severitySettings = (severity: "success" | "error") => {
    var toastProperties = {};
    switch (severity.toLowerCase()) {
      case "success":
        toastProperties = {
          backgroundColor: "#5cb85c",
          icon: createElement(BiCheckCircle),
        };
        break;
      case "error":
        toastProperties = {
          backgroundColor: "#d9534f",
          icon: createElement(BiErrorCircle),
        };
        break;
      default:
        console.error("Severity of Toast is unknown: ", severity);
        setToastLst([]);
        break;
    }
    return toastProperties;
  };

  const applyRemoveAnimation = (id: string) => {
    const toastToEdit = toastLst.find((toast, idx) => {
      return toast.id === id;
    });

    if (!toastToEdit) return;

    toastToEdit.remove = true;

    setToastLst((prevToastLst) =>
      prevToastLst.map((toast, idx) => {
        return toast.id === toastToEdit.id ? toastToEdit : toast;
      })
    );
  };

  const deleteToast = (id: string) => {
    setToastLst((currLst) => currLst.filter((toast, idx) => toast.id !== id));
  };

  const setToast = ({
    severity,
    title,
    description,
  }: {
    severity: "success" | "error";
    title: string;
    description: string;
  }) => {
    const toastId = uniqueId();
    const set = severitySettings(severity);
    setToastLst((prevLst: any) => {
      return [
        ...prevLst,
        {
          ...set,
          id: toastId,
          title: title,
          description: description,
          remove: false,
          added: true,
        },
      ];
    });
  };

  const animationEnd = (id: string, isRemove: boolean, isAdded: boolean) => {
    if (isRemove) {
      deleteToast(id);
    }
    if (isAdded) {
      const toastToEdit = toastLst.find((toast, idx) => {
        return toast.id === id;
      });
      if (!toastToEdit) return;

      toastToEdit.added = false;

      setToastLst((prevToastLst) =>
        prevToastLst.map((toast, idx) => {
          return toast.id === toastToEdit.id ? toastToEdit : toast;
        })
      );
    }
  };

  return (
    <ToastContext.Provider value={{ setToast }}>
      <div className={`notification-container top-right`}>
        {toastLst.map((toast, i) => (
          <div
            key={i}
            className={`notification toast top-right ${
              toast.remove && "remove-toast"
            }
            ${toast.added && "add-toast"}`}
            style={{ backgroundColor: toast.backgroundColor }}
            onAnimationEnd={() =>
              animationEnd(toast.id, toast.remove, toast.added)
            }
          >
            <button onClick={() => applyRemoveAnimation(toast.id)}>X</button>
            <div className="notification-image">{toast.icon}</div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
