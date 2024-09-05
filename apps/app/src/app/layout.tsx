import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SafeArea } from "./safe-area";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {};

export const viewport: Viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SafeArea />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
