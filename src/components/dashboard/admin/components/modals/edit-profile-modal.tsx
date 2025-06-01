"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Upload } from "lucide-react"

interface ProfileData {
  name: string
  email: string
  walletAddress: string
  avatar: string
}

interface EditProfileModalProps {
  isOpen: boolean
  onClose: () => void
  profileData: ProfileData
  onSave: (data: { name: string; email: string }) => void
}

export default function EditProfileModal({ isOpen, onClose, profileData, onSave }: EditProfileModalProps) {
  const [formData, setFormData] = useState({
    name: profileData.name,
    email: profileData.email,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    onSave(formData)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Handle file upload logic here
      console.log("File selected:", file)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#081028] rounded-2xl p-8 w-[400px] max-w-[90vw] relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-[#071630] rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center">
              {/* Avatar Upload Section */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full bg-[#343B4F] rounded-3xl flex items-center justify-center overflow-hidden">
                  {profileData.avatar ? (
                    <img
                      src={profileData.avatar || "/placeholder.svg"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#FF6B9D] via-[#C44AFF] to-[#4A90E2] flex flex-col items-center justify-center">
                      <div className="text-white text-2xl font-bold mb-1">BELLE</div>
                      <div className="text-white text-xs">BEAUTY & COSMETICS</div>
                    </div>
                  )}
                </div>
              </div>

              {/* File Upload Button */}
              <div className="mb-8">
                <label className="inline-flex items-center px-6 py-2 border border-[#343B4F] rounded-full cursor-pointer hover:bg-[#071630] transition-colors">
                  <Upload size={16} className="mr-2" />
                  Choose From File
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>

              {/* Form Fields */}
              <div className="space-y-6 text-left">
                <div>
                  <label className="block text-[#AEB9E1] text-sm mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border border-[#343B4F] rounded-xl text-white focus:outline-none focus:border-[#1FACAA] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-[#AEB9E1] text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border border-[#343B4F] rounded-xl text-white focus:outline-none focus:border-[#1FACAA] transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSave}
                className="w-full mt-8 py-3 px-6 bg-[#1FACAA] rounded-full text-white hover:bg-[#17a085] transition-colors font-medium"
              >
                Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
