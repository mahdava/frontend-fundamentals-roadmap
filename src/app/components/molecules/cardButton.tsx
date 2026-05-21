import { twMerge } from "tailwind-merge";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "../atoms/button";

export interface CardButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: ReactNode;
  isPinned?: boolean;
}

export const CardButton = ({ children, isPinned = false, className, ...props }: CardButtonProps) => {
  return (
    <Button
      className={twMerge(
        "relative cursor-pointer rounded-[18px] border bg-card p-4 text-left transition-colors duration-150 ease-out motion-reduce:transition-none hover:border-accent/45 hover:bg-accent-soft/40",
        isPinned ? "border-accent/45 bg-accent-soft/40" : "border-card-border",
        className,
      )}
      aria-expanded={isPinned}
      aria-haspopup="dialog"
      aria-controls="topic-frame"
      {...props}
    >
      <span className="block">{children}</span>
    </Button>
  );
};
