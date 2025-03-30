"use client";

import React from "react";
import CandidateTable from "./CandidateTable";
import { ICandidates as Candidate } from "./CandidateTable";

const pastCandidates: Candidate[] = [
  {
    sn: 1,
    address: "Web3 Test",
    date: "12th Dec, 2025",
    certification: "View",
    status: "Eligible",
  },
  {
    sn: 2,
    address: "Web3 Test",
    date: "12th Dec, 2025",
    certification: "View",
    status: "Unverified",
  },
];

const PastCandidates: React.FC = () => {
  return <CandidateTable candidates={pastCandidates} />;
};

export default PastCandidates;
