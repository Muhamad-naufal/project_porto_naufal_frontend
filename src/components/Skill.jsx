import React from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "./src/assets/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "./src/assets/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "./src/assets/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "./src/assets/sql.svg",
    label: "SQL",
    desc: "Database",
  },
  {
    imgSrc: "./src/assets/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "./src/assets/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "./src/assets/Laravel.svg",
    label: "Laravel",
    desc: "Framework",
  },
  {
    imgSrc: "./src/assets/html.svg",
    label: "HTML",
    desc: "User Interface",
  },
  {
    imgSrc: "./src/assets/php.svg",
    label: "PHP",
    desc: "Server Side",
  },
  {
    imgSrc: "./src/assets/python.svg",
    label: "Python",
    desc: "Programming",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Skills</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Here are some of the technologies I've been working with recently:
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
