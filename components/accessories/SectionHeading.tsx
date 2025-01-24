"use client";

import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionHeading: FC<Props> = ({ children }) => {
  return <h2 className="section-heading">{children}</h2>;
};

export default SectionHeading;
