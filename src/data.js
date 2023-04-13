import {
  IoCodeWorking,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub
} from "react-icons/io5";
import img1 from "./images/thumb-fooddeliveryapp-reactjs-dec.png";
import img2 from "./images/thumb-fullstack-socialmedia-app-react-sanity.png";
import img3 from "./images/thumb-google-map-clone-nextjs-feb22.png";


export const Experience = [
  {
    id: 1,
    date: "June 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Lenovo Project Intern",
    location: "Online",
    description:
      "As an intern at the Lenovo Experience Design team, I Conducted market research & collected customers’ design satisfaction data for All-in-One Computer, utilized C++ to develop a custom data-cleaning algorithm that efficiently removed duplicate entries, corrected formatting errors, and identified outliers, and presented the research findings to the relevant stakeholders within Lenovo, including members of the design team and upper management.",
      
  },
  {
    id: 2,
    date: "July 2021",
    iconsSrc: <IoCodeWorking />,
    title: "D.Lab Coding Academy T.A.",
    location: "Songpa-gu, Seoul, South Korea",
    description:
      "As a Teaching Assistant, I cooperated with professors and T.A.s to design and implement a computer science curriculum in Java with object-oriented concepts, data structures, algorithm development, handling libraries, and debugging techniques.",
      
  },
  {
    id: 3,
    date: "July 2021 - August 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Jober Co. Marketing Research Intern",
    location: "Online",
    description:
      "Investigated electronic signatures and their future implication Collected  Korean & American students’ opinions about Jober product to improve service quality ",
  },
  {
    id: 4,
    date: "July 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Wharton Global Youth Summer Program",
    location: "Online",
    description:
      "Completed Essentials of Finance summer course in the Wharton Global Youth Program",
  },
  {
    id: 5,
    date: "June 2022 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "Personal Website",
    location: "Austin, Texas",
    description:
      "Designed, developed, and deployed a personal website using React.js, JavaScript, HTML, and CSS to promote my personal brand and build a network of like-minded individuals in my field. Utilized additional languages such as Node.js and babel to create a dynamic and responsive website.",
  },
  {
    id: 6,
    date: "August 2022 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "University of Texas at Austin",
    location: "Austin, Texas",
    description:
      "Enrolled as student pursuing BS Electrical and Computer Engineering at University of Texas at Austin",
  },
  {
    id: 7,
    date: "November 2022 - February 2023",
    iconsSrc: <IoCodeWorking />,
    title: "Club Canvas Application",
    location: "Austin, Texas",
    description:
      "Experienced IOS application development, utilizing version control to collaborate with cross-functional teams, utilizing Swift and Firebase to create user-friendly interfaces integrated with back-end systems, resulting in a successful deployment benefiting student organizations at UT Austin. Successfully initiated the conversion of the application to a website which attracted 58% higher traffic and increase accessibility",
  },
  {
    id: 8,
    date: "March 2023 - April 2023",
    iconsSrc: <IoCodeWorking />,
    title: "AWS Serverless Web Aookucatuib",
    location: "Austin, Texas",
    description:
      "To gain more experience in Saas, I configured AWS Amplify to host and authenticat users using SRP and JWT with Amazon Cognito. Theb, I built a serverless backend that recives data froma  public backend API built using Lambda and API Gateaway for which I utilized Amazon DynamoDB to provide a persistent layer where data can be stored by the API's Lambda function.",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Austin Korean School",
    imageSrc: img1,
    techs: "Facilitated Korean classes while providing administrative assistance Mentored 2nd generation Korean American children",
    position: "TA",
    duration: "February 2018 - August 2020"
  },
  {
    id: 2,
    name: "F is for Fluency (Non-Profit)",
    imageSrc: img2,
    techs: "Orchestrated online English classes for 60+ disadvantaged children across South Korea and China by organizing the schedules for classes and monitoring all communication between tutors and students.",
    position: "Vice President",
    duration: "December 2019 - July 2021"

  },
  {
    id: 3,
    name: "Children Love Books Club",
    imageSrc: img3,
    techs: "Created picture books with 10+ members and donated final products Fought illiteracy & social inequality via education",
    position: "Founder & President",
    duration: "October 2020 - July 2021"

  },
  // {
  //   id: 4,
  //   name: "Pintrest UI Clone 2.0 ",
  //   imageSrc: img4,
  //   techs: "React Js,  Material UI",
  //   position: "#",
  // },
  // {
  //   id: 5,
  //   name: "Own Video Blog",
  //   imageSrc: img5,
  //   techs: "React Js, Chara UI, Firebase",
  //   position: "#",
  // },
  // {
  //   id: 6,
  //   name: "Whatsapp UI Clone",
  //   imageSrc: img6,
  //   techs: "NextJs, Firebase Auth",
  //   position: "#",
  // },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/jinjunoh",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jin-jun-oh-348265217/",
  },
  {
    id: 3,
    iconSrc: (
      <IoLogoInstagram className="text-gray-500 text-3xl cursor-pointer" />
    ),
    name: "Instagram",
    link: "https://www.instagram.com/jj__oh/",
  },
];
