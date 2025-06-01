"use client"

const ExamHistoryTable = () => {
  const examHistoryData = [
    { id: 1, institution: "Institution's Name", title: "Examination Name", candidates: 23, date: "12th Dec, 2025", status: "Finished" },
    { id: 2, institution: "Institution's Name", title: "Examination Name", candidates: 23, date: "12th Dec, 2025", status: "Running" },
    { id: 3, institution: "Institution's Name", title: "Examination Name", candidates: 23, date: "12th Dec, 2025", status: "Running" },
    { id: 4, institution: "Institution's Name", title: "Examination Name", candidates: 23, date: "12th Dec, 2025", status: "Running" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse rounded-lg">
        <thead>
          <tr className="text-white bg-[#0f1f4b68] rounded-[1em]">
            <th className="p-4 text-left font-medium rounded-tl-[1.2em]">Institution</th>
            <th className="p-4 text-left font-medium">Title</th>
            <th className="p-4 text-left font-medium">Candidates</th>
            <th className="p-4 text-left font-medium">Date</th>
            <th className="p-4 text-left font-medium">Recordings</th>
            <th className="p-4 text-left font-medium rounded-tr-[1.2em]">Status</th>
          </tr>
        </thead>
        <tbody>
          {examHistoryData.map((exam) => (
            <tr
              key={exam.id}
              className="border-t border-[#343B4F] hover:bg-[#1A1F2E]/20 transition-colors"
            >
              <td className="p-4 text-white">{exam.institution}</td>
              <td className="p-4 text-white">{exam.title}</td>
              <td className="p-4 text-white">{exam.candidates}</td>
              <td className="p-4 text-white">{exam.date}</td>
              <td className="p-4">
                <button className="border-[#2D2E2D] border text-white px-4 py-2 rounded-full hover:bg-[#2A303E] transition-colors">
                  View
                </button>
              </td>
              <td className="p-4">
                <span className={`px-3 py-1 rounded-full ${exam.status === "Finished" ? "text-green-400" : "text-blue-400"}`}>
                  {exam.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamHistoryTable;