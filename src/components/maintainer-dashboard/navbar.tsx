"use client";
import { Bell, Menu, MoreVertical, Search, Ban } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/skillnet-white logo.png";
import { usePathname } from "next/navigation";

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Navbar({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavbarProps) {
  //current url path
  const path = usePathname();

  return (
    <header className=" bg-[#101110] md:py-6">
      <div className=" mx-auto flex items-center  px-4 justify-between">
        {/* Left section: hamburger menu + logo */}
        <div className="flex items-center justify-center gap-4 ">
          <button
            className="xl:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>

          <Link href="/" className="hidden xl:block">
            <Image
              className=" w-20 ml-[10%] brightness-200"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {/* Navigation: “Home” & “Glance” */}
          <div className="hidden lg:flex  w-fit items-center ml-auto gap-3 xl:mr-20">
            {" "}
            {/* Increased margin-right further */}
            {path === "/dashboard/maintainer" && (
              <Link href="/dashboard/maintainer" className="text-white text-sm">
                User Management
              </Link>
            )}
            {path === "/dashboard/maintainer/students" && (
              <Link
                href="/dashboard/maintainer/students"
                className="text-white text-sm"
              >
                Students
              </Link>
            )}
            {path === "/dashboard/maintainer/institutions" && (
              <Link
                href="/dashboard/maintainer/institutions"
                className="text-white text-sm"
              >
                institution management
              </Link>
            )}
            {/* Separator line */}
            <div className="rounded-lg w-[2px] h-[12px] !bg-[#2F302F]"></div>
            <Link href="/maintainer/glance" className="text-gray-400 text-sm">
              Glance
            </Link>
          </div>

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
      </div>
    </header>
  );
}
