import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahedi Hasan - Portfolio",
  description: "I don't just hand off designs—I build them. If you are looking for someone who understands both pixels and logic, let’s connect!",
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
