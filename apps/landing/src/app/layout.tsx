import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import { Footer } from "@/features/common/components/layout";
import { Footer } from "@threedegrees/ui/components";
import "./globals.css";
import "@threedegrees/ui/css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={inter.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
