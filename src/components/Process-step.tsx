import AnimationWrapper from "@/motion/Animation-wrapper";
import Image from "next/image";

interface ProcessStepProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function ProcessStep({
  title,
  description,
  icon,
  index,
}: ProcessStepProps) {
  return (
    <AnimationWrapper
      variant="slideUp"
      delay={index * 0.2}
      className="flex items-center gap-6 border-b border-[#343B4F] pb-5 pr-6"
    >
      <div className="flex items-center justify-center">
        <Image
          src={icon || "/placeholder.svg"}
          alt={title}
          width={100}
          height={100}
        />
      </div>
      <div>
        <h3 className="text-lg mb-2">{title}</h3>
        <p className="text-sm text-[#AEB9E1]">{description}</p>
      </div>
    </AnimationWrapper>
  );
}
