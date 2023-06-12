import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png"
import { navList } from "./variables/navList";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const [nav, navOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` text-main-text flex items-center justify-between bg-white fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "navbar-scroll" : ""
      }`}
    >
      <div className=" relative flex justify-between items-center text-center w-full h-20 p-4 xl:mx-auto xl:max-w-7xl">
        <div>
          <Link href="/">
            <Image src={logo} alt="scissor" width={100} height={100} />
          </Link>
        </div>
        <ul className="hidden lg:flex">
          {navList.map((text, index) => {
              const isActive = router.asPath === text.href;
           return (
             <li
               key={index}
               className="px-4 py-2 cursor-pointer capitalize font-medium hover:scale-105"
             >
               <Link
                 href={text.href}
                 className={
                   isActive
                     ? "text-primary-300 flex items-center justify-center space-x-1"
                     : "flex items-center justify-center space-x-1"
                 }
               >
                 <span>{text.list}</span>
                 <span>{text.icon}</span>
               </Link>
             </li>
           );
         } )}
        </ul>
        <div className="hidden lg:flex items-center justify-between space-x-4 w-72">
          <button className="text-primary-300 hover:border hover:border-primary-300 py-2 rounded-full w-1/2">
            Log in
          </button>
          <button className="text-white bg-primary-300 hover:bg-white hover:text-primary-300 hover:border hover:border-primary-300 py-2 rounded-full w-1/2">
            Try for free
          </button>
        </div>
      </div>
      <div
        onClick={() => navOpen(!nav)}
        className="cursor-pointer pr-4 z-10 text-main-text lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <>
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-primary-100 to-main-text">
            {navList.map((text, index) => (
              <li
                key={index}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link href="" onClick={() => navOpen(!nav)}>
                  <span>{text.list}</span>
                </Link>
              </li>
            ))}
            <div className="flex items-center flex-col justify-between space-y-4 w-72">
              <button className="text-primary-300 hover:border hover:border-primary-300 py-2 rounded-full w-1/2">
                Log in
              </button>
              <button className="text-white bg-primary-300 hover:bg-white hover:text-primary-300 hover:border hover:border-primary-300 py-2 rounded-full w-1/2">
                Try for free
              </button>
            </div>
          </ul>
        </>
      )}
    </div>
  );
};

export default Navbar;
