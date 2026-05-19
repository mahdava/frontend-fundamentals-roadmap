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
    `rounded-[18px] border bg-card p-4 text-left transition-colors duration-150 ease-out motion-reduce:transition-none hover:border-accent/45 hover:bg-accent-soft/40 ${focusClass}`,
    isPinned
      ? "border-accent/70 bg-accent-soft"
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
      <span className="block">{children}</span>
    </button>
  );
};
