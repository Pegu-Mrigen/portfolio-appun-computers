import React from "react";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col text-center items-center bg-blue-500">
    <div className="grid grid-cols-2 m-5 p-5 md:flex justify-center gap-12  ">
      <div className="mb-5 flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer hover:scale-110 ">
        <FaLinkedin size={25} />
      </div>
      <div className="mb-5 flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer hover:scale-110 ">
        <FaTwitter size={25} />
      </div>
      <div className="mb-5 flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer hover:scale-110 ">
        <FaGithub size={25} />
      </div>
      <div className="mb-5 flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer hover:scale-110 ">
        <FaFacebook size={25} />
      </div>

    </div>
      <p className="mb-12 font-bold">Copyright &copy; Appun Computers, Gohpur(Assam).</p>
      </div>
  );
};

export default Footer;
