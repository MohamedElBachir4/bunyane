"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { SECTION_IDS } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const items = [
  { key: "home", id: SECTION_IDS.home },
  { key: "about", id: SECTION_IDS.about },
  { key: "services", id: SECTION_IDS.services },
  { key: "how", id: SECTION_IDS.how },
  { key: "opportunities", id: SECTION_IDS.opportunities },
  { key: "faq", id: SECTION_IDS.faq },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;
  const linkTone = solid ? "text-ink hover:text-primary" : "text-white/85 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-primary/10 bg-white/95 shadow-sm backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo label={tc("brand")} name={tc("brand")} invert={!solid} />

        <nav aria-label={t("label")} className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {items.map((i) => (
              <li key={i.key}>
                <Link href={`/#${i.id}`} className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors ${linkTone}`}>
                  {t(i.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher invert={!solid} />
          <Button href="/login" variant="ghost" className={solid ? "" : "!text-white hover:!bg-white/10"}>
            {t("login")}
          </Button>
          <Button href={`/#${SECTION_IDS.about}`} variant={solid ? "primary" : "bronze"}>
            {t("cta")}
          </Button>
        </div>

        <div className="flex items-center xl:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex size-10 items-center justify-center rounded-sm border ${
              solid ? "border-primary/15 text-primary" : "border-white/30 text-white"
            }`}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-primary/10 bg-white xl:hidden">
        <nav aria-label={t("label")} className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <ul className="flex flex-col">
            {items.map((i) => (
              <li key={i.key}>
                <Link href={`/#${i.id}`} onClick={() => setOpen(false)} className="block rounded-sm px-3 py-3 text-base font-medium text-ink hover:bg-soft">
                  {t(i.key)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-primary/10 pt-4">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{t("language")}</p>
            <div className="px-3">
              <LanguageSwitcher className="w-full justify-between sm:w-auto sm:justify-start" />
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Button href="/login" variant="secondary" onClick={() => setOpen(false)}>
              {t("login")}
            </Button>
            <Button href={`/#${SECTION_IDS.about}`} onClick={() => setOpen(false)}>
              {t("cta")}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
