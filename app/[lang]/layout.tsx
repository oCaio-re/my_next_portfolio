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

export default function RootLayout({
                                       children,
                                       params,
                                   }: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <html lang={params.lang} className="overflow-x-hidden">
        <body
            className={`overflow-x-hidden w-full max-w-full ${geistSans.variable} ${geistMono.variable} ${dmSans.variable} antialiased`}
            style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}
        >
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
        </body>
        </html>
    );
}
