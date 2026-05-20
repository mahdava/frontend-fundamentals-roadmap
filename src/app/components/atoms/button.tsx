import { twMerge } from "tailwind-merge";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { focusClass } from "../../lib/focusClass";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, type = "button", className, ...props }: ButtonProps) => {
  return (
    <button type={type} className={twMerge(focusClass, className)} {...props}>
      {children}
    </button>
  );
};
