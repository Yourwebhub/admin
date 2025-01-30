"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import RouteHandler from "./RouteHandle";
import WhatsAppButton from "./Whatsapp";
import DashboardNavbar from "./DashboardNavbar";

const Layout = ({ children }) => {
  const pathname = usePathname(); // Using usePathname to determine the current route
  const isDashboard = pathname.startsWith("/web-hub"); // Check if the route is a dashboard route
  const isLogin = pathname === "/login"; // Check if the route is the login page
  return (
    <div className="min-h-screen "> {/* Set a minimum height and background color */}
      {isDashboard ? (
        <>
        <DashboardNavbar/>
        <div className="flex h-[92.2vh]">

          <Sidebar /> {/* Sidebar for admin routes */}
          <div className="flex-1 overflow-auto"> {/* Main content area */}
            {children} 
          </div>
        </div>
        </>
      ) : isLogin?(
        <>{children}</>
      ): (
        <>
        <RouteHandler>
          <div className="sticky top-0 z-40"> {/* Navbar sticky to top */}
            <Navbar />
          </div>
          <div className=" pb-10"> {/* Add padding for content */}
            {children}
          </div>
          <div>
          <Footer /> {/* Footer at the bottom */}
          </div>
          <div  className="fixed z-40 right-5  md:right-5 bottom-24 md:bottom-9">
        <WhatsAppButton className=" "/>
        </div>
        </RouteHandler>
        </>
      )}
      
    </div>
  );
};

export default Layout;