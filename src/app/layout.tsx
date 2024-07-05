import { ReactNode } from "react";

import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Inet App",
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
