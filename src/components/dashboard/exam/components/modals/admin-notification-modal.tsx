import React from "react";

import { Notifications } from "../../../institution/types/notification";
import { AdminNotificationCard } from "../ui/admin-notification-card";

interface NotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminNotification({
  isOpen,
  onClose,
}: NotificationProps) {
  if (!isOpen) return null;

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const now = new Date();

  const sampleNotification: Notifications[] = [
    {
      id: "1",
      type: "NEW_REGISTRATION",
      courseName: "Design Thinking",
      createdAt: now,
      userImage: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: "2",
      type: "NEW_SIGN_UP",
      accountName: "Account 5",
      createdAt: new Date(now.getTime() - 5 * 60 * 1000),
      userImage: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: "3",
      type: "NEW_SIGN_UP",
      accountName: "Institution 1",
      createdAt: new Date(now.getTime() - 10 * 60 * 1000),
      userImage: "https://i.pravatar.cc/100?img=3",
    },
    {
      id: "4",
      type: "EXAM_UPDATE",
      courseName: "UX Fundamentals",
      createdAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000),

      userImage: "https://i.pravatar.cc/100?img=4",
    },
  ];
  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-30 ">
      <div
        onClick={onClose}
        className='className="absolute w-full px-[20px] flex bg-[#0C0C0C1A] gap-[60px] justify-end h-full inset-0 backdrop-blur-md '
      >
        <div
          onClick={handleModalContentClick}
          className="w-full max-w-[567px] h-full max-h-[766px] bg-[#00031B] flex-col flex  border border-[#343B4F] rounded-[12px] p-[20px]"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-[#D9D9D9] text-[16px] font-[600]">
              Notification
            </h1>
            <button
              onClick={onClose}
              type="button"
              className="rounded-[48px] bg-transparent py-[12px] px-[24px] border border-[#545A64] text-[#FAFCFF]"
            >
              Mark all as read
            </button>
          </div>
          <div
            className="w-full max-h-full overflow-y-scroll"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {sampleNotification.map((notification) => (
              <AdminNotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
