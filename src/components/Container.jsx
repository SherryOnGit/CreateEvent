import React from "react";
import Sidebar from "./Sidebar";

const Container = () => {
  return (
    <Sidebar  >

  

    <main className="flex  justify-center h-screen w-full ">
      <div className="bg-white dark:bg-gray-800 px-8 py-6 rounded-lg shadow-lg w-full  ">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Create an Event
          </h1>
          <div className="mb-6">
            <label className="block text-[#1D211C] dark:text-[#FFFFFF] mb-2">
              Event Name
            </label>
            <input
              type="text"
              placeholder="Enter event name here"
              className="w-full py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#1D211C] dark:text-[#FFFFFF] mb-2">
              Date & Time
            </label>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="date"
                className="w-full py-2 px-4 mt-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none focus:ring-blue-500"
              />
              <select
                className="w-full py-2 px-4 mt-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select Time Zone
                </option>
              </select>
              <input
                type="time"
                placeholder="Start time"
                className="w-full py-2 px-4 mt-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none focus:ring-blue-500"
              />
              <input
                type="time"
                placeholder="End time"
                className="w-full py-2 px-4 mt-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#1D211C] dark:text-[#FFFFFF] mb-2">
              Description
            </label>
            <textarea
              placeholder="Write a brief description..."
              className="w-full py-2 mt-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-[#1D211C] dark:text-[#FFFFFF] mb-2">
              Video Link
            </label>
            <input
              type="text"
              placeholder="Paste video link here"
              className="w-full py-2 pl-4 pr-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 outline-none focus:ring-blue-500"
            />
          </div>

          <label className="block text-[#1D211C] dark:text-[#FFFFFF] mb-2">
            Banner Image
          </label>
          <div
            className="mb-8 mt-2 relative w-full h-64 border-2 border-gray-300 border-dashed bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer"
          >
            <p className="text-center text-gray-500 dark:text-gray-300">
              Click to upload or drag and drop
            </p>
          </div>

          <div>
            <button
              className="bg-[#00970016] dark:bg-[#70FE8C1B] text-[#006514D5] dark:text-[#89FF9FCD] py-2 px-6 rounded-lg transition"
            >
              Create Event
            </button>
            <button
              className="bg-inherit dark:bg-inherit dark:text-[#AFB5AD] text-[#60655F] py-2 px-6 ml-5 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
    </Sidebar>
  );
};

export default Container;
