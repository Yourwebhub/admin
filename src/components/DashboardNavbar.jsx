"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaChartPie, FaSignOutAlt } from "react-icons/fa";
import ConfirmModal from "./Confirm";

const DashboardNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    // Close the modal and navigate to "/"
    setIsModalOpen(false);
    router.push("/");
  };

  return (
    <>
      <nav className="bg-bllue text-light px-4 py-2 flex justify-between items-center shadow-lg">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="bg-light text-bllue p-2 rounded-full shadow-md transform hover:scale-110 transition-transform duration-200">
            <FaChartPie size={24} />
          </div>
          <h1 className="text-2xl font-bold tracking-wider">Your Web-Hub</h1>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer hover:bg-blue-700 p-2 rounded-full transition-all duration-200"
        >
          <FaSignOutAlt size={24} />
        </button>
      </nav>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
        text="Are you sure to go back ?"
      />
    </>
  );
};

export default DashboardNavbar;
