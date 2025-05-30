"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Edit } from "lucide-react"
import { useWalletContext } from "@/components/WalletProvider"
import EditProfileModal from "./edit-profile-modal"

interface ProfileData {
  name: string
  email: string
  walletAddress: string
  avatar: string
}

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
  profileData: ProfileData
  onProfileUpdate: (data: { name: string; email: string }) => void
}

export default function ProfileModal({ isOpen, onClose, profileData, onProfileUpdate }: ProfileModalProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const { disconnectWallet } = useWalletContext()

  const handleEditClick = () => {
    setIsEditModalOpen(true)
  }

  const handleEditModalClose = () => {
    setIsEditModalOpen(false)
  }

  const handleProfileSave = (data: { name: string; email: string }) => {
    onProfileUpdate(data)
    setIsEditModalOpen(false)
  }

  const handleDisconnectWallet = () => {
    // Disconnect the wallet using the wallet provider
    disconnectWallet()
    // Close the modal
    onClose()
  }

  return (
    <>
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
                {/* Avatar Section */}
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
                  <button
                    onClick={handleEditClick}
                    className="absolute bottom-0 right-0 w-10 h-10 bg-[#343B4F] rounded-full flex items-center justify-center hover:bg-[#4a5568] transition-colors"
                  >
                    <Edit size={16} />
                  </button>
                </div>

                {/* Profile Info */}
                <h2 className="text-2xl font-semibold mb-2">{profileData.name}</h2>
                <p className="text-[#AEB9E1] mb-4">{profileData.email}</p>
                <p className="text-sm text-[#AEB9E1] mb-8 font-mono">
                  {profileData.walletAddress
                    ? `${profileData.walletAddress.substring(0, 6)}...${profileData.walletAddress.substring(profileData.walletAddress.length - 4)}`
                    : "No wallet connected"}
                </p>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={handleEditClick}
                    className="w-full py-3 px-6 border border-[#343B4F] rounded-full text-white hover:bg-[#071630] transition-colors"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleDisconnectWallet}
                    className="w-full py-3 px-6 bg-[#1FACAA] rounded-full text-white hover:bg-[#17a085] transition-colors"
                  >
                    Disconnect Wallet
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={handleEditModalClose}
        profileData={profileData}
        onSave={handleProfileSave}
      />
    </>
  )
}
