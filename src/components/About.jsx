import React from "react";

const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-4 md:text-xl">
            Saya adalah seorang pengembang web yang bersemangat menciptakan
            situs web yang menarik dan fungsional, dengan tujuan memberikan
            solusi nyata bagi kebutuhan pengguna. Menguasai HTML, CSS,
            JavaScript, PHP, dan SQL, saya menggabungkan estetika desain dengan
            keandalan teknis untuk menghasilkan pengalaman pengguna yang
            optimal. Saya juga memiliki minat dalam membangun antarmuka pengguna
            yang elegan dan modern, serta menerapkan praktik terbaik dalam
            pemrograman dan pengembangan aplikasi web.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key} className="">
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="favicon.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
