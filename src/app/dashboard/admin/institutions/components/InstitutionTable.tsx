type Props = {
  onRowClick: (institution: any) => void;
};

export default function InstitutionTable({ onRowClick }: Props) {
  const exams = [
    {
      institution: "Institution's Name",
      email: "johnsmith@gmail.com",
      activeExams: "12th Dec, 2025",
      examCreated: 8,
      status: "Inactive",
    },
    {
      institution: "Greenwood Academy",
      email: "admin@greenwood.edu",
      activeExams: "5 Jan, 2026",
      examCreated: 15,
      status: "Active",
    },
    {
      institution: "Riverdale High",
      email: "contact@riverdalehigh.com",
      activeExams: "20th Feb, 2026",
      examCreated: 10,
      status: "Active",
    },
    {
      institution: "Blue Sky Edu",
      email: "info@bluesky.edu",
      activeExams: "15th Mar, 2026",
      examCreated: 12,
      status: "Inactive",
    },
    {
      institution: "Sunset College",
      email: "support@sunsetcollege.edu",
      activeExams: "10th Apr, 2026",
      examCreated: 20,
      status: "Active",
    },
    {
      institution: "Maple Leaf School",
      email: "admin@mapleleaf.com",
      activeExams: "25th May, 2026",
      examCreated: 25,
      status: "Inactive",
    },
    {
      institution: "Pine Valley Academy",
      email: "info@pinevalley.edu",
      activeExams: "30th Jun, 2026",
      examCreated: 18,
      status: "Active",
    },
    {
      institution: "Oak Ridge Institute",
      email: "contact@oakridge.edu",
      activeExams: "21st Jul, 2026",
      examCreated: 22,
      status: "Active",
    },
    {
      institution: "Cedar Creek School",
      email: "contact@cedarcreek.com",
      activeExams: "18th Aug, 2026",
      examCreated: 18,
      status: "Inactive",
    },
  ];

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[800px] bg-[#081028] rounded-lg shadow overflow-hidden border border-gray-700">
          <table className="w-full text-sm text-left text-[#FAFCFF]">
            <thead className="bg-[#0b1739] text-white uppercase text-xs">
              <tr>
                <th className="px-4 py-6">Institution</th>
                <th className="px-4 py-6">Email</th>
                <th className="px-4 py-6">Active Exams</th>
                <th className="px-4 py-6">Exam Created</th>
                <th className="px-4 py-6">Status</th>
                <th className="px-4 py-6">...</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {exams.map((exam, index) => (
                <tr key={index} className="hover:bg-[#0b1739]" onClick={() => onRowClick(exam)}>
                  <td className="px-4 py-6">{exam.institution}</td>
                  <td className="px-4 py-6">
                    <div className="truncate" title={exam.email}>
                      {exam.email}
                    </div>
                  </td>
                  <td className="px-4 py-6">{exam.activeExams}</td>
                  <td className="px-4 py-6">{exam.examCreated}</td>
                  <td className="px-4 py-6">{exam.status}</td>
                  <td className="px-4 py-6">...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-2 text-xs text-[#AEB9E1] opacity-75 sm:hidden">
        ← Scroll horizontally to view more columns →
      </div>
    </>
    //
  );
}
