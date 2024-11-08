import React from "react";

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "Motor.png",
    title: "Website Bengkel Motor",
    tags: ["Pemesanan"],
    projectLink: "#",
  },
  {
    imgSrc: "Clinical.jpg",
    title: "Clinical: Website Diagnosis Penyakit",
    tags: ["SC"],
    projectLink: "#",
  },
  {
    imgSrc: "Travel.png",
    title: "Travel Yuk: Website Review Tempat Wisata",
    tags: ["Traveling"],
    projectLink: "",
  },
  {
    imgSrc: "DMGNews.png",
    title: "DMG News: Website Berita",
    tags: ["Portal-Berita"],
    projectLink: "#",
  },
  {
    imgSrc: "GSI.jpg",
    title: "GSI: Website Perusahaan",
    tags: ["Perusahaan"],
    projectLink: "#",
  },
  {
    imgSrc: "Makan.png",
    title: "Mindo Enak:Website Pemesanan Makanan",
    tags: ["Pemesanan"],
    projectLink: "#",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-2">Portofolio</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
