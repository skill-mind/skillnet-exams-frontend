"use client";
import React, { useState } from "react";
import NewCandidates from "./components/NewCandidates";
import PastCandidates from "./components/PastCandidates";
import VerifiedCandidates from "./components/VerifiedCandidates";

const tabs = [
  { id: "new_candidates", label: "New candidates" },
  { id: "past_candidates", label: "Past candidates" },
  { id: "verified_candidates", label: "Verified candidates" },
] as const;

type TabType = (typeof tabs)[number]["id"];

const CandidatesPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("new_candidates");

  const renderComponent = () => {
    switch (activeTab) {
      case "new_candidates":
        return <NewCandidates />;
      case "past_candidates":
        return <PastCandidates />;
      case "verified_candidates":
        return <VerifiedCandidates />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-5 ml-10">
      <header className="flex space-x-4 pb-2'">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-4 text-sm rounded-md font-medium ${
              activeTab === tab.id
                ? "bg-[#161716]  text-white"
                : "hover:bg-neutral-800 text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </header>
      <div className="text-white flex flex-col gap-3 py-5">
        <div className="overflow-x-auto font-sans text-sm pr-5 mt-10">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default CandidatesPage;
