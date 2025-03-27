import { BellIcon } from "lucide-react";

// Sample data for announcements
const announcements = [
  {
    id: 1,
    title: "Upcoming Student Assessments",
    message:
      "Don't forget to prepare your students for the Quarterly Assessment starting Feb 10th, 2025.",
    time: "2 days ago",
  },
  {
    id: 2,
    title: "Policy Update",
    message:
      "Starting March 1st, 2025, all session reports must be submitted within 24 hours of the session.",
    time: "1 week ago",
  },
];

const AnnouncementsTab = () => {
  return (
    <div className="space-y-4">
      {announcements.map((announcement) => (
        <div
          key={announcement.id}
          className="flex p-4 rounded-xl mb-2 bg-[#1a1a1a] hover:bg-[#252525] transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg hover:border-[#444] border border-transparent"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#3a3a3a] to-[#252525] mr-4">
            <BellIcon size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium">{announcement.title}</p>
            <p className="text-sm text-gray-400 mt-1">{announcement.message}</p>
          </div>
          <div className="text-xs text-gray-500">{announcement.time}</div>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementsTab;
