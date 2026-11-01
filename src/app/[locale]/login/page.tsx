import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("loginTitle"), robots: { index: false } };
}

export default async function LoginPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "login" });
  const tc = await getTranslations({ locale, namespace: "common" });

  return (
    <section className="flex min-h-[70vh] items-center bg-surface pb-20 pt-32">
      <div className="mx-auto max-w-lg px-4 text-center">
        <span className="mb-5 inline-flex rounded-full bg-soft px-3 py-1 text-xs font-semibold text-secondary">{t("badge")}</span>
        <h1 className="text-3xl font-bold text-primary">{t("title")}</h1>
        <p className="mt-4 leading-relaxed text-muted">{t("description")}</p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="secondary">{tc("backHome")}</Button>
        </div>
      </div>
    </section>
  );
}
