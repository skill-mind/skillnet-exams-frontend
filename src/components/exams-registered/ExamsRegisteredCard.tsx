"use client"

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

// Mock Data Interface
export interface ExamCardData {
    id: number;
    title: string;
    description: string;
    date: string;
    duration: string;
    registeredCandidates: number;
    certification: string;
    passingScore: number;
    format: string;
    topicsCovered: string[];
    whyTakeExam: string[];
}

interface ExamCardProps {
    exam: ExamCardData;
    setOpen: (open: boolean) => void;
}

function HorizontalLine() {
    return <div className="border-t border-[#262626]"></div>
}

const RegisteredExamsCard: React.FC<ExamCardProps> = ({ exam, setOpen }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-[#0A0A0A] text-white w-full max-w-[610px] rounded-lg mx-auto">
            <div className="p-4 sm:p-6 space-y-4">
                <h2 className="text-base sm:text-[16px] font-semibold">{exam.title}</h2>

                <p className="text-[#A0A0A0] text-xs sm:text-[12px]">{exam.description}</p>

                <HorizontalLine />

                <div className="space-y-2 text-sm">
                    {[
                        { label: 'DATE', value: exam.date },
                        { label: 'DURATION', value: exam.duration },
                        { label: 'REGISTERED CANDIDATES', value: exam.registeredCandidates },
                        { label: 'CERTIFICATION', value: exam.certification },
                        { label: 'PASSING SCORE', value: `${exam.passingScore}%` },
                        { label: 'FORMAT', value: exam.format }
                    ].map(({ label, value }) => (
                        <div key={label} className="flex text-xs sm:text-[12px] items-center">
                            <span className="text-[#A0A0A0]">{label}: &nbsp;</span>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>

                <HorizontalLine />

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-sm sm:text-[16px] w-full my-3 py-3 text-white border rounded-xl border-[#D0EFB1] hover:bg-[#262626] transition-colors"
                >
                    VIEW DETAILS
                </button>
            </div>

            <Dialog
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                className="fixed inset-0 z-50 overflow-y-auto p-4"
            >
                <div className="flex min-h-full items-center justify-center">
                    <div
                        className="fixed inset-0 bg-black/50"
                        aria-hidden="true"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative bg-[#0A0A0A] rounded-lg w-full max-w-[610px] mx-4 md:mx-auto border border-[#262626] max-h-[90vh] overflow-y-auto custom-scrollbar"
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-4 sm:p-8 space-y-6 pr-4 sm:pr-8">
                            <h2 className="text-base sm:text-[16px] font-semibold">{exam.title}</h2>

                            <p className="text-xs sm:text-[12px] font-[500]">{exam.description}</p>

                            <HorizontalLine />

                            <div className="space-y-2 text-sm">
                                {[
                                    { label: 'DATE', value: exam.date },
                                    { label: 'DURATION', value: exam.duration },
                                    { label: 'REGISTERED CANDIDATES', value: exam.registeredCandidates },
                                    { label: 'CERTIFICATION', value: exam.certification },
                                    { label: 'PASSING SCORE', value: `${exam.passingScore}%` },
                                    { label: 'FORMAT', value: exam.format }
                                ].map(({ label, value }) => (
                                    <div key={label} className="flex text-xs sm:text-[12px] items-center">
                                        <span className="font-[500] text-[#A0A0A0]">{label}: &nbsp;</span>
                                        <span className='font-[500]'>{value}</span>
                                    </div>
                                ))}
                            </div>

                            <HorizontalLine />

                            <div className="grid gap-6 sm:grid-cols-1">
                                <div>
                                    <h3 className="text-xs text-[#6E6E6E] font-[500] mb-4">TOPICS COVERED</h3>
                                    <ul className="space-y-2 text-xs font-[500]">
                                        {exam.topicsCovered.map((topic, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xs text-[#6E6E6E] font-[500] mb-4">WHY TAKE THIS EXAM</h3>
                                    <ul className="space-y-2 text-xs font-[500]">
                                        {exam.whyTakeExam.map((reason, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <HorizontalLine />

                            <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-3 border border-[#262626] text-white rounded-lg hover:bg-[#262626] transition-colors"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => {
                                        setOpen(true)
                                    }}
                                    className="px-6 py-3 bg-[#1B1B1B] text-white border border-[#262626] rounded-lg hover:bg-[#262626] transition-colors"
                                >
                                    Access Exam
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Dialog>
        </div>
    );
};

export default RegisteredExamsCard;