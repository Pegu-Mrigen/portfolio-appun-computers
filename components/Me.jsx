import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full pt-6">
      <div id="experience" className="w-full ">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left ">
          <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold">
            me
          </h2>
          <div className="shadow-xl shadow-blue-300 my-8 p-8 ">
            <p className="py-4 max-w-5xl mx-auto">
              I am freelance Front-End Designer and Backend Developer of almost
              all types of websites. I can help your business to get online and
              grow promtly. I do have more than 10 years of working experience
              in different companies.
            </p>
            <p className="py-4 max-w-5xl mx-auto">
              Sometimes hard work does not pay but smart work does. Grow
              together to make the world more beautiful ! I love designing
              websites, developing apps and branding products. Now a days
              everyone seems to be a good Photographer with powerful mobile
              cameras. Actually pictures are great itself. I am very much
              interested in photography for my website unique images. I always
              maintain Production on time and on budget to give pleasure to my
              clients.
            </p>
            <p className="py-4 max-w-5xl mx-auto">
              I am always ready to develope and rebuild my old websites by
              replacing them with latest technologies. Technical skills are sets
              of abilities or knowledge used to perform practical tasks. I am
              always eagar to improve my leadership skill, time management
              quality, flexibility, self-confidence and ability to interact with
              peoples and work in a team. That is why I always look for new
              clients who comes with their new ideas to grow bussiness. I try to
              help my clients to earn more money. What's on Your Mind ? Share
              your project with me and get freelancing service in reasonable
              price.
            </p>
          </div>
          <div className="flex items-center justify-center gap-10">
            <Link href="/Mrigen Pegu's Resume.pdf" download={true}>
              <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
                resume
                <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                  <MdExpandMore size={25} />
                </span>
              </div>
            </Link>
            <Link href="/#portfolio">
              <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
                my portfolio
                <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                  <MdExpandMore size={25} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
