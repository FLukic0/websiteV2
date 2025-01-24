import { motion, useAnimation, useInView } from "framer-motion";
import { FC, ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const ScaleUp: FC<Props> = ({ children, delay = 0.175 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      style={{ position: "relative", width: "auto", overflow: "hidden" }}
      variants={{
        hidden: { scale: 0, opacity: 0, visibility: "hidden" },
        visible: { scale: 1, opacity: 1, visibility: "visible" },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleUp;
