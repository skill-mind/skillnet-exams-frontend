"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { Bell, Users } from "lucide-react";
import { NotificationItem } from "./NotificationItem";

// Define notification type
type NotificationType = {
  id: string;
  icon: "bell" | "users";
  message: string;
  time: string;
};

// Separate data for each tab
const examsNotifications: NotificationType[] = [
  {
    id: "1",
    icon: "bell",
    message: "A certificate was issued to ###### after passing Web3 Test exam",
    time: "5 hrs ago",
  },
];

const certificationNotifications: NotificationType[] = [
  // {
  //   id: "1",
  //   icon: "users",
  //   message: "Verified new candidates",
  //   time: "5 hrs ago",
  // },
  {
    id: "2",
    icon: "users",
    message: "Verified new candidates",
    time: "5 hrs ago",
  },
  {
    id: "3",
    icon: "users",
    message: "Verified new candidates",
    time: "5 hrs ago",
  },
];

const candidatesNotifications: NotificationType[] = [
  {
    id: "1",
    icon: "users",
    message: "Josh registered for your exam",
    time: "5 hrs ago",
  },
  {
    id: "2",
    icon: "bell",
    message:
      "Web3 Test exam is coming up in 3 days make sure to finalize all details",
    time: "5 hrs ago",
  },
];

// Tab configuration
const tabs = [
  { id: "exams", label: "Exams" },
  { id: "certification", label: "Certification" },
  { id: "candidates", label: "Candidates" },
];

export default function NotificationTabs() {
  return (
    <div className="w-full p-6">
      <Tabs.Root defaultValue="exams" className="flex flex-col">
        {/* Tab List */}
        <Tabs.List className="flex flex-wrap mb-6 p-1 gap-1 bg-gray-200 dark:bg-[#1a1a1a] rounded-xl w-full md:w-fit overflow-hidden">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.id}
              value={tab.id}
              className="flex-1 md:flex-none px-3 md:px-6 py-2.5 text-xs md:text-sm font-medium rounded-lg transition-all duration-200 
        data-[state=inactive]:text-black/70
            dark:data-[state=inactive]:text-gray-400
        dark:data-[state=active]:text-white 
        data-[state=active]:text-white
        data-[state=active]:bg-gradient-to-r 
        data-[state=active]:from-gray-700
        data-[state=active]:to-gray-800 
        dark:data-[state=active]:from-[#2a2a2a] 
          dark:data-[state=active]:to-[#323232] 
        data-[state=active]:shadow-md"
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* Exams Tab */}
        <Tabs.Content
          value="exams"
          className="flex-1 space-y-1 transition-opacity duration-300 ease-in-out 
            data-[state=inactive]:opacity-0 
            data-[state=active]:opacity-100"
        >
          {examsNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </Tabs.Content>

        {/* Certification Tab */}
        <Tabs.Content
          value="certification"
          className="flex-1 space-y-1 transition-opacity duration-300 ease-in-out 
            data-[state=inactive]:opacity-0 
            data-[state=active]:opacity-100"
        >
          {certificationNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </Tabs.Content>

        {/* Candidates Tab */}
        <Tabs.Content
          value="candidates"
          className="flex-1 space-y-1 transition-opacity duration-300 ease-in-out 
            data-[state=inactive]:opacity-0 
            data-[state=active]:opacity-100"
        >
          {candidatesNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
