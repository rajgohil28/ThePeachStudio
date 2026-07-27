import type { Metadata } from "next";
import { EB_Garamond, Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethink = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Peach Studio | Premium Creative & Design Agency",
  description:
    "The Peach Studio is a boutique creative design and development agency crafting visually stunning digital products, elegant branding, and performant web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rethink.variable} ${ebGaramond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
