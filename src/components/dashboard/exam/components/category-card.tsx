"use client";

interface CategoryCardProps {
  title: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryCard({
  title,
  count,
  isActive,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`block h-full min-w-fit ${
        isActive ? "border-[#d9f99d]" : "border-zinc-800"
      }`}
    >
      <div
        className={`h-full overflow-hidden px-6 py-4 text-left rounded-lg border ${
          isActive
            ? "border-[#d9f99d] bg-zinc-800/70"
            : "border-zinc-800 bg-zinc-900/50"
        } transition-all hover:bg-zinc-800`}
      >
        <h3 className="font-bold text-xl text-[#EAEDE7] whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h3>

        <div className="text-[#898783] font-normal text-sm">
          {count} ongoing exams
        </div>
      </div>
    </button>
  );
}
