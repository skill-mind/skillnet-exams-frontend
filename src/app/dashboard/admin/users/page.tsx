"use client";
import React, { useState } from "react";
import AdminDashboardLayout from "@/components/dashboard/admin/layout/admin-dashboard-layout";
import UserModal from "./components/UserModal";

const exams = [
  {
    user: "John Smith",
    email: "Johndoe@gmail.com",
    institution: "Institution's Name",
    lastActive: "12th Dec, 2025",
    examTaken: "8",
    status: "Inactive",
  },
  {
    user: "John Smith",
    email: "Johndoe@gmail.com",
    institution: "Institution's Name",
    lastActive: "12th Dec, 2025",
    examTaken: "8",
    status: "Active",
  },
  {
    user: "John Smith",
    email: "Johndoe@gmail.com",
    institution: "Institution's Name",
    lastActive: "12th Dec, 2025",
    examTaken: "8",
    status: "Inactive",
  },
  {
    user: "John Smith",
    email: "Johndoe@gmail.com",
    institution: "Institution's Name",
    lastActive: "12th Dec, 2025",
    examTaken: "8",
    status: "Inactive",
  },
  {
    user: "John Smith",
    email: "Johndoe@gmail.com",
    institution: "Institution's Name",
    lastActive: "12th Dec, 2025",
    examTaken: "8",
    status: "Active",
  },
  {
    user: "John Smith",
    email: "Johndoe@gmail.com",
    institution: "Institution's Name",
    lastActive: "12th Dec, 2025",
    examTaken: "8",
    status: "Active",
  },
  {
    user: "John Smith",
    email: "Johndoe@gmail.com",
    institution: "Institution's Name",
    lastActive: "12th Dec, 2025",
    examTaken: "8",
    status: "Inactive",
  },
  {
    user: "John Smith",
    email: "Johndoe@gmail.com",
    institution: "Institution's Name",
    lastActive: "12th Dec, 2025",
    examTaken: "8",
    status: "Inactive",
  },
  {
    user: "John Smith",
    email: "Johndoe@gmail.com",
    institution: "Institution's Name",
    lastActive: "12th Dec, 2025",
    examTaken: "8",
    status: "Active",
  },
];

function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <AdminDashboardLayout title="Users" activePage="Users">
      <p className="text-[#AEB9E1] -mt-6 mb-12 pl-1">
        View all registered users and their exam history
      </p>

      <div className="w-full overflow-x-auto sm:overflow-visible">
        <div className="inline-block min-w-[900px] sm:min-w-0 w-full bg-[#081028] rounded-lg shadow overflow-hidden border border-gray-700">
          <table className="w-full text-sm text-left text-[#FAFCFF]">
            <thead className="bg-[#0b1739] text-white uppercase text-xs">
              <tr>
                <th className="px-4 py-6 min-w-[160px]">User</th>
                <th className="px-4 py-6 min-w-[180px]">Email</th>
                <th className="px-4 py-6 min-w-[120px]">Institution</th>
                <th className="px-4 py-6 min-w-[120px]">Last Active</th>
                <th className="px-4 py-6 min-w-[110px]">Exam Taken</th>
                <th className="px-4 py-6 min-w-[90px]">Status</th>
                <th className="px-4 py-6 min-w-[50px]">...</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {exams.map((exam, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#0b1739] cursor-pointer"
                  onClick={handleRowClick}
                >
                  <td className="px-4 py-6">{exam.user}</td>
                  <td className="px-4 py-6">{exam.email}</td>
                  <td className="px-4 py-6">
                    <div className="truncate" title={exam.institution}>
                      {exam.institution}
                    </div>
                  </td>
                  <td className="px-4 py-6">{exam.lastActive}</td>
                  <td className="px-4 py-6">{exam.examTaken}</td>
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

      {isModalOpen && <UserModal onClose={closeModal} />}
    </AdminDashboardLayout>
  );
}

export default Users;
