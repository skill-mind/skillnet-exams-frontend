"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
}: EditProfileModalProps) {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm "
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-[290px] border border-[#343B4F] rounded-2xl bg-[#0a0b1e] p-5 shadow-xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mb-6">
              <Image
                src="/institute-avatar.png"
                alt="avatar"
                className="block mx-auto w-fit mb-2"
                width={100}
                height={100}
              />
              <button className="border block rounded-full border-[#343B4F] py-2 px-3 w-fit mx-auto text-[8px]">
                Choose From File
              </button>
            </div>
            <form action="">
              <div>
                <label
                  htmlFor=""
                  className="mb-1 text-[#9596A0] text-sm font-[500]"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="rounded-[12px] py-2 px-3 w-full block text-sm text-white bg-transparent border border-[#545A64] "
                />
              </div>
              <div className="mt-6">
                <label
                  htmlFor=""
                  className="mb-1 text-[#9596A0] text-sm font-[500]"
                >
                  Email Address{" "}
                </label>
                <input
                  type="text"
                  className="rounded-[12px] py-2 px-3 w-full block text-sm text-white bg-transparent border border-[#545A64] "
                />
              </div>
            </form>

            <div className="mt-6">
              <button
                onClick={onClose}
                className="  w-full text-center rounded-[48px] bg-teal-500 text-white font-medium hover:bg-teal-600 transition-colors py-[12px]"
              >
                Save
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
