"use client"

import { useState } from "react"
import IntroSection from "./intro-section"
import Accordion from "./accordion"
import { HelpItem, helpItems } from "@/data/help-data"

export default function HelpCenter() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  // Function to render content based on the data structure
  const renderContent = (item: HelpItem) => {
    return (
      <div className="space-y-4">
        <p>{item.content.mainText}</p>

        {item.content.bulletPoints && item.content.bulletPoints.length > 0 && (
          <ul className="space-y-2 list-disc pl-5">
            {item.content.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <IntroSection />

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Help And Tips</h2>

        <div className="space-y-2">
          {helpItems.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            >
              {renderContent(item)}
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  )
}
