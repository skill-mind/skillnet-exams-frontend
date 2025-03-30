// src/context/ThemeContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if running in the browser
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("isDarkMode");
      return savedTheme ? JSON.parse(savedTheme) : false; // Default to light mode
    }
    return false; // Default to light mode if not in the browser
  });

  const toggleTheme = () => {
    setIsDarkMode((prev: boolean) => {
      const newTheme = !prev;
      // Check if running in the browser
      if (typeof window !== "undefined") {
        localStorage.setItem("isDarkMode", JSON.stringify(newTheme)); // Save preference
      }
      return newTheme;
    });
  };

  useEffect(() => {
    // Apply the theme class to the HTML element
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
