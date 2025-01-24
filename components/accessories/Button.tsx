"use client";

import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  to: string;
  noText?: boolean;
  newTab?: boolean;
  alternateColor?: boolean;
  action?: (e: any) => void;
}

const Button: FC<Props> = ({
  children,
  to,
  noText = false,
  newTab = false,
  alternateColor = false,
  className,
  action = undefined,
}) => {
  return (
    <Link
      onClick={
        action
          ? (e: any) => {
              action(e);
            }
          : () => {}
      }
      href={to}
      className={`btn${noText ? " fully-rounded" : ""}${
        alternateColor ? " alternate-color" : ""
      }${className ? ` ${className}` : ""}`}
      target={`${newTab ? "_blank" : ""}`}
    >
      {children}
    </Link>
  );
};

export default Button;
