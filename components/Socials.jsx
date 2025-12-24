import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  RiFileTextLine,
} from "react-icons/ri";

import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/sonu_.kr_25/",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61553429873821",
    Icon: RiFacebookLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sonu-kumar-29b83b308/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/sonukumar8933",
    Icon: RiGithubLine,
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1GC5PrD5mvt_wT_efR_LGsLotM8b75wnL/view?usp=sharing",
    Icon: RiFileTextLine,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/sonukgupta81/",
    Icon: SiLeetcode,
  },
  {
    name: "Codeforces",
    link: "https://codeforces.com/profile/sonu81092",
    Icon: SiCodeforces,
  },
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/drove_shell_75",
    Icon: SiCodechef,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
