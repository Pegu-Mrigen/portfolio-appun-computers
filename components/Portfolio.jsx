import React from "react";
import { MdExpandMore } from "react-icons/md";
import port1 from "../public/assets/portfolio/AC_WDP.jpg";
import port2 from "../public/assets/portfolio/E_Sales.jpg";
import port3 from "../public/assets/portfolio/ECOM_1.jpg";
import port4 from "../public/assets/portfolio/GYM.jpg";
import port5 from "../public/assets/portfolio/ECOM_3.jpg";
import port6 from "../public/assets/portfolio/F_ECOM_1.jpg";
import port7 from "../public/assets/portfolio/GYM.jpg";
import port8 from "../public/assets/portfolio/MyPort.jpg";
import port9 from "../public/assets/portfolio/TC_ECOM.jpg";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Business Website",
      imageSrc: port1,
      url: "Business-Website",
      desc: "Business-Website-DESC",
    },
    {
      id: 2,
      title: "Ecommerce Website",
      imageSrc: port2,
      url: "Ecommerce-Website",
      desc: "This is fully functional Ecommerce Website build in headless CMS strapi as backend and React.js as frontend technologies to sale electronic products.",
    },
    {
      id: 3,
      title: "Cart page of Ecommerce Website",
      imageSrc: port3,
      url: "cart-page",
      desc: "This is cart page of Ecommerce Website build in stripe to sale electronic products online.",
    },
    {
      id: 4,
      title: "Filtered products",
      imageSrc: port4,
      url: "Filtered-products",
      desc: "This is customer friendly filtered products page of Ecommerce Website build in stripi to sale products effectively.",
    },
    {
      id: 5,
      title: "Products page",
      imageSrc: port5,
      url: "products-page",
      desc: "This is customer friendly products page of Ecommerce Website to filter products effectively.",
    },
    {
      id: 6,
      title: "Food ordering app",
      imageSrc: port6,
      url: "food-ordering-app",
      desc: "This is food-ordering-app of Restaurent to serve food products effectively.",
    },
    {
      id: 7,
      title: "GYM Website",
      imageSrc: port7,
      url: "GYM-website",
      desc: "This is GYM-website to reach people who wants himself physically fit and wish to maintain good health.",
    },
    {
      id: 8,
      title: "Portfolio Page",
      imageSrc: port7,
      url: "portfolio-page",
      desc: "This is portfolio-page to reach future recruiters who want to build a successfull carrier.",
    },
    {
      id: 9,
      title: "Products Page",
      imageSrc: port4,
      url: "dress-products-page",
      desc: "This is customer friendly filtered products page of Garments Ecommerce Website build in stripi to sale products effectively.",
    },
  ];
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-8 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold">
          Portfolio
        </h2>
        <p className="py-4 w-full p-5 m-5 text-center">
          

          I love to explore all the latest technologies related to web application development. I try to work in different latest web development libraries and frameworks. Recently, I rebuild few websites using technologies like SCSS, Tailwind CSS, React JS, Next JS, Strapi etc. The followings are images from those projects.
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md  shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt="portfolio"
                  className="rounded-md duration-200 hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))} */}

          <Link href="/portfolio/products-page">
            <div className="cursor-pointer group shadow-md  shadow-gray-600 overflow-hidden rounded-md">
              <Image
                src={port5}
                alt="portfolio"
                className="rounded-md duration-200 hover:scale-110"
              />
              <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                Filtered products
              </h2>
            </div>
          </Link>
          <Link href="/portfolio/Ecommerce-Website">
            <div className="cursor-pointer group shadow-md  shadow-gray-600 overflow-hidden rounded-md">
              <Image
                src={port2}
                alt="portfolio"
                className="rounded-md duration-200 hover:scale-110"
              />
              <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                Ecommerce Website
              </h2>
            </div>
          </Link>
          <Link href="/portfolio/food-ordering-app">
            <div className="cursor-pointer group shadow-md  shadow-gray-600 overflow-hidden rounded-md">
              <Image
                src={port6}
                alt="portfolio"
                className="rounded-md duration-200 hover:scale-110"
              />
              <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                Food ordering app
              </h2>
            </div>
          </Link>
          <Link href="/portfolio/GYM-website">
            <div className="cursor-pointer group shadow-md  shadow-gray-600 overflow-hidden rounded-md">
              <Image
                src={port4}
                alt="portfolio"
                className="rounded-md duration-200 hover:scale-110"
              />
              <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                GYM Website
              </h2>
            </div>
          </Link>
          <Link href="/portfolio/portfolio-page">
            <div className="cursor-pointer group shadow-md  shadow-gray-600 overflow-hidden rounded-md">
              <Image
                src={port8}
                alt="portfolio"
                className="rounded-md duration-200 hover:scale-110"
              />
              <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                Portfolio Page
              </h2>
            </div>
          </Link>
          <Link href="/portfolio/dress-products-page">
            <div className="cursor-pointer group shadow-md  shadow-gray-600 overflow-hidden rounded-md">
              <Image
                src={port9}
                alt="portfolio"
                className="rounded-md duration-200 hover:scale-110"
              />
              <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                Products Page
              </h2>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
