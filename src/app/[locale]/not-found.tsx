import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("common");
  return (
    <section className="flex min-h-[70vh] items-center bg-surface pb-20 pt-32">
      <div className="mx-auto max-w-lg px-4 text-center">
        <p className="text-6xl font-bold text-primary">404</p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="secondary">{t("backHome")}</Button>
        </div>
      </div>
    </section>
  );
}
