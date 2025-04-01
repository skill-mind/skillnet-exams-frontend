import { Bell, Users } from "lucide-react";

// Define notification type
type NotificationType = {
  id: string;
  icon: "bell" | "users";
  message: string;
  time: string;
};

// Notification item component
export function NotificationItem({
  notification,
}: {
  notification: NotificationType;
}) {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center md:justify-between p-4 mb-3 rounded-lg 
      bg-white dark:bg-[#1e1e1e] hover:bg-gray-200 dark:hover:bg-[#252525] 
      transition-colors duration-300 
      border border-[#2a2a2a] hover:border-[#3a3a3a] 
      shadow-sm"
    >
      <div className="flex items-center gap-3 mb-2 md:mb-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 dark:bg-[#252525] flex-shrink-0">
          {notification.icon === "bell" ? (
            <Bell size={18} />
          ) : (
            <Users size={18} />
          )}
        </div>
        <span className="text-sm font-medium break-words">
          {notification.message}
        </span>
      </div>
      <span className="text-xs text-black dark:text-gray-400 mt-1 md:mt-0 md:ml-4 self-end md:self-auto">
        {notification.time}
      </span>
    </div>
  );
}
