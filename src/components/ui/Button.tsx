import { Link } from "@/i18n/navigation";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light" | "bronze";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-secondary",
  secondary: "border border-primary/20 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-white",
  ghost: "text-primary hover:bg-soft",
  light: "bg-white text-primary hover:bg-white/90",
  bronze: "bg-bronze text-primary hover:brightness-110",
};

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function Button({ variant = "primary", className = "", children, ...rest }: Props) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
