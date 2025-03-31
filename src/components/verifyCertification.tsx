import { useState } from "react";
import InputField from "./ui/input";

export default function VerifyCertification() {
  const [formData, setFormData] = useState({
    certificationLabel: "",
    certificateTitle: "",
    candidateName: "",
    institutionName: "",
    examName: "",
    certificateId: "",
    dateOfIssuance: "",
    gradingType: "",
    finalScore: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    setFormData({
      certificationLabel: "",
      certificateTitle: "",
      candidateName: "",
      institutionName: "",
      examName: "",
      certificateId: "",
      dateOfIssuance: "",
      gradingType: "",
      finalScore: "",
    });
  };

  return (
    <section className="flex flex-col mt-[20px]">
      <InputField
        label="Certification Label"
        width="max-w-[610px]"
        name="certificationLabel"
        value={formData.certificationLabel}
        onChange={handleChange}
      />

      <div className="max-w-[752px] flex flex-col gap-[12px] w-full mt-[20px]">
        <InputField
          type="text"
          label="Certificate Title"
          placeholder="#"
          name="certificateTitle"
          value={formData.certificateTitle}
          onChange={handleChange}
        />
        <InputField
          type="text"
          label="Candidate Name"
          placeholder="#"
          name="candidateName"
          value={formData.candidateName}
          onChange={handleChange}
        />
        <InputField
          type="text"
          label="Institution Name"
          placeholder="#"
          name="institutionName"
          value={formData.institutionName}
          onChange={handleChange}
        />
        <InputField
          type="text"
          label="Exam Name"
          placeholder="#"
          name="examName"
          value={formData.examName}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <InputField
            type="text"
            label="Certificate ID"
            placeholder="#"
            name="certificateId"
            value={formData.certificateId}
            onChange={handleChange}
          />
          <InputField
            type="text"
            label="Date of Issuance"
            placeholder="Auto"
            name="dateOfIssuance"
            value={formData.dateOfIssuance}
            onChange={handleChange}
          />
          <InputField
            type="text"
            label="Grading Type"
            placeholder="#"
            name="gradingType"
            value={formData.gradingType}
            onChange={handleChange}
          />
          <InputField
            type="text"
            label="Final Score"
            placeholder="Auto"
            name="finalScore"
            value={formData.finalScore}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="mt-5 w-fit border border-[#252625] hover:border-[#6e6e6e] bg-transparent text-[#252625] hover:text-[#6e6e6e] py-2 px-4 rounded-md">
          Submit 
        </button>
      </div>
    </section>
  );
}
