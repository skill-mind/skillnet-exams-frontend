import AnimationWrapper from "@/motion/Animation-wrapper";

const FAQ = () => {
  return (
    <section id="faqs" className="py-16 mt-20">
      <div className="container mx-auto px-4">
        <AnimationWrapper variant="fadeIn">
          <h2 className="text-2xl font-bold mb-6 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </AnimationWrapper>

        <AnimationWrapper variant="fadeIn" delay={0.1}>
          <p className=" text-center max-w-3xl mx-auto mb-12">
            Quick answers to questions you might have about SkillNet. Can't find
            what you are looking for? Contact us.
          </p>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-20">
          <AnimationWrapper variant="slideRight" delay={0.2}>
            <div className="mb-5">
              <h3 className="text-lg font-semibold mb-4">
                What Makes SkillNet Different?
              </h3>
              <p className="text-[#AEB9E1] text-sm leading-[32px]">
                SkillNet uses blockchain technology, AI proctoring, and NFT
                certificates to ensure the credentialing process is secure,
                transparent, and verifiable.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper variant="slideLeft" delay={0.2}>
            <div className="mb-5">
              <h3 className="text-lg font-semibold mb-4">
                Do I Need To Create Exams On SkillNet To Use It?
              </h3>
              <p className="text-[#AEB9E1] text-sm leading-[32px]">
                No, SkillNet allows institutions to upload existing exam results
                for NFT certification, without the need for creating new exams.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper variant="slideRight" delay={0.3}>
            <div className="mb-5">
              <h3 className="text-lg font-semibold mb-4">
                How Does SkillNet Ensure Exam Integrity?
              </h3>
              <p className="text-[#AEB9E1] text-sm leading-[32px]">
                SkillNet uses AI-powered proctoring to monitor candidates during
                assessments, detecting and flagging suspicious behavior in
                real-time to ensure integrity.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper variant="slideLeft" delay={0.3}>
            <div className="mb-5">
              <h3 className="text-lg font-semibold mb-4">
                What Is An NFT Certificate And Why Is It Important?
              </h3>
              <p className="text-[#AEB9E1] text-sm leading-[32px]">
                An NFT certificate is a tamper-proof digital credential stored
                on the blockchain that provides students with lifelong access to
                their achievements and allows employers to verify authenticity
                instantly.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper variant="slideRight" delay={0.4}>
            <div className="mb-5">
              <h3 className="text-lg font-semibold mb-4">
                Who Can Use SkillNet?
              </h3>
              <p className="text-[#AEB9E1] text-sm leading-[32px]">
                SkillNet is designed for educators, students, employers, and
                third-party verifiers. It has solutions for learning bodies
                offering courses to students, institutions issuing credentials,
                and employers verifying them.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper variant="slideLeft" delay={0.4}>
            <div className="mb-5">
              <h3 className="text-lg font-semibold mb-4">
                Is SkillNet Compliant With Data Privacy Regulations?
              </h3>
              <p className="text-[#AEB9E1] text-sm leading-[32px]">
                Yes, SkillNet is built with data privacy and security in mind,
                ensuring compliance with relevant data privacy regulations and
                best practices in handling academic records.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
