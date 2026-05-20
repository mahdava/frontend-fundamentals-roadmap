import { twMerge } from "tailwind-merge";
import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { focusClass } from "../../lib/focusClass";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: "card" | "secondary";
  isPinned?: boolean;
}

export const Button = ({ children, onClick, variant = "card", isPinned = false, className, ...props }: ButtonProps) => {
  const buttonClassName = twMerge(
    focusClass,
    variant === "card"
      ? [
          "cursor-pointer rounded-[18px] border bg-card p-4 text-left transition-colors duration-150 ease-out motion-reduce:transition-none hover:border-accent/45 hover:bg-accent-soft/40",
          isPinned ? "border-accent/45 bg-accent-soft/40" : "border-card-border",
        ]
      : "shrink-0 rounded-full border border-card-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/45 hover:text-foreground",
    className,
  );

  return (
    <button
      type="button"
      aria-expanded={variant === "card" ? isPinned : undefined}
      aria-haspopup={variant === "card" ? "dialog" : undefined}
      aria-controls={variant === "card" ? "topic-frame" : undefined}
      className={buttonClassName}
      onClick={onClick}
      {...props}
    >
      <span className="block">{children}</span>
    </button>
  );
};
