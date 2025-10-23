import StandardLayout from "@/components/Wrapper/StandardWrapper";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <StandardLayout>{children}</StandardLayout>;
}
