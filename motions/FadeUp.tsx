"use client";

import { CSSProperties, FC, ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}

const FadeUp: FC<Props> = ({ children, delay = 0.175, style = {} }) => {
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
      style={style}
      variants={{
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
