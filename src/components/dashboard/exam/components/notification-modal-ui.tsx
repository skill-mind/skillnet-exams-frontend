"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface Notification {
  id: string;
  avatar: string;
  header: string;
  message: string;
  course: string;
  time: string;
  link: string;
  read: boolean;
}

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  markAllAsRead: () => void;
}

export default function NotificationModal({
  isOpen,
  onClose,
  notifications,
  markAllAsRead,
}: NotificationModalProps) {
  // Animation variants
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1], // Custom ease curve for a nice pop effect
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Invisible overlay to detect clicks outside */}
          <div
            className="fixed inset-0 z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Notification Modal */}
          <motion.div
            className="absolute top-16 right-4 max-w-lg bg-[#0B1739] rounded-lg shadow-lg z-50 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="flex justify-between items-center p-4 border-b border-[#1A2747]">
              <h2 className="text-lg font-medium">Notifications</h2>
              <button
                onClick={markAllAsRead}
                className="text-xs text-[#FAFCFF] hover:text-white border border-[#343B4F] bg-transparent px-5 py-2.5 rounded-full transition-colors"
              >
                Mark all as read
              </button>
            </div>

            <div className="max-h-2xl ">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-gray-400">
                  <p>No notifications</p>
                </div>
              ) : (
                <div>
                  {notifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                      className={`px-5 border-b flex justify-normal border-[#1A2747] ${
                        notification.read ? "opacity-70" : ""
                      }`}
                    >
                      <div className="flex py-6 gap-3">
                        <div className="flex-shrink-0">
                          <Image
                            src={notification.avatar || "/placeholder.png"}
                            alt="User avatar"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-col items-start">
                            <p className="space-x-1.5  text-start">
                              <span className="text-sm xl:text-base text-[#D9D9D9]">
                                {notification.header}
                              </span>
                              <span className="text-[#AEB9E1] ">
                                {notification.message}
                              </span>
                              <span className="">{notification.course}</span>{" "}
                              <span className="text-[#AEB9E1]">Exams</span>
                            </p>
                            <p className="text-[#AEB9E1] text-base mb-4 font-medium">
                              {notification.time}
                            </p>
                          </div>
                          <Link
                            href={notification.link}
                            className="inline-block text-xs bg-transparent border border-[#343B4F]  hover:bg-[#162A52] text-white w-fit  px-6 py-3 rounded-full transition-colors"
                          >
                            View Active Exams
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
