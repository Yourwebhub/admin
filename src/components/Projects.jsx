"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const FramerImage = motion(Image);

const projects = [
  {
    type: "Wordpress",
    title: "Realestate project",
    img: "/projects/1.png",
    summary: "This is a brief description of Project One.",
    link: "https://actindustrial.co.uk/",
  },
  {
    title: "Cosmetic project",
    type: "React",
    img: "/projects/2.png",
    summary: "This is a brief description of Project Two.",
    link: "https://project-two.com",
  },
  {
    type: "React",
    title: "E-commerce project",
    img: "/projects/3.png",
    summary: "This is a brief description of Project Two.",
    link: "https://www.vedantcomputers.com/",
  },
  {
    type: "Wordpress",
    title: "Online Kirana Project",
    img: "/projects/4.png",
    summary: "This is a brief description of Project Two.",
    link: "https://onlinekirana.co.in/",
  },
  {
    type: "Wordpress",
    title: "Beauty project",
    img: "/projects/5.png",
    summary: "This is a brief description of Project Two.",
    link: "https://onlinekirana.co.in/",
  },
  {
    type: "Wordpress",
    title: "Hotel project",
    img: "/projects/6.png",
    summary: "This is a brief description of Project Two.",
    link: "https://calmstays.in/",
  },
  {
    type: "Wordpress",
    title: "car Rental",
    img: "/projects/7.png",
    summary: "This is a brief description of Project Two.",
    link: "https://modcar.travelerwp.com/",
  },
  {
    type: "Wordpress",
    title: "Market Research",
    img: "/projects/8.png",
    summary: "This is a brief description of Project Two.",
    link: "https://msmarketresearchtools.com/",
  },
  {
    type: "Wordpress",
    title: "Q Blue",
    img: "/projects/9.png",
    summary: "This is a brief description of Project Two.",
    link: "https://rmptraders.in/",
  },
  {
    type: "Wordpress",
    title: "Education Website",
    img: "/projects/10.png",
    summary: "This is a brief description of Project Two.",
    link: "https://smartmentoredu.com/",
  },
  {
    type: "Wordpress",
    title: "Customer Services",
    img: "/projects/11.png",
    summary: "This is a brief description of Project Two.",
    link: "https://mycustomercare24x7.in/",
  },
  {
    type: "Wordpress",
    title: "IT Solutions",
    img: "/projects/12.png",
    summary: "This is a brief description of Project Two.",
    link: "https://cybrixs.net/",
  },
  {
    type: "Wordpress",
    title: "Agriculter",
    img: "/projects/13.png",
    summary: "This is a brief description of Project Two.",
    link: "https://agrifrontline.com/",
  },
  {
    type: "Wordpress",
    title: "Sweet & Cookies",
    img: "/projects/14.png",
    summary: "This is a brief description of Project Two.",
    link: "https://jrssnacks.com/",
  },
  {
    type: "Wordpress",
    title: "Nutts website",
    img: "/projects/15.png",
    summary: "This is a brief description of Project Two.",
    link: "https://cashhewala.com/",
  },
  {
    type: "Wordpress",
    title: "Clothes",
    img: "/projects/16.png",
    summary: "This is a brief description of Project Two.",
    link: "https://canaryfashionplus.com/",
  },
  {
    type: "React",
    title: "Cemical",
    img: "/projects/17.png",
    summary: "This is a brief description of Project Two.",
    link: "https://alishaimpex.pk/",
  },
];

const ITEMS_PER_PAGE = 12;

const Projects = ({ searchParams = {} }) => {
  const router = useRouter();
  const { type = "All", page = "1" } = searchParams; // Default values from query params

  const [filterType, setFilterType] = useState(type);
  const [currentPage, setCurrentPage] = useState(Number(page));

  // Sync URL query params with state on mount
  useEffect(() => {
    setFilterType(type);
    setCurrentPage(Number(page));
  }, [type, page]); // Runs when `searchParams` change on refresh

  useEffect(() => {
    const params = new URLSearchParams();
    if (filterType !== "All") params.set("type", filterType);
    params.set("page", currentPage);

    const isPageChange = currentPage !== 1; // Check if the page is changing

    router.replace(`?${params.toString()}`, undefined, { shallow: true });

    if (isPageChange) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  }, [filterType, currentPage]);

  const filteredProjects =
    filterType === "All"
      ? projects
      : projects.filter((p) => p.type === filterType);
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-6 text-center"
      >
        <span className="text-blue-500">O</span>ur Projects
      </motion.h1>

      {/* Filter Dropdown */}
      <div className="mb-6 flex justify-end">
        <select
          value={filterType}
          onChange={(e) => {
            setFilterType(e.target.value);
            setCurrentPage(1);
          }}
          className="px-4 py-2 outline-none text-lg font-medium bg-gray-200 dark:bg-gray-700 dark:text-white"
        >
          <option value="All">All</option>
          <option value="Wordpress">Wordpress</option>
          <option value="React">React</option>
        </select>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {displayedProjects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex gap-2 mt-6 justify-end">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md font-medium bg-blue-500 text-white"
          >
            Prev
          </button>

          <div className="px-3 py-1 rounded-md font-medium text-blue-500">
            {currentPage} / {totalPages}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md font-medium bg-blue-500 text-white"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;

const Project = ({ type, title, img, summary, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-4 relative">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-blue-500 font-medium text-xl">{type}</span>
        <Link
          className="hover:underline underline-offset-2 decoration-dark dark:decoration-light"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold dark:text-light underline"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};
