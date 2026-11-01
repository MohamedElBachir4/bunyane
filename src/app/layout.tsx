import type { ReactNode } from "react";

/**
 * Root shell — locale layout owns <html>/<body> for correct lang/dir.
 * next-intl: https://next-intl.dev/docs/getting-started/app-router
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
