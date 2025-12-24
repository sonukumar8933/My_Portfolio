import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaCogs, FaDatabase } from "react-icons/fa";
import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiPython,
  SiCplusplus,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiAmazonaws,
  SiVercel,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiLinux,
  SiPostman,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [SiPython, SiCplusplus, FaJava, FaHtml5, FaCss3Alt, FaJs],
      },
      {
        title: "Libraries & Frameworks",
        icons: [SiTailwindcss, FaReact, SiNodedotjs, SiExpress],
      },
      {
        title: "Cloud & DevOps",
        icons: [SiAmazonaws, SiVercel, SiDocker],
      },
      {
        title: "Databases",
        icons: [SiMongodb, SiMysql, FaDatabase],
      },
      {
        title: "Tools & Platforms",
        icons: [SiGit, SiGithub, SiVisualstudiocode, SiLinux, SiPostman, FaCogs],
      },
     
    ],
  },
  {
    title: "awards",
    info: [
       {
        title: "Hacktoberfest Contributor",
        stage: "2023",
      },
      {
        title: "Coursera Machine Learning Certificate",
        stage: "2025",
      },
      {
        title: "Winner - College Coding Challenge",
        stage: "2024",
      },
      {
        title: "Top Performer - Internshala AI/ML Internship",
        stage: "2025",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Developer Intern – NFT Minter Project",
        stage: "2025",
      },
      {
        title: "Software Engineering Intern – Startup ABC, Remote",
        stage: "2024",
      },
      {
        title: "Freelance Web Developer – 5+ Clients",
        stage: "2023–2025",
      },
      {
        title: "Event Management & Tech Lead – Ganga Bhumi Club",
        stage: "2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "BTech – First Year",
        stage: "2025–Present",
      },
      {
        title: "Applied Machine Learning in Python – Coursera",
        stage: "2025",
      },
      {
        title: "Full-Stack Web Development – Udemy / FreeCodeCamp",
        stage: "2024",
      },
      {
        title: "NDA Exam Cleared – Defense Services",
        stage: "2024",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
             <span className="text-accent">Discipline</span>, creativity, and <span className="text-accent">code</span> define me.
</motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
           Since diving into tech, I’ve explored web development, AI/ML, and cloud technologies, working on projects that challenged me and honed my skills. I’m always eager to learn, create, and innovate.
          </motion.p>

          {/* Counters */}
         <motion.div
  variants={fadeIn("right", 0.6)}
  initial="hidden"
  animate="show"
  className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
>
  <div className="flex flex-1 xl:gap-x-6">
    {/* experience */}
    <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        <CountUp start={0} end={1} duration={2} />
      </div>
      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
        Years of coding experience
      </div>
    </div>

    {/* projects */}
    <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        <CountUp start={0} end={5} duration={2} />
      </div>
      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
        Projects completed
      </div>
    </div>

    {/* internships */}
    <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        <CountUp start={0} end={1} duration={2} />
      </div>
      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
        Internships
      </div>
    </div>

    {/* awards */}
    <div className="relative flex-1">
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        <CountUp start={0} end={2} duration={2} />
      </div>
      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
        Awards & recognitions
      </div>
    </div>
  </div>
</motion.div>
        </div>

        {/* Info Section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) => (
              <div
                key={i}
                className={`${
                  index === i &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(i)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Info Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-x-3 flex-wrap text-white/80"
              >
                {/* Title */}
                <div className="font-semibold whitespace-nowrap">{item.title}</div>

                {/* Icons */}
                {item.icons && (
                  <div className="flex gap-x-2">
                    {item.icons.filter(Boolean).map((Icon, j) => (
                      <Icon key={j} className="text-2xl" />
                    ))}
                  </div>
                )}

                {/* Stage / extra info */}
                {item.stage && (
                  <div className="text-sm text-white/60 ml-2">{item.stage}</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
