"use client";

import { FC } from "react";
import SectionHeading from "./accessories/SectionHeading";
import Container from "./Container";
import Link from "next/link";
import FadeUp from "@/motions/FadeUp";
import { externalLinks } from "@/data/externalLinks";
import useSectionInView from "@/hooks/useSectionInView";

const About: FC = () => {
  const { ref } = useSectionInView("About", 0.8);

  return (
    <section id="about" className="about-container" ref={ref}>
      <Container>
        <FadeUp>
          <div className="about">
            <SectionHeading>About me</SectionHeading>
            <div>
              <p>
                I’m a Computer (Systems) Engineering graduate with high distinction from Carleton University. I’ve always worked hard and taken an interest in my courses allowing me to achieve a GPA of 11.27/12.0 (3.91/4.0).
              </p>
              <br />
              <p>
                 During my studies, I’ve completed 20 months of co-op experience among 4 different companies. I’m proficient with many programing languages, with professional experience using JavaScript, TypeScript, C/C++, Python, and Java and love learning new things. I'm currently looking for full-time software developer positions.
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

export default About;
