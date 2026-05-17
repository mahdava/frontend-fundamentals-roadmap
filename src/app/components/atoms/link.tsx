import { twMerge } from "tailwind-merge";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { focusClass } from "../../lib/focusClass";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <a
      className={twMerge("text-accent", focusClass, className)}
      {...props}
    >
      {children}
    </a>
  );
};
