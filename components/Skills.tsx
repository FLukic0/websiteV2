"use client";

import { FC } from "react";
import SectionHeading from "./accessories/SectionHeading";
import FadeUp from "@/motions/FadeUp";
import { map } from "lodash";
import { skillsData } from "@/data/skillsData";
import Container from "./Container";
import useSectionInView from "@/hooks/useSectionInView";

const Skills: FC = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" className="skills-container" ref={ref}>
      <Container>
        <FadeUp>
          <SectionHeading>My skills</SectionHeading>
        </FadeUp>
        <div className="skills-wrapper">
          {map(skillsData, (skill, idx) => (
            <div key={idx} className="skill-container">
              <FadeUp>
                <h3>{skill.title}</h3>
              </FadeUp>
              <div className="skill-lst">
                {map(skill.items, (item, index) => (
                  <FadeUp
                    delay={0.05 * index}
                    style={{ display: "inline-block" }}
                    key={index}
                  >
                    <span>{item}</span>
                  </FadeUp>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
