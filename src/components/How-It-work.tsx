import AnimationWrapper from "@/motion/Animation-wrapper";
import React from "react";
import ProcessStep from "./Process-step";

const HowItwork = () => {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <AnimationWrapper variant="fadeIn">
          <h2 className="text-2xl font-bold mb-5 text-center">
            HOW SKILLNET WORKS
          </h2>
        </AnimationWrapper>

        <AnimationWrapper variant="fadeIn" delay={0.1}>
          <p className="text-center text-lg max-w-3xl mx-auto mb-16">
            From exam creation or result upload to real-time proctoring and NFT
            certificate issuance, SkillNet makes the entire process seamless,
            secure, and verifiable.
          </p>
        </AnimationWrapper>

        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <div className="border-t border-[#343B4F] pb-5" />
            <ProcessStep
              title="Create Or Upload Exam Results"
              description="Institutions and educators can either create exams directly or upload existing results via our secure platform."
              icon="/landing/HowItwork1.svg"
              index={0}
            />
          </div>

          <ProcessStep
            title="AI Proctoring Ensures Integrity"
            description="Our advanced AI monitors exams in real-time to prevent cheating and ensure the integrity of all assessments."
            icon="/landing/HowItwork2.svg"
            index={1}
          />

          <ProcessStep
            title="Verify And Mint NFT Certificates"
            description="Once verified, certificates are minted as NFTs on the blockchain, creating permanent, tamper-proof credentials."
            icon="/landing/HowItwork3.svg"
            index={2}
          />

          <ProcessStep
            title="Instant & Easy Verification For Third Parties"
            description="Employers and institutions can instantly verify credentials with a simple scan or link, eliminating fraud."
            icon="/landing/HowItwork4.svg"
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItwork;
