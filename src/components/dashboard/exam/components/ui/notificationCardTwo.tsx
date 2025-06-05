"use client";

import { UserNotification } from "../../../institution/types/notification";

interface Props {
  notification: UserNotification;
}

export const NotificationCardTwo: React.FC<Props> = ({ notification }) => {
  return (
    <div className="no-scrollbar bg-transparent border-t border-[#343B4F] py-[10px] gap-[20px] text-white flex overflow-hidden">
      <img
        src={notification.avatar}
        alt="user"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[4px]">
          <div className="text-[#AEB9E1] text-[16px] font-[500]">
            <strong className="text-[#D9D9D9]">{notification.header}</strong>{" "}
            You
            {notification.message}{" "}
            <strong className="text-[#D9D9D9]">{notification.course}</strong>{" "}
            Exams
          </div>
          <div className="text-[#AEB9E1] text-[16px] font-[500]">
            {notification.time}
          </div>
        </div>
        <button className="mt-2 w-fit px-[24px] py-[12px] bg-transparent border border-[#343B4F] transition rounded-[48px] hover:border-[#1FACAA] hover:text-[#1FACAA] text-sm">
          View Active Exams
        </button>
      </div>
    </div>
  );
};
