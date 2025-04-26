import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { examInfoProps } from '@/app/dashboard/register-exam/page';
import { DotIcon } from 'lucide-react';
import CourseRegisterSuccessModal from './course-regiter-success';
import PaymentConfirmationModal from './payment-confirmation';


// Modal props interface
export interface CertificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    examInfo: examInfoProps | null;
}

export default function CertificationModal({ isOpen, onClose, examInfo }: CertificationModalProps) {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    if (!examInfo) return null;

    const handleRegisterClick = () => {
        // Show payment confirmation modal first
        setShowPaymentModal(true);
    };

    const handlePaymentContinue = () => {
        // Close payment modal and show success modal
        setShowPaymentModal(false);
        // Simulate payment processing delay
        setTimeout(() => {
            setShowSuccessModal(true);
        }, 1000);
    };

    const handlePaymentModalClose = () => {
        setShowPaymentModal(false);
    };

    const handleSuccessModalClose = () => {
        setShowSuccessModal(false);
        onClose(); // Close the parent modal too when success modal is closed
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog className="relative z-50" onClose={onClose}>
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
                                <DialogPanel className="flex justify-between flex-wrap w-full max-w-[880px] border border-[#343B4F] transform overflow-hidden rounded-lg bg-[#00031B] text-white p-6 text-left align-middle shadow-xl transition-all ">
                                    <div className='transform overflow-hidden rounded-lg text-white text-left shadow-xl transition-all'>
                                        <DialogTitle as="h3" className="text-xl font-bold leading-6 text-white mb-5">
                                            {examInfo.title}
                                        </DialogTitle>
                                        <div className='justify-around border border-[#434343] w-[90px] h-[40px] p-2 rounded-lg flex items-center bg-[#0B1739]'>
                                            <div className='w-4 h-4 bg-[#D9D9D9] rounded-full' />
                                            <h4>60 Min</h4>
                                        </div>
                                        {/* Tags section */}
                                        <div className="flex gap-2 mt-3 mb-6 text-xs">
                                            <button className="px-5 py-2 rounded-2xl bg-transparent text-white border border-gray-700">
                                                Beginner
                                            </button>
                                            <button className="px-4 py-2 rounded-2xl bg-transparent text-white border border-gray-700">
                                                English
                                            </button>
                                            <button className="px-4 py-2 rounded-2xl bg-transparent text-white border border-gray-700">
                                                Certification
                                            </button>
                                        </div>
                                    </div>
                                    {/* Right section  */}
                                    <div className='w-[60%] p-4 rounded-lg bg-[#0B1739]'>
                                        {/* Header with date and buttons */}
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-xs text-gray-400">Date: <span className='font-bold text-white'>{examInfo.date}</span></span>
                                            <div className="flex space-x-2">
                                                <button className="w-[76px] h-[38px] rounded-full bg-transparent text-white text-xs border border-gray-700">
                                                    {examInfo.price}
                                                </button>
                                                <button
                                                    className="w-[95px] h-[38px] border border-gray-700 rounded-full bg-transparent hover:bg-blue-700 text-white text-xs"
                                                    onClick={handleRegisterClick}
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </div>

                                        {/* Institution's Name */}
                                        <h4 className="font-semibold text-sm mb-2">{examInfo.institution}</h4>

                                        {/* About Exam Section */}
                                        <h5 className="font-semibold text-xs text-[#FCFCFC] mb-2">About Exam</h5>
                                        <p className="text-xs leading-relaxed text-[#AEB9E1] mb-6">
                                            {examInfo.aboutExam}
                                        </p>

                                        {/* Covered Skills */}
                                        <h4 className="font-semibold text-xs mb-3">Covered Skills</h4>
                                        <div className="flex flex-wrap grid-cols-3 gap-y-2 gap-x-3">
                                            {examInfo.coveredSkills.map((skill) => (
                                                <div key={skill.id} className="flex items-center gap-2 text-xs text-[#8A8A8A]">
                                                    <span className="text-white"><DotIcon /></span> {skill.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Payment Confirmation Modal */}
            <PaymentConfirmationModal
                isOpen={showPaymentModal}
                onClose={handlePaymentModalClose}
                fee={examInfo.price}
                onContinueToPayment={handlePaymentContinue}
            />

            {/* Success Modal */}
            <CourseRegisterSuccessModal isOpen={showSuccessModal} onClose={handleSuccessModalClose} />
        </>
    );
}