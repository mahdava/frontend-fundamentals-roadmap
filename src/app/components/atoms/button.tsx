import { twMerge } from "tailwind-merge";
import type { MouseEvent, ReactNode } from "react";
import { focusClass } from "../../lib/focusClass";

export interface ButtonProps {
  children: ReactNode;
  isPinned: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  setRef: (node: HTMLButtonElement | null) => void;
}

export const Button = ({ children, isPinned, onClick, setRef }: ButtonProps) => {
  const className = twMerge(
    `cursor-pointer rounded-[18px] border bg-card p-4 text-left transition-colors duration-150 ease-out motion-reduce:transition-none hover:border-accent/45 hover:bg-accent-soft/40 ${focusClass}`,
    isPinned
      ? "border-accent/45 bg-accent-soft/40"
      : "border-card-border",
  );

  return (
    <button
      ref={setRef}
      type="button"
      aria-expanded={isPinned}
      aria-haspopup="true"
      aria-controls="topic-frame"
      className={className}
      onClick={onClick}
    >
      <span className="block">{children}</span>
    </button>
  );
};
