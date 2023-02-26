import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../public/assets/logo.png";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "portfolio" },
    { id: 3, link: "experience" },
    { id: 4, link: "me" },
    { id: 5, link: "contact" },
  ];

  return (
    <div
      className={`${
        pageScroll
          ? "w-full h-20 z-10 fixed duration-300 ease-in  bg-black text-[#fff]"
          : "w-full h-20 z-10 fixed duration-300 ease-in  bg-blue-500 text-[#fff]"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider">
            <Image className="w-[70px] h-[70px]" src={logo} alt="img" />
          </h1>
        </Link>
        <div  >
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link href={`/#${link}`} key={id}>
                <li className="ml-10 text-sm uppercase duration-200 ease-out hover:scale-105 tracking-wider">
                  {link}
                </li>
              </Link>
            ))}
          </ul>
          {!navigation && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => {
                setNavigation(true);
              }}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease in duration-500  overflow-auto"
              : "fixed top-0 left-[-100%] p-10 h-full duration-500 "
          }
        >
          <div>
            <div className="flex w-full  items-center justify-between">
              <Link href="/#home"></Link>
              <div className="p-2 cursor-pointer ">
                <FaTimes
                  onClick={() => {
                    setNavigation(false);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-18 flex flex-col h-fit gap-12">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-2xl tracking-wider cursor-pointer"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
            <div>
              <div
                className="grid grid-cols-2 mx-auto w-4/5
                gap-8 "
              >
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer ">
                  <FaLinkedin size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer ">
                  <FaTwitter size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer ">
                  <FaGithub size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer ">
                  <FaFacebook size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
