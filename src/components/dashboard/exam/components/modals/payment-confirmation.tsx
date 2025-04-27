import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { XIcon } from 'lucide-react';

interface PaymentConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  fee: string;
  onContinueToPayment: () => void;
}

export default function PaymentConfirmationModal({
  isOpen,
  onClose,
  fee = "$100",
  onContinueToPayment
}: PaymentConfirmationModalProps) {
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
              <DialogPanel className="w-full max-w-md transform overflow-hidden border border-[#343B4F] rounded-lg bg-[#00031B] text-white p-8 text-center self-center align-middle shadow-xl transition-all">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex justify-center gap-8 w-full mb-6">
                    <h3 className="text-lg text-center font-medium text-white">Registration Fee Required</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                      <XIcon size={20} />
                    </button>
                  </div>

                  <p className="text-sm mb-8">
                    To complete your registration, a {fee} fee is required.
                  </p>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-8 py-2 rounded-full bg-transparent text-white text-sm border border-gray-700 hover:bg-gray-800 focus:outline-none"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={onContinueToPayment}
                      className="px-8 py-2 rounded-full bg-transparent text-white text-sm border border-gray-700 hover:bg-gray-800 focus:outline-none"
                    >
                      Continue to payment
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}