import React from "react";

import portfolio1 from "../public/assets/experience/html.png";
import portfolio2 from "../public/assets/experience/css.png";
import portfolio3 from "../public/assets/experience/javascript.png";
import portfolio4 from "../public/assets/experience/react.png";
import portfolio5 from "../public/assets/experience/nextjs.png";
import portfolio6 from "../public/assets/experience/tailwind.png";
import portfolio7 from "../public/assets/experience/graphql.png";
import portfolio8 from "../public/assets/experience/node.png";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: portfolio1,
    },
    {
      id: 2,
      title: "CSS",
      src: portfolio2,
    },
    {
      id: 3,
      title: "JAVASCRIPT",
      src: portfolio3,
    },
    {
      id: 4,
      title: "REACT",
      src: portfolio4,
    },
    {
      id: 5,
      title: "NEXT JS",
      src: portfolio5,
    },
    {
      id: 6,
      title: "TAILWIND",
      src: portfolio6,
    },
    {
      id: 7,
      title: "GRAPHQL",
      src: portfolio7,
    },
    {
      id: 8,
      title: "NODE",
      src: portfolio8,
    },
  ];
  return (
    <div id="experience" className="w-full pt-6">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold">
          experience
        </h2>
        <p className="py-4 w-full p-5 m-5 text-center">
          I do have experince in HTML, CSS, SCSS, Tailwind CSS, JavaScript,
          React JS, Next JS, Strapi Headless CMS, Wordpress, Photoshop, MERN
          application, API and Web Development.
        </p>
        <div className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-500"
            >
              <div className="flex flex-col items-center">
                <Image src={src} width="64px" height="64px " alt={title} />
                <h3 className="font-light mt-6 ">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
