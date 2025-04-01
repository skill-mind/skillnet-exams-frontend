"use client";
import AllTimeEarns from "@/components/dashboard/earnings/AllTimeEarns";
import MonthlyEarns from "@/components/dashboard/earnings/MonthlyEarns";
import WeeklyEarns from "@/components/dashboard/earnings/WeeklyEarns";
import { useState } from "react";

type TimeFrame = "All-Time" | "Weekly" | "Monthly";

export default function EarningsDashboard() {
  const [activeTimeFrame, setActiveTimeFrame] = useState<TimeFrame>("All-Time");

  const renderEarningsComponent = () => {
    switch (activeTimeFrame) {
      case "All-Time":
        return <AllTimeEarns />;
      case "Weekly":
        return <WeeklyEarns />;
      case "Monthly":
        return <MonthlyEarns />;
      default:
        return <AllTimeEarns />;
    }
  };

  return (
    <>
      <div className="bg-transparent text-white -mt-4">
        <div className="flex gap-2 mb-6">
          {["All-Time", "Weekly", "Monthly"].map((timeFrame) => (
            <button
              key={timeFrame}
              className={`px-4 py-1 rounded-full text-sm cursor-pointer ${
                activeTimeFrame === timeFrame ? "bg-[#2D2E2D]" : "bg-[#161716]"
              }`}
              onClick={() => setActiveTimeFrame(timeFrame as TimeFrame)}
            >
              {timeFrame}
            </button>
          ))}
        </div>

        <div className="earnings-content">{renderEarningsComponent()}</div>
      </div>
    </>
  );
}
