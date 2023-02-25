import React from "react";
import port1 from "../../public/assets/portfolio/AC_WDP.jpg";
import port2 from "../../public/assets/portfolio/E_Sales.jpg";
import port3 from "../../public/assets/portfolio/ECOM_1.jpg";
import port4 from "../../public/assets/portfolio/ECOM_2.jpg";
import port5 from "../../public/assets/portfolio/ECOM_3.jpg";
import port6 from "../../public/assets/portfolio/F_ECOM_1.jpg";
import port7 from "../../public/assets/portfolio/GYM.jpg";
import port8 from "../../public/assets/portfolio/MyPort.jpg";
import port9 from "../../public/assets/portfolio/TC_ECOM.jpg";
import port10 from "../../public/assets/portfolio/MY_PORT.jpg";
import port11 from "../../public/assets/portfolio/S_ECOM_1.jpg";
import port12 from "../../public/assets/portfolio/F_ECOM_2.jpg";
import Link from "next/link";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";

export const getStaticProps = async () => {
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
      imageSrc: port8,
      url: "portfolio-page",
      desc: "This is portfolio-page to reach future recruiters who want to build a successfull carrier.",
    },
    {
      id: 9,
      title: "Products Page",
      imageSrc: port9,
      url: "dress-products-page",
      desc: "This is customer friendly filtered products page of Garments Ecommerce Website build in stripi to sale products effectively.",
    },
    {
      id: 10,
      title: "Portfolio Page",
      imageSrc: port10,
      url: "portfolio-home-page",
      desc: "This is portfolio-page to reach future recruiters who want to build a successfull carrier",
    },
    {
      id: 11,
      title: "Shoe Ecommerce",
      imageSrc: port11,
      url: "shoe-commerce-page",
      desc: "This is customer friendly filtered products page of Shoes to sale branded products effectively.",
    },
    {
      id: 12,
      title: "Checkout Page",
      imageSrc: port12,
      url: "checkout-page",
      desc: "This is checkout-page build using stripe payment gateway to sale products online.",
    },
  ];
  return { props: { portfolios } };
};

const SinglePortfolioRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full ">
      <div className="max-w-screen-xl mx-auto p-4 pt-24 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold pb-16">
          Portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePortfolioRoute;
