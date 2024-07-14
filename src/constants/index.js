import project1 from "../assets/projects/todo.png";
import project2 from "../assets/projects/Portfolio.jpg";
import project3 from "../assets/projects/WebsiteClone.jpg";
import project4 from "../assets/projects/Callcull.jpg";
import project5 from "../assets/projects/ageCall.jpg";
import project6 from "../assets/projects/Currency.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React ReactRouter and Redux, as well as back-end technologies like Java, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.  I have worked with a variety of technologies, including React, Java, MySQL,  and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "--- Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [
      "Javascript",
      "React.js",
      "mongoDB",
      "Java",
      "Python",
      "mySQL",
    ],
  },
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "------",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components  APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "TailwindCSS", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "TODO App",
    image: project1,
    description:
      "Using React concepts Context API ,useState,useReducer,useRef Hooks with UI",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJs"],
  },
  {
    title: "MyPortfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "ReactJs", "TailWindCSS"],
  },
  {
    title: "WebsiteClone Responsive",
    image: project3,
    description:
      "All Functionality Website I tried almost to clone the website",
    technologies: ["HTML", "CSS", "TailWindCSS", "ReactJs", "ReactRouter"],
  },
  {
    title: "Calculater",
    image: project4,
    description: "usinig JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Age Calculater",
    image: project5,
    description: "usinig JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Currancy Converter",
    image: project6,
    description: "usinig JavaScript API Calls",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Thumbigere village Davanagere 577512",
  phoneNo: "+91 7411941292 ",
  email: "darshanajay60@gmil.com",
};
