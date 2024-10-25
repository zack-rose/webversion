import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { SafeArea } from "./safe-area";
import { Footer } from "@threedegrees/ui/components";
import { NavBar } from "@/features/common/components/layout/Navbar";

import "@threedegrees/ui/css";
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
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "";

	return (
		<html lang="en">
			<SafeArea />
			<body className={inter.className}>
				<NavBar />
				{children}
				<Footer />

				<Script
					id="googleMapsKey"
					src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
					strategy="beforeInteractive"
				/>
			</body>
		</html>
	);
}
