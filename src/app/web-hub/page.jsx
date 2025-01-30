"use client"

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';





const Page = () => {
  const router = useRouter();
  
  useEffect(() => {
    const isAuthenticated = () => {
      try {
        const token = Cookies.get("authToken"); // Get the token from cookies
        console.log("Token retrieved:", token);
  
        if (!token) {
          router.push("/login"); // Redirect to login if token is not found
        }
      } catch (error) {
        console.error("Authentication check error:", error);
      }
    };
  
    isAuthenticated();
  }, [router]);
  return (
    <>
    <div className="min-h-screen bg-light dark:bg-dark p-6">
      {/* Dashboard Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-dark dark:text-light">Super Admin Dashboard</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Welcome to your admin dashboard, where you can manage everything.</p>
      </header>

      {/* Dashboard Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Section 1: Total Users */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-dark dark:text-light mb-4">Total Users</h2>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-blue-600">1,234</p>
            <div className="text-sm text-green-500 flex items-center gap-2">
              <span className="font-semibold">+5%</span> from last month
            </div>
          </div>
        </div>

        {/* Section 2: Active Sessions */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-dark dark:text-light mb-4">Active Sessions</h2>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-blue-600">320</p>
            <div className="text-sm text-red-500 flex items-center gap-2">
              <span className="font-semibold">-2%</span> from last month
            </div>
          </div>
        </div>

        {/* Section 3: Pending Orders */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-dark dark:text-light mb-4">Pending Orders</h2>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-blue-600">78</p>
            <div className="text-sm text-green-500 flex items-center gap-2">
              <span className="font-semibold">+12%</span> from last week
            </div>
          </div>
        </div>

        {/* Section 4: Recent Activity */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md col-span-2 md:col-span-1">
          <h2 className="text-xl font-semibold text-dark dark:text-light mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-gray-200">New user registered</p>
              <span className="text-sm text-gray-400 dark:text-gray-500">2 hours ago</span>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-gray-200">Order #1023 shipped</p>
              <span className="text-sm text-gray-400 dark:text-gray-500">4 hours ago</span>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-gray-200">Server maintenance completed</p>
              <span className="text-sm text-gray-400 dark:text-gray-500">1 day ago</span>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-gray-200">New comment on blog post</p>
              <span className="text-sm text-gray-400 dark:text-gray-500">2 days ago</span>
            </li>
          </ul>
        </div>

        {/* Section 5: Quick Actions */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md col-span-2 md:col-span-1">
          <h2 className="text-xl font-semibold text-dark dark:text-light mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all">
              Add User
            </button>
            <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all">
              View Orders
            </button>
            <button className="bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-700 transition-all">
              Manage Products
            </button>
            <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-all">
              System Settings
            </button>
          </div>
        </div>

        {/* Section 6: System Health */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-dark dark:text-light mb-4">System Health</h2>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-green-600">Healthy</p>
            <div className="text-sm text-green-500 flex items-center gap-2">
              <span className="font-semibold">100%</span> system uptime
            </div>
          </div>
        </div>

        {/* Section 7: Sales Overview */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-dark dark:text-light mb-4">Sales Overview</h2>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-blue-600">$4,320</p>
            <div className="text-sm text-green-500 flex items-center gap-2">
              <span className="font-semibold">+8%</span> from last month
            </div>
          </div>
        </div>

        {/* Section 8: New Comments */}
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md col-span-2 md:col-span-1">
          <h2 className="text-xl font-semibold text-dark dark:text-light mb-4">New Comments</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-gray-200">John: "Great product!"</p>
              <span className="text-sm text-gray-400 dark:text-gray-500">5 minutes ago</span>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-gray-200">Jane: "Amazing service!"</p>
              <span className="text-sm text-gray-400 dark:text-gray-500">30 minutes ago</span>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-gray-200">Mark: "Will buy again."</p>
              <span className="text-sm text-gray-400 dark:text-gray-500">1 hour ago</span>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-600 dark:text-gray-200">Lisa: "Fast delivery!"</p>
              <span className="text-sm text-gray-400 dark:text-gray-500">3 hours ago</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
    </>
  );
};

export default Page;
