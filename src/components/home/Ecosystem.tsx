import Image from "next/image";
import { Building2, Network, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES, SECTION_IDS } from "@/lib/site";

export function Ecosystem() {
  const t = useTranslations("ecosystem");
  const nodes = [
    { icon: Users, title: t("investor.title"), description: t("investor.description") },
    { icon: Network, title: t("bunyane.title"), description: t("bunyane.description"), featured: true },
    { icon: Building2, title: t("developer.title"), description: t("developer.description") },
  ] as const;

  return (
    <section id={SECTION_IDS.opportunities} aria-labelledby="eco-title" className="relative overflow-hidden bg-soft py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 end-0 w-1/2 opacity-30">
        <Image src={IMAGES.skyline} alt="" fill sizes="50vw" className="object-cover grayscale" />
        <div className="absolute inset-0 bg-linear-to-l from-soft via-soft/80 to-soft rtl:bg-linear-to-r" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading id="eco-title" eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} align="center" />
        </Reveal>

        <Reveal delay={0.1}>
          <div role="img" aria-label={t("diagramLabel")} className="mt-16 grid gap-6 md:grid-cols-3">
            {nodes.map((node) => {
              const Icon = node.icon;
              const featured = "featured" in node && node.featured;
              return (
                <div
                  key={node.title}
                  className={`flex flex-col p-8 ${
                    featured ? "bg-primary text-white" : "border border-primary/10 bg-white"
                  }`}
                >
                  <span
                    className={`mb-6 inline-flex size-12 items-center justify-center ${
                      featured ? "bg-white/10 text-bronze" : "bg-soft text-secondary"
                    }`}
                  >
                    <Icon className="size-6" aria-hidden strokeWidth={1.5} />
                  </span>
                  <h3 className={`type-display text-2xl ${featured ? "text-white" : "text-primary"}`}>{node.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${featured ? "text-white/75" : "text-muted"}`}>{node.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <p className="mt-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {t("linkInvest")} · {t("linkPresent")}
        </p>
      </div>
    </section>
  );
}
