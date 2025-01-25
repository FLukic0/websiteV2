interface ProjectInterface {
  name: string;
  language: string[];
  imgUrl: string;
  content: string[];
  github: string;
}

export const projectsData: ProjectInterface[] = [
  {
    name: "BME680 Air Quality Monitor",
    language: [
      "C",
      "JavaScript",
      "React",
      "Machine Learning",
    ],
    imgUrl: "/bme680DevBoard.png",
    content: [
      `Designed a scalable system architecture for the processing and storage of air quality data using several ESP32
microcontrollers communicating using MQTT and WebSockets for real time data collection and processing`,
      `Setup non-relation databases using DynamoDB and developed a serverless REST API using AWS Lambda and API
Gateway to provide easy accesss to collected data for integrations with our web application`,
      `Created a modern single page web app to provide users with a visual method to register new devices, manage existing devices 
and their configurations, share devices and device info with other users, and view graphical representations of the current air quality`,
      `Integrated OAuth SSO into a single page web app for easy user access and management`,
      `Utilized Amazon SageMaker along with Python to implement machine learning algorithms for odour identification,
achieving an 80% success rate in accurate odor classifications`,
      `Utilized AWS CDK and CloudFormation to programmatically deploy services using infrastructure as code (IaC) to ensure 
deployment consistency and allow for faster iteration timelines`,
    ],
    github:
      "https://github.com/slukic0/air-quality-monitoring",
  },
  {
    name: "Autonomus Snowplow",
    language: [
      "C++",
    ],
    imgUrl: "/snowplow.png",
    content: [
      `Designed and implemented an autonomous snow plow using C++ to control and monitor various sensors, including
ultrasonic rangefinders, IR distance sensors, and line follower sensors for obstacle detection and avoidanc`,
      `Applied principles of inheritance and abstraction to reduce code complexity and repetition, allowing for easier debugging, better organizaiton,
and simplier algorithm creation throught the use of default constructors`,
      `Achieved 90% snow cube clearance within a two-minute time period without exceeding the test area boundary or colliding with any obstacles`,
    ],
    github:
      "https://github.com/SYSC-Courses/course-project-l2-g1",
  },
  {
    name: "Real-time Elevator Scheduler",
    language: [
      "Java",
      "JUnit",
    ],
    imgUrl: "/elevator.png",
    content: [
      `Implmenented an elevator control system in real-time using Java multithreading to minimize wait times and maximize task distrubution among elevators`,
      `Utilized UDP to connect components through a local area network via the same machine with the option to connect across multiple machines machines.`,
    ],
    github:
      "https://github.com/slukic0/elevator",
  },
];
