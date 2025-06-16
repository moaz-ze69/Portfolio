import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { DeveloperInfo, Experience, LinkType, NavButtons, Project, Skill, Tab } from "./typeDefine";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaSass,
  FaBootstrap,
  FaMobileAlt,
  FaPython,
  FaJava,
  FaPhp,
  FaAws,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMysql, SiRedis, SiMongodb, SiCplusplus, SiC, SiJira, SiAsana, SiTrello, SiSlack, SiMicrosoftteams, SiCypress, SiJest } from 'react-icons/si';
import { project, opendoc, siy, police, hospi, algo, shpherd, sencare, mcp, guru, pt, hp, op, aip, gvr, skytire, express, eb, fr } from "./assets";

export const developerInfo: DeveloperInfo = {
  name: "Muhammad Moaz Ahmed",
  fullName: "Muhammad Moaz Ahmed",
  gender: "male",
  type: "MERN Stack",
  country: "",
  description:
    "Passionate and results-oriented MERN Stack Developer with over five years of experience specializing in backend development. Adept at constructing robust and scalable web applications, with deep expertise in JavaScript and its frameworks, particularly Express.js for backend tasks. Highly skilled in MongoDB for database management and ORM operations. Proficient in designing efficient, maintainable server-side logic, managing databases, and integrating APIs. Additionally experienced in frontend technologies, including Next.js and React, ensuring seamless and responsive user interfaces. Known for effective collaboration with cross-functional teams to deliver high-quality software solutions tailored to client and business requirements.",
  skills: `Passionate and results-oriented MERN Stack Developer with over five years of experience specializing in backend development. Adept at constructing robust and scalable web applications, with deep expertise in JavaScript and its frameworks, particularly Express.js and Next.js for backend tasks. Highly skilled in MongoDB for database management and ORM operations. Proficient in designing efficient, maintainable server-side logic, managing databases, and integrating APIs. Additionally experienced in frontend technologies, including Next.js and React, ensuring seamless and responsive user interfaces. Known for effective collaboration with cross-functional teams to deliver high-quality software solutions tailored to client and business requirements.`,
  contact: "I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.",
  mail: "i.moaz.ze69@gmail.com",
  phone: "+92 3053323138",
};

export const links: LinkType[] = [
  {
    name: "linkedin",
    link: "http://www.linkedin.com/in/muhammad-moaz-ahmed",
    icon: FaLinkedinIn,
  },
  {
    name: "github",
    link: "https://github.com/moaz-ze69",
    icon: FaGithubAlt,
  }
];

export const navButtons: NavButtons[] = [
  {
    name: "AboutMe",
  },
  {
    name: "Skills",
  },
  {
    name: "Experience",
  },
  {
    name: "Projects",
  },
  {
    name: "Contact",
  },
];

export const skills: Skill[] = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: FaReact },
  { name: 'Redux', icon: FaReact },
  { name: 'Vue.js', icon: FaVuejs },
  { name: 'Angular', icon: FaAngular },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: FaNodeJs },
  { name: 'Nest.js', icon: FaNodeJs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Redis', icon: SiRedis },
  { name: 'SQLite', icon: SiMongodb },
  { name: 'Sequelize', icon: FaDatabase },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Material UI', icon: FaReact },
  { name: 'Chakra UI', icon: FaReact },
  { name: 'React Native', icon: FaMobileAlt },
  { name: 'Docker', icon: FaDocker },
  { name: 'Git', icon: FaGitAlt },
  { name: 'SASS', icon: FaSass },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'Cypress', icon: SiCypress },
  { name: 'Jest', icon: SiJest },
  { name: 'PHP', icon: FaPhp },
  { name: 'AWS', icon: FaAws },
  { name: 'Python', icon: FaPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'C', icon: SiC },
  { name: 'Java', icon: FaJava },
  { name: 'JIRA', icon: SiJira },
  { name: 'Asana', icon: SiAsana },
  { name: 'Trello', icon: SiTrello },
  { name: 'Slack', icon: SiSlack },
];

export const experience: Experience[] = [

  {
    companyName: "techBean",
    position: "Chief Technology Officer",
    learning: "CTO with deep expertise in building scalable tech systems, leading engineering teams, and aligning technology with business vision for growth and innovation",
    tenure: "Present",
    image: "/techbean.jpg"
  },
  {
    companyName: "CBM",
    position: "Technical Team Lead",
    learning: "Technical Team Lead with a proven track record of leading high-performing teams, delivering scalable solutions, and driving innovation across full-stack projects.",
    tenure: "03-2023 11-2024",
    image: "/cbm.jpg"
  },

  {
    companyName: "DevWolfz",
    position: "Senior Software Engineer",
    learning: "I led the development and optimization of scalable web and mobile applications, ensuring robust architecture and high performance. I worked extensively with MERN Stack, Vue.js, AWS, and DevOps, overseeing end-to-end application development while mentoring junior developers.",
    tenure: "01-2022 02-2023",
    image: "/devwolfz.jpg"
  }, {
    companyName: "Ezee Logix",
    position: "Full Stack Developer",
    learning: "MERN stack development, AI applications with OpenAI, web and mobile platforms",
    tenure: "05-2020 12-2021",
    image: "/ezeelogix.jpg"
  },
];

export const projects: Project[] = [

  {
    number: "01",
    title: "FundRaiz",
    description: "The world's most powerful platform for analyzing, segmenting, and optimizing fundraising campaigns through the power of artificial intelligence.",
    image: fr,
    type: "MERN",
    link: "https://fundraiz.ai/",
  },
  {
    number: "02",
    title: "SkyTire – Your Trusted Source for Premium Tires",
    description: "SkyTire is an innovative online tire marketplace designed to simplify the tire shopping experience. It provides users with an intuitive platform to search, compare, and purchase tires seamlessly while integrating advanced filtering and recommendation systems.",
    image: skytire,
    type: "MERN",
    link: "https://skytire.com/",
  },
  {
    number: "03",
    title: "ExpressTires – Fast, Reliable, and Affordable Tire Solutions",
    description: "Developed a full-featured eCommerce website for ExpressTires, a tire delivery business specializing in top-brand all-season, performance, and off-road tires. Integrated seamless shopping experience with dynamic product filtering, expert recommendations, and a fast checkout system. Focused on high performance, responsive design, and smooth delivery tracking.",
    image: express,
    type: "MERN",
    link: "https://expresstires.com/",
  },
  {
    number: "04",
    title: "Easy Bounce",
    description: "Easy Bounce is a powerful and intuitive email validation tool designed to improve email deliverability. It helps marketers and developers clean up their email lists through comprehensive validation methods, ensuring that only valid emails are used in campaigns and reducing bounce rates.",
    image: eb,
    type: "MERN",
    link: "https://beta.easybouncemcom/",
  },{
    number: "05",
    title: "gvr. – Fundraising Made Effortless",
    description: "gvr. is the ultimate online fundraising platform, empowering individuals and organisations to create meaningful impact—quickly and easily. With no fees to start, powerful fundraising tools, and unmatched support, gvr. makes it simple, secure, and effective to raise funds for any cause.",
    image: gvr,
    type: "MERN",
    link: "https://gvrapp.au/",
  }
  

  // {
  //   number: "01",
  //   title: "AI Document Analyzer",
  //   description: "Developed an AI-powered document analysis system to automate the extraction of information from various document formats. Implemented advanced text recognition and analysis algorithms, utilized machine learning techniques, and integrated features for document organization, search, and retrieval.",
  //   image: opendoc,
  //   type: "MERN",
  //   link: "https://www.opendoc.ai/",
  // },
  // {
  //   number: "03",
  //   title: "Police Library and Student Management System",
  //   description: "Developed a management system for police library and student management using satellite imaging and ML techniques. Integrated user authentication, implemented data entry and anomaly detection, and automated reporting and data analysis.",
  //   image: police,
  //   type: "MERN",
  //   link: "https://ims-client.vercel.app/",
  // },


  // {
  //   number: "05",
  //   title: "Algomnia",
  //   description: "Developed a platform for algorithmic trading and investment analysis, leveraging machine learning to analyze market trends and manage investment portfolios. Implemented machine learning algorithms, developed interactive dashboards, and integrated real-time data feeds.",
  //   image: algo,
  //   type: "MERN",
  //   link: "https://www.algomnia.com/",
  // },
  // {
  //   number: "06",
  //   title: "Probate Shepherd",
  //   description: "Created a comprehensive platform for managing probate cases and legal documentation, streamlining workflows for attorneys and clients. Implemented features for tracking case progress, managing client information, and generating legal documents.",
  //   image: shpherd,
  //   type: "MERN",
  //   link: "https://www.probateshepherd.com/",
  // },
  // {
  //   number: "07",
  //   title: "Master Dashboard",
  //   description: "Developed a comprehensive dashboard for monitoring and managing various business metrics and data analytics. Implemented dynamic data visualizations, integrated user authentication, and developed modular and reusable components.",
  //   image: sencare,
  //   type: "MERN",
  //   link: "https://master.d3ph5hlmhewiob.amplifyapp.com/dashboard",
  // },
  // {
  //   number: "08",
  //   title: "MCCP Listing",
  //   description: "Created a listing platform for managing and displaying multi-category classified ads with advanced filtering and search capabilities. Developed advanced search and filtering functionalities, implemented user-friendly interfaces, and integrated responsive design principles.",
  //   image: mcp,
  //   type: "NEXT",
  //   link: "https://mccp-listing-eight.vercel.app/",
  // },
]

export const tabs: Tab[] = [
  {
    name: "All",
  },
  {
    name: "MERN",
  }

];
