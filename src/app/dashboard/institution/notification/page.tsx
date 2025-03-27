import NotificationTabs from "@/components/dashboard/notificationPage/notification-tabs";

export default function NotificationPage() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <div className="bg-black rounded-lg p-6 border border-gray-800 h-full">
        <NotificationTabs />
      </div>
    </div>
  );
}
