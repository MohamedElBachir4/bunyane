import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES, SECTION_IDS } from "@/lib/site";

export function HowItWorks() {
  const t = useTranslations("how");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section id={SECTION_IDS.how} aria-labelledby="how-title" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading id="how-title" eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
          </Reveal>
          <Reveal delay={0.1} className="relative mt-10 hidden aspect-[4/5] overflow-hidden lg:block">
            <Image src={IMAGES.interior} alt="" fill loading="lazy" sizes="40vw" className="object-cover" aria-hidden />
          </Reveal>
        </div>

        <ol className="space-y-0 lg:col-span-7">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={0.08 * i} className="grid grid-cols-[auto_1fr] gap-5 border-t border-primary/10 py-8 last:border-b lg:gap-8">
              <span className="type-display text-5xl leading-none text-bronze/80 sm:text-6xl">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-semibold text-primary sm:text-2xl">{s.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
