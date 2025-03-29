'use client';

import { useState, useEffect, Suspense } from 'react';
import { Bot } from 'lucide-react';
import { categories, exams } from '@/lib/exam-mock-data';
import DynamicHeader from '@/components/dashboard/exam/components/dynamic-header';
import CategoryCard from '@/components/dashboard/exam/components/category-card';
import ExamCard from '@/components/dashboard/exam/components/exam-card';
import RegisterModal from '@/components/dashboard/exam/components/modals/register-modal';
import RegisterSuccessModal from '@/components/dashboard/exam/components/modals/register-success';
import RegisterErrorModal from '@/components/dashboard/exam/components/modals/register-error';

export default function page() {
	const [showRegisterModal, setShowRegisterModal] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [showErrorModal, setShowErrorModal] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredExams, setFilteredExams] = useState(exams);

	// Apply filters whenever selectedCategory or searchQuery changes
	useEffect(() => {
		let result = exams;

		// Filter by category if one is selected
		if (selectedCategory) {
			result = result.filter((exam) =>
				exam.categories.includes(selectedCategory)
			);
		}

		// Filter by search query if one exists
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			result = result.filter(
				(exam) =>
					exam.title.toLowerCase().includes(query) ||
					exam.description.toLowerCase().includes(query) ||
					exam.topics.some((topic) => topic.toLowerCase().includes(query)) ||
					exam.categories.some((category) =>
						category.toLowerCase().includes(query)
					)
			);
		}

		setFilteredExams(result);
	}, [selectedCategory, searchQuery]);

	const handleCategoryClick = (category: string) => {
		setSelectedCategory((prevCategory) =>
			prevCategory === category ? null : category
		);
	};

	const handleRegister = () => {
		setShowRegisterModal(true);
	};

	const handleSubmitRegistration = (data: {
		fullName: string;
		email: string;
		walletAddress: string;
	}) => {
		setShowRegisterModal(false);

		// Simulate a registration process
		const success = Math.random() > 0.3; // 70% chance of success

		if (success) {
			setShowSuccessModal(true);
		} else {
			setShowErrorModal(true);
		}
	};

	// Function to update search query from navbar
	const updateSearchQuery = (query: string) => {
		setSearchQuery(query);
	};

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className="flex flex-col gap-y-12 pb-12">
				<DynamicHeader />

				{/* Pass the search function to a global context or use a custom event */}
				<div className="hidden">
					<input
						type="hidden"
						id="global-search-input"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>

				<div className="w-full flex justify-end items-center">
					<p>Chatbox</p>
					<Bot className="h-4 pr-1" />
				</div>

				<div className="">
					<div className="flex overflow-hidden w-full overflow-x-scroll gap-x-3 pb-2">
						{categories.map((category) => (
							<CategoryCard
								key={category.title}
								title={category.title}
								count={category.count}
								isActive={selectedCategory === category.title}
								onClick={() => handleCategoryClick(category.title)}
							/>
						))}
					</div>

					{filteredExams.length > 0 ? (
						<div className="mt-8 grid gap-6 md:grid-cols-2">
							{filteredExams.map((exam, index) => (
								<ExamCard key={exam.id} {...exam} onRegister={handleRegister} />
							))}
						</div>
					) : (
						<div className="mt-8 flex justify-center items-center p-12 border border-zinc-800 rounded-lg">
							<p className="text-zinc-400">
								No exams found matching your criteria. Try adjusting your
								filters.
							</p>
						</div>
					)}
				</div>

				<RegisterModal
					open={showRegisterModal}
					onOpenChange={setShowRegisterModal}
					onSubmit={handleSubmitRegistration}
				/>

				<RegisterSuccessModal
					open={showSuccessModal}
					onOpenChange={setShowSuccessModal}
				/>

				<RegisterErrorModal
					open={showErrorModal}
					onOpenChange={setShowErrorModal}
				/>
			</div>
		</Suspense>
	);
}
