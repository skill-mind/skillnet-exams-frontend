import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border border-[#313130] mb-8 rounded-lg bg-background px-6">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row md:py-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link
            href="/dashboard/institution/exams"
            className="text-xl font-normal"
          >
            SKILLNET
          </Link>
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
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 text-center text-base font-normal text-muted-foreground md:flex-row md:gap-6 md:text-right">
          <span>© Copyright SkillNet {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
