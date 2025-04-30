// app/dashboard/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, FilterX } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import ExamIcon from "../../../../../../public/notebook.svg";
import LessonIcon from "../../../../../../public/license.svg";
import CertificateIcon from "../../../../../../public/certificate.svg";
import RegisterIcon from "../../../../../../public/pencil-edit.svg";
import MyExamCard from '@/components/dashboard/exam/components/ui/my-exam-card';
import { examData } from '@/components/dashboard/exam/examdata';
import CertificationModal from '../modals/course-detail-modal';
import { examInfoProps } from '@/app/dashboard/user/register-exam/page';

// Stats Card Component
export const StatCard = ({ icon, count, label }: { icon: string; count: number; label: string }) => (
    <motion.div 
        className="bg-[#0B1739] p-4 rounded-l rounded-lg border-l-2 border-l-[#1D88FE] flex items-center"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
        <div className="text-blue-500 mr-3"><Image alt={label} src={icon} /></div>
        <div>
            <div className="text-xl font-bold text-white">{count}</div>
            <div className="text-xs text-gray-400">{label}</div>
        </div>
    </motion.div>
);

// Stats Card 2
export const StatCard2 = ({ icon, count, label }: { icon: string; count: number; label: string }) => (
    <motion.div 
        className="bg-[#0B1739] p-4 rounded-l rounded-lg border-l-2 border-l-[#1D88FE] flex items-center"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
        <div className="text-blue-500 mr-3"><Image alt={label} src={icon} width={40} height={40} /></div>
        <div>
            <div className="text-xl font-bold text-white">{count}</div>
            <div className="text-xs text-gray-400">{label}</div>
        </div>
    </motion.div>
);

// Not Found Component
const NotFound = ({ category }: { category: string }) => (
    <motion.div 
        className="flex flex-col items-center justify-center p-12 bg-[#0B1A36] rounded-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <FilterX size={64} className="text-gray-500 mb-4" />
        <h3 className="text-xl font-medium text-white mb-2">No Exams Found</h3>
        <p className="text-gray-400">
            We couldn't find any exams matching the "{category}" category.
        </p>
        <motion.button
            className="mt-6 px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            Browse All Exams
        </motion.button>
    </motion.div>
);

export const categories = [
    'All',
    'Programming',
    'Product Design',
    'Technical Writing',
    'Product Management'
];


export const stats = [
    { icon: ExamIcon, count: 19, label: 'Exams Available' },
    { icon: CertificateIcon, count: 2, label: 'Certifications' },
    { icon: RegisterIcon, count: 1, label: 'Registered Exams' },
    { icon: LessonIcon, count: 3, label: 'Exams Taken' }
];


export default function ExamsPageHeaderAndContent() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExam, setSelectedExam] = useState<examInfoProps | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set isLoaded to true after component mounts
        setIsLoaded(true);
    }, []);

    // Filter exams based on selected category and search query
    const filteredExams = examData.filter(exam => {
        const matchesCategory = selectedCategory === 'All' || exam.category === selectedCategory;
        const matchesSearch = searchQuery === '' ||
            exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exam.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Animation variants for the container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.15
            }
        }
    };
    
    // Animation variants for individual children
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Welcome Section */}
            <motion.div className="mb-8" variants={itemVariants}>
                <h2 className="text-2xl">Welcome Back, <span className='font-bold'>Ebube</span></h2>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8" variants={itemVariants}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                    >
                        <StatCard
                            icon={stat.icon}
                            count={stat.count}
                            label={stat.label}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Available Exams */}
            <motion.div className="mb-6" variants={itemVariants}>
                <motion.h3 
                    className="text-xl font-semibold mb-4"
                    variants={itemVariants}
                >
                    Available Exams
                </motion.h3>

                {/* Categories */}
                <motion.div 
                    className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2"
                    variants={itemVariants}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            className={cn(
                                "px-4 h-[38px] rounded-xl text-sm font-medium whitespace-nowrap",
                                selectedCategory === category
                                    ? "bg-[#0B1739] text-white"
                                    : "bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700"
                            )}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variants={itemVariants}
                        >
                            {category}
                        </motion.button>
                    ))}

                    <motion.div 
                        className="flex-1 flex items-center justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search size={16} className="text-gray-400" />
                            </span>
                            <motion.input
                                type="text"
                                placeholder="Search Exams"
                                className="bg-[#0B1739] rounded-lg pl-10 pr-4 h-[38px] text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                initial={{ width: "100%" }}
                                whileFocus={{ boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)" }}
                            />
                        </div>
                        <motion.button 
                            className="ml-2 px-4 h-[38px] bg-transparent border border-gray-600 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Filter
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Exam Cards or Not Found */}
                {filteredExams.length > 0 ? (
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        variants={itemVariants}
                    >
                        {filteredExams.map((exam, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <MyExamCard
                                    title={exam.title}
                                    icon={exam.icon}
                                    description={exam.description}
                                    isCompleted={exam.isCompleted}
                                    handleCLick={() => {
                                        setSelectedExam(exam)
                                        setIsModalOpen(true)
                                    }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <NotFound category={selectedCategory} />
                )}
                <CertificationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    examInfo={selectedExam}
                />
            </motion.div>
        </motion.div>
    );
}