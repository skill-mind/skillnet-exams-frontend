"use client";

import AdminDashboardLayout from "@/components/dashboard/admin/layout/admin-dashboard-layout";

const exams = [
  {
    institution: "Institution's Name",
    title: "Examination Name",
    email: "Email address",
    candidate: "Candidate Name",
    date: "12th Dec, 2025",
    time: "09:00 AM",
    status: "Draft",
  },
  {
    institution: "Institute of Technology",
    title: "Engineering Entrance Exam",
    email: "info@git.edu",
    candidate: "John Doe",
    date: "12th Dec, 2025",
    time: "09:00 AM",
    status: "Draft",
  },
  {
    institution: "National School of Arts",
    title: "Art Portfolio Review",
    email: "contact@nsarts.edu",
    candidate: "Jane Smith",
    date: "12th Dec, 2025",
    time: "10:30 AM",
    status: "Published",
  },
  {
    institution: "Tech University",
    title: "Computer Science Aptitude Test",
    email: "admissions@techuniv.edu",
    candidate: "Alice Johnson",
    date: "12th Dec, 2025",
    time: "11:00 AM",
    status: "Published",
  },
  {
    institution: "City College",
    title: "Liberal Arts Entrance Exam",
    email: "info@citycollege.edu",
    candidate: "Bob Brown",
    date: "12th Dec, 2025",
    time: "01:00 PM",
    status: "Draft",
  },
  {
    institution: "Future Leaders Academy",
    title: "Leadership Assessment",
    email: "support@futureleaders.edu",
    candidate: "Carol White",
    date: "12th Dec, 2025",
    time: "02:30 PM",
    status: "Published",
  },
  {
    institution: "Science Institute",
    title: "Scientific Research Test",
    email: "admin@scienceinstitute.edu",
    candidate: "David Green",
    date: "12th Dec, 2025",
    time: "03:00 PM",
    status: "Published",
  },
  {
    institution: "Health Sciences University",
    title: "Medical Entrance Examination",
    email: "info@hsu.edu",
    candidate: "Emma Black",
    date: "12th Dec, 2025",
    time: "04:00 PM",
    status: "Published",
  },
  {
    institution: "Business School",
    title: "MBA Admission Test",
    email: "contact@businessschool.edu",
    candidate: "Frank Silver",
    date: "12th Dec, 2025",
    time: "05:30 PM",
    status: "Draft",
  },
];

function Registration() {
  return (
    <AdminDashboardLayout title="Exam Registration" activePage="Registration">
      <p className="text-[#AEB9E1] -mt-6 mb-12 pl-1">
        View all students registered for upcoming exams.
      </p>

      <div className="w-full overflow-x-auto sm:overflow-visible">
        <div className="inline-block min-w-[800px] sm:min-w-0 bg-[#081028] rounded-lg shadow overflow-hidden border border-gray-700">
          <table className="w-full text-sm text-left text-[#FAFCFF]">
            <thead className="bg-[#0b1739] text-white uppercase text-xs">
              <tr>
                <th className="px-4 py-6 min-w-[160px] sm:min-w-0">
                  Institution
                </th>
                <th className="px-4 py-6 min-w-[180px] sm:min-w-0">Title</th>
                <th className="px-4 py-6 min-w-[150px] sm:min-w-0">Email</th>
                <th className="px-4 py-6 min-w-[120px] sm:min-w-0">
                  Candidates
                </th>
                <th className="px-4 py-6 min-w-[110px] sm:min-w-0">
                  Exam Date
                </th>
                <th className="px-4 py-6 min-w-[100px] sm:min-w-0">
                  Start Time
                </th>
                <th className="px-4 py-6 min-w-[90px] sm:min-w-0">Status</th>
                <th className="px-4 py-6 min-w-[50px] sm:min-w-0">...</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {exams.map((exam, index) => (
                <tr key={index} className="hover:bg-[#0b1739]">
                  <td className="px-4 py-6 min-w-[160px] sm:min-w-0">
                    {exam.institution}
                  </td>
                  <td className="px-4 py-6 min-w-[180px] sm:min-w-0">
                    <div className="truncate" title={exam.title}>
                      {exam.title}
                    </div>
                  </td>
                  <td className="px-4 py-6 min-w-[150px] sm:min-w-0">
                    <div className="truncate" title={exam.email}>
                      {exam.email}
                    </div>
                  </td>
                  <td className="px-4 py-6 min-w-[120px] sm:min-w-0">
                    {exam.candidate}
                  </td>
                  <td className="px-4 py-6 min-w-[110px] sm:min-w-0">
                    {exam.date}
                  </td>
                  <td className="px-4 py-6 min-w-[100px] sm:min-w-0">
                    {exam.time}
                  </td>
                  <td className="px-4 py-6 min-w-[90px] sm:min-w-0">
                    {exam.status}
                  </td>
                  <td className="px-4 py-6 min-w-[50px] sm:min-w-0">...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-2 text-xs text-[#AEB9E1] opacity-75 sm:hidden">
        ← Scroll horizontally to view more columns →
      </div>
    </AdminDashboardLayout>
  );
}

export default Registration;
