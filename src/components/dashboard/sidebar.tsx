"use client";
import {
  Home,
  Bell,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Custom SVG Icons
const WalletIcon = () => (
  <img src="/wallet.svg" alt="Wallet Icon" className="h-5 w-5" />
);

const ExamIcon = () => (
  <img src="/exam.svg" alt="Exam Icon" className="h-5 w-5" />
);

const VeriIcon = () => (
  <img src="/Veri.svg" alt="Verification Icon" className="h-5 w-5" />
);

const CertIcon = () => (
  <img src="/cert.svg" alt="Certificate Icon" className="h-5 w-5" />
);

const CsIcon = () => (
  <img src="/cs.svg" alt="CS Icon" className="h-5 w-5" />
);

interface SidebarProps {
  isMobileMenuOpen: boolean;
  route:(e:string)=>void; 
  pathname:string;
}

export default function Sidebar({ isMobileMenuOpen,route, pathname }: SidebarProps) {
  const [showProfile, setShowProfile] =  useState(false)

  const handleClick =  () => {
    setShowProfile
  }

  const menuItems = [
    { name: "home", href: "/dashboard/institution", icon: () => <Home className="h-5 w-5 text-gray-300" /> },
    { name: "exam", icon: ExamIcon },
    { name: "certificate",icon: CertIcon },
    { name: "verification",  icon: VeriIcon },
    { name: "notification", icon: () => <Bell className="h-5 w-5 text-gray-300" /> },
    { name: "earning",icon: WalletIcon },
  ];

  const supportItems = [
    { name: "support",icon: CsIcon },
    { name: "ai-support", icon: CsIcon },
  ];

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 border-r border-gray-800 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}
      style={{ background: "#161716" }} 
    >
      <div className="flex flex-col h-full">
        {/* Organization selector */}
        <div className="p-4 border-b border-gray-800">
          <button onClick={()=>{
                    route("profile")
                  }} className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                <img src="/Ellipse 1 (1).svg" alt="Icon" className="h-6 w-6" />
              </div>
              <span className="font-medium text-gray-300">SkillNet Org</span>
            </div>
            <ChevronDown size={16} className="text-gray-300" />
          </button>
        </div>

        {/* Main navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={()=>{
                    route(item.name)
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                    pathname === item.href
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  )}
                >
                  <item.icon />
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Support section */}
        <div className="p-4 border-t border-gray-800">
          <ul className="space-y-1">
            {supportItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={()=>{
                    route(item.name)
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                    pathname === item.name
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  )}
                >
                  <item.icon />
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
