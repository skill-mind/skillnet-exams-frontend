"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Select from "../exams/Select";
import Question from "../exams/Question";
import { ExamQuestion } from "../exams/Question";

export default function CreateExam() {
  const [examData, setExamData] = useState({
    examName: "Web3 Test",
    examAmount: "$50",
    description: "",
    courseCategory: "Front-end",
    certification: "Yes",
    examType: "Multiple choice",
    examDuration: "1hrs",
    candidateEligibility: "Eligible",
  });

  const handleInputChange = (field: string, value: string) => {
    setExamData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (action: "publish" | "draft") => {
    console.log(action, examData);
  };

  const handleAddQuestion = (question: ExamQuestion) => {
    console.log("New Question Added:", question);
  };

  return (
    <div className="text-white p-6">
      <div className="lg:flex justify-center gap-7">
        <div className="lg:w-[80%] w-full">
          <div className=" bg-gray-400 dark:bg-[#161716] rounded-lg mb-6">
            <div className="h-48 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 pb-6">Upload Image</p>
                <div className="bg-[#2D2E2D] w-16 h-16 pt-4 rounded-full ml-[20%]">
                  <Plus size={30} className="ml-4" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Exam Name *</label>
            <input
              className="w-full border border-[#2D2E2D] rounded-md bg-transparent outline-none px-3 py-3 text-white text-sm"
              value={examData.examName}
              onChange={(e) => handleInputChange("examName", e.target.value)}
              placeholder="Enter exam name"
              required
            />
          </div>
          <div className="pt-6">
            <label className="block text-sm mb-1">Exam Description</label>
            <textarea
              className="w-full h-[150px] bg-transparent border border-[#2D2E2D] rounded-md px-3 py-2 text-white text-sm outline-none"
              value={examData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Write exam description"
            />
          </div>
          <Select
            label="Exam Type"
            options={["Multiple choice", "Theory"]}
            value={examData.examType}
            onValueChange={(value) => handleInputChange("examType", value)}
          />
        </div>
        <div className="w-full lg:w-[50%] pt-5">
          <div className="w-full flex flex-col space-y-4">
            <Button
              variant="outline"
              onClick={() => handleSubmit("draft")}
              className="w-full hover:bg-zinc-600"
            >
              Add to Draft
            </Button>
            <Button
              variant="default"
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => handleSubmit("publish")}
            >
              Publish for $50
            </Button>
          </div>
          <Select
            label="Exam Amount"
            options={["$50", "$100", "$150"]}
            value={examData.examAmount}
            onValueChange={(value) => handleInputChange("examAmount", value)}
            required
          />
          <Select
            label="Candidate Eligibility"
            options={["Eligible", "Not Eligible"]}
            value={examData.candidateEligibility}
            onValueChange={(value) =>
              handleInputChange("candidateEligibility", value)
            }
            required
          />
          <Select
            label="Course Category"
            options={["Front-end", "Back-end", "Full-stack"]}
            value={examData.courseCategory}
            onValueChange={(value) =>
              handleInputChange("courseCategory", value)
            }
          />
          <Select
            label="Certification"
            options={["Yes", "No"]}
            value={examData.certification}
            onValueChange={(value) => handleInputChange("certification", value)}
            required
          />
          <div className="flex gap-5">
            <Select
              label="Exam Duration"
              options={["1hrs", "2hrs", "3hrs"]}
              value={examData.examDuration}
              onValueChange={(value) =>
                handleInputChange("examDuration", value)
              }
              required
            />
            <Select
              label="Exam Amount"
              options={["$50", "$100", "$150"]}
              value={examData.examAmount}
              onValueChange={(value) => handleInputChange("examAmount", value)}
              required
            />
          </div>
        </div>
      </div>

      {/* ✅ Pass handleAddQuestion as a prop to the Question component */}
      <div className="pt-16">
        <Question onAddQuestion={handleAddQuestion} />
      </div>
    </div>
  );
}
