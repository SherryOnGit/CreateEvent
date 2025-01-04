import React, { useState, useEffect } from "react";

const Sidebar = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply the dark mode class to the root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex w-full">
      <div className="bg-white dark:bg-gray-800 w-64 min-h-screen">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <i className="fas fa-cog mr-2"></i>ShowOps
          </h2>

          <nav>
            <ul>
              <li className="mb-4">
                <a
                  href="/"
                  className="flex items-center text-[#040E0082] dark:text-gray-300 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className="fas fa-th-large mr-3"></i>Dashboard
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/Calender"
                  className="flex items-center text-[#040E0082] dark:text-gray-300 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className="fas fa-calendar mr-3"></i>Calendar
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/Events"
                  className="flex items-center text-[#040E0082] dark:text-gray-300 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className="fas fa-bookmark mr-3"></i>Events
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/Deals"
                  className="flex items-center text-[#040E0082] dark:text-gray-300 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className="fas fa-briefcase mr-3"></i>Offers & Deals
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/Settings"
                  className="flex items-center text-[#040E0082] dark:text-gray-300 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <i className="fas fa-sliders-h mr-3"></i>Settings
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-8">
            <h3 className="text-[#040E0082] dark:text-gray-400 mb-4 font-bold">
              Today's Event
            </h3>
            <div className="space-y-6">
              <div className="items-center flex space-x-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <span className="block text-[#1D211C] dark:text-white">
                      Event Name
                    </span>
                    <span className="block text-[#1D211C] font-[630] dark:text-white">
                      Event Description
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <label className="flex items-center relative cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="sr-only"
              />
              <div className="w-10 h-[24px] bg-gray-300 rounded-full relative dark:bg-gray-600">
                <div
                  className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                    darkMode ? "translate-x-4" : ""
                  }`}
                />
              </div>
              <span className="ml-3 text-gray-600 dark:text-white">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </label>
            
          </div>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Sidebar;
