"use client";

import { FC, useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "@/providers/ThemeProvider";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

const ThemeToggleBtn: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggle = (e: any): void => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 0.5,
      }}
      className="theme-toggle-btn-container"
    >
      <Button noText to="#" action={toggle} className="theme-toggle-btn">
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </Button>
    </motion.div>
  );
};

export default ThemeToggleBtn;
