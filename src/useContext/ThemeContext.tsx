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
      const theme = savedTheme ? JSON.parse(savedTheme) : false;
      // Apply theme immediately on initial load
      const htmlElement = document.documentElement;
      if (theme) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
      return theme;
    }
    return false;
  });

  // Add storage event listener to sync across tabs
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "isDarkMode") {
        const newTheme = JSON.parse(event.newValue || "false");
        setIsDarkMode(newTheme);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev: boolean) => {
      const newTheme = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("isDarkMode", JSON.stringify(newTheme));
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
