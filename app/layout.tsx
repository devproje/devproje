import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Project_IO's Website",
	description: "프로젝트의 개인 웹사이트",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={"h-full antialiased"}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
