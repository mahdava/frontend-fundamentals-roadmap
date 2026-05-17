import { twMerge } from "tailwind-merge";

const toneClassNames: Record<number, string> = {
  1: "bg-stage-1 text-white",
  2: "bg-stage-2 text-black",
  3: "bg-stage-3 text-white",
  4: "bg-stage-4 text-white",
  5: "bg-stage-5 text-white",
  6: "bg-stage-6 text-white",
  7: "bg-stage-7 text-white",
};

export interface BadgeProps {
  label: string;
  tone: number;
}

export const Badge = ({ label, tone }: BadgeProps) => {
  const className = twMerge(
    "inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
    toneClassNames[tone],
  );

  return <span className={className}>{label}</span>;
};
