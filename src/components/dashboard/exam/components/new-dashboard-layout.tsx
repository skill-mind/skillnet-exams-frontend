"use client";

import { useState, type ReactNode, useEffect } from "react";
import Image from "next/image";
import { Bell, EllipsisVertical, Menu, X } from "lucide-react"; // Removed unused ChevronDown
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Asset Imports (Combined)
import DashboardIcon from "../../../../../public/dashboard-square.svg";
import ExamIcon from "../../../../../public/notebook.svg";
import CertificateIcon from "../../../../../public/certificate.svg";
import RegisterIcon from "../../../../../public/pencil-edit.svg";
import UserIcon from "../../../../../public/Ellipse 43.svg";
import HelpIcon from "../../../../../public/help-square.svg";
import SkillNetLogo from "../../../../../public/skillnet white logo .svg";
import MenuCollapseIcon from "../../../../../public/menu-collapse.svg";

// Component/Context/Data Imports (Combined)
import Link from "next/link";
import EditProfileModal from "../../edit-profile-modal";
import WalletDisconnectModal from "@/components/Wallet-disconnect-modal";
import { useWalletContext } from "@/components/WalletProvider";
import NotificationModal from "./notification-modal";
import { notificationsData } from "@/data/notification-data";
import { redirect } from "next/navigation";
import { useBalance } from "@starknet-react/core";
import { fetchBalance } from "@/utils/helper";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  activePage: "dashboard" | "my-exams" | "certificates" | "help";
}

export default function DashboardLayout({
  children,
  title,
  activePage,
}: DashboardLayoutProps) {
  // --- State Variables (Combined) ---
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  // State from HEAD branch merge
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  // State from d195... branch merge
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState(notificationsData);
  const [unreadCount, setUnreadCount] = useState(0);
  const [balance,setBalance] = useState(0)

  // --- Wallet Context ---
  const { account, disconnectWallet } = useWalletContext();
  // const { data} = useBalance({
  //   address: account && account.startsWith("0x") ? account as `0x${string}` : undefined,
    
  // });



  useEffect(() => {
    if (!account) {
      return;
    }
    fetchBalance(account, setBalance);
  }, [account]);

  // --- Handlers ---
  const handleDisconnect = () => {
    disconnectWallet();
    setIsDisconnectModalOpen(false);
  };

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
    console.log("clicked");
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // --- Effects ---
  // Calculate unread count effect
  useEffect(() => {
    const count = notifications.filter(
      (notification) => !notification.read
    ).length;
    setUnreadCount(count);
  }, [notifications]);

  // Handle responsive behavior effect
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      setSidebarOpen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    setIsInitialRender(false);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close sidebar outside click effect
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

  // --- Navigation Items ---
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
    }
  ];

  // --- Animation Variants ---
  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const overlayVariants = {
    open: { opacity: 1, transition: { duration: 0.3 } },
    closed: { opacity: 0, transition: { duration: 0.3 } },
  };

  const navItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + index * 0.1, duration: 0.3 },
    }),
  };

  const contentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  // --- JSX Return ---
  return (
    <div className="flex h-screen bg-[#081028] text-white relative overflow-hidden no-scrollbar">
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-30" // Use consistent class order
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
          "w-[278px] md:w-[260px] p-5 overflow-y-auto no-scroll", // Keep overflow-y-auto from HEAD
          !isMobile && "left-0"
        )}
        initial={isInitialRender || !isMobile ? false : "closed"}
        animate={sidebarOpen ? "open" : "closed"}
        variants={isMobile ? sidebarVariants : {}}
      >
        {/* Sidebar Header (Logo, Close button) */}
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
              {/* Use logo with fallback from d195... */}
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
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {isMobile ? (
              <X size={24} />
            ) : (
              <Image
                src={MenuCollapseIcon || "/placeholder.png"} // Add fallback
                alt="collapse menu"
                height={24}
                width={24}
                // onClick handled by parent button for desktop toggle
              />
            )}
          </motion.button>
        </motion.div>

        {/* User Info Bar (Always Visible) - From HEAD */}
        <motion.div
          className="pb-2 mt-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <motion.div
            className="flex items-center space-x-2 h-[48px] p-2 bg-[#071630] rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="overflow-hidden w-6 h-6 rounded-full">
              <Image src={UserIcon} alt="User" width={24} height={24} />
            </div>
            <div className="flex-1 truncate">
              {/* // TODO: Replace with dynamic user name/ENS */}
              <span className="text-sm">Ebube.bravous.eth</span>
            </div>
            {/* This button toggles the details dropdown */}
            <motion.button
              className="p-1 rounded-md hover:bg-[#0a1d3f]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              aria-label="User details options"
            >
              <EllipsisVertical size={16} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* --- Conditional Rendering: Details Dropdown OR Navigation --- */}
        {isDetailsOpen ? (
          // --- Details Dropdown ---
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="p-3 border border-[#343B4F] rounded-[12px] mt-2" // Added mt-2 for spacing
          >
            {/* Avatar, Name, Email, Account */}
            <div className="mb-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="mb-5 relative w-fit mx-auto"
              >
                {/* // TODO: Replace with dynamic avatar */}
                <Image
                  src="/institute-avatar.png"
                  alt="User avatar"
                  className="block mx-auto w-fit rounded-[12px]" // Added rounded-full
                  width={100}
                  height={100}
                />
                {/* // TODO: Decide if this button uploads avatar or opens edit modal */}
                <button
                  className="absolute bottom-0 right-0 w-fit"
                  aria-label="Edit profile picture"
                >
                  <input
                    type="file"
                    className="absolute cursor-pointer inset-0 opacity-0 w-full h-full"
                    aria-label="Upload new profile picture"
                  />
                  <Image
                    src="/institute-edit.svg"
                    alt="" // Decorative, label on button
                    className="cursor-pointer"
                    width={38}
                    height={38}
                  />
                </button>
              </motion.div>
              <div className="mb-6 text-center">
                {/* // TODO: Replace with dynamic data */}
                <h2 className="text-[18px] font-semibold mb-2">
                  Institution’s name
                </h2>
                {/* // TODO: Replace with dynamic data */}
                <p className="text-xs text-[#AEB9E1]">Institution@gmail.com</p>
              </div>
              <p
                className="text-xs text-center truncate"
                title={
                  `${account?.slice(0, 6)}…${account?.slice(-4)}` ||
                  "Wallet not connected"
                }
              >
                {`${account?.slice(0, 6)}…${account?.slice(-4)}` ||
                  "Wallet not connected"}
              </p>
            </div>

            {/* Balance Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-[#0A1330] p-6 rounded-2xl flex flex-col gap-[18px] mb-6"
            >
              <div className="flex justify-between items-center">
                <h3>Total Balance</h3>
                {/* // TODO: Add functionality to hide/show balance */}
                <button aria-label="Toggle balance visibility">
                  <Image
                    src="/hidden.svg"
                    alt="Balance hidden"
                    width={14}
                    height={14}
                  />
                </button>
              </div>
              {/* // TODO: Replace with dynamic balance */}
              <div className="text-center">STK {balance.toFixed(2)}</div>
              <motion.div
                whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                {/* // TODO: Update link destination if needed */}
                <Link
                  href="/"
                  className="border rounded-full text-xs p-[12px] w-full block text-center border-[#343B4F] transition-colors duration-150 ease-in-out hover:bg-[#071630]"
                >
                  View Details
                </Link>
              </motion.div>
            </motion.div>

            {/* Records Section - TODO: Add links/functionality */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mb-6" // Added margin
            >
              <div>
                <p className="mb-4 text-xs font-medium">Records</p>
                <div className="flex justify-between items-center border-b border-[#AEB9E1] pb-2 mb-2">
                  <div className="text-[#AEB9E1] underline text-xs cursor-pointer hover:text-white">
                    Created Exams
                  </div>
                  {/* // TODO: Replace with dynamic count */}
                  <div className="text-xs font-medium">2</div>
                </div>
              </div>
              <div className="text-[#AEB9E1] underline text-xs cursor-pointer hover:text-white">
                Exam History
              </div>
            </motion.div>

            {/* Edit Profile & Disconnect Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col gap-4 mt-6"
            >
              <motion.div
                whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  className="border rounded-full text-xs p-[12px] w-full block text-center border-[#343B4F] transition-colors duration-150 ease-in-out hover:bg-[#071630]"
                  onClick={() => setIsEditProfileModalOpen(true)} // Trigger edit modal
                >
                  Edit Profile
                </button>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.98 }}
                disabled={!account} // Disable if no account
                onClick={() => {
                  setIsDisconnectModalOpen(true);
                  redirect("/");
                }}
                // Trigger disconnect modal
                className="border rounded-full disabled:opacity-50 disabled:cursor-not-allowed text-xs p-[12px] w-full block text-center bg-[#1FACAA] border-[transparent] transition-opacity duration-150 ease-in-out hover:brightness-110"
              >
                Disconnect Wallet
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          // --- Regular Navigation (Details Dropdown Closed) ---
          <nav className="mt-6">
            <motion.hr
              className="border border-[#343B4F] mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            />
            <ul className="space-y-3">
              {/* Map through main navigation items */}
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
                      {/* Use fallback for item icon */}
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
              {/* Separator */}
              <motion.hr
                className="border border-[#343B4F] my-4"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }} // Adjust delay
              />
              {/* Help Center Link */}
              <motion.li
                initial="initial"
                animate="animate"
                variants={navItemVariants}
                custom={navItems.length} // Ensure delay is sequential
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
                    {/* Use fallback for help icon */}
                    <Image
                      src={HelpIcon || "/placeholder.png"}
                      alt={`Help center icon`}
                      width={24}
                      height={24}
                    />
                    <span className="ml-3">Help Center</span>
                  </Link>
                </motion.div>
              </motion.li>
            </ul>
          </nav>
        )}
        {/* --- End of Conditional Rendering --- */}
      </motion.div>{" "}
      {/* End Sidebar */}
      {/* Main Content Area */}
      <motion.div
        className={cn(
          "flex overflow-auto flex-col flex-1 transition-all duration-300", // Use consistent class order
          isMobile ? "w-full" : sidebarOpen ? "lg:ml-0" : "lg:ml-0" // Adjust margin based on sidebar state if needed (currently doesn't push content)
        )}
        initial="initial"
        animate="animate"
        variants={contentVariants}
      >
        {/* Top Bar */}
        <motion.header
          // Use header with relative positioning from d195...
          className="flex justify-between items-center py-6 px-7 bg-[#081028] shadow-sm relative z-10" // Added z-index
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left side: Menu button and Title */}
          <div className="flex items-center">
            <motion.button
              id="menu-button"
              className="mr-4 lg:hidden p-2 rounded-md hover:bg-[#071630]"
              onClick={toggleSidebar}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open menu"
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
          {/* Right side: Notifications Button/Area - Use d195's complete structure */}
          <motion.div // Changed wrapping button to div to avoid nesting interactive elements inappropriately
            className="flex items-center space-x-1 " // Added relative for modal positioning
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.button
              className="p-2 rounded-full hover:bg-[#071630] relative group flex items-center gap-1" // Combined inner button and text styling
              onClick={toggleNotification} // Add the handler
              whileHover={{ scale: 1.05 }} // Apply hover to the whole unit
              whileTap={{ scale: 0.95 }}
              aria-label={`Notifications ${
                unreadCount > 0 ? `(${unreadCount} unread)` : ""
              }`}
            >
              <Bell size={20} />
              {/* Conditional unread dot */}
              {unreadCount > 0 && (
                <motion.span
                  className="absolute top-1 left-0 w-2 h-2 bg-red-500 rounded-full" // Adjusted position relative to bell
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                ></motion.span>
              )}
              <motion.h3
                className="scale-95 group-hover:scale-100 duration-200" // Simplified animation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                Notifications
              </motion.h3>
            </motion.button>

            {/* Render Notification Modal conditionally */}
            {/* Positioned absolutely relative to the wrapping div */}
            <NotificationModal
              isOpen={notificationOpen}
              onClose={() => setNotificationOpen(false)}
              // notifications={notifications}
              // markAllAsRead={markAllAsRead}
            />
          </motion.div>{" "}
          {/* End Notification Area */}
        </motion.header>

        {/* Main Content Body */}
        <motion.main
          className="flex-1 p-4 md:p-6 overflow-auto bg-[#081028]" // Ensure background consistency
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {children}
        </motion.main>
      </motion.div>{" "}
      {/* End Main Content Area */}
      {/* Modals Rendered at the Root Level - From HEAD */}
      <WalletDisconnectModal
        isOpen={isDisconnectModalOpen}
        onClose={() => setIsDisconnectModalOpen(false)}
        onDisconnect={handleDisconnect}
      />
      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        // TODO: Pass any necessary props like user data or update handlers
      />
    </div> // End main flex container
  ); // End return
} // End component function
