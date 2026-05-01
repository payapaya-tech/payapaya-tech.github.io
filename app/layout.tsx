import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Geist_Mono } from "next/font/google";
import "./globals.css";

const mPlusRounded1c = M_PLUS_Rounded_1c({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぱやぱや",
  description: "ぱやぱやコーポレートサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${mPlusRounded1c.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
