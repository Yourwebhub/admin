"use client";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Eye,
  LocateIcon,
  Mail,
  MailCheck,
  Search,
  Trash2,
  User,
  X,
} from "lucide-react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ConfirmModal from "./Confirm";

const tableHeader = [
  { label: "Name", align: "left" },
  { label: "Email", align: "left" },
  { label: "Designation", align: "left" },
  { label: "Category", align: "left" },
  { label: "Actions", align: "center" },
];

const Developers = () => {
  const [developers, setDevelopers] = useState([]); // Initialize as an empty array
  const [page, setPage] = useState(1);
  const limit = 9;
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [developerData, setDeveloperData] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [totalDevelopers, setTotalDevelopers] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleDeveloperData = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/developers/${id}`);
      setDeveloperData(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteConfirm = (id) => {
    setConfirmDeleteId(id);
    setOpen(true);
  };

  const deleteDeveloper = async () => {
    if (!confirmDeleteId) return;

    try {
      const response = await axios.delete(`/api/developers/${confirmDeleteId}`);
      if (response.status === 200) {
        setDevelopers((prev) =>
          prev.filter((dev) => dev._id !== confirmDeleteId)
        );
        toast.success("Developer deleted successfully!");
      } else {
        toast.error("Failed to delete developer.");
      }
    } catch (error) {
      console.error("Error deleting developer:", error);
      toast.error("Failed to delete developer.");
    } finally {
      setOpen(false);
      setConfirmDeleteId(null);
    }
  };

  const fetchDevelopers = async () => {
    setIsFetching(true);
    try {
      const queryParams = new URLSearchParams({
        page,
        limit,
        ...(category && { category }),
        ...(search && { search }),
      });

      const res = await axios.get(`/api/developers?${queryParams}`);
      setDevelopers(res.data.data);
      setTotalDevelopers(res.data.pagination.totalDevelopers);
      console.log("res", res.data); // Assuming the API provides a total count
    } catch (error) {
      console.error("Error fetching developers:", error);
    } finally {
      setInitialLoading(false);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchDevelopers();
  }, [page, search, category]);

  const totalPages = Math.ceil(totalDevelopers / limit);

  return (
    <>
      <Toaster />
      <div className="w-full">
        <div className="bg-[#dedbdb] p-4 w-full flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            All <span className="text-bllue">Developers</span>
          </h2>
          <div className="flex gap-4 items-center">
            {/* Search Input */}

            <div className="relative" id="input">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search..."
                className="block w-full text-sm h-[45px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-bllue focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                type="text"
              />
              <label
                className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-bllue peer-focus:text-bllue peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white data-[disabled]:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="floating_outlined"
              >
                Search...
              </label>
              <div className="absolute top-3 right-3">
                <Search className="text-bllue size-6"/>
              </div>
            </div>

            {/* Category Dropdown */}
            <select
              className="border p-2  outline-none bg-white border-bllue text-bllue"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1); // Reset to first page when category changes
              }}
            >
              <option value="">All Categories</option>
              <option value="WD">Web Developer</option>
              <option value="MK">Digital Marketing</option>
              <option value="SE">SEO</option>
              <option value="AP">App Developer</option>
              <option value="WP">Wordpress</option>
              <option value="DT">Director</option>
            </select>

            {/* Add New Button */}
            <Link
              href={"/web-hub/developers/add"}
              title="Add New"
              className="group cursor-pointer outline-none hover:rotate-90 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className="stroke-bllue fill-none group-active:stroke-bllue group-hover:fill-bllue/50 group-active:fill-bllue/30 group-active:duration-0 duration-300"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  strokeWidth="1.5"
                ></path>
                <path d="M8 12H16" strokeWidth="1.5"></path>
                <path d="M12 16V8" strokeWidth="1.5"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto w-full  p-2">
          {initialLoading ? (
            <div className="w-full flex justify-center items-center h-[30vh]">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
            </div>
          ) : (
            <table className="text-sm min-w-[1000px] w-full text-left text-gray-500">
              <thead className="text-xs text-light bg-gray-700">
                <tr>
                  {tableHeader.map((value, index) => (
                    <th
                      scope="col"
                      key={index}
                      className={`px-6 py-3 text-${value.align}`}
                    >
                      {value.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {developers.length === 0 ? (
                <tr className="bg-white border-b">
                <td colSpan="100%" className="text-center text-2xl text-bllue py-4">
                  No Developers Found
                </td>
              </tr>
                 ): (
                  <>
                 { developers.map((developer, i) => (
                  <tr key={i} className="bg-white border-b">
                    <td className="px-6 flex items-center py-2 font-medium text-gray-600 whitespace-nowrap ">
                      <div className="w-10 h-10 mr-3 border border-gray-100 rounded-full overflow-hidden">
                        <img
                          className="w-full h-full object-contain"
                          src={developer.image || "/user.webp"}
                          alt="Developer Avatar"
                        />
                      </div>
                      {developer.fullName}
                    </td>
                    <td className="px-6 py-2">
                      {developer.email || "null@gmail.com"}
                    </td>
                    <td className="px-6 py-2">{developer.designation}</td>
                    <td className="px-6 py-2 ">{developer.category}</td>
                    <td className="px-6 py-2     ">
                      <div className="flex justify-center items-center gap-2">
                        <button
                          onClick={() => {
                            toggleModal();
                            handleDeveloperData(developer._id);
                          }}
                        >
                          <Eye
                            size={20}
                            className="hover:text-bllue/50 text-bllue"
                          />
                        </button>
                        <Link href={`/web-hub/developers/${developer._id}`}>
                          <Edit
                            size={20}
                            className="hover:text-bllue/50 text-bllue"
                          />
                        </Link>
                        <button
                          onClick={() => handleDeleteConfirm(developer._id)}
                        >
                          <Trash2
                            size={20}
                            className="text-red-200 hover:text-red-500"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                  </>
                )
                }
              </tbody>
            </table>
          )}

          {totalPages > 1 && (
          <div className="flex justify-end items-center p-4 text-bllue ">
            <button
              className="mr-2 cursor-pointer"
              disabled={page === 1}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            >
              <ChevronLeft className="text-bllue hover:text-bllue/70" />
            </button>
            <span className="text-bllue/80">
              Page {page} of {totalPages}
            </span>
            <button
              className="ml-2 cursor-pointer"
              disabled={page === totalPages}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            >
              <ChevronRight className="text-bllue hover:text-bllue/70" />
            </button>
          </div>
          )}
        </div>
      </div>

      <ConfirmModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={deleteDeveloper}
        text="Are you sure you want to delete this developer?"
      />
      {isOpen && (
  <div
    id="default-modal"
    tabIndex="-1"
    aria-hidden="true"
    className="fixed top-0 left-0 right-0 z-[200] w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div className="relative w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700">
      {loading ? (
        <div className="w-full flex justify-center items-center h-[30vh]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-between py-2 px-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-dark dark:text-light">
              Developer Information
            </h3>
            <button
              onClick={toggleModal}
              className="text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg w-8 h-8 flex items-center justify-center"
            >
              <X />
            </button>
          </div>

          {/* Profile Content */}
          <div className="w-full px-6 py-4">
            {/* Avatar */}
            <div className="flex justify-center items-center mb-4">
              <img
                className="w-28 h-28 rounded-full border-2 border-white shadow-md"
                src={developerData.image}
                alt="Developer Avatar"
              />
            </div>

            {/* Name */}
            <h2 className="text-center text-2xl font-bold text-dark capitalize dark:text-light">
              {developerData.fullName}
            </h2>


            {/* Location */}
            {developerData.location && (
              <div className="flex justify-center items-center gap-2 mt-3">
                <LocateIcon /> {/* Replace with a location icon */}
                <p className="text-gray-600 dark:text-gray-300">
                  {developerData.location}
                </p>
              </div>
            )}
            {/* Additional Info */}
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                <p className="font-bold text-dark dark:text-light">
                Designation:
                    </p>
                  <p className="text-gray-600 dark:text-gray-300">
                     {developerData.designation || "N/A"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                <p className="font-bold text-dark dark:text-light">
                Email:
                    </p>
                  <Link href={`mailto:${developerData.email}`}  className="text-gray-600 dark:text-gray-300">
                     {developerData.email}
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-bold text-dark dark:text-light">
                    Category:
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {developerData.category || "N/A"}
                  </p>
                </div>

                {developerData.portfolio && (
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-dark dark:text-light">
                      Portfolio:
                    </p>
                    <Link
                      href={developerData.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {developerData.fullName}'s Portfolio
                    </Link>
                  </div>
                )}
              </div>
              {/* Bio Section */}
              {developerData.desc && (
                <div className="mt-6">
                  <p className="text-lg font-semibold text-dark dark:text-light ">
                    Bio:
                  </p>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-300 p-3 mt-2 border border-dark dark:border-light rounded-lg shadow-md ">
                    {developerData.desc}
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  </div>
)}
    </>
  );
};

export default Developers;
