import { Blocks, Landmark, ShieldCheck, TrendingUp, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SECTION_IDS } from "@/lib/site";

const icons = [TrendingUp, Landmark, Blocks, Wallet, ShieldCheck];

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id={SECTION_IDS.services} aria-labelledby="services-title" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading id="services-title" eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
        </Reveal>
        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={0.05 * i} className={i === 4 ? "lg:col-span-1 sm:col-span-2 lg:col-start-2" : ""}>
              <ServiceCard icon={icons[i]} title={item.title} description={item.description} index={i + 1} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
