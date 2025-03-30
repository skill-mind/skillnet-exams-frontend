"use client"
import { useState } from "react";
import { CustomModal } from "../dashboard/exam/components/ui/custom-modal";
import ExamDetailsModal from "./ExamDetailsModal";
import RegisteredExamsCard, { ExamCardData } from "./ExamsRegisteredCard";

// Mock Data Array
const MOCK_EXAM_DATA: ExamCardData[] = [
    {
        id: 1,
        title: 'WEB3 FUNDAMENTALS CERTIFICATION EXAM',
        description: 'The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate\'s understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on SkillNet, ensuring all results are securely stored on-chain for authenticity and tamper-proof verification.',
        date: '29th Feb, 2025',
        duration: '1hr',
        registeredCandidates: 120,
        certification: 'Yes on completion',
        passingScore: 75,
        format: 'Multichoice',
        topicsCovered: [
            'Blockchain Basics (Consensus mechanisms, Layer 1 vs. Layer 2, decentralization)',
            'Smart Contracts (Solidity fundamentals, contract security, gas optimization)',
            'DeFi & NFTs (Decentralized finance protocols, NFT standards, use cases)'
        ],
        whyTakeExam: [
            'Enhance Your Web3 Credentials With A Blockchain-Verified Certificate',
            'Prove Your Skills To Potential Employers And Blockchain Projects',
            'Gain Credibility In The Decentralized Space With Verifiable Results'
        ]
    },
    {
        id: 2,
        title: 'WEB3 FUNDAMENTALS CERTIFICATION EXAM',
        description: 'The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate\'s understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on SkillNet, ensuring all results are securely stored on-chain for authenticity and tamper-proof verification.',
        date: '29th Feb, 2025',
        duration: '1hr',
        registeredCandidates: 120,
        certification: 'Yes on completion',
        passingScore: 75,
        format: 'Multichoice 2',
        topicsCovered: [
            'Blockchain Basics (Consensus mechanisms, Layer 1 vs. Layer 2, decentralization)',
            'Smart Contracts (Solidity fundamentals, contract security, gas optimization)',
            'DeFi & NFTs (Decentralized finance protocols, NFT standards, use cases)'
        ],
        whyTakeExam: [
            'Enhance Your Web3 Credentials With A Blockchain-Verified Certificate',
            'Prove Your Skills To Potential Employers And Blockchain Projects',
            'Gain Credibility In The Decentralized Space With Verifiable Results'
        ]
    }
];

const ExamsRegisteredComponent: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
            {MOCK_EXAM_DATA.map(exam => (
                <RegisteredExamsCard
                    setOpen={setOpen}
                    key={exam.id}
                    exam={exam}
                />
            ))}

            <ExamDetailsModal open={open} setOpen={setOpen} />

        </div>
    );
};

export default ExamsRegisteredComponent;