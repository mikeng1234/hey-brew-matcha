import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import ErrorBoundary from "@/components/ErrorBoundary";
import "@mdi/font/css/materialdesignicons.min.css";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hey Brew Cafe PH — Open for Franchise",
  description:
    "Hey Brew Cafe PH — a modern heritage brew combining artisanal coffee and premium milktea. Now open for franchise nationwide. Join the heritage.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head />
      <body>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
