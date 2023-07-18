import {
  IoCodeWorking,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub
} from "react-icons/io5";
import img1 from "./images/AustinKoreanSchool.png";
import img2 from "./images/FisforFluency.png";
import img3 from "./images/books.png";


export const Experience = [
  {
    id: 1,
    date: "June 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Lenovo [Intern]",
    location: "Online",
    description:
      "As an intern at the Lenovo Experience Design team, I Conducted market research & collected customers’ design satisfaction data for All-in-One Computer, utilized C++ to develop a custom data-cleaning algorithm that efficiently removed duplicate entries, corrected formatting errors, and identified outliers.",
    description2:
      "Finally, I was able to present the research findings to the relevant stakeholders within Lenovo, including members of the design team and upper management.",
  },
  {
    id: 2,
    date: "July 2021",
    iconsSrc: <IoCodeWorking />,
    title: "D.Lab Coding Academy [Teaching Assistent]",
    location: "Songpa-gu, Seoul, South Korea",
    description:
      "As a Teaching Assistant, I cooperated with professors and T.A.s to design and implement a computer science curriculum in Java with object-oriented concepts, data structures, algorithm development, handling libraries, and debugging techniques.",
  },
  {
    id: 3,
    date: "July 2021 - August 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Jober Co. [Marketing Research Intern]",
    location: "Online",
    description:
      "As an intern, I was in charge of investigating electronic signatures and their future implication and collected Korean & American students’ opinions about Jober product to improve service quality ",
  },
  {
    id: 4,
    date: "July 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Wharton Global Youth Summer Program",
    location: "Online",
    description:
      "Following my Junior year of highschool, I enrolled at Wharton Global Youth Summer Program and completed the Essentials of Finance summer course. In this program, I got the chance to meet with members of the Wharton Social Impact Initiative (WSII) to learn fundamentals of finance with real-world applications and case studies",
    description2:
      "Also as as CIO I led a team of 5 to complete an analysis project on impact investment completing due diligence on plant based seafood startup Good Catch Foods. My team recived 'Best Visuals Award' on the final project.",
  },
  {
    id: 5,
    date: "June 2022 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "Personal Website [Project]",
    location: "Austin, Texas",
    description:
      "This was the first project I started independently. I've been always interested in design and to implement it in code was a ground-breaking discovery.",
    description2:
      "I designed, developed, and deployed a personal website using React.js. React was an easy to learn library with linear data flow. I focused on getting used to JavaScript, HTML, and CSS to promote my personal brand and build a network of like-minded individuals in my field.",
  },
  {
    id: 6,
    date: "August 2022 - Present",
    iconsSrc: <IoCodeWorking />,
    title:
      "University of Texas at Austin [B.S. Electrical and Computer Engineering]",
    location: "Austin, Texas",
    description:
      "Enrolled as an undergraduate student pursuing BS in Electrical and Computer Engineering at University of Texas at Austin",
  },
  {
    id: 7,
    date: "November 2022 - February 2023",
    iconsSrc: <IoCodeWorking />,
    title: "Club Canvas Application [Team Project]",
    location: "Austin, Texas",
    description:
      "Problem: Each IM sports club at UT Austin had their own form of communication. When trying to communicate with different teams for skrimage matches or to follow with the current events in an event, our team found inconsistencies and sought to fix this issue",
    description2:
      "As part of the Front end and Back end team, I was able to experience IOS application development, utilizing version control to collaborate with cross-functional teams. My team utilized Swift and Firebase to create user-friendly interfaces integrated with back-end systems, resulting in a successful deployment benefiting student organizations at UT Austin. Furthermore, we successfully initiated the conversion of the application to a website which attracted 58% higher traffic and increase accessibility",
  },
  {
    id: 8,
    date: "March 2023 - April 2023",
    iconsSrc: <IoCodeWorking />,
    title: "AWS Serverless Web Application [AWS]",
    location: "Austin, Texas",
    description:
      "Saas and cloud services caught my attention. I wanted to experience and deliver a project that utilizes the full potential of AWS services.",
    description2:
      "Therefore, I configured AWS Amplify to host and authenticat users using SRP and JWT with Amazon Cognito. To create a serverless backend I utilized API Gateaway to build a public backend API from which the server recives data. Then, I utilized NoSQL Amazon DynamoDB to provide a persistent layer where data can be stored by the API's Lambda function.",
  },
  {
    id: 8,
    date: "May 2023 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "AWS Certified Cloud Practitioner",
    location: "Online",
    description:
      "After gaining a comprehensive understanding of key AWS services including computing, storage, databases, and networking, I am looking forward to leveraging the power of AWS to design, deploy, and manage scalable and reliable cloud architectures for businesses.",
    description2: "",
  },
  {
    id: 9,
    date: "May 2023 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "SNS Task Manager [Team Project]",
    location: "Seoul, South Korea",
    description:
      "Problem: Social Media is one of the main sources of social distress within teens. However, apps like BeReal aspire to bring forth positive and proactive abilities of social media.",
    description2:
      "With the basics in Cloud services and React established, I sought to experience MySQL and Express.js. Inspired by BeReal, a real time image sharing app, I decided to work on a project which can share a user's todo list and integrate image sharing capabilities with his/her friends. (Just Like BeReal)",
    description3:
      "The first step was to familier myself with express and React-Native. I created the schema on dbdiagram.io and integrated on a local MySQL server through dbmate. Then, I worked on developing REST APIs with MVC (Model-view-controller) design pattern to promote decoupling and enable unit tests of each component. I deployed the database on AWS RDS, Backend Server on AWS EC2, and Frontend Server on AWS S3 Bucket.",
  },
];

export const Projects = [
  {
    id: 1,
    name: "F is for Fluency (Non-Profit)",
    imageSrc: img2,
    techs:
      "With brilliant peers, we sought to bring our mission of 'Fun and easy education without a price tag' to reality. As Co-President and Co-Korea lead, I orchestrated online English classes for 60+ disadvantaged children across South Korea and China by organizing the schedules for classes and monitoring all communication between tutors and students.",
    position: "Co-President & Co-Korea Lead",
    duration: "December 2019 - July 2021",
  },
  {
    id: 2,
    name: "Children Love Books Club",
    imageSrc: img3,
    techs:
      "I love reading books and sharing the joy of reading was something I've always dreamt of. So, I was fortunate enough to get the chance to publish children's picture books with 10+ members warning the dangers of the pandemic. We donated final products to fight illiteracy & social inequality via education",
    position: "Founder & President",
    duration: "October 2020 - July 2021",
  },
  {
    id: 3,
    name: "Austin Korean School",
    imageSrc: img1,
    techs:
      "Throughout highschool I was a part of Austin Korean School's teaching staff where I facilitated Korean classes while providing administrative assistance Mentored 2nd generation Korean American children",
    position: "Teaching Assistent",
    duration: "February 2018 - August 2020",
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
