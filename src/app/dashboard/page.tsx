"use client";
import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const Dashboard = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const projects = [
    {
      id: 1,
      name: "Sisyphus",
      email: "sisyphus.com",
      lastAssessed: "22 Jan 2022",
      license: ["active", "customer data", "admin"],
      icon: "./avatar.png",
    },
    {
      id: 2,
      name: "Sisyphus",
      email: "sisyphus.com",
      lastAssessed: "22 Jan 2022",
      license: ["active", "customer data", "admin"],
      icon: "./avatar.png",
    },
    {
      id: 3,
      name: "Sisyphus",
      email: "sisyphus.com",
      lastAssessed: "22 Jan 2022",
      license: ["active", "customer data", "admin"],
      icon: "./avatar.png",
    },
    {
      id: 4,
      name: "Sisyphus",
      email: "sisyphus.com",
      lastAssessed: "22 Jan 2022",
      license: ["active", "customer data", "admin"],
      icon: "./avatar.png",
    },
    {
      id: 5,
      name: "Sisyphus",
      email: "sisyphus.com",
      lastAssessed: "22 Jan 2022",
      license: ["active", "customer data", "admin"],
      icon: "./avatar.png",
    },
    {
      id: 6,
      name: "Sisyphus",
      email: "sisyphus.com",
      lastAssessed: "22 Jan 2022",
      license: ["active", "customer data", "admin"],
      icon: "./avatar.png",
    },
    {
      id: 7,
      name: "Sisyphus",
      email: "sisyphus.com",
      lastAssessed: "22 Jan 2022",
      license: ["active", "customer data", "admin"],
      icon: "./avatar.png",
    },
  ];

  const handleSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };
  return (
    <div className="w-full h-full bg-[#131619]">
      <div className="text-white mt-4 mb-6 text-3xl ml-4">Dashboard</div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full mx-2">
          <table className="min-w-full table-auto bg-black text-center rounded-md">
            <thead>
              <tr className=" text-gray-400 rounded-t-md border-b border-gray-700">
                <th className="px-4 py-2 rounded-tl-md">Project</th>
                <th className="px-4 py-2">Last Assessed</th>
                <th className="px-4 py-2">License Use</th>
                <th className="px-4 py-2 rounded-tr-md">Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-700">
                  <td className="px-4 py-2 flex items-center">
                    <div
                      onClick={() => handleSelect(project.id)}
                      className={`w-6 h-6 border-2 rounded-md flex items-center justify-center cursor-pointer mr-4 ${
                        selectedRows.includes(project.id)
                          ? "border-green-500 bg-green-500"
                          : "border-gray-500"
                      }`}
                    >
                      {selectedRows.includes(project.id) && (
                        <FaCheck className="text-white" />
                      )}
                    </div>
                    <div className="flex items-center">
                      <img
                        src={project.icon}
                        alt="Project Icon"
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-white">{project.name}</span>
                        <span className="text-gray-400">{project.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-gray-400">
                    {project.lastAssessed}
                  </td>
                  <td className="px-4 py-2 text-gray-400">
                    <div className="flex justify-center space-x-2">
                      {project.license.map((license, index) => (
                        <span
                          key={index}
                          className="bg-gray-600 px-2 py-1 rounded-md"
                        >
                          {license}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-2 flex justify-center space-x-2">
                    <button className="text-gray-400 hover:text-red-700">
                      <FaTrash />
                    </button>
                    <button className="text-gray-400 hover:text-blue-700">
                      <FiEdit2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between items-center p-2 bg-black text-white rounded-md mx-2 mb-6">
        <div className="px-5 py-2 bg-gray-700 rounded-md cursor-pointer">
          Previous
        </div>
        <div>Page 1 of 10</div>
        <div className="px-5 py-2 bg-gray-700 rounded-md cursor-pointer">
          Next
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
