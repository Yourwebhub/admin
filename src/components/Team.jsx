"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("DT");
  const [selected, setSelected] = useState(1);

  const handleCategoryClick = (category, i) => {
    var subcategory = category;
    var subIndex = i;
    setSelected(subIndex);
    setSelectedCategory(subcategory);
  };

  const data = [
    {
      id: "1",
      designation: "Establisher",
      employe: "Roni Mitra",
      image: "/team/roni-bhi.jpg",
      category: "DT",
    },
    {
      id: "2",
      designation: "Founder",
      employe: "Surendar singh",
      image: "/team/surinder.jpg",
      category: "DT",
    },
    // {
    //   id: "3",
    //   designation: "HR",
    //   employe: "Anushka Srimali",
    //   image: "/team/Anushka.jpg",
    //   category: "DT",
    // },
    {
      id: "4",
      designation: "Senior Manager",
      employe: "Abhishek Kumar",
      image: "/team/abhi.jpg",
      category: "MN",
    },
    {
      id: "5",
      designation: "App Developer",
      employe: "Deepak Kumaar",
      image: "/team/deepak.jpg",
      category: "AP",
    },
    {
      id: "6",
      designation: "Web Developer",
      employe: "Mudassar Ali",
      image: "/team/mudassar.jpg",
      category: "WD",
    },
    {
      id: "7",
      designation: "AI + Python Developer",
      employe: "Nikhil Modanwal",
      image: "/team/nikhil.jpg",
      category: "AP",
    },
    // {
    //   id: "8",
    //   designation: "Web Developer",
    //   employe: "Shivam Agarwal",
    //   image: "/team/shivam.jpg",
    //   category: "WD",
    // },
    {
      id: "9",
      designation: "Web Developer",
      employe: "Mubisher Ali",
      image: "/team/mubashir.png",
      category: "WD",
    },
    {
      id: "10",
      designation: "App Developer",
      employe: "Muhammad Suffian",
      image: "/team/suffian.jpg",
      category: "AP",
    },
    {
      id: "11",
      designation: "Web Developer",
      employe: "Jamal Ali",
      image: "/team/jamal.jpg",
      category: "WD",
    },
    {
      id: "12",
      designation: "Business Accosiate",
      employe: "Shivam Pandey",
      image: "/team/shivam-pandey.jpg",
      category: "MT",
    },
    {
      id: "13",
      designation: "Business Accosiate",
      employe: "Tanvi",
      image: "/team/tanvi.jpg",
      category: "MT",
    },
    {
      id: "14",
      designation: "Front-End Developer",
      employe: "Abhishek Thakur",
      image: "/team/abhishek.jpg",
      category: "WD",
    },
    {
      id: "15",
      designation: "Business Accosiate",
      employe: "Neha Tanwar",
      image: "/team/neha.jpg",
      category: "MT",
    },

  ];

  const buttons = [
    {
      id: "1",
      buttonText: "All",
      value: "All",
    },
    {
      id: "2",
      buttonText: "Directors",
      value: "DT",
    },
    {
      id: "3",
      buttonText: "Management",
      value: "MN",
    },
    {
      id: "4",
      buttonText: "Web Developers",
      value: "WD",
    },
    {
      id: "5",
      buttonText: "App Developers",
      value: "AP",
    },
    {
      id: "5",
      buttonText: "Marketing",
      value: "MT"
    },
    // {
    //   id: "5",
    //   buttonText: "Digital Marketers",
    //   value: "MK",
    // },
  ];

  const filteredCards =
    selectedCategory === "All"
      ? data
      : data.filter((data) => data.category === selectedCategory);

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-12 text-center"
      >
        <span className="text-bllue">M</span>eet Our Team
      </motion.h1>

      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="min-h-[50vh]"
      >
        <div className="flex snap-proximity snap-both md:justify-evenly overflow-auto md:flex-wrap py-6">
          {buttons.map((v, i) => (
            <div className="flex flex-grow snap-center" key={i}>
              <button
                value={v.value}
                onClick={() => handleCategoryClick(v.value, i)}
                className={
                  selected === i
                    ? "w-full bg-none text-base  px-8 py-2 rounded-md flex items-center justify-center cursor-pointer m-1 transition duration-300 ease-in bg-bllue border border-bllue text-light"
                    : "w-full bg-none text-base text-dark dark:text-light px-8 py-2 rounded-md flex items-center justify-center cursor-pointer m-1 transition duration-300 ease-in border bg-[#3e5dea1f] border-bllue "
                }
              >
                {v.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10  transition-all py-5">
          {filteredCards.map((v,i) => (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              key={i}
              className="animate-circle flex group flex-col justify-center items-center bg-[#3e5dea1f]  rounded-xl hover:custom-box-shadow"
            >
              <div className="h-[100px] w-[100px] bg-gray-200  overflow-hidden rounded-full group-hover:-translate-y-7 group-hover:scale-105  -translate-y-5 duration-200 border-4 border-gray-500">
                <img
                  width={700}
                  height={700}
                  alt={v.employe}
                  className="h-full w-full costomeShadow object-cover z-50"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "/user.webp"; // default image
                  }}
                  src={v.image}
                />
              </div>
              <div className="flex flex-col justify-center items-center border-b border-bllue pb-4">
                <h3 className="text-xl text-center font-semibold dark:text-light  text-dark leading-8 tracking-wide">
                  {v.employe}
                </h3>
                <span className="text-sm dark:text-light  text-dark">{v.designation}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Team;

