import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethink = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink",
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
    <html lang="en" className={rethink.variable}>
      <body>{children}</body>
    </html>
  );
}
