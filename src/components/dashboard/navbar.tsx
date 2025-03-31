"use client";
import { Bell, Menu, MoreVertical, Pencil, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/skillnet-white logo.png";
import ThemeToggle from "../ThemeToggle";

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavbarProps) {
  return (
    <header className="border-b border-gray-800 bg-white dark:bg-black">
      <div className="container mx-auto flex items-center h-16 px-4">
        {/* Left section: hamburger menu + logo */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-black  hover:text-black dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>

          <Link href="/" className="hidden lg:block">
            <Image
              className="w-[100px] h-[40px] ml-[10%]"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navigation: “Home” & “Glance” */}
        <nav className="hidden lg:flex items-center ml-auto mr-28 gap-3">
          {" "}
          {/* Increased margin-right further */}
          <Link
            href="/dashboard"
            className="text-black dark:text-white w-[80px] h-[24px] flex items-center justify-center"
          >
            Home
          </Link>
          {/* Separator line */}
          <div className="w-[2px] h-[16px] bg-[#2F302F] rounded-lg"></div>
          <Link
            href="/dashboard/glance"
            className="text-black  hover:text-black dark:text-white w-[80px] h-[24px] flex items-center justify-center"
          >
            Glance
          </Link>
        </nav>

        {/* Notification Icon */}
        <button className="hidden md:flex items-center justify-center w-[44px] h-[44px] rounded-lg p-2 text-black  hover:text-black dark:text-white mr-4">
          <Bell size={20} />
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-[#1F1F1F] rounded-lg w-[287px] h-[48px] px-3 gap-2 mr-4">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-transparent outline-none text-gray-200 placeholder-gray-500"
          />
        </div>

        {/* Right section: Create Exam and Profile */}
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/exams/create"
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-black dark:text-white px-3 py-1.5 rounded-md text-sm border border-[#1F1F1F]"
          >
            <Pencil size={16} />
            <span>Create Exam</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
              <img src="/Ellipse 43.svg" alt="Avatar" className="h-6 w-6" />
            </div>
            <span className="hidden md:block text-sm text-black dark:text-white">
              osatuyipikin.braavos.eth
            </span>
            <button className="text-black  hover:text-black dark:text-white">
              <MoreVertical size={20} />
            </button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
