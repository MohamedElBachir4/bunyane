"use client";

import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { IMAGES, SECTION_IDS } from "@/lib/site";

export function Hero() {
  const t = useTranslations("hero");
  const tc = useTranslations("common");
  const locale = useLocale();
  const reduce = useReducedMotion();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section
      id={SECTION_IDS.home}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[center_30%] ${reduce ? "" : "hero-kenburns"}`}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-t from-primary via-primary/70 to-primary/25 md:bg-linear-to-r md:from-primary/95 md:via-primary/60 md:to-primary/15 md:rtl:bg-linear-to-l"
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28 lg:pt-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="type-display text-5xl leading-none tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {tc("brand")}
        </motion.p>

        <motion.h1
          id="hero-title"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="mt-6 max-w-3xl type-display text-3xl leading-[1.15] text-white/95 sm:text-4xl lg:text-5xl"
        >
          {t.rich("headline", {
            highlight: (chunks) => <span className="text-bronze">{chunks}</span>,
          })}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button href={`/#${SECTION_IDS.about}`} variant="bronze">
            {t("primary")}
            <Arrow className="size-4" aria-hidden />
          </Button>
          <Button
            href={`/#${SECTION_IDS.how}`}
            variant="secondary"
            className="!border-white/35 !text-white hover:!border-white hover:!bg-white/10"
          >
            {t("secondary")}
          </Button>
        </motion.div>

        <motion.div
          aria-hidden
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.45, ease: "easeOut" }}
          className="arch-line mt-14 h-px origin-start"
        />
      </div>
    </section>
  );
}
