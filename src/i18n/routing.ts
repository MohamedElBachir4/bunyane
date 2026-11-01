import { defineRouting } from "next-intl/routing";

export const locales = ["ar", "fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "ar",
  localePrefix: "as-needed",
  localeDetection: false,
});

export const localeDir: Record<Locale, "rtl" | "ltr"> = {
  ar: "rtl",
  fr: "ltr",
  en: "ltr",
};
