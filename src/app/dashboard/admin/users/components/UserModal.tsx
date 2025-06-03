import React from "react";

import Image from "next/image";

const UserModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <div
        id="modal-bg"
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
      >
        <div className="bg-[#00031b] text-white border-2 border-gray-900 rounded-lg w-full max-w-7xl max-h-[90vh] overflow-y-auto relative">
          <div className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl mb-4">User Profile</h2>

            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-6">
              <div className="w-full flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {/* Institution and Email */}
                <div className="flex flex-col gap-4 md:flex-row md:gap-8 w-full">
                  <div className="flex flex-col w-full md:w-1/2">
                    <p className="text-[#AEB9E1]">Institution:</p>
                    <p>John Doe</p>
                  </div>

                  <div className="flex flex-col w-full md:w-1/2">
                    <p className="text-[#AEB9E1]">Email:</p>
                    <p>Johndoe@gmail.com</p>
                  </div>

                  <div className="flex">
                    <button
                      onClick={onClose}
                      className="flex justify-start items-center md:justify-end w-full md:w-auto whitespace-nowrap space-x-2 text-red-500 "
                    >
                      <Image
                        src="/computer-remove.svg"
                        alt="Deactivate Institution"
                        width={20}
                        height={20}
                      />
                      <span>Deactivate Institution</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 max-w-[700px]">
              <div className="bg-[#0b1739] p-4 rounded-r-xl flex items-center space-x-3 border-l-4 border-cyan-400">
                <Image
                  src="/pencil-edit.svg"
                  alt="Created license"
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="text-xl md:text-2xl font-semibold">1</p>
                  <p className="text-sm text-gray-300">Registered Exams</p>
                </div>
              </div>

              <div className="bg-[#0b1739] p-4 rounded-r-xl flex items-center space-x-3 border-l-4 border-cyan-400 sm:col-span-2 lg:col-span-1">
                <Image
                  src="/license.svg"
                  alt="Certificates"
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="text-xl md:text-2xl font-semibold">3</p>
                  <p className="text-sm text-gray-300">Exams Taken</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg mb-4 mt-10 font-semibold">
                Exams Taken
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6 max-w-[500px]">
                <div className="bg-[#0b1739] p-4 rounded-xl flex flex-col items-center space-y-3 border-2 border-gray-900">
                  <Image
                    src="/design thinking.png"
                    alt="Created license"
                    width={70}
                    height={55}
                    className="flex-shrink-0 mb-2"
                  />
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">
                      Design Thinking
                    </p>
                    <p className="text-[12px] text-gray-300">
                      Level up your tech team recruitment with coding tests in
                      20+ languages, helping you identify top developer talent
                      with ease.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0b1739] p-4 rounded-xl flex flex-col items-center space-y-3 border-2 border-gray-900">
                  <Image
                    src="/Web3 basics.png"
                    alt="Created license"
                    width={70}
                    height={55}
                    className="flex-shrink-0 mb-2"
                  />
                  <div className="text-center">
                    <p className="text-lg font-semibold mb-2">
                      Design Thinking
                    </p>
                    <p className="text-[12px] text-gray-300">
                      Level up your tech team recruitment with coding tests in
                      20+ languages, helping you identify top developer talent
                      with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
