import Image from "next/image";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import contact from "../public/assets/contact.png";

const Contact = () => {
  return (
    <div id="contact" className="w-full pt-6">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl  tracking-wider uppercase text-blue-500 font-bold">
          Conatct
        </h2>

        <h1 className="py-4 max-w-lg text-xl">Let us discuss your project</h1>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image src={contact} alt="contact" className="rounded-xl" />
            <p className="pt-2 pb-8 capitalize text-center">
              WORK WITH US at GOHPUR TOWN, ASSAM <br />
              <span className="lowercase">
                mrig8520@gmail.com <br /> 7002274701
              </span>
            </p>

            <div
              className="grid grid-cols-2 mx-auto w-4/5
               gap-10 "
            >
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200  p-3 cursor-pointer ">
                <FaLinkedin size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer ">
                <FaTwitter size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer ">
                <FaGithub size={25} />
              </div>
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer ">
                <FaFacebook size={25} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/85cfae4b-499e-4b4f-8de3-fee371d03121"
                method="POST"
              >
                <div className="w-full py-2">
                  <div className="w-full grid md:grid-cols-2 gap-12">
                    <div className="w-full flex flex-col ">
                      <label className="capitalize text-sm py-2">name</label>
                      <input
                        type="text"
                        name="name"
                        className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      />
                    </div>

                    <div className="w-full grid grid-col ">
                      <label className="capitalize text-sm py-2">phone</label>
                      <input
                        type="text"
                        name="phone"
                        className=" w-full border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                      />
                    </div>
                  </div>
                  <div className="grid grid-col col-span-2">
                    <label className="capitalize text-sm py-2">email</label>
                    <input
                      type="text"
                      name="email"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    />
                  </div>
                  <div className="grid grid-col col-span-2">
                    <label className="capitalize text-sm py-2">messsage</label>
                    <textarea
                      type="text"
                      name="messsage"
                      rows={10}
                      className="border-2 rounded-lg flex focus:outline-none border-blue-200"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center ">
                  <button className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider hover:scale-105 duration-500">
                    send massage
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
