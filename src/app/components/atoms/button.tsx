import { twMerge } from "tailwind-merge";
import type { FocusEventHandler, MouseEvent, ReactNode } from "react";
import { focusClass } from "../../lib/focusClass";

export interface ButtonProps {
  children: ReactNode;
  isPinned: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: FocusEventHandler<HTMLButtonElement>;
  onBlur: FocusEventHandler<HTMLButtonElement>;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  setRef: (node: HTMLButtonElement | null) => void;
}

export const Button = ({
  children,
  isPinned,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onClick,
  setRef,
}: ButtonProps) => {
  const className = twMerge(
    `group relative overflow-hidden rounded-[18px] border bg-card p-4 text-left transition duration-150 ease-out motion-reduce:transition-none hover:-translate-y-px hover:border-accent/50 hover:shadow-card motion-reduce:hover:translate-y-0 ${focusClass}`,
    isPinned
      ? "border-accent/70 bg-accent-soft shadow-card ring-1 ring-accent/15"
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
    >
      <span
        aria-hidden="true"
        className={twMerge(
          "pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-accent/0 via-accent/45 to-accent/0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100",
          isPinned && "opacity-100",
        )}
      />
      <span className="relative block">{children}</span>
    </button>
  );
};
