"use client";

import { FC, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const ScrollToTop: FC<Props> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>{children}</>;
};

export default ScrollToTop;
