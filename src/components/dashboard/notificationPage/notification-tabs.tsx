"use client";

import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";

// Tab content components
import NewStudentTab from "./new-student-tab";
import QuestionsTab from "./questions-tab";
import PaymentsTab from "./payments-tab";
import AnnouncementsTab from "./announcements-tab";

const NotificationTabs = () => {
  const [activeTab, setActiveTab] = useState("questions");

  return (
    <div className="w-full h-full">
      <Tabs.Root
        className="flex flex-col w-full h-full"
        defaultValue="questions"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        {/* Tab triggers */}
        <Tabs.List className="flex gap-5 flex-wrap mb-4">
          <Tabs.Trigger
            className="px-4 py-2  font-medium text-gray-400 bg-[#161716] rounded-xl p-3 hover:text-white border-b-2 border-transparent data-[state=active]:text-white data-[state=active]:bg-[#2D2E2D] transition-colors"
            value="new-student"
          >
            New student
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-4 py-2  font-medium text-gray-400 bg-[#161716] rounded-xl p-3 hover:text-white border-b-2 border-transparent data-[state=active]:text-white data-[state=active]:bg-[#2D2E2D] transition-colors"
            value="questions"
          >
            Questions
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-4 py-2  font-medium text-gray-400 bg-[#161716] rounded-xl p-3 hover:text-white border-b-2 border-transparent data-[state=active]:text-white data-[state=active]:bg-[#2D2E2D] transition-colors"
            value="payment"
          >
            Payment
          </Tabs.Trigger>
          <Tabs.Trigger
            className="px-4 py-2  font-medium text-gray-400 bg-[#161716] rounded-xl p-3 hover:text-white border-b-2 border-transparent data-[state=active]:text-white data-[state=active]:bg-[#2D2E2D] transition-colors"
            value="announcements"
          >
            Announcements
          </Tabs.Trigger>
        </Tabs.List>

        {/* Tab content panels */}
        <Tabs.Content className="flex-1 outline-none" value="new-student">
          <NewStudentTab />
        </Tabs.Content>

        <Tabs.Content className="flex-1 outline-none" value="questions">
          <QuestionsTab />
        </Tabs.Content>

        <Tabs.Content className="flex-1 outline-none" value="payment">
          <PaymentsTab />
        </Tabs.Content>

        <Tabs.Content className="flex-1 outline-none" value="announcements">
          <AnnouncementsTab />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default NotificationTabs;
