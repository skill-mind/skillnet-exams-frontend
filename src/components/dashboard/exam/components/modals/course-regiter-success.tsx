import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CourseRegisterSuccessModal({ isOpen, onClose }: SuccessModalProps) {
    return (
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
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
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
                            <DialogPanel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-[#0F172A] border border-[#334155] p-6 shadow-xl transition-all">
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-green-400 mb-4">
                                        <CheckCircle size={48} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Registration Successful</h3>
                                    <p className="text-gray-400 text-sm mb-6">
                                        You have successfully registered for the course.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-700 hover:bg-gray-700 transition-colors text-white text-sm font-medium"
                                    >
                                        Close
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
