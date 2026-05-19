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
    `relative rounded-card border bg-card p-4 text-left transition duration-150 ease-out motion-reduce:transition-none hover:-translate-y-px hover:border-accent hover:shadow-card motion-reduce:hover:translate-y-0 ${focusClass}`,
    isPinned
      ? "border-accent bg-accent-soft shadow-card"
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
      {children}
    </button>
  );
};
