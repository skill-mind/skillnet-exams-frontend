import React from "react";
import { UserNotification } from "../../institution/types/notification";
import { NotificationCardTwo } from "./ui/notificationCardTwo";

interface NotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationModal({
  isOpen,
  onClose,
}: NotificationProps) {
  if (!isOpen) return null;

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const now = new Date();

  const sampleNotification: UserNotification[] = [
    {
      id: "1",
      avatar: "/images/notis-1.png",
      header: "New Registration",
      message: "You Just Registered For",
      course: "Design Thinking",
      time: "Now",
      link: "/dashboard/user/my-exams",
      read: false,
    },
    {
      id: "2",
      avatar: "/images/notis-2.png",
      header: "New Registration",
      message: "You Just Registered For",
      course: "Design Thinking",
      time: "5 Min Ago",
      link: "/dashboard/user/my-exams",
      read: false,
    },
    {
      id: "3",
      avatar: "/images/notis-3.png",
      header: "New Registration",
      message: "You Just Registered For",
      course: "Design Thinking",
      time: "2 Hrs Ago",
      link: "/dashboard/user/my-exams",
      read: false,
    },
    {
      id: "4",
      avatar: "/images/notis-4.png",
      header: "New Registration",
      message: "You Just Registered For",
      course: "Design Thinking",
      time: "2 Days Ago",
      link: "/dashboard/user/my-exams",
      read: true,
    },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 h-[100vh] overflow-hidden no-scrollbar">
      <div
        onClick={onClose}
        className='className="absolute w-full px-[20px] flex bg-[#0C0C0C1A] gap-[60px] justify-end h-full inset-0 backdrop-blur-md z-0'
      >
        <div
          onClick={handleModalContentClick}
          className="max-w-[567px] max-h-[766px] bg-[#00031B] flex-col flex  border border-[#343B4F] rounded-[12px] p-[20px] mt-5"
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
              <NotificationCardTwo
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
