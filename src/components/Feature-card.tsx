import AnimationWrapper from "@/motion/Animation-wrapper";
import type { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  delay?: number;
  rounded?: string;
}

export default function FeatureCard({
  title,
  description,
  delay = 0,
  rounded
}: FeatureCardProps) {
  return (
    <AnimationWrapper
      variant="scale"
      delay={delay}
      className={`border border-[#343B4F] bg-[#081028] p-8 h-full ${rounded}`}
    >
     
      <h3 className="text-lg font-semibold text-white mb-8">{title}</h3>
      <p className="text-[#AEB9E1] text-sm">{description}</p>
    </AnimationWrapper>
  );
}
