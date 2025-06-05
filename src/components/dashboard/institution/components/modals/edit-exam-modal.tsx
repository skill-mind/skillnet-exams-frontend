import { X } from "lucide-react";
import React, { useState } from "react";

interface ExamDraft {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface EditExamModalProps {
  exam: ExamDraft;
  onClose: () => void;
  onSave?: (updatedExam: ExamDraft) => void;
}

const EditExamModal: React.FC<EditExamModalProps> = ({
  exam,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    title: exam.title,
    description:
      "The Design Thinking test evaluates a candidate's ability to apply human-centered design principles to solve complex problems. This test assesses their skills in empathizing with users, defining clear problem statements, ideating innovative solutions, prototyping effectively, and testing iteratively. Candidates are evaluated on their ability to balance creativity with practicality, communicate ideas clearly, and adopt a mindset focused on user needs and continuous improvement.",
    duration: "60 Min",
    level: "Beginner",
    language: "English",
    certification: true,
    price: "$100",
    date: "April 27th, 2025",
  });

  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePublishClick = () => {
    setShowConfirmationPopup(true);
  };

  const handleConfirmPublication = () => {
    if (onSave) {
      onSave({
        ...exam,
        title: formData.title,
        description: formData.description,
      });
    }
    setShowConfirmationPopup(false);
    onClose();
  };

  const handleCloseConfirmation = () => {
    setShowConfirmationPopup(false);
  };

  const skills = [
    "Design",
    "Design Process",
    "Problem Solving",
    "HCD",
    "Ideating",
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute top-[-50px] left-0 right-0 bottom-0 bg-black backdrop-blur-sm  bg-opacity-40 z-50"
      ></div>

      <div className="bg-[#00031B] w-[887px] min-h-[460px] rounded-[12px] overflow-auto z-50 border border-[#434343]">
        <div className="p-6 z-50">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
            {/* Left Column - Takes 3 columns */}
            <div className="space-y-6 lg:col-span-3">
              <div>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="text-[24px] font-bold bg-transparent text-white border-none outline-none w-full"
                  placeholder="Exam Title"
                />
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="bg-[#0B1739] rounded-[12px] border border-[#434343] px-4 py-2 flex items-center gap-2">
                  <div className="w-[14px] h-[14px] bg-[#D9D9D9] rounded-full"></div>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) =>
                      handleInputChange("duration", e.target.value)
                    }
                    className="bg-transparent text-[#D9D9D9] outline-none w-16"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="bg-none border border-[#434343] text-white px-4 py-2 rounded-[12px] text-sm">
                  {formData.level}
                </div>

                <div className="bg-none border border-[#434343] text-white px-4 py-2 rounded-[12px] text-sm">
                  {formData.language}
                </div>

                <div className="bg-none border border-[#434343] text-white px-4 py-2 rounded-[12px] text-sm">
                  Certification
                </div>
              </div>
            </div>

            {/* Right Column - Takes 5 columns */}
            <div className="space-y-6 lg:col-span-5">
              <div className="bg-[#0B1739] rounded-[12px] h-full p-5">
                <div className="flex w-full justify-between">
                  <div className="text-gray-400 text-sm mb-2">
                    Date:{" "}
                    <span className="font-bold text-white">
                      {formData.date}
                    </span>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button className="bg-none text-white border border-[#545A64] px-6 py-2 rounded-full transition-colors">
                      $100
                    </button>
                    <button
                      onClick={handlePublishClick}
                      className="bg-none hover:bg-[#1A8A96] text-white border border-[#545A64] px-6 py-2 rounded-full transition-colors"
                    >
                      Publish
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    About Exam
                  </h3>
                  <div className="w-full bg-transparent text-[12px] text-[#AEB9E1] leading-relaxed resize-none outline-none rounded-lg p-2 h-40">
                    {formData.description}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Covered Skills
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showConfirmationPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Popup Overlay */}
          <div
            onClick={handleCloseConfirmation}
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          ></div>

          {/* Popup Content */}
          <div className="bg-[#00031B] border border-[#434343] rounded-[12px] p-6 w-[346px] h-[238px] z-70 relative">
            {/* Title */}
            <div className="flex justify-around w-full my-5">
              <h2 className="text-white text-xl font-semibold mb-2 w-full text-center">
                Publish Exam
              </h2>
              <X
                className="h-6 w-6 text-white cursor-pointer"
                onClick={handleCloseConfirmation}
              />
            </div>

            {/* Description */}
            <p className="text-[#AEB9E1] text-sm mb-6 leading-relaxed text-center">
              Confirm details! Once published changes cannot be made
            </p>

            {/* Buttons */}
            <div className="flex gap-3 justify-end">
              <button
                onClick={handleCloseConfirmation}
                className="bg-none border border-[#545A64] text-white px-6 py-2 rounded-full hover:bg-[#1A2332] transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleConfirmPublication}
                className="bg-none border border-[#545A64] hover:bg-[#1A8A96] text-white px-6 py-2 rounded-full transition-colors"
              >
                Confirm Publication
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditExamModal;
