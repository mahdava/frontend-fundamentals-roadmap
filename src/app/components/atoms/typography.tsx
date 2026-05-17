import { twMerge } from "tailwind-merge";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type TypographyVariant =
  | "display"
  | "headingLg"
  | "headingMd"
  | "headingSm"
  | "bodyLg"
  | "body"
  | "bodySm"
  | "caption"
  | "label"
  | "eyebrow";

export type TypographyTone = "default" | "muted" | "accent";

export interface TypographyOwnProps<T extends ElementType> {
  component?: T;
  children: ReactNode;
  className?: string;
  variant?: TypographyVariant;
  tone?: TypographyTone;
}

export type TypographyProps<T extends ElementType> = TypographyOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, "children" | "className">;

const variants: Record<TypographyVariant, string> = {
  display: "m-0 text-4xl font-semibold tracking-tight md:text-5xl",
  headingLg: "m-0 text-2xl font-semibold",
  headingMd: "m-0 text-xl font-semibold",
  headingSm: "m-0 text-lg font-semibold",
  bodyLg: "text-base",
  body: "text-sm",
  bodySm: "text-sm",
  caption: "text-xs",
  label: "text-sm font-medium",
  eyebrow: "text-xs font-bold uppercase tracking-wide",
};

const tones: Record<TypographyTone, string> = {
  default: "text-foreground",
  muted: "text-muted",
  accent: "text-accent",
};

export const Typography = <T extends ElementType = "p">({
  component,
  children,
  className = "",
  variant = "body",
  tone = "default",
  ...props
}: TypographyProps<T>) => {
  const Component = component ?? "p";

  return (
    <Component className={twMerge(variants[variant], tones[tone], className)} {...props}>
      {children}
    </Component>
  );
};
