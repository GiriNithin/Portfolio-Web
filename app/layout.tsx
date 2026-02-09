import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Software Developer",
  description: "Personal portfolio of a software developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${playfair.variable} antialiased`}>
        <Script
          src="/theme-init.js"
          strategy="beforeInteractive"
          suppressHydrationWarning
        />
        {children}
      </body>
    </html>
  );
}
