"use client";

import { Notifications } from "../../../institution/types/notification";
import { useEffect, useState } from "react";
import { getTimeAgo } from "@/utils/time";

interface Props {
  notification: Notifications;
}

export const AdminNotificationCard: React.FC<Props> = ({ notification }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60 * 1000); // every 60 seconds

    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (notification.type) {
      case "NEW_REGISTRATION":
        return (
          <div className="text-[#AEB9E1] text-[16px] font-[500]">
            <strong className="text-[#D9D9D9] "> New Registration</strong>{" "}
            Account 1 Just Registred For{" "}
            <strong className="text-[#D9D9D9]">
              {notification.courseName}
            </strong>{" "}
            Exams
          </div>
        );
      case "NEW_SIGN_UP":
        return (
          <div className="text-[#AEB9E1] text-[16px] font-[500]">
            <strong className="text-[#D9D9D9]">New sign-up</strong>{" "}
            <span> {notification.accountName}</span> {""}
            Just signed up to skillnet
          </div>
        );
      case "EXAM_UPDATE":
        return (
          <div className="text-[#AEB9E1] text-[16px] font-[500]">
            <strong className="text-[#D9D9D9]">Exam update </strong> Account 7
            just finished{" "}
            <strong className="text-[#D9D9D9]">
              {notification.courseName}
            </strong>{" "}
            Exams.
          </div>
        );
      case "GENERAL":
        return (
          <div className="text-[#AEB9E1] text-[16px] font-[500]">
            {notification.message}
          </div>
        );
      default:
        return <>Unknown notification</>;
    }
  };

  return (
    <div className="bg-transparent border-t border-[#343B4F] py-[20px] gap-[20px] text-white flex i">
      <img
        src={notification.userImage}
        alt="user"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[4px]">
          <div>{renderContent()}</div>
          <div className="text-[#AEB9E1] text-[16px] font-[500]">
            {getTimeAgo(notification.createdAt)}
          </div>
        </div>
        <button className="mt-2 w-fit px-[24px] py-[12px] bg-transparent border border-[#343B4F] transition rounded-[48px] hover:border-[#1FACAA] hover:text-[#1FACAA] text-sm">
          View Active Exams
        </button>
      </div>
    </div>
  );
};
