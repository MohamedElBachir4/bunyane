import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMAGES, SECTION_IDS } from "@/lib/site";

const photos = [IMAGES.project1, IMAGES.project2, IMAGES.project3] as const;

export function FeaturedProjects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as { title: string; meta: string }[];

  return (
    <section id={SECTION_IDS.projects} aria-labelledby="projects-title" className="bg-primary py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading id="projects-title" eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} invert />
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={0.08 * i}>
              <article className="group relative aspect-[3/4] overflow-hidden">
                <Image
                  src={photos[i]}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-bronze">{item.meta}</p>
                  <h3 className="mt-2 type-display text-2xl leading-tight sm:text-3xl">{item.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
