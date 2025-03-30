import React from "react";
import { useTheme } from "../useContext/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full p-1 transition-colors duration-300"
      style={{ backgroundColor: isDarkMode ? "#4F46E5" : "#D1D5DB" }}
      aria-label="Toggle theme"
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
