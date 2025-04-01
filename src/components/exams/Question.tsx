"use client";

import React, { useState } from "react";
import { Edit2, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Select from "./Select";

interface QuestionOption {
  text: string;
}

export interface ExamQuestion {
  question: string;
  options: { text: string }[];
  correctAnswer: string;
  isExpanded: boolean;
}

interface ExamQuestionComponentProps {
  onAddQuestion: (question: ExamQuestion) => void;
}

const ExamQuestionComponent: React.FC<ExamQuestionComponentProps> = ({
  onAddQuestion,
}) => {
  const [questions, setQuestions] = useState<ExamQuestion[]>([
    {
      question: "",
      options: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
      correctAnswer: "",
      isExpanded: true,
    },
  ]);

  const handleQuestionChange = (
    index: number,
    field: keyof ExamQuestion,
    value: string
  ) => {
    const newQuestions = [...questions];
    newQuestions[index] = {
      ...newQuestions[index],
      [field]: value,
    };
    setQuestions(newQuestions);
  };

  const handleOptionChange = (
    questionIndex: number,
    optionIndex: number,
    value: string
  ) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex].text = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    // Collapse all previous questions
    const updatedQuestions = questions.map((q) => ({
      ...q,
      isExpanded: false,
    }));

    // Create new question object
    const newQuestion: ExamQuestion = {
      question: "",
      options: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
      correctAnswer: "",
      isExpanded: true,
    };

    // Add to state
    updatedQuestions.push(newQuestion);
    setQuestions(updatedQuestions);

    // ✅ Pass the new question to onAddQuestion
    onAddQuestion(newQuestion);
  };

  const toggleQuestionExpand = (index: number) => {
    const newQuestions = questions.map((q, i) => ({
      ...q,
      isExpanded: i === index ? !q.isExpanded : false,
    }));
    setQuestions(newQuestions);
  };

  return (
    <div className="space-y-6">
      {questions.map((question, questionIndex) => (
        <div
          key={questionIndex}
          className=" bg-gray-400 dark:bg-[#161716] rounded-lg p-6 relative"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">
              Question {questionIndex + 1}
            </h2>
            <div className="flex items-center space-x-2">
              <button
                className="text-gray-400 hover:text-white"
                onClick={() => toggleQuestionExpand(questionIndex)}
              >
                {question.isExpanded ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() => {
                  const newQuestions = questions.map((q, i) => ({
                    ...q,
                    isExpanded: i === questionIndex,
                  }));
                  setQuestions(newQuestions);
                }}
              >
                <Edit2 size={16} />
              </button>
            </div>
          </div>

          {question.isExpanded && (
            <>
              <div className="mb-4">
                <label className="block text-sm mb-2 text-white">
                  Question
                </label>
                <input
                  className="lg:w-[80%]  bg-gray-400 dark:bg-[#161716] border border-[#2D2E2D] rounded-md px-3 py-2 text-white"
                  placeholder="Question"
                  value={question.question}
                  onChange={(e) =>
                    handleQuestionChange(
                      questionIndex,
                      "question",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="space-y-4 mb-4">
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <label className="block text-sm mb-2 text-white">
                      Option {optionIndex + 1}
                    </label>
                    <input
                      className="lg:w-[80%]  bg-gray-400 dark:bg-[#161716] border border-[#2D2E2D] rounded-md px-3 py-2 text-white"
                      placeholder={` Option ${optionIndex + 1}`}
                      value={option.text}
                      onChange={(e) =>
                        handleOptionChange(
                          questionIndex,
                          optionIndex,
                          e.target.value
                        )
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="lg:w-[80%]">
                <label className="block text-sm mb-2 text-white">Answer</label>
                <Select
                  options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                  value={question.correctAnswer}
                  onValueChange={(value) =>
                    handleQuestionChange(questionIndex, "correctAnswer", value)
                  }
                  placeholder="Select correct answer"
                />
              </div>
            </>
          )}

          {questionIndex === questions.length - 1 && (
            <div className="text-center pt-8 lg:ml-[40%]">
              <Button
                variant="outline"
                onClick={addQuestion}
                className="lg:w-[25%] flex items-center justify-center gap-2 bg-[#2D2E2D]"
              >
                <Plus size={16} /> Add Question
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExamQuestionComponent;
