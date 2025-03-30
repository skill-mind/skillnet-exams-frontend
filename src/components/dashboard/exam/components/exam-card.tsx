"use client";

interface ExamCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  registeredCandidates: number;
  certification: string;
  passingScore: string;
  format: string;
  topics: string[];
  purpose: string[];
  categories: string[];
  onRegister: () => void;
}

export default function ExamCard({
  id,
  title,
  description,
  date,
  duration,
  registeredCandidates,
  certification,
  passingScore,
  format,
  topics,
  purpose,
  categories,
  onRegister,
}: ExamCardProps) {
  const details = [
    { label: "DATE", value: date },
    { label: "DURATION", value: duration },
    { label: "REGISTERED CANDIDATES", value: registeredCandidates },
    { label: "CERTIFICATION", value: certification },
    { label: "PASSING SCORE", value: passingScore },
    { label: "FORMAT", value: format },
  ];

  return (
    <div className="h-full overflow-hidden flex flex-col rounded-lg border border-zinc-800 dark:bg-gradient-to-b from-white to-white dark:from-gray-900 dark:to-gray-900 gap-y-6 p-6">
      <div className="flex-grow space-y-6">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-xs font-medium">{description}</p>
        <div className="h-0.5 bg-[#252625]" />
        <div className="grid grid-cols-1 gap-y-3 text-sm">
          {details.map((detail, index) => (
            <div
              key={index}
              className="flex items-center gap-x-1 text-xs font-medium"
            >
              <p className="text-[#6E6E6E]">{detail.label}:</p>
              <p className="">{detail.value}</p>
            </div>
          ))}
        </div>
        <div className="h-0.5 bg-[#252625]" />
        <div>
          <p className="text-xs text-[#6E6E6E] pb-2.5">TOPICS COVERED:</p>
          <ul className="ml-3 list-disc text-xs space-y-2">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs text-[#6E6E6E] pb-2.5">WHY TAKE THIS EXAM?:</p>
          <ul className="ml-3 list-disc text-xs space-y-2">
            {purpose.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-300"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
      <button
        className="w-full mt-auto rounded-md border dark:border-[#d9f99d] hover:bg-gray-200 border-black/40px-4 py-2 font-medium transition-colors dark:hover:bg-zinc-900 focus:outline-none"
        onClick={onRegister}
      >
        REGISTER
      </button>
    </div>
  );
}
