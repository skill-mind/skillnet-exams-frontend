"use client";

import { useState, Fragment, useRef, Dispatch, SetStateAction } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { BadgeCheck } from "lucide-react";

interface TakeExamFlowProps {
    step: "verify" | "success" | "instructions" | null
    setStep: Dispatch<SetStateAction<"verify" | "success" | "instructions" | null>>
    showTakeExamsModal: boolean
    setShowTakeExamsModal: Dispatch<SetStateAction<boolean>>
}

export default function TakeExamFlow({ showTakeExamsModal, setShowTakeExamsModal, setStep, step }: TakeExamFlowProps) {
    const [code, setCode] = useState(["", "", "", ""]);
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const router = useRouter();

    const handleVerify = () => {
        // Simulate verification step
        setTimeout(() => {
            setStep("success");
        }, 500);
    };

    const handleProceed = () => {
        setStep("instructions");
    };

    const handleStartExam = () => {
        router.push("/dashboard/user");
    };

    const handleInputChange = (value: string, index: number) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    return (
        <>
            {/* Verify Modal */}
            <Transition show={showTakeExamsModal && step === "verify"} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setShowTakeExamsModal(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-blue/50 backdrop-blur-sm" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-[#00031B] p-6 text-white shadow-xl transition-all text-center">
                                    <h2 className="text-lg font-semibold mb-4">Verify</h2>
                                    <p className="text-sm text-gray-400 mb-6">Your code was sent to you via email</p>
                                    <div className="flex justify-center gap-3 mb-4">
                                        {code.map((digit, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                maxLength={1}
                                                value={digit}
                                                onChange={(e) => handleInputChange(e.target.value, index)}
                                                ref={(el) => {
                                                    if (el) inputRefs.current[index] = el;
                                                }}
                                                className="w-12 h-12 text-center bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={handleVerify}
                                        className="mt-4 px-6 w-[90px] py-2 bg-transparent border border-gray-700 rounded-full hover:bg-gray-700 transition-colors"
                                    >
                                        Verify
                                    </button>
                                    <p className="text-xs text-gray-400 mt-4">
                                        Didn't receive code? <button className="underline">Request again</button>
                                    </p>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Success Modal */}
            <Transition appear show={showTakeExamsModal && step === "success"} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setShowTakeExamsModal(false)}>
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <DialogPanel className="w-full max-w-sm transform border border-gray-700 overflow-hidden rounded-2xl bg-[#00031B] p-8 text-white shadow-xl transition-all text-center">
                            <div className="flex justify-center mt-2">
                                <div className="h-[80px] flex gap-2 justify-center items-center rounded-[20px] p-3 bg-[#5AE670] shadow-[0_0_0_8px_#418150,0_0_0_16px_#385442] animate-pulse">
                                    <BadgeCheck className="text-white w-8 h-8" />
                                    <h2 className="text-lg font-semibold">Verified Please Proceed</h2>
                                </div>
                            </div>
                            <button
                                onClick={handleProceed}
                                className="mt-14 px-6 py-2 rounded-full border border-gray-700 text-white hover:bg-gray-700 transition-colors"
                            >
                                Proceed
                            </button>
                        </DialogPanel>
                    </div>
                </Dialog>
            </Transition>

            {/* Instructions Modal */}
            <Transition appear show={showTakeExamsModal && step === "instructions"} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setShowTakeExamsModal(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="w-full max-w-[887px] transform overflow-hidden border border-gray-700 rounded-2xl bg-[#00031B] p-8 text-white shadow-xl transition-all">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                            <h2 className="text-2xl font-bold">Instructions</h2>
                                        </div>
                                        <div className="w-full md:w-2/3 bg-[#0F1D3D] p-6 rounded-lg">
                                            <h3 className="text-lg font-semibold mb-4">Please Read The Instructions Carefully Before Starting:</h3>
                                            <ul className="list-disc pl-5 space-y-2 text-sm text-[#AEB9E1]">
                                                <li>Duration: You will have 60 minutes to complete the exam.</li>
                                                <li>Format: The exam consists of multiple-choice questions, coding challenges, and short answers.</li>
                                                <li>Submission: All answers will be auto-saved. Click "Submit" once you're done.</li>
                                                <li>Attempts: Only one attempt is allowed.</li>
                                                <li>Environment: Make sure you're in a quiet place with a stable internet connection.</li>
                                                <li>No External Help: This is a closed-book exam. No third-party assistance or plugins/tools are allowed.</li>
                                                <li>Monitoring: Your screen and activity may be monitored for integrity purposes.</li>
                                            </ul>

                                            <div className="flex gap-4 mt-6">
                                                <button
                                                    className="px-6 py-2 rounded-full border border-gray-700 text-white hover:bg-gray-700 transition-colors"
                                                    onClick={() => {
                                                        setShowTakeExamsModal(false)
                                                        setStep(null)
                                                    }}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="px-6 py-2 rounded-full border border-gray-700 hover:bg-gray-700 transition-colors"
                                                    onClick={handleStartExam}
                                                >
                                                    Start Exam
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
