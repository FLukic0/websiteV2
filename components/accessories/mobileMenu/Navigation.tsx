"use client";

import { FC, useContext, useEffect } from "react";
import { Variants, animate, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { map } from "lodash";
import { headerData } from "@/data/headerData";
import { SectionProviderContext } from "@/providers/SectionProvider";
import { SectionHref, SectionName } from "@/types/types";

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
} as const;

const variantsLi: Variants = {
  open: {
    y: 0,
    opacity: 1,
    pointerEvents: "auto",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    pointerEvents: "none",
    transition: {
      y: { stiffness: 1000 },
    },
  },
} as const;

interface Props {
  linkClick: (e: any, href: SectionHref, name: SectionName) => void;
  isHamburgerOpen: boolean;
}

const Navigation: FC<Props> = ({ linkClick, isHamburgerOpen }) => {
  const { activeSection } = useContext(SectionProviderContext);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isHamburgerOpen) {
      mainControls.start("open");
    } else {
      mainControls.start("closed");
    }
  }, [isHamburgerOpen]);

  return (
    <motion.ul variants={variantsUl}>
      {map(headerData, (link, idx) => (
        <motion.li
          variants={variantsLi}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={idx}
          initial="closed"
          animate={mainControls}
        >
          <motion.div
            animate={
              activeSection === link.name ? { scale: 1.1 } : { scale: 1 }
            }
          >
            <Link
              href={link.hash}
              className={`${activeSection === link.name ? "active" : ""}`}
              onClick={(e: any): void => linkClick(e, link.hash, link.name)}
            >
              {link.name}
            </Link>
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Navigation;
