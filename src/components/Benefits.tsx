import AnimationWrapper from "@/motion/Animation-wrapper";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        <AnimationWrapper variant="fadeIn">
          <h2 className="text-2xl font-bold mb-20 text-center text-gray-200">
            THE FUTURE OF CREDENTIALING
          </h2>
        </AnimationWrapper>

        <div className="relative max-w-6xl mx-auto">
          {/* SVG Connecting Lines */}
          <div className="absolute inset-0 z-0 shadow-curve">
            <AnimationWrapper variant="fadeIn" delay={0.2}>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1200 600"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Top Left to Center */}
                <path
                  d="M350,200 C500,230 550,270 600,300"
                  stroke="#1a1f3a"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Top Right to Center */}
                <path
                  d="M850,200 C700,230 650,270 600,300"
                  stroke="#1a1f3a"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Bottom Left to Center */}
                <path
                  d="M350,400 C500,370 550,330 600,300"
                  stroke="#1a1f3a"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Bottom Right to Center */}
                <path
                  d="M850,400 C700,370 650,330 600,300"
                  stroke="#1a1f3a"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </AnimationWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-32 relative">
            {/* Top Left Box */}
            <AnimationWrapper variant="slideRight" delay={0.3}>
              <div className="bg-[#081028] border border-[#343B4F] rounded-xl p-8 text-left h-full shadow-lg">
                <h3 className="text-lg font-medium mb-4">For Institutions</h3>
                <ul className="space-y-3 ml-4 text-sm text-[#AEB9E1]">
                  <li className="flex items-start gap-3 ">
                    <span className=" mt-1">•</span>
                    <span className="">Eliminate Fraud</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className=" mt-1">•</span>
                    <span className="">Reduce Administrative Burden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span className="">Gain Trust</span>
                  </li>
                </ul>
              </div>
            </AnimationWrapper>

            {/* Top Right Box */}
            <AnimationWrapper
              variant="slideLeft"
              delay={0.3}
              className="md:col-start-3"
            >
              <div className="bg-[#081028] border border-[#343B4F] rounded-xl p-8 text-left h-full shadow-lg">
                <h3 className="text-lg font-semibold mb-4 ">For Educators</h3>
                <ul className="space-y-3 ml-4 text-sm text-[#AEB9E1]">
                  <li className="flex items-start gap-3">
                    <span className=" mt-1">•</span>
                    <span className="">Simplified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className=" mt-1">•</span>
                    <span className="">Trustworthy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className=" mt-1">•</span>
                    <span className="">Verifiable Assessments</span>
                  </li>
                </ul>
              </div>
            </AnimationWrapper>

            {/* Center Circle - Positioned in the grid properly */}
            <div className="md:col-start-2 md:row-start-1 md:row-span-2  flex items-center justify-center z-10">
              <AnimationWrapper variant="scale" delay={0.1}>
                <div className="w-64 h-64 rounded-full bg-[#081028] border border-[#343B4F] shadow-circle flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-center px-4 text-white">
                    Key Benefits Of Skillnet
                  </h3>
                </div>
              </AnimationWrapper>
            </div>

            {/* Bottom Left Box */}
            <AnimationWrapper
              variant="slideRight"
              delay={0.4}
              className="md:row-start-2"
            >
              <div className="bg-[#081028] border border-[#343B4F] rounded-xl p-8 text-left h-full shadow-lg">
                <h3 className="text-lg font-semibold mb-4">For Employers</h3>
                <ul className="space-y-3 ml-4 text-sm text-[#AEB9E1]">
                  <li className="flex items-start gap-3">
                    <span className=" mt-1">•</span>
                    <span className="">Fast And Secure Verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className=" mt-1">•</span>
                    <span className="">Academic Records</span>
                  </li>
                </ul>
              </div>
            </AnimationWrapper>

            {/* Bottom Right Box */}
            <AnimationWrapper
              variant="slideLeft"
              delay={0.4}
              className="md:col-start-3 md:row-start-2"
            >
              <div className="bg-[#081028] border border-[#343B4F] rounded-xl p-8 text-left h-full shadow-lg">
                <h3 className="text-lg font-semibold mb-4 ">For Students</h3>
                <ul className="space-y-3 ml-4 text-sm text-[#AEB9E1]">
                  <li className="flex items-start gap-3">
                    <span className=" mt-1">•</span>
                    <span className="">Control Over Credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className=" mt-1">•</span>
                    <span className="">Lifelong Verification Access</span>
                  </li>
                </ul>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
