"use client";

import { FC, useContext } from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";
import Button from "./accessories/Button";
import { externalLinks } from "@/data/externalLinks";
import useSectionInView from "@/hooks/useSectionInView";
import { SectionProviderContext } from "@/providers/SectionProvider";
import { scrollToSection } from "@/utils/utilities";

const Introduction: FC = () => {
  const { ref } = useSectionInView("Home", 0.8);
  const { setActiveSection, setTimeOfLastClick } = useContext(
    SectionProviderContext
  );
  return (
    <section id="home" className="introduction-container" ref={ref}>
      <Container>
        <div className="introduction">
          <div className="image-container">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "tween",
                duration: 0.3,
              }}
            >
              <Image
                src="/myPic.jpg"
                alt="Profile pic"
                width="192"
                height="192"
                quality="95"
                priority={true}
              />
            </motion.div>

            <motion.span
              className="wave"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>

          <motion.p
            className="summary"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="bold">Hello! I'm Filip Lukic.</span>{" "}
            <span className="bold">I'm a Computer Engineering gradutate from Carleton</span>.{" "}
          </motion.p>

          <motion.div
            className="reach-me"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <div>
              <Button
                to="#contact"
                alternateColor
                action={(e: any) => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                  scrollToSection(e, "#contact");
                }}
              >
                Contact me <HiOutlineMail />
              </Button>
            </div>
            <div>
              <Button to={externalLinks.linkedIn} noText newTab>
                <FaLinkedinIn />
              </Button>

              <Button to={externalLinks.github} noText newTab>
                <FaGithubSquare />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
