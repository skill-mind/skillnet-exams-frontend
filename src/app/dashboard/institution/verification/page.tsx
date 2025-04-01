"use client";
import React, { useState } from "react";
import { Check, X } from "lucide-react";

const CertificateVerification = () => {
  const [showErrorState, setShowErrorState] = useState(false);

  const handleViewClick = () => {
    setShowErrorState(true);
  };

  const handleXClick = () => {
    setShowErrorState(false);
  };

  return (
    <div className="h-screen bg-white dark:bg-black text-white p-4">
      {!showErrorState ? (
        <div>
          <form action="" className="flex flex-col">
            <label
              htmlFor=""
              className=" text-black dark:text-[#9596A0] font-ubuntu"
            >
              Enter Unique code
            </label>
            <input
              type="text"
              placeholder="# - 12453ynuffjfip889wdjfnkknsk"
              className="bg-transparent  placeholder:text-black dark:placeholder:text-[#9596A0] border-[1px] border-[#252625] p-3 rounded-lg w-full lg:w-[40em] outline-none text-black dark:text-white focus:ring-1 focus:ring-white/20 transition-all"
            />
          </form>
          <div className="flex flex-col items-center justify-center mt-40">
            <div className="flex flex-col items-center space-y-8">
              <div className=" bg-gray-700 dark:bg-[#CDEEC0] rounded-full w-16 h-16 flex items-center justify-center">
                <Check className="text-white w-8 h-8" />
              </div>
              <h1 className="text-2xl font-normal">
                This Certificate Is Verified
              </h1>
              <button
                className=" bg-gray-700 dark:bg-[#CDEEC0] text-white dark:text-black font-medium py-3 px-8 text-sm rounded-lg hover:bg-[#BDE2AE] transition-colors"
                onClick={handleViewClick}
              >
                VIEW
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center space-y-8">
            <div
              className="bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors"
              onClick={handleXClick}
            >
              <X className="text-white w-8 h-8" />
            </div>
            <h1 className="text-2xl font-normal">
              This Certificate Is Verified
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateVerification;
