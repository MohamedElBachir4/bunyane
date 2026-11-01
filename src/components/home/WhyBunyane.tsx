import { Gem, MonitorSmartphone, ScrollText, Sprout } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [MonitorSmartphone, Gem, ScrollText, Sprout];

export function WhyBunyane() {
  const t = useTranslations("why");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section aria-labelledby="why-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading id="why-title" eyebrow={t("eyebrow")} title={t("title")} align="center" />
        </Reveal>
        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal as="li" key={item.title} delay={0.07 * i} className="border-t border-primary/10 pt-6">
                <span className="mb-5 inline-flex size-11 items-center justify-center border border-bronze/40 text-bronze">
                  <Icon className="size-5" aria-hidden strokeWidth={1.6} />
                </span>
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
