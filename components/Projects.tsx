"use client";

import { FC } from "react";
import Container from "./Container";
import SectionHeading from "./accessories/SectionHeading";
import { map } from "lodash";
import { projectsData } from "@/data/projectData";
import Image from "next/image";
import Button from "./accessories/Button";
import FadeUp from "@/motions/FadeUp";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { externalLinks } from "@/data/externalLinks";
import useSectionInView from "@/hooks/useSectionInView";

const Projects: FC = () => {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section className="projects-container" id="projects" ref={ref}>
      <Container>
        <FadeUp>
          <SectionHeading>My Favorite Projects</SectionHeading>
        </FadeUp>
        <FadeUp>
          <p className="intro">
            Here are some of my favorite projects to date! <br /> More can be
            found on my{" "}
            <Link href={externalLinks.github} className="bold" target="_blank">
              Github
            </Link>
            .
          </p>
        </FadeUp>
        <div className="projects">
          {map(projectsData, (project, idx) => (
            <FadeUp key={idx}>
              <div className="project">
                <div className="content">
                  <h3 className="title">{project.name}</h3>
                  <ul className="languages">
                    {map(project.language, (lang, index) => (
                      <li key={index}>{lang}</li>
                    ))}
                  </ul>
                  <ul className="descriptions">
                    {map(project.content, (item, index2) => (
                      <li key={index2}>{item}</li>
                    ))}
                  </ul>
                  <Button
                    to={project.github}
                    newTab
                    className="view-project"
                    alternateColor
                  >
                    <AiFillGithub /> View Project On Github!
                  </Button>
                </div>
                <Image
                  src={project.imgUrl}
                  alt="project image"
                  width="300"
                  quality={100}
                  height="300"
                />
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp>
          <Button
            to={externalLinks.github}
            newTab
            className="more-projects"
            alternateColor
          >
            <AiFillGithub /> Check out my github for more!
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
};

export default Projects;
