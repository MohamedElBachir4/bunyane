import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SECTION_IDS } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

const nav = [
  { key: "home", id: SECTION_IDS.home },
  { key: "about", id: SECTION_IDS.about },
  { key: "how", id: SECTION_IDS.how },
  { key: "opportunities", id: SECTION_IDS.opportunities },
  { key: "faq", id: SECTION_IDS.faq },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const tc = useTranslations("common");
  const ts = useTranslations("services");
  const services = ts.raw("items") as { title: string }[];
  const social = t.raw("social") as string[];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/75">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo label={tc("brand")} name={tc("brand")} invert />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{t("description")}</p>
          </div>

          <nav aria-label={t("navTitle")}>
            <h2 className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-bronze">{t("navTitle")}</h2>
            <ul className="space-y-3 text-sm">
              {nav.map((i) => (
                <li key={i.key}>
                  <Link href={`/#${i.id}`} className="transition-colors hover:text-white">
                    {tn(i.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("servicesTitle")}>
            <h2 className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-bronze">{t("servicesTitle")}</h2>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href={`/#${SECTION_IDS.services}`} className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-bronze">{t("contactTitle")}</h2>
            <ul className="space-y-3 text-sm">
              <li>{t("contact.email")}</li>
              <li>{t("contact.phone")}</li>
              <li>{t("contact.address")}</li>
            </ul>
            <h2 className="mb-3 mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-bronze">{t("socialTitle")}</h2>
            <ul className="flex flex-wrap gap-2">
              {social.map((s) => (
                <li key={s} className="border border-white/20 px-3 py-1.5 text-xs" aria-label={`${s} — ${t("socialSoon")}`}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="risk-disclosure" className="mt-14 border border-white/10 bg-white/5 p-5 text-xs leading-relaxed text-white/70">
          {t("riskNotice")}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>{t("copyright", { year })}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/legal/privacy" className="hover:text-white">
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" className="hover:text-white">
                {t("terms")}
              </Link>
            </li>
            <li>
              <Link href="/legal/risk" className="hover:text-white">
                {t("risk")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
