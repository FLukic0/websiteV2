"use client";

import { SectionProviderContext } from "@/providers/SectionProvider";
import { SectionName } from "@/types/types";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useSectionInView = (sectionName: SectionName, threshold = 0.5) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useContext(
    SectionProviderContext
  );

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};

export default useSectionInView;
