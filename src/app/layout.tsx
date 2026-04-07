import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "حسام المطيري | مشاريع أكاديمية",
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
      </body>
    </html>
  );
}
