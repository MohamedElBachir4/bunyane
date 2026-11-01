import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: "start" | "center";
  invert?: boolean;
};

export function SectionHeading({ id, eyebrow, title, subtitle, align = "start", invert }: Props) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-start";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
            align === "center" ? "" : ""
          } ${invert ? "text-bronze" : "text-bronze"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`type-display text-4xl leading-[1.1] tracking-tight sm:text-5xl ${
          invert ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${invert ? "text-white/75" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
