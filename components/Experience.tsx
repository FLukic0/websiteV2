"use client";

import { FC } from "react";
import SectionHeading from "./accessories/SectionHeading";
import { experienceData } from "@/data/experienceData";
import { map } from "lodash";
import Container from "./Container";
import FadeUp from "@/motions/FadeUp";
import HoriztonalFade from "@/motions/HorizontalFade";
import ScaleUp from "@/motions/ScaleUp";
import useSectionInView from "@/hooks/useSectionInView";

const Experience: FC = () => {
  const { ref } = useSectionInView("Experience", 0.4);

  return (
    <section className="experience-container" id="experience" ref={ref}>
      <Container>
        <FadeUp>
          <SectionHeading>My Experience</SectionHeading>
        </FadeUp>
        <div className="experiences">
          <div className="vertical-line"></div>
          {map(experienceData, (item, idx) => (
            <div className="experience" key={idx}>
              <span className="icon-container">
                <ScaleUp>{item.icon}</ScaleUp>
              </span>
              <HoriztonalFade
                direction={`${idx % 2 === 1 ? "fade-left" : "fade-right"}`}
              >
                <div className={`content${idx % 2 === 1 ? " alternate" : ""}`}>
                  <div className="content-arrow"></div>
                  <span className="date">{item.date}</span>

                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                  <ul>
                    {map(item.content, (description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                </div>
              </HoriztonalFade>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
