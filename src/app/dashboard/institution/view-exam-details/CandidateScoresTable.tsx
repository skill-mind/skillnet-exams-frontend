"use client"
import CertificateModal from '@/components/dashboard/user/certificate-modal'
import { useState } from 'react'

// Define the type for candidate data
interface Candidate {
  id: number;
  name: string;
  examTitle: string;
  score: string;
  date: string;
}

const CandidateScoresTable = () => {
  // State to track if modal is open and which candidate's certificate to show
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)
  
  const candidatesData: Candidate[] = [
    { id: 1, name: "Candidate's Name", examTitle: "Examination Name", score: "82/100", date: "12th Dec, 2025" },
    { id: 2, name: "Candidate's Name", examTitle: "Examination Name", score: "82/100", date: "12th Dec, 2025" },
    { id: 3, name: "Candidate's Name", examTitle: "Examination Name", score: "82/100", date: "12th Dec, 2025" },
    { id: 4, name: "Candidate's Name", examTitle: "Examination Name", score: "82/100", date: "12th Dec, 2025" },
    { id: 5, name: "Candidate's Name", examTitle: "Examination Name", score: "82/100", date: "12th Dec, 2025" },
    { id: 6, name: "Candidate's Name", examTitle: "Examination Name", score: "82/100", date: "12th Dec, 2025" },
    { id: 7, name: "Candidate's Name", examTitle: "Examination Name", score: "82/100", date: "12th Dec, 2025" },
    { id: 8, name: "Candidate's Name", examTitle: "Examination Name", score: "82/100", date: "12th Dec, 2025" },
    { id: 9, name: "Candidate's Name", examTitle: "Examination Name", score: "82/100", date: "12th Dec, 2025" },
    { id: 10, name: "Candidate's Name", examTitle: "Examination Name", score: "82/100", date: "12th Dec, 2025" },
  ];
  
  const openModal = (candidate: Candidate) => {
    setSelectedCandidate(candidate)
    setIsModalOpen(true)
  }
  
  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCandidate(null)
  }
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse rounded-lg">
        <thead className="">
          <tr className="text-white bg-[#0f1f4b68] rounded-[1em]">
            <th className="p-4 text-left font-medium rounded-tl-[1.2em]">Candidates</th>
            <th className="p-4 text-left font-medium">Title</th>
            <th className="p-4 text-left font-medium">Certification</th>
            <th className="p-4 text-left font-medium">Scores</th>
            <th className="p-4 text-left font-medium rounded-tr-[1.2em]">Date</th>
          </tr>
        </thead>
        <tbody>
          {candidatesData.map((candidate) => (
            <tr
              key={candidate.id}
              className="border-t border-[#343B4F] hover:bg-[#1A1F2E]/20 transition-colors"
            >
              <td className="p-4 text-white">{candidate.name}</td>
              <td className="p-4 text-white">{candidate.examTitle}</td>
              <td className="p-4">
                <button
                  className="border-[#2D2E2D] border text-white px-4 py-2 rounded-full hover:bg-[#2A303E] transition-colors"
                  onClick={() => openModal(candidate)}
                >
                  View
                </button>
              </td>
              <td className="p-4 text-white">{candidate.score}</td>
              <td className="p-4 text-white">{candidate.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <CertificateModal
        isOpen={isModalOpen}
        onClose={closeModal}
        candidateData={{
          examTitle: selectedCandidate?.examTitle,
          score: selectedCandidate?.score,
          date: selectedCandidate?.date,
          candidateName: selectedCandidate?.name
        }}
      />
    </div>
  );
};

export default CandidateScoresTable;