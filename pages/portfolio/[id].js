import { useRouter } from "next/router";
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
import { BiChevronLeft } from "react-icons/bi";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineCaretRight } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
// import SinglePortfolio from './[id]';

const portfolios = [
  {
    id: 1,
    title: "Business Website",
    imageSrc: port1,
    url: "Business-Website",
    desc: "This is a website build for freelance firm or companies to highlight their products and services.",
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

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const SinglePortfolio = ({ portfolio: { title, imageSrc, desc } }) => {
  //const router = useRouter()
  // console.log(router.query.id)

  return (
    <div className="h-fit w-full text-center mx-auto ">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex" >
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>
        <h1 className="capitalize mx-auto text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>
        <div className="relative w-full mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="img" />
        </div>
        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Description
        </h2>

        <p>{desc}</p>
        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>
          <Link href="https://github.com/Pegu-Mrigen">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
              my portfolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePortfolio;
