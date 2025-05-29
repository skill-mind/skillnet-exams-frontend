"use client"

import { useState, type ReactNode, useEffect } from "react"
import Image from "next/image"
import { Bell, EllipsisVertical, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

// Admin-specific icons (using same style as institution)
import DashboardIcon from "../../../../../public/dashboard-square.svg"
import ExamsTakenIcon from "../../../../../public/license-draft.svg"
import OngoingExamsIcon from "../../../../../public/license.svg"
import RegistrationIcon from "../../../../../public/new-releases.svg"
import InstitutionsIcon from "../../../../../public/new-releases.svg"
import UsersIcon from "../../../../../public/Ellipse 43.svg"
import HelpIcon from "../../../../../public/help-square.svg"
import SkillNetLogo from "../../../../../public/skillnet-white logo.png"
import MenuCollapseIcon from "../../../../../public/menu-collapse.svg"
import UserIcon from "../../../../../public/new-releases.svg"

interface AdminLayoutProps {
  children: ReactNode
  title: string
  activePage: "Dashboard" | "Exams-Taken" | "Ongoing-Exams" | "Registration" | "Institutions" | "Users" | "Help-Center"
}

export default function AdminDashboardLayout({ children, title, activePage }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isInitialRender, setIsInitialRender] = useState(true)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [toggleNotification, setToggleNotification] = useState(false)

  const handleNotificationClick = () => {
    setToggleNotification(!toggleNotification)
  }

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
      setSidebarOpen(window.innerWidth >= 1024)
    }

    // Initial check
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    setIsInitialRender(false)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar")
      const menuButton = document.getElementById("menu-button")

      if (isMobile && sidebarOpen && sidebar && menuButton) {
        if (!sidebar.contains(event.target as Node) && !menuButton.contains(event.target as Node)) {
          setSidebarOpen(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobile, sidebarOpen])

  // Admin-specific navigation items
  const navItems = [
    {
      key: "Dashboard",
      label: "Dashboard",
      icon: DashboardIcon,
      href: "/dashboard/admin",
    },
    {
      key: "Exams-Taken",
      label: "Exams Taken",
      icon: ExamsTakenIcon,
      href: "/dashboard/admin/exams-taken",
    },
    {
      key: "Ongoing-Exams",
      label: "Ongoing Exams",
      icon: OngoingExamsIcon,
      href: "/dashboard/admin/ongoing-exams",
    },
    {
      key: "Registration",
      label: "Registration",
      icon: RegistrationIcon,
      href: "/dashboard/admin/registration",
    },
    {
      key: "Institutions",
      label: "Institutions",
      icon: InstitutionsIcon,
      href: "/dashboard/admin/institutions",
    },
    {
      key: "Users",
      label: "Users",
      icon: UserIcon,
      href: "/dashboard/admin/users",
    },
  ]

  // Handle sidebar toggle for mobile view
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  // Handle navigation item click for mobile
  const handleNavClick = () => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  // Animation variants (exact same as institution layout)
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const overlayVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  const navItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + index * 0.1,
        duration: 0.3,
      },
    }),
  }

  const contentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="flex h-screen bg-[#00031B] text-white relative overflow-hidden">
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setSidebarOpen(false)}
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        id="sidebar"
        className={cn(
          "fixed lg:relative z-40 h-full bg-[#00031B]",
          "w-[278px] md:w-[260px] p-5",
          !isMobile && "left-0",
        )}
        initial={isInitialRender || !isMobile ? false : "closed"}
        animate={sidebarOpen ? "open" : "closed"}
        variants={isMobile ? sidebarVariants : {}}
      >
        <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={SkillNetLogo || "/placeholder.svg"} alt="logo" height={40} width={40} />
            </motion.div>
          </div>
          <motion.button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-[#071630]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobile ? (
              <X size={24} />
            ) : (
              <Image
                src={MenuCollapseIcon || "/placeholder.svg"}
                alt="collapse menu"
                height={24}
                width={24}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              />
            )}
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-5 pb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <motion.div
            className="flex items-center space-x-2 h-[48px] p-2 bg-[#071630] rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <Image src={UserIcon || "/placeholder.svg"} alt="User" width={24} height={24} />
            </div>
            <div className="flex-1 truncate">
              <span className="text-sm">Institution.braavos.eth</span>
            </div>
            <motion.button
              className="p-1 rounded-md hover:bg-[#0a1d3f]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            >
              <EllipsisVertical size={16} />
            </motion.button>
          </motion.div>
        </motion.div>

        {(isDetailsOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="p-3 border border-[#343B4F] rounded-[12px]"
          >
            <div className="mb-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="mb-5 relative w-fit mx-auto"
              >
                <Image
                  src="/institute-avatar.png"
                  alt="avatar"
                  className="block mx-auto w-fit"
                  width={100}
                  height={100}
                />
                <button className="absolute bottom-0 right-0 w-fit">
                  <input type="file" className="absolute cursor-pointer inset-0 opacity-0" />
                  <Image src="/institute-edit.svg" alt="edit" className="cursor-pointer" width={38} height={38} />
                </button>
              </motion.div>
              <div className="mb-6 text-center">
                <h2 className="text-[18px] font-semibold mb-2">Admin Dashboard</h2>
                <p className="text-xs text-[#AEB9E1]">admin@skillnet.com</p>
              </div>
              <p className="text-xs text-center truncate">Administrator Access</p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-[#0A1330] p-6 rounded-2xl flex flex-col gap-[18px] mb-6"
            >
              <div className="flex justify-between items-center">
                <h3>System Overview</h3>
                <Image src="/hidden.svg" alt="hidden" width={14} height={14} />
              </div>
              <div className="text-center">Active</div>
              <motion.div whileHover={{ scale: 1.03, filter: "brightness(1.1)" }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/"
                  className="border rounded-full text-xs p-[12px] w-full block text-center border-[#343B4F] transition-colors duration-150 ease-in-out"
                >
                  View Details
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }}>
              <div>
                <p className="mb-4 text-xs font-medium">Admin Records</p>
                <div className="flex justify-between items-center border-b border-[#AEB9E1] pb-2 mb-2">
                  <div className="text-[#AEB9E1] underline text-xs">Total Exams</div>
                  <div className="text-xs font-medium">25</div>
                </div>
                <div className="flex justify-between items-center border-b border-[#AEB9E1] pb-2 mb-2">
                  <div className="text-[#AEB9E1] underline text-xs">Active Users</div>
                  <div className="text-xs font-medium">142</div>
                </div>
              </div>
              <div className="text-[#AEB9E1] underline text-xs">System Logs</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col gap-4 mt-6"
            >
              <motion.div whileHover={{ scale: 1.03, filter: "brightness(1.1)" }} whileTap={{ scale: 0.98 }}>
                <button className="border rounded-full text-xs p-[12px] w-full block text-center border-[#343B4F] transition-colors duration-150 ease-in-out">
                  Admin Settings
                </button>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                className="border rounded-full text-xs p-[12px] w-full block text-center bg-[#1FACAA] border-[transparent] transition-opacity duration-150 ease-in-out"
              >
                System Logout
              </motion.button>
            </motion.div>
          </motion.div>
        )) || (
          <nav className="mt-6">
            <motion.hr
              className="border border-[#343B4F] mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            />
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <motion.li key={item.key} custom={index} initial="initial" animate="animate" variants={navItemVariants}>
                  <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className={cn(
                        "flex items-center py-[10px] px-[10px] h-[45px] rounded-[12px] transition-colors",
                        activePage === item.key
                          ? "bg-[#071630] text-white"
                          : "text-gray-400 hover:bg-[#071630] hover:text-white",
                      )}
                    >
                      <Image src={item.icon || "/placeholder.svg"} alt={`${item.label} icon`} width={24} height={24} />
                      <span className="ml-3">{item.label}</span>
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
              <motion.hr
                className="border border-[#343B4F] my-4"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              />
              <motion.li initial="initial" animate="animate" variants={navItemVariants} custom={6}>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Link
                    href="/dashboard/admin/help-center"
                    onClick={handleNavClick}
                    className={cn(
                      "flex items-center py-[10px] px-[10px] h-[45px] rounded-[12px] transition-colors",
                      activePage === "Help-Center"
                        ? "bg-[#071630] text-white"
                        : "text-gray-400 hover:bg-[#071630] hover:text-white",
                    )}
                  >
                    <Image src={HelpIcon || "/placeholder.svg"} alt={`help icon`} width={24} height={24} />
                    <span className="ml-3">Help Center</span>
                  </Link>
                </motion.div>
              </motion.li>
            </ul>
          </nav>
        )}
      </motion.div>

      {/* Main Content */}
      <motion.div
        className={cn(
          "flex-1 flex flex-col overflow-auto transition-all duration-300 m-5 rounded-xl",
          isMobile ? "w-full" : sidebarOpen ? "lg:ml-0" : "lg:ml-0",
        )}
        initial="initial"
        animate="animate"
        variants={contentVariants}
      >
        {/* Top Bar */}
        <motion.header
          className="flex justify-between items-center py-6 px-7 bg-[#081028] shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <motion.button
              id="menu-button"
              className="mr-4 lg:hidden p-2 rounded-md hover:bg-[#071630]"
              onClick={toggleSidebar}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={24} />
            </motion.button>
            <motion.h1
              className="text-xl font-semibold truncate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {title}
            </motion.h1>
          </div>
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.button
              onClick={handleNotificationClick}
              className="p-2 rounded-full hover:bg-[#071630] relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell size={20} />
              <motion.span
                className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              ></motion.span>
            </motion.button>
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.3 }}>
              Notifications
            </motion.h3>
          </motion.div>
        </motion.header>

        {/* Main Content */}
        <motion.main
          className="flex-1 p-4 md:p-6 overflow-auto bg-[#081028] "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {children}
        </motion.main>
      </motion.div>
    </div>
  )
}
