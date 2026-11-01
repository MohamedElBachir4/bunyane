import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { routing } from "@/i18n/routing";

const docs = ["privacy", "terms", "risk"] as const;
type Doc = (typeof docs)[number];
type Props = { params: Promise<{ locale: string; doc: string }> };

const metaKey = { privacy: "legalPrivacy", terms: "legalTerms", risk: "legalRisk" } as const;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => docs.map((doc) => ({ locale, doc })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, doc } = await params;
  if (!docs.includes(doc as Doc)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t(metaKey[doc as Doc]), robots: { index: false } };
}

export default async function LegalPage({ params }: Props) {
  const { locale, doc } = await params;
  if (!docs.includes(doc as Doc)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const d = doc as Doc;

  return (
    <article className="bg-surface pb-24 pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-primary">{t(`${d}.title`)}</h1>
        <p className="mt-6 leading-relaxed text-ink">{t(`${d}.body`)}</p>
        <p className="mt-6 rounded-xl border border-gold/50 bg-gold/10 p-4 text-sm text-muted">{t("placeholderNote")}</p>
        <div className="mt-8">
          <Button href="/" variant="secondary">{tc("backHome")}</Button>
        </div>
      </div>
    </article>
  );
}
