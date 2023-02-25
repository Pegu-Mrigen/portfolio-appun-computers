import Image from "next/image";
import me from "../public/assets/me3.png";
import Link from "next/link";
import { MdExpandMore } from "react-icons/md";

export default function HomePage() {
  return (
    <div id="HomePage" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl ">
          <Image src={me} alt="me" />
        </div>
        <h1 className="uppercase font-bold text-gray-600 text-7xl">
          full stack developer
        </h1>
        <p className="text-gray-600 text-xl max-w-sm mx-auto">
          I have 10 years of experience in IT. At present, I love to work on web
          application using technologies like React JS, Tailwind CSS, Next JS
          and SCSS.
        </p>
        <Link href="/#me" >
        <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
          know more
          <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
            <MdExpandMore size={25} />
          </span>
        </div>
        </Link>
      </div>
    </div>
  );
}
