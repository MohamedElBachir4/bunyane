"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

const labels: Record<Locale, { short: string; name: string }> = {
  ar: { short: "AR", name: "العربية" },
  fr: { short: "FR", name: "Français" },
  en: { short: "EN", name: "English" },
};

export function LanguageSwitcher({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={`inline-flex items-center rounded-sm border p-1 ${
        invert ? "border-white/25 bg-white/10" : "border-primary/15 bg-white"
      } ${className}`}
      dir="ltr"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            lang={l}
            title={labels[l].name}
            aria-pressed={active}
            disabled={pending}
            onClick={() => startTransition(() => router.replace(pathname, { locale: l }))}
            className={`rounded-sm px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              active
                ? invert
                  ? "bg-white text-primary"
                  : "bg-primary text-white"
                : invert
                  ? "text-white/85 hover:bg-white/10"
                  : "text-primary hover:bg-soft"
            }`}
          >
            {labels[l].short}
          </button>
        );
      })}
    </div>
  );
}
