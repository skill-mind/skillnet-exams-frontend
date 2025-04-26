import AnimationWrapper from "@/motion/Animation-wrapper";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <AnimationWrapper variant="fadeIn">
      <footer className="md:container mx-4 md:mx-auto rounded-[12px] border border-[#343B4F] mb-3 ">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 px-5">
          <AnimationWrapper variant="slideRight">
            <div className="mb-4 md:mb-0">
              <Image
                src="/landing/SkillNetLogo.svg"
                alt="SkillNet"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
          </AnimationWrapper>

          <AnimationWrapper variant="slideUp" delay={0.1}>
            <div className="flex space-x-4 mb-4 md:mb-0 text-sm">
              <Link
                href="#features"
                className="text-[#AEB9E1] hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-[#AEB9E1] hover:text-white transition-colors"
              >
                How it Works
              </Link>
              <Link
                href="#benefits"
                className="text-[#AEB9E1] hover:text-white transition-colors"
              >
                Benefits
              </Link>
              <Link
                href="#faqs"
                className="text-[#AEB9E1] hover:text-white transition-colors"
              >
                FAQs
              </Link>
            </div>
          </AnimationWrapper>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t py-4 px-5 border-gray-800">
          <AnimationWrapper variant="slideLeft" delay={0.2}>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link
                href="#"
                className="text-[#FDFDFD] hover:text-white transition-colors"
              >
                <Image
                  src={"/landing/github.svg"}
                  alt="github"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="#"
                className="text-[#FDFDFD] hover:text-white transition-colors"
              >
                <Image
                  src={"/landing/twitter.svg"}
                  alt="twitter"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </AnimationWrapper>
          <AnimationWrapper variant="fadeIn" delay={0.3}>
            <div className="text-sm">&copy; Copyright SkillNet {year}</div>
          </AnimationWrapper>
        </div>
      </footer>
    </AnimationWrapper>
  );
};

export default Footer;
