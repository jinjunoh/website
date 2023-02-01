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
    title: "Lenovo Experience Design Intern",
    location: "Online",
    description:
      "Conducted market research & collected customers’ design satisfaction data for All-in-One Computer"
      
  },
  {
    id: 2,
    date: "July 2021",
    iconsSrc: <IoCodeWorking />,
    title: "D.Lab Coding Academy T.A.",
    location: "Songpa-gu, Seoul, South Korea",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
      
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
    date: "August 2022",
    iconsSrc: <IoCodeWorking />,
    title: "Student",
    location: "Austin, Texas",
    description:
      "Enrolled as student in Cockrell School of Engineering at University of Texas at Austin",
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
  // {
  //   id: 1,
  //   iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
  //   name: "YouTube",
  //   link: "#",
  // },
  // {
  //   id: 1,
  //   iconSrc: (
  //     <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
  //   ),
  //   name: "Twitter",
  //   link: "#",
  // },
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
