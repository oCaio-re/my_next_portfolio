import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { i18n } from "@/i18n";
import LayoutWrapper from "./components/LayoutWrapper";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const dmSans = DM_Sans({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
    title: "Caio Oliveira | DEV",
    description: "Caio Oliveira's Website, Software Engineer",
};

export default async function RootLayout({
                                       children,
                                       params,
                                   }: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    return (
        <html lang={lang} className="overflow-hidden">
        <body
            className={`overflow-hidden ${geistSans.variable} ${geistMono.variable} ${dmSans.variable} antialiased`}
            style={{ overflow: 'hidden' }}
        >
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
        </body>
        </html>
    );
}
