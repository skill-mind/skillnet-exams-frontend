"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MoreVertical, X } from "lucide-react";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      href: "/dashboard/institution/help-center",
      icon: <Image src="/dashboard.svg" alt="Dashboard" width={20} height={20} />,
      label: "Dashboard",
    },
    {
      href: "/dashboard/institution/create-exam",
      icon: <Image src="/license-draft.svg" alt="Create Exam" width={20} height={20} />,
      label: "Create Exam",
    },
    {
      href: "/dashboard/institution/created-exam",
      icon: <Image src="/license.svg" alt="Created Exam" width={20} height={20} />,
      label: "Created Exam",
    },
    {
      href: "/dashboard/institution/verify-certificate",
      icon: <Image src="/new-releases.svg" alt="Verify Certificate" width={20} height={20} />,
      label: "Verify Certificate",
    },
    {
      href: "/dashboard/institution/view-exam-details",
      icon: <Image src="/new-releases.svg" alt="View Exam Details" width={20} height={20} />,
      label: "View Exam Details",
    },
    {
      href: "/dashboard/institution/help-center",
      icon: <Image src="/help-square.svg" alt="Help Center" width={20} height={20} />,
      label: "Help Center",
    },
  ];

  return (
    <div className="flex bg-gray-100">
      {/* Mobile menu button */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-40 rounded-md bg-[#0a0a1e] p-2 text-white lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-30 h-full w-64 transform bg-[#0a0a1e] text-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <div className="h-8 w-8">
              <Image
                src="/skillnet-white-logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </div>
            <button
              onClick={toggleSidebar}
              className="text-white lg:hidden"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Institution Info */}
          <div className="mx-4 my-2 rounded-md bg-[#1a1a3a] p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 overflow-hidden rounded-full">
                  <Image
                    src="/skillnet-white-logo.png"
                    alt="Institution"
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm">Institution.braavos.eth</span>
              </div>
              <button className="text-white">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>

          <div className="mx-4 my-2 border-b border-gray-700" />

          {/* Navigation */}
          <nav className="flex-1 px-4 py-2">
            <ul className="space-y-2">
              {navLinks.map((link, idx) => {
                const isActive = pathname.startsWith(link.href);
                const isBeforeHelpCenter = idx === 5; // At Help Center (index 5)

                return (
                  <div key={idx}>
                    {/* Add separator before Help Center */}
                    {isBeforeHelpCenter && (
                      <div className="my-4 border-b border-gray-700" />
                    )}
                    <li>
                      <Link
                        href={link.href}
                        className={`flex items-center gap-3 rounded-md p-2 ${
                          isActive ? "bg-[#2a2a4a]" : "hover:bg-[#1a1a3a]"
                        }`}
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}
