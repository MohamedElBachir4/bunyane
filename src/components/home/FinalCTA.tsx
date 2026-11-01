import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGES, SECTION_IDS } from "@/lib/site";

export function FinalCTA() {
  const t = useTranslations("cta");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section id={SECTION_IDS.cta} aria-labelledby="cta-title" className="relative isolate overflow-hidden py-28 lg:py-36">
      <Image src={IMAGES.skyline} alt="" fill loading="lazy" sizes="100vw" className="object-cover" aria-hidden />
      <div aria-hidden className="absolute inset-0 bg-primary/80" />
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h2 id="cta-title" className="type-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {t("title")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">{t("description")}</p>
            <div className="mt-10 flex justify-center">
              <Button href={`/#${SECTION_IDS.about}`} variant="bronze">
                {t("button")}
                <Arrow className="size-4" aria-hidden />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
