import "./globals.css";

import { homeMetaData } from "@/lib/metadata";
export const metadata = homeMetaData;

import clsx from "clsx";
import { fontSans } from "@/lib/fonts";
import { isDevelopment } from "@/lib/config";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={clsx(isDevelopment() && "font-sans")}
				style={(!isDevelopment() && { ...fontSans.style }) || undefined}
			>
				{children}
			</body>
		</html>
	);
}
