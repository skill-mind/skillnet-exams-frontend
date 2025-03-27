"use client";
import { Bell, Menu, MoreVertical, Search, Ban } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/skillnet-black.png";

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavbarProps) {
  return (
    <header className=" bg-[#101110] md:py-6">
      <div className="container mx-auto flex items-center h-16 px-4">
        {/* Left section: hamburger menu + logo */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>

          <Link href="/" className="hidden lg:block">
            <Image
              className="w-[100px] h-[40px] ml-[10%] brightness-200"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navigation: “Home” & “Glance” */}
        <nav className="hidden lg:flex  w-fit items-center ml-auto mr-28 gap-3">
          {" "}
          {/* Increased margin-right further */}
          <Link href="/maintainer" className="text-white text-sm">
            User Management
          </Link>
          {/* Separator line */}
          <div className="rounded-lg w-[2px] h-[12px] !bg-[#2F302F]"></div>
          <Link href="/maintainer/glance" className="text-gray-400 text-sm">
            Glance
          </Link>
        </nav>

        {/* Notification Icon */}
        <button className="hidden md:flex items-center justify-center w-[44px] h-[44px] rounded-lg p-2 text-gray-400 hover:text-white mr-4">
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
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-4 rounded-lg text-sm border border-[#1F1F1F]"
          >
            <Ban size={16} />
            <span className="text-[12px]">Ban Users</span>
          </Link>
          <div className="flex items-center gap-2 bg-[#161716] p-2 rounded-lg">
            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
              <img src="/Ellipse 43.svg" alt="Avatar" className="h-6 w-6" />
            </div>
            <span className="hidden md:block text-sm text-white">
              osatuyipikin.braavos.eth
            </span>
            <button className="text-gray-400 hover:text-white">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
