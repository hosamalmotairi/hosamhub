import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "حسام المطيري | مشاريعي الأكاديمية",
  description: "مشاريع حسام المطيري الأكاديمية — BUS214, FIN200, MKT201",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="noise-overlay" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
