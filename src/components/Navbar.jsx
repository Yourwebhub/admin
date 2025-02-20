"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FiverrIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  UpworkIcon,
} from "./icon";
import SunIcon from "./SunIcon";
import { motion } from "framer-motion";
import useThemeSwither from "./hook/useThemeSwither";
import { useRouter } from "next/navigation";
import OrderForm from "./Proposal";
import { X } from "lucide-react";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handlecli = () => {
    toggle();
    router.push(href);
  };

  
  
  return (
    <button
    href={href}
    className={`${className} relative group text-light dark:text-dark my-2`}
    onClick={handlecli}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          } dark:bg-dark`}
          >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  const handleHireClick = () => {
    setShowForm(true);
  };
  
  const handleClose = () => {
    setShowForm(false);
  };

  // STICKY NAVBAR WHEN IT'S SCROLL ----------------
  useEffect(() => {
    if(typeof window !== "undefined"){

      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [mode, setMode] = useThemeSwither();

  return (
    <header
      className={` w-full px-4 py-4 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-8 md:px-8 sm:px-8 ${
        scrolled ? "bg-white dark:bg-black " : ""
      }`}
    >
      <button
        className=" flex-col justify-center items-center lg:hidden flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full lg:flex justify-between items-center hidden">
        <nav>
          <CustomLink href={"/"} title="Home" className="mr-4" />
          <CustomLink href={"/about"} title="About" className="mx-4" />
          <CustomLink href={"/service"} title="Services" className="mx-4" />
          <CustomLink href={"/projects"} title="Projects" className="mx-4" />
          <CustomLink href={"/team"} title="Team" className="mx-4" />
          <CustomLink href={"/contact"} title="Contact" className="ml-4" />
        </nav>
        <div>
          {/* <img src="/web-hub.png" className=" w-40" alt="your web hub" /> */}
        </div>
        <nav className="flex items-center justify-center flex-wrap">
          <div className="flex items-center gap-3">
            <button onClick={handleHireClick} className="cursor-pointer bg-bllue rounded-md text-white font-semibold transition duration-300 ease-in-out  hover:shadow-md hover:shadow-bllue  px-5 py-2">
              Hire
            </button>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-bllue text-light" : "bg-light text-bllue"
              }`}
            >
              {isClient &&
                (mode === "dark" ? (
                  <SunIcon className="fill-dark" />
                ) : (
                  <MoonIcon className="fill-dark" />
                ))}
            </button>
          </div>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center justify-center flex-col ">
            <CustomMobileLink
              href={"/"}
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/about"}
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/service"}
              title="Services"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/projects"}
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/team"}
              title="Team"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/contact"}
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>
          {/* <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href={"https://www.linkedin.com/in/mudassar-ali-787971235/"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href={"https://github.com/codewithmudassar"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href={"https://www.upwork.com/freelancers/~010da425b07a99f22a"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <UpworkIcon />
            </motion.a>
            <motion.a
              href={"https://www.fiverr.com/users/mudassar_ali222"}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <FiverrIcon />
            </motion.a>

          </nav> */}
        </motion.div>
      ) : null}
<div className="flex items-center justify-center lg:hidden">

      <Link href={"/proposal"} className="cursor-pointer bg-bllue rounded-md text-white font-semibold transition duration-300 ease-in-out  hover:ring-2  hover:shadow-xl hover:shadow-bllue   px-5 py-2 lg:hidden">
        Hire
      </Link>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 w-6 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-bllue text-light" : "bg-light text-bllue"
              }`}
            >
              {isClient &&
                (mode === "dark" ? (
                  <SunIcon className="fill-dark" />
                ) : (
                  <MoonIcon className="fill-dark" />
                ))}
            </button>
</div>

      
{showForm && (
        <div className={`w-full h-auto hidden bottom-hire-ani justify-center items-center md:flex`}>
          <div className={`bottom-hire-more relative flex flex-col justify-center items-center`}>
            <motion.div initial={{ opacity: 0,}}
              whileInView={{ opacity: 1,}}
              transition={{delay:1.1 }} >
            <button
              onClick={handleClose}
              className="absolute top-4 right-5"
            >
              <X className="text-bllue/80 hover:text-bllue size-8"/>
            </button>
            <OrderForm />
            </motion.div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
