"use client";
import React, { useState } from "react";
import Image from "next/image";
import EditProfile from "@/components/edit-profile/page";

const EditProfilePage: React.FC = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);

  const handleEditClick = () => {
    setShowEditProfile(true);
  };

  const handleBackToProfile = () => {
    setShowEditProfile(false);
  };

  const handleSave = () => {};
  return (
    <>
      {showEditProfile ? (
        <EditProfile onSave={handleSave} onBack={handleBackToProfile} />
      ) : (
        <div className="min-h-screen bg-black text-white">
          <div className="container mx-auto max-w-4xl px-4 py-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* Profile Image */}
              <div className="w-32 h-32 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center overflow-hidden mb-4 sm:mb-0">
                <Image
                  src="/Ellipse 1 (1).svg"
                  alt="Company Logo"
                  width={120}
                  height={120}
                  className="object-cover"
                />
              </div>

              {/* Profile Content */}
              <div className="flex-1 w-full">
                {/* Header with Company Name and Edit Button */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
                      SkillNet Org
                    </h1>
                    <div className="hidden sm:block text-gray-500">|</div>
                    <p className="text-gray-400 text-center sm:text-left">
                      Design Company
                    </p>
                  </div>

                  <div className="flex justify-center sm:ml-auto mt-2 sm:mt-0">
                    <button
                      onClick={handleEditClick}
                      className="flex items-center gap-2 rounded-2xl px-6 sm:px-10 py-1.5 border border-[#1a1a1a] text-base cursor-pointer hover:bg-[#1a1a1a] hover:text-white transition-colors"
                    >
                      <span className="text-gray-400">Edit</span>
                    </button>
                  </div>
                </div>

                {/* About Section */}
                <div className="bg-[#1a1a1a] text-white p-4 sm:p-6 rounded-xl mt-4">
                  <p className="text-gray-300 leading-relaxed">
                    SkillNet Org is a forward-thinking design agency
                    specializing in UI/UX, branding, and product design. We
                    craft seamless, intuitive, and visually stunning experiences
                    that captivate users and drive business growth. Our team of
                    creative strategists, designers, and developers collaborate
                    to transform ideas into reality—whether it's building
                    digital products, designing brand identities, or optimizing
                    user experiences. At Innovate Designs, we believe in
                    blending creativity with cutting-edge technology to deliver
                    impactful solutions that stand out in today's competitive
                    market. Let's design the future, together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfilePage;
