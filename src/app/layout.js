import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/app/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: {
        default: "Mahedi Hasan | Frontend Developer & Product Deisgner",
        template: "%s | Mahedi Hasan",
    },

    description:
        "Mahedi Hasan is a Frontend Developer & UI Designer specializing in React, Next.js, Tailwind CSS, and modern UI systems. I design and build fast, scalable, and user-focused web experiences.",

    keywords: [
        "Mahedi Hasan",
        "Frontend Developer",
        "UI Engineer",
        "React Developer",
        "Next.js Developer",
        "Web Developer Bangladesh",
        "UI UX Developer",
        "Tailwind CSS Developer",
        "JavaScript Developer",
        "Portfolio Website",
    ],

    authors: [{ name: "Mahedi Hasan", url: "https://mahedi-portfolio.vercel.app/" }],
    creator: "Mahedi Hasan",
    publisher: "Mahedi Hasan",

    metadataBase: new URL("https://mahedi-portfolio.vercel.app/"),

    alternates: {
        canonical: "https://mahedi-portfolio.vercel.app/",
    },

    openGraph: {
        title: "Mahedi Hasan | Frontend Developer & Product Designer",
        description:
            "I don’t just hand off designs—I build them. Frontend Developer skilled in React, Next.js, and modern UI Design.",
        url: "https://mahedi-portfolio.vercel.app/",
        siteName: "Mahedi Hasan Portfolio",
        images: [
            {
                url: "/For Graph.png", // put in /public
                width: 1200,
                height: 630,
                alt: "Mahedi Hasan Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    category: "technology",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <Navbar/>
        <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
