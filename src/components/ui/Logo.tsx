import { Link } from "@/i18n/navigation";

export function LogoMark({ invert = false, className = "size-9" }: { invert?: boolean; className?: string }) {
  const fill = invert ? "#ffffff" : "#0B1C20";
  const stroke = invert ? "#0B1C20" : "#ffffff";
  const accent = "#B08D57";
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <rect width="40" height="40" rx="4" fill={fill} />
      <path d="M11 30V15l9-6 9 6v15" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 30V18h8v12" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 30h24" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

type Props = { label: string; name: string; invert?: boolean };

export function Logo({ label, name, invert }: Props) {
  return (
    <Link href="/" aria-label={label} className="inline-flex items-center gap-3">
      <LogoMark invert={invert} />
      <span className={`type-display text-2xl tracking-tight ${invert ? "text-white" : "text-primary"}`}>{name}</span>
    </Link>
  );
}
