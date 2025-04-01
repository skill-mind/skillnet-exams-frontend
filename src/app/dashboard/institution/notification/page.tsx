import NotificationTabs from "@/components/dashboard/notificationPage/NotificationTabs";

export default function NotificationPage() {
  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-2xl font-bold text-black dark:text-white mb-6">
        Notifications
      </h1>
      <div className="bg-white dark:bg-black rounded-lg p-6 border border-gray-800 h-full">
        <NotificationTabs />
      </div>
    </div>
  );
}
