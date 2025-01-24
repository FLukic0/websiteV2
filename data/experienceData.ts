import { FunctionComponentElement, createElement } from "react";
import { IconBaseProps } from "react-icons";
import { GrLocation } from "react-icons/gr";

export interface ExperienceDataInterface {
  name: string;
  role: string;
  date: string;
  icon: FunctionComponentElement<IconBaseProps>;
  content: string[];
}

export const experienceData: ExperienceDataInterface[] = [
  {
    name: "Kinaxis",
    role: "Frontend Developer",
    date: "May 2023 - Aug 2023",
    icon: createElement(GrLocation),
    content: [
      `Migrated a legacy Java based web app to modern React and Material UI based frontend as part of an agile
development team eliminating longstanding legacy bugs, adding new features based on customer requests, and streamlining workflows,
resulting in a vastly improved user experience`,
      `Redesigned internal build tools webpage using jQuery, streamlining build configurations and improving developer
ease of use resulting in a 30% reduction in build creation times and a more intuitive process`,
      `Validated code changes by creating unit and integration tests within a CI pipeline with 95% code coverage,
minimizing performance regressions and re-occurring bugs`,
    ],
  },
  {
    name: "Signiant",
    role: "Fullstack Developer",
    date: "Sept 2022 - Dec 2022",
    icon: createElement(GrLocation),
    content: [
      `Created and integrated new REST API endpoints using Express.js within an AWS heavy microservice architecture to
add support for Azure cloud storage, providing customers with a greater selection of storage providers and expanding Signiant's
pool of customers`,
      `Modified non-relational DynamoDB databases to support queries based on file metadata, allowing for filtering by tags,
complex queries based on metadata entries, and better file organization providing customers with faster and more efficent query results`,
      `Utilized React, Material UI, and Redux to create popup forms allowing customers to configure metadata fields and properties in the
same window used for view metadata removing the need for additional pages or tools`,
      `Created automated Python scripts to streamline batch testing processes, resulting in a 50%-time reduction in
creating and initiating tests`,
    ],
  },
  {
    name: "BlackBeryy QNX",
    role: "Student Developer",
    date: "Sept 2022 - Dec 2022",
    icon: createElement(GrLocation),
    content: [
      `Developed an IDE extension using the VS Code API, ReactJS and C to add support for QNX projects, allowing users to
adjust C and QNX compiler settings, and customize build targets for the QNX RTOS`,
      `Integrated QNX specific debugging tools into the IDE extension allowing for the debugging of QNX applications and
projects directly in the IDE removing the requirement for separate debugging application`,
      `Worked in a Linux environment using C to develop, test, and improve QNX CLI commands allowing for developers to
automate configuration tasks achieving a 20%-time reduction in project setup and creation`,
    ],
  },
  {
    name: "Transport Canada",
    role: "Solutions Developer",
    date: "May 2021 - Dev 2021",
    icon: createElement(GrLocation),
    content: [
      `Gathered requirements, designed, and implemented a business application to record security clearance applications
using a SQL database for organization-wide internal use, eliminating the need for manually emailed PDF`,
    ],
  },
];
