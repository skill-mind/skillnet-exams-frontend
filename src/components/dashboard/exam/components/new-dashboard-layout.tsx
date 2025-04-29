"use client";

import { useState, type ReactNode, useEffect } from "react";
import Image from "next/image";
import { Bell, EllipsisVertical, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import DashboardIcon from "../../../../../public/dashboard-square.svg";
import ExamIcon from "../../../../../public/notebook.svg";
import CertificateIcon from "../../../../../public/certificate.svg";
import RegisterIcon from "../../../../../public/pencil-edit.svg";
import UserIcon from "../../../../../public/Ellipse 43.svg";
import HelpIcon from "../../../../../public/help-square.svg";
import SkillNetLogo from "../../../../../public/skillnet-white logo.png";
import MenuCollapseIcon from "../../../../../public/menu-collapse.svg";
import Link from "next/link";
import NotificationModal from "./notification-modal";
import { notificationsData } from "@/data/notification-data";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  activePage: "dashboard" | "my-exams" | "certificates" | "register" | "help";
}

export default function DashboardLayout({
  children,
  title,
  activePage,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState(notificationsData);
  const [unreadCount, setUnreadCount] = useState(0);

  // Calculate unread notifications count
  useEffect(() => {
    const count = notifications.filter(
      (notification) => !notification.read
    ).length;
    setUnreadCount(count);
  }, [notifications]);

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      setSidebarOpen(window.innerWidth >= 1024);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Set initial render to false after first render
    setIsInitialRender(false);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      const menuButton = document.getElementById("menu-button");

      if (isMobile && sidebarOpen && sidebar && menuButton) {
        if (
          !sidebar.contains(event.target as Node) &&
          !menuButton.contains(event.target as Node)
        ) {
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, sidebarOpen]);

  // Handle notification toggle
  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
  };

  const navItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: DashboardIcon,
      href: "/dashboard/user",
    },
    {
      key: "my-exams",
      label: "My Exams",
      icon: ExamIcon,
      href: "/dashboard/user/my-exams",
    },
    {
      key: "certificates",
      label: "View Certificates",
      icon: CertificateIcon,
      href: "/dashboard/user/view-certificate",
    },
    {
      key: "register",
      label: "Register For Exams",
      icon: RegisterIcon,
      href: "/dashboard/user/register-exam",
    },
  ];

  // Handle sidebar toggle for mobile view
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle navigation item click for mobile
  const handleNavClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Animation variants
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
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

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
  };

  const contentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex h-screen bg-[#081028] text-white relative overflow-hidden">
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
          !isMobile && "left-0"
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
              <Image
                src={SkillNetLogo || "/placeholder.png"}
                alt="logo"
                height={40}
                width={40}
              />
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
                src={MenuCollapseIcon || "/placeholder.png"}
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
              <Image
                src={UserIcon || "/placeholder.png"}
                alt="User"
                width={24}
                height={24}
              />
            </div>
            <div className="flex-1 truncate">
              <span className="text-sm">Ebube.bravous.eth</span>
            </div>
            <motion.button
              className="p-1 rounded-md hover:bg-[#0a1d3f]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <EllipsisVertical size={16} />
            </motion.button>
          </motion.div>
        </motion.div>

        <nav className="mt-6">
          <motion.hr
            className="border border-[#343B4F] mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />
          <ul className="space-y-3">
            {navItems.map((item, index) => (
              <motion.li
                key={item.key}
                custom={index}
                initial="initial"
                animate="animate"
                variants={navItemVariants}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      "flex items-center py-[10px] px-[10px] h-[45px] rounded-[12px] transition-colors",
                      activePage === item.key
                        ? "bg-[#071630] text-white"
                        : "text-gray-400 hover:bg-[#071630] hover:text-white"
                    )}
                  >
                    <Image
                      src={item.icon || "/placeholder.png"}
                      alt={`${item.label} icon`}
                      width={24}
                      height={24}
                    />
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
            <motion.li
              initial="initial"
              animate="animate"
              variants={navItemVariants}
              custom={5}
            >
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/dashboard/user/help-center"
                  onClick={handleNavClick}
                  className={cn(
                    "flex items-center py-[10px] px-[10px] h-[45px] rounded-[12px] transition-colors",
                    activePage === "help"
                      ? "bg-[#071630] text-white"
                      : "text-gray-400 hover:bg-[#071630] hover:text-white"
                  )}
                >
                  <Image
                    src={HelpIcon || "/placeholder.png"}
                    alt={`help icon`}
                    width={24}
                    height={24}
                  />
                  <span className="ml-3">Help Center</span>
                </Link>
              </motion.div>
            </motion.li>
          </ul>
        </nav>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className={cn(
          "flex-1 flex flex-col overflow-auto transition-all duration-300",
          isMobile ? "w-full" : sidebarOpen ? "lg:ml-0" : "lg:ml-0"
        )}
        initial="initial"
        animate="animate"
        variants={contentVariants}
      >
        {/* Top Bar */}
        <motion.header
          className="flex justify-between items-center py-6 px-7 bg-[#081028] shadow-sm relative"
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
          <motion.button
            className="flex items-center space-x-1 group hover:scale-110 scale-100 focus:outline-none"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onClick={toggleNotification}
            aria-label="Notifications"
          >
            <motion.button className="p-2 rounded-full scale-90 group-hover:scale-105 duration-200 hover:bg-[#071630] relative">
              <Bell size={20} />
              {unreadCount > 0 && (
                <motion.span
                  className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                ></motion.span>
              )}
            </motion.button>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="group-hover:scale-105 scale-95 duration-200"
            >
              Notifications
            </motion.h3>

            {/* Notification Modal */}
            <NotificationModal
              isOpen={notificationOpen}
              onClose={() => setNotificationOpen(false)}
              notifications={notifications}
              markAllAsRead={markAllAsRead}
            />
          </motion.button>
        </motion.header>

        {/* Main Content */}
        <motion.main
          className="flex-1 p-4 md:p-6 overflow-auto bg-[#081028]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {children}
        </motion.main>
      </motion.div>
    </div>
  );
}
