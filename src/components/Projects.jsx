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
    title: "Realestate Project",
    img: "/projects/1.png",
    summary: "A modern real estate platform showcasing properties with seamless navigation and responsive design.",
    link: "https://actindustrial.co.uk/",
  },
  {
    type: "Wordpress",
    title: "Healthray Project",
    img: "/projects/18.png",
    summary: "A healthcare management system offering telemedicine, patient records, and seamless hospital integration.",
    link: "https://healthray.com/",
  },
  {
    type: "React",
    title: "BondExch",
    img: "/projects/20.png",
    summary: "A Cricket Betting Web Application.",
    link: "https://www.bondexch.buzz/home",
  },
  {
    type: "React",
    title: "TestBook",
    img: "/projects/21.jpg",
    summary: "Boost your exam preparation with Test Series for Banking, SSC, RRB & All other Govt. Exams",
    link: "",
  },
  {
    type: "React",
    title: "MegaMatches",
    img: "/projects/22.jpg",
    summary: "A Sports Betting Web Application.",
    link: "",
  },
  
  {
    type: "React",
    title: "Raja Bets",
    img: "/projects/24.png",
    summary: "Welcome to Rajabets.com, where you can explore the whole new world of online gambling for real money.",
    link: "https://rajabets1.com/en",
  },
  {
    type: "PHP",
    title: "Mr & Mrs Smith",
    img: "/projects/25.png",
    summary: "The travel club for Hotel Lovers.",
    link: "https://www.mrandmrssmith.com/",
  },
  {
    type: "PHP",
    title: "Gala Caters",
    img: "/projects/26.png",
    summary: "Looking for a perfect food affair to complement your special occasion?",
    link: "https://www.galacaterers.in/",
  },
  {
    type: "PHP",
    title: "The Catering Co.",
    img: "/projects/27.png",
    summary: "Extraordinary culinary experience, an unforgettable celebration",
    link: "https://thecateringco.in/",
  },
  {
    type: "PHP",
    title: "StudentDoctorNet",
    img: "/projects/23.png",
    summary: "Student Doctor Network is helping build a diverse doctor workforce by providing a wide range of free resources to help students in their educational journey.",
    link: "https://www.studentdoctor.net/",
  },
  {
    type: "Wordpress",
    title: "Ezovion Project",
    img: "/projects/19.png",
    summary: "An AI-powered hospital management solution optimizing workflows and patient data management.",
    link: "https://ezovion.com/",
  },
  {
    type: "React",
    title: "Cosmetic Project",
    img: "/projects/2.png",
    summary: "A beauty e-commerce platform offering a wide range of skincare and cosmetic products.",
    link: "https://project-two.com",
  },
  {
    type: "React",
    title: "E-commerce Project",
    img: "/projects/3.png",
    summary: "An advanced online shopping experience with intuitive navigation and secure checkout.",
    link: "https://www.vedantcomputers.com/",
  },
  {
    type: "Wordpress",
    title: "Online Kirana Project",
    img: "/projects/4.png",
    summary: "A local grocery delivery platform with an easy-to-use interface for daily essentials.",
    link: "https://onlinekirana.co.in/",
  },
  {
    type: "Wordpress",
    title: "Beauty Project",
    img: "/projects/5.png",
    summary: "An elegant website featuring premium beauty and skincare products with a seamless user experience.",
    link: "https://onlinekirana.co.in/",
  },
  {
    type: "Wordpress",
    title: "Hotel Project",
    img: "/projects/6.png",
    summary: "A hospitality booking platform providing an effortless hotel reservation experience.",
    link: "https://calmstays.in/",
  },
  {
    type: "Wordpress",
    title: "Car Rental",
    img: "/projects/7.png",
    summary: "A vehicle rental service offering an easy booking process and a diverse fleet.",
    link: "https://modcar.travelerwp.com/",
  },
  {
    type: "Wordpress",
    title: "Market Research",
    img: "/projects/8.png",
    summary: "A comprehensive data analysis platform offering insights for business growth.",
    link: "https://msmarketresearchtools.com/",
  },
  {
    type: "Wordpress",
    title: "Q Blue",
    img: "/projects/9.png",
    summary: "An innovative business website for a trading company with a modern and professional look.",
    link: "https://rmptraders.in/",
  },
  {
    type: "Wordpress",
    title: "Education Website",
    img: "/projects/10.png",
    summary: "An online learning platform providing educational resources and virtual classes.",
    link: "https://smartmentoredu.com/",
  },
  {
    type: "Wordpress",
    title: "Customer Services",
    img: "/projects/11.png",
    summary: "A 24/7 customer support platform ensuring excellent service and user engagement.",
    link: "https://mycustomercare24x7.in/",
  },
  {
    type: "Wordpress",
    title: "IT Solutions",
    img: "/projects/12.png",
    summary: "A tech-driven website offering IT services, cybersecurity solutions, and cloud computing.",
    link: "https://cybrixs.net/",
  },
  {
    type: "Wordpress",
    title: "Agriculture",
    img: "/projects/13.png",
    summary: "An agricultural website promoting modern farming techniques and sustainable practices.",
    link: "https://agrifrontline.com/",
  },
  {
    type: "Wordpress",
    title: "Sweet & Cookies",
    img: "/projects/14.png",
    summary: "A delightful online store for premium sweets, cookies, and baked goods.",
    link: "https://jrssnacks.com/",
  },
  {
    type: "Wordpress",
    title: "Nutts Website",
    img: "/projects/15.png",
    summary: "A premium nuts and dry fruits e-commerce platform with secure online shopping.",
    link: "https://cashhewala.com/",
  },
  {
    type: "Wordpress",
    title: "Clothes",
    img: "/projects/16.png",
    summary: "A trendy online fashion store featuring the latest clothing styles and accessories.",
    link: "https://canaryfashionplus.com/",
  },
  {
    type: "React",
    title: "Chemical",
    img: "/projects/17.png",
    summary: "An industrial chemical supplier website offering a vast range of chemical solutions.",
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
          <option value="PHP">PHP</option>
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
