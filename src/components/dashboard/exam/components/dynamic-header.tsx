"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

interface HeaderConfig {
  title: string;
  imageSrc: string;
}

export default function DynamicHeader() {
  const pathname = usePathname();

  // Define header content based on current path
  const getHeaderConfig = (): HeaderConfig => {
    if (pathname.includes("/registered")) {
      return {
        title: "Registered examinations",
        imageSrc: "/images/exam-feed.png",
      };
    } else if (pathname.includes("/results")) {
      return {
        title: "Examination results",
        imageSrc: "/skillnet-white logo.png",
      };
    } else {
      // Default to exams
      return {
        title: "Ongoing examinations",
        imageSrc: "/images/exam-feed.png",
      };
    }
  };

  const config = getHeaderConfig();

  return (
    <div className="relative h-56 w-full  rounded-lg">
      <Image
        src={config.imageSrc || "/placeholder.svg"}
        alt={config.title}
        fill
        className="object-cover object-bottom brightness-75 rounded-lg"
      />

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-end p-5">
        <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          {config.title}
        </h1>
      </div>
    </div>
  );
}
