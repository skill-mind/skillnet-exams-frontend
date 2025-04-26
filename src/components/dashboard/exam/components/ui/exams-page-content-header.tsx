// app/dashboard/page.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Search, FilterX } from 'lucide-react';
import { cn } from '@/lib/utils';
import ExamIcon from "../../../../../../public/notebook.svg";
import LessonIcon from "../../../../../../public/license.svg";
import CertificateIcon from "../../../../../../public/certificate.svg";
import RegisterIcon from "../../../../../../public/pencil-edit.svg";
import MyExamCard from '@/components/dashboard/exam/components/ui/my-exam-card';
import { examData } from '@/components/dashboard/exam/examdata';
import CertificationModal from '../modals/course-detail-modal';
import { examInfoProps } from '@/app/dashboard/register-exam/page';

// Stats Card Component
export const StatCard = ({ icon, count, label }: { icon: string; count: number; label: string }) => (
    <div className="bg-[#0B1739] p-4 rounded-l rounded-lg  border-l-2 border-l-[#1D88FE] flex items-center">
        <div className="text-blue-500 mr-3"><Image alt={label} src={icon} /></div>
        <div>
            <div className="text-xl font-bold text-white">{count}</div>
            <div className="text-xs text-gray-400">{label}</div>
        </div>
    </div>
);

// Not Found Component
const NotFound = ({ category }: { category: string }) => (
    <div className="flex flex-col items-center justify-center p-12 bg-[#0B1A36] rounded-2xl text-center">
        <FilterX size={64} className="text-gray-500 mb-4" />
        <h3 className="text-xl font-medium text-white mb-2">No Exams Found</h3>
        <p className="text-gray-400">
            We couldn't find any exams matching the "{category}" category.
        </p>
        <button
            className="mt-6 px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
            Browse All Exams
        </button>
    </div>
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
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedExam, setSelectedExam] = useState<examInfoProps | null>(null)

    // Filter exams based on selected category and search query
    const filteredExams = examData.filter(exam => {
        const matchesCategory = selectedCategory === 'All' || exam.category === selectedCategory;
        const matchesSearch = searchQuery === '' ||
            exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exam.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div>
            {/* Welcome Section */}
            <div className="mb-8">
                <h2 className="text-2xl">Welcome Back, <span className='font-bold'>Ebube</span></h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        icon={stat.icon}
                        count={stat.count}
                        label={stat.label}
                    />
                ))}
            </div>

            {/* Available Exams */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Available Exams</h3>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={cn(
                                "px-4 h-[38px] rounded-xl text-sm font-medium whitespace-nowrap",
                                selectedCategory === category
                                    ? "bg-[#0B1739] text-white"
                                    : "bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700"
                            )}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}

                    <div className="flex-1 flex items-center justify-end">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search size={16} className="text-gray-400" />
                            </span>
                            <input
                                type="text"
                                placeholder="Search Exams"
                                className="bg-[#0B1739] rounded-lg pl-10 pr-4 h-[38px] text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="ml-2 px-4 h-[38px] bg-transparent border border-gray-600 rounded-lg">
                            Filter
                        </button>
                    </div>
                </div>

                {/* Exam Cards or Not Found */}
                {filteredExams.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredExams.map((exam, index) => (
                            <MyExamCard
                                key={index}
                                title={exam.title}
                                icon={exam.icon}
                                description={exam.description}
                                isCompleted={exam.isCompleted}
                                handleCLick={() => {
                                    setSelectedExam(exam)
                                    setIsModalOpen(true)
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <NotFound category={selectedCategory} />
                )}
                <CertificationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    examInfo={selectedExam}
                />
            </div>
        </div>
    );
}