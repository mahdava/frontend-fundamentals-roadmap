import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { focusClass } from "../../lib/focusClass";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, type = "button", className, ...props }, ref) => {
  return (
    <button ref={ref} type={type} className={twMerge("cursor-pointer", focusClass, className)} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
