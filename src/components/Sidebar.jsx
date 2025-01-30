"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Merienda } from "next/font/google";
import React, { useContext, useState } from "react";
import {
  Home,
  User,
  Book,
  Users,
  ChartBar,
  StepBack,
  StepForward,
  Box,
  Mail,
  Plus,
  Store,
  MessageCircle,
} from "lucide-react"; // Make sure these are correct
// import { AuthContext } from "@/context/AuthContext";
// import { ChatBotIcon } from "hugeicons-react";

const Meriend = Merienda({
  weight: "800",
  subsets: ["latin"],
});

const Sidebar = () => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const navLinks = [
        {
          label: "Dashboard",
          href: "/web-hub",
          icon: <Home className="text-xl" />, // Use component directly here
        },
        {
          label: "Employees",
          href: "/web-hub/developers",
          icon: <User className="text-xl" />,
        },
        // {
        //   label: "Projects",
        //   href: "/web-hub/projects",
        //   icon: <Book className="text-xl" />,
        // },
        // {
        //   label: "Users",
        //   href: "/web-hub/user",
        //   icon: <Users className="text-xl" />,
        // },
        // {
        //   label: "Applications",
        //   href: "/web-hub/applications",
        //   icon: <Mail className="text-xl" />,
        // },
        // {
        //   label: "Brands",
        //   href: "/web-hub/all-brands",
        //   icon: <Store className="text-xl" />,
        // },
      ]

//   const { user } = useContext(AuthContext);

//   const sidebarLinks =
//     navLinks.find(
//       (item) => item.role === (user?.role === "admin" ? "admin" : "seller")
//     )?.links || [];

  return (
    <div className="border-dark dark:border-light border-r  relative justify-between flex flex-col">
      <div
        className={`p-4 overflow-hidden transition-all duration-700 ${
          isExpanded ? "w-56" : "w-[70px]"
        }`}
      >
        {/* <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" >
              <img

                className={`transition-all duration-300 ${isExpanded ? "h-11 w-full":"w-10 h-11"}  `}


                src={isExpanded ? "/logo.png" : "/logo2.png"}
                alt="web-hub"
              />
            </Link>
            <span
              className={`${
                isExpanded ? "block transition-all duration-500" : "hidden"
              }`}
            >
              <h1 className={`${Meriend.className} text-2xl text-bllue`}>
              </h1>
            </span>
          </div>
        </div> */}
        <div className="mt-4 space-y-3">
          {navLinks.map((v, i) => (
            <Link
              key={i}
              className={`flex p-2 gap-2 border rounded-md items-center ${
                pathname === v.href ? "bg-bllue text-light" : "text-dark dark:text-light"
              }`}
              href={v.href}
            >
              {v.icon} {/* Icon is rendered directly here */}
              <div className={`${isExpanded ? "block" : "hidden"}`}>
                {v.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-11 flex justify-end">
        <button
          onClick={toggleSidebar}
          className="  text-xl hover:text-white text-white bg-bllue hover:bg-bllue/90 focus:outline-none   p-2  cursor-pointer"
        >
          {isExpanded ? <StepBack /> : <StepForward />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;