import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES, SECTION_IDS } from "@/lib/site";

export function About() {
  const t = useTranslations("about");
  const points = t.raw("points") as string[];

  return (
    <section id={SECTION_IDS.about} aria-labelledby="about-title" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading id="about-title" eyebrow={t("eyebrow")} title={t("title")} subtitle={t("description")} />
          </Reveal>
          <ul className="mt-10 space-y-0 border-t border-primary/10">
            {points.map((p, i) => (
              <Reveal as="li" key={p} delay={0.08 * i} className="flex items-start gap-4 border-b border-primary/10 py-4 text-ink">
                <span className="type-display text-xl text-bronze">{String(i + 1).padStart(2, "0")}</span>
                <span className="pt-1">{p}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="relative lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={IMAGES.about}
              alt={t("imageAlt")}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-primary/25 to-transparent" />
          </div>
          <div className="absolute -bottom-6 start-6 hidden max-w-xs border border-white/20 bg-primary/90 p-5 text-white backdrop-blur-sm sm:block lg:start-auto lg:-end-4 lg:bottom-10">
            <p className="type-display text-2xl leading-snug">{t("aside")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
