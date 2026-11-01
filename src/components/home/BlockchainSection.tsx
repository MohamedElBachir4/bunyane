import { Eye, FileCode2, Layers, Link2, TriangleAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Layers, Link2, FileCode2, Eye];

export function BlockchainSection() {
  const t = useTranslations("blockchain");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section aria-labelledby="chain-title" className="bg-primary py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading id="chain-title" eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} invert />
        </Reveal>

        <Reveal delay={0.1}>
          <ol role="img" aria-label={t("chainLabel")} className="mt-14 grid gap-px bg-white/10 md:grid-cols-4">
            {items.map((item, i) => {
              const Icon = icons[i];
              return (
                <li key={item.title} className="bg-primary p-6 md:p-7">
                  <span className="mb-5 inline-flex size-10 items-center justify-center border border-white/15 text-bronze">
                    <Icon className="size-5" aria-hidden strokeWidth={1.6} />
                  </span>
                  <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-bronze/80">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <div className="mt-8 grid gap-px bg-white/10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full bg-white p-7 text-ink">
              <h3 className="type-display text-2xl text-primary">{t("plainTitle")}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{t("plain")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div role="note" className="flex h-full gap-4 bg-secondary p-7">
              <TriangleAlert className="mt-1 size-5 shrink-0 text-bronze" aria-hidden />
              <div>
                <h3 className="type-display text-2xl">{t("disclaimerTitle")}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">{t("disclaimer")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
