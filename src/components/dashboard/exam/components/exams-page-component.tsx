"use client";

import React from 'react';
import Image from 'next/image';

export default function ExamPage() {
    return (
        <div className="w-full max-w-full mx-auto bg-[#F5F5F5]">
            <div className="p-4 md:p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">My Exams</h2>

                {/* Exam Content Container */}
                <div className="bg-white rounded-md overflow-hidden shadow-md border border-gray-200">
                    {/* Header with institution name and time */}
                    <div className="bg-[#F9F9F9] py-3 px-4 flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-200">
                        <div className="mb-3 md:mb-0">
                            <h3 className="font-medium text-gray-800">Institutions Name</h3>
                            <p className="text-sm text-gray-600">Solidity Basic Exam</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6">
                            <div className="text-sm text-gray-600">
                                <div className="flex items-center">
                                    <span className="font-medium">1</span>
                                    <span className="mx-1">of</span>
                                    <span className="font-medium">24</span>
                                    <span className="ml-1">Questions</span>
                                </div>
                                <div className="w-24 h-1 bg-gray-200 rounded-full mt-1">
                                    <div className="w-1 h-full bg-blue-500 rounded-full"></div>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="font-medium text-gray-800">60:00 Min</p>
                                <p className="text-xs text-gray-500">Time Left</p>
                            </div>

                            <div className="flex gap-2 mt-2 md:mt-0">
                                <button className="bg-white text-gray-800 px-4 py-1.5 rounded text-sm border border-gray-300 hover:bg-gray-50">
                                    Preview
                                </button>
                                <button className="bg-white text-gray-800 px-4 py-1.5 rounded text-sm border border-gray-300 hover:bg-gray-50">
                                    Finish
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="p-4 md:p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Question section */}
                            <div className="lg:w-2/3">
                                <div className="mb-5">
                                    <p className="text-sm font-medium text-gray-700">Instructions</p>
                                    <p className="text-sm text-gray-600">Select The Correct Option.</p>
                                </div>

                                <div className="mt-6">
                                    <p className="text-sm font-medium text-gray-700">Question 1</p>
                                    <p className="text-sm text-gray-600 mb-5">Which Of The Following Best Describes How A Smart Contract Operates On A Blockchain?</p>

                                    <div className="space-y-3">
                                        <label className="flex items-start cursor-pointer">
                                            <input
                                                type="radio"
                                                name="answer"
                                                className="mt-1 h-4 w-4 border-gray-300 text-blue-500 focus:ring-blue-500"
                                                defaultChecked
                                            />
                                            <span className="ml-2 text-sm text-gray-700">Option 1</span>
                                        </label>

                                        <label className="flex items-start cursor-pointer">
                                            <input
                                                type="radio"
                                                name="answer"
                                                className="mt-1 h-4 w-4 border-gray-300 text-blue-500 focus:ring-blue-500"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">Option 2</span>
                                        </label>

                                        <label className="flex items-start cursor-pointer">
                                            <input
                                                type="radio"
                                                name="answer"
                                                className="mt-1 h-4 w-4 border-gray-300 text-blue-500 focus:ring-blue-500"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">Option 3</span>
                                        </label>

                                        <label className="flex items-start cursor-pointer">
                                            <input
                                                type="radio"
                                                name="answer"
                                                className="mt-1 h-4 w-4 border-gray-300 text-blue-500 focus:ring-blue-500"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">Option 4</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Video recording section */}
                            <div className="lg:w-1/3">
                                <div className="rounded border border-gray-200 p-3">
                                    <div className="flex items-center mb-2">
                                        <p className="text-sm text-gray-700">You Are Being Recorded</p>
                                        <span className="ml-2 h-2 w-2 rounded-full bg-red-500"></span>
                                    </div>

                                    <div className="rounded overflow-hidden bg-gray-100">
                                        {/* Replace with proper aspect ratio container */}
                                        <div className="relative w-full" style={{ paddingBottom: "66.67%" }}>
                                            <div className="absolute inset-0">
                                                <Image
                                                    src="/api/placeholder/400/300"
                                                    alt="Student webcam feed"
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination footer */}
                    <div className="border-t border-gray-200 p-4 flex flex-col md:flex-row justify-between items-center">
                        <button className="mb-3 md:mb-0 bg-white hover:bg-gray-50 text-gray-800 px-4 py-1.5 rounded text-sm border border-gray-300">
                            Previous
                        </button>

                        <div className="flex flex-wrap justify-center gap-1 mb-3 md:mb-0">
                            {Array.from({ length: 9 }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-8 w-8 rounded-full flex items-center justify-center text-sm ${index === 0 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button className="h-8 w-8 rounded-full flex items-center justify-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-200">
                                ...
                            </button>
                            <button className="h-8 w-8 rounded-full flex items-center justify-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-200">
                                24
                            </button>
                        </div>

                        <button className="bg-white hover:bg-gray-50 text-gray-800 px-4 py-1.5 rounded text-sm border border-gray-300">
                            Next
                        </button>
                    </div>

                    {/* Powered by footer */}
                    <div className="bg-[#F9F9F9] p-2 text-center text-xs text-gray-600 border-t border-gray-200">
                        Powered by SkillNet
                    </div>
                </div>
            </div>
        </div>
    );
}