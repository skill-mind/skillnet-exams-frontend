import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border border-[#313130] mb-8 rounded-lg bg-background ">
      <div className="container flex flex-col items-center justify-between gap-4  space-y-6 w-full py-4 md:py-6 lg:py-8">
        <div className="flex justify-between items-center gap-4  md:gap-6 w-full px-6">
          <Link
            href="/dashboard/institution/exams"
            className="text-xl font-normal"
          >
            SKILLNET
          </Link>
          <Link href="/exam-hub">Exam Hub</Link>
        </div>
        <div className="bg-[#313130] h-0.5 w-full" />
        <div className="flex justify-between items-center w-full px-6">
          {" "}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://X.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Image
                src="/svg/x-icon.svg"
                width={20}
                height={20}
                className="h-5 w-5"
                alt="X "
              />

              <span className="sr-only">X</span>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 text-center text-base font-normal text-muted-foreground md:flex-row md:gap-6 md:text-right">
            <span>© Copyright SkillNet {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
