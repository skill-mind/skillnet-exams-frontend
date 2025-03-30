"use client";

import React, { useState } from "react";

const VerifiedCandidates: React.FC = () => {
  const [verifyAddress, setVerifyAddress] = useState<string>("#");

  return (
    <div className="mt-10 pr-5">
      <label className="block font-medium text-[#9596A0]">Enter Address</label>
      <input
        type="text"
        value={verifyAddress}
        onChange={(e) => setVerifyAddress(e.target.value)}
        placeholder="#"
        className="w-full mt-2 p-3 border-[#252625] border-2 rounded-xl bg-transparent outline-none"
      />
    </div>
  );
};

export default VerifiedCandidates;

