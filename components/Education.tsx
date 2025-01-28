"use client";

import { FC } from "react";
import Container from "./Container";
import FadeUp from "@/motions/FadeUp";
import SectionHeading from "./accessories/SectionHeading";
import Image from "next/image";
import Button from "./accessories/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { externalLinks } from "@/data/externalLinks";
import useSectionInView from "@/hooks/useSectionInView";

const Education: FC = () => {
  const { ref } = useSectionInView("Education", 0.5);

  return (
    <section className="education-container" id="education" ref={ref}>
      <Container>
        <FadeUp>
          <SectionHeading>My Education</SectionHeading>
        </FadeUp>

        <FadeUp>
          <div className="education">
            <Image
              src="/CarletonLogo.png"
              alt="carleton logo"
              quality={100}
              width="100"
              height="100"
            />
            <div className="summary">
              <h3>Carleton University</h3>
              <p className="date">Sept 2019 - April 2024</p>
              <h4>Bachelor of Computer Systems Engineering with Co-op</h4>
            </div>
            <div className="info">
              <ul>
                <li>GPA: 11.27/12 (3.91/4.0), with 20 months of Co-op</li>
                <li>Graduated with High Distinction</li>
                <li>Dean's Honour List for all terms</li>
              </ul>
            </div>
          </div>
        </FadeUp>
        <FadeUp>
          <Button
            to={externalLinks.grades}
            newTab
            className="grades-link"
            alternateColor
          >
            View Transcript <AiOutlineArrowRight />
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
};

export default Education;
