import type { LucideIcon } from "lucide-react";

type Props = { icon: LucideIcon; title: string; description: string; index?: number };

export function ServiceCard({ icon: Icon, title, description, index }: Props) {
  return (
    <article className="group relative h-full border-t border-primary/15 pt-6 transition duration-300">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="inline-flex size-11 items-center justify-center border border-primary/15 text-secondary transition-colors duration-300 group-hover:border-bronze group-hover:bg-primary group-hover:text-bronze">
          <Icon className="size-5" aria-hidden strokeWidth={1.6} />
        </span>
        {typeof index === "number" && (
          <span className="type-display text-3xl text-primary/15 transition-colors group-hover:text-bronze/40">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
