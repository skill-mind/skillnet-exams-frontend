import AnimationWrapper from "@/motion/Animation-wrapper";
import FeatureCard from "./Feature-card";

const Features = () => {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <AnimationWrapper variant="fadeIn">
          <h2 className="text-2xl font-bold mb-3 text-center">
            FEATURES
          </h2>
        </AnimationWrapper>

        <AnimationWrapper variant="fadeIn" delay={0.1}>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Everything you need to deliver secure exams, issue verifiable
            certificates, and simplify credential management—powered by
            blockchain, AI, and NFT technology.
          </p>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0">
          <FeatureCard
            title="Secure & Transparent Assessments"
            description="Blockchain-backed exam records."
            delay={0.2}
            rounded="rounded-tl-xl"
          />

          <FeatureCard
            title="AI-Powered Proctoring"
            description="Real-time monitoring for exam integrity."
            delay={0.3}
          />

          <FeatureCard
            title="NFT-based Certificates"
            description="Issuance of verifiable digital credentials."
            delay={0.4}
            rounded="rounded-tr-xl"
          />

          <FeatureCard
            title="Seamless Verification"
            description="Institutions and third parties can easily verify results."
            delay={0.5}
            rounded="rounded-bl-xl"
          />

          <FeatureCard
            title="No Traditional Exam Creation"
            description="Upload results without creating exams.."
            delay={0.6}
          />

          <FeatureCard
            title="Scalable Solution"
            description="For educators, students, and institutions of all sizes."
            delay={0.7}
            rounded="rounded-br-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
