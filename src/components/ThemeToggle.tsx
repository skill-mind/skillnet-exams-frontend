import React from "react";
import { useTheme } from "../useContext/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 px-6 h-8 rounded-full p-1 transition-all duration-300 focus:outline-none dark:focus:ring-2 focus:ring-2 focus:ring-indigo-700 dark:focus:ring-white focus:ring-offset-2 ${
        isDarkMode
          ? "bg-[#0e0d1d] shadow-[0_0_8px_rgba(79,70,229,0.5)]"
          : "bg-[#D1D5DB] shadow-[0_0_8px_rgba(209,213,219,0.5)]"
      }`}
      aria-label="Toggle theme"
    >
      {/* ToggleThumb */}
      <div
        className="absolute mb-8 w-6 h-6 bg-white rounded-full shadow-lg transform transition-all duration-300 ease-in-out"
        style={{
          left: "50%",
          top: "50%",
          transform: isDarkMode
            ? "translate(calc(18px - 50%), -50%)"
            : "translate(calc(-18px - 50%), -50%)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      />
      <svg
        className={`absolute w-4 h-4 text-yellow-400 transition-opacity duration-300 ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
        style={{ left: "4px", top: "50%", transform: "translateY(-50%)" }}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
      </svg>
      <svg
        className={`absolute w-4 h-4 text-gray-200 transition-opacity duration-300 ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
        style={{ right: "4px", top: "50%", transform: "translateY(-50%)" }}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </button>
  );
};

export default ThemeToggle;
