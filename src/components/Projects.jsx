"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "lucide-react"; // Assuming you're using Lucide icons

const FramerImage = motion(Image);

const projects = [
  {
    type: "Web App",
    title: "Project One",
    img: "/images/project1.jpg",
    summary: "This is a brief description of Project One.",
    link: "https://project-one.com",
    github: "https://github.com/mudassar/project-one",
  },
  {
    type: "Mobile App",
    title: "Project Two",
    img: "/images/project2.jpg",
    summary: "This is a brief description of Project Two.",
    link: "https://project-two.com",
    github: "https://github.com/mudassar/project-two",
  },
  {
    type: "Mobile App",
    title: "Project Two",
    img: "/images/project2.jpg",
    summary: "This is a brief description of Project Two.",
    link: "https://project-two.com",
    github: "https://github.com/mudassar/project-two",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-12 text-center"
      >
        <span className="text-blue-500">O</span>ur Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

const Project = ({ type, title, img, summary, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} src={img} alt={title} width={500} height={300} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-bllue font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <Link className="hover:underline underline-offset-2" href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link className="text-lg font-semibold dark:text-light underline md:text-base" href={link} target="_blank">
            Visit
          </Link>
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon size={24} />
          </Link>
        </div>
      </div>
    </article>
  );
};
