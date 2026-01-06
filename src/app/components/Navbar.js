"use client";
import {Download, Moon, Sun} from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "UI/UX", href: "#ui-ux" },
    { name: "Graphic", href: "#graphics" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        // 1. Setup the Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Detects section when it's in the middle of the screen
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // 2. Observe all sections that have an ID matching our nav links
        navLinks.forEach((link) => {
            const section = document.querySelector(link.href);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Smooth Scroll Handler
    const handleScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
            <div className="backdrop-blur-xl bg-primary/40 border border-white/10 py-3 px-6 md:px-8 rounded-2xl flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

                {/* Logo */}
                <span className="text-accent font-black text-2xl tracking-tighter italic">DASH.</span>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/5">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className={`relative px-4 py-2 text-sm font-bold transition-all duration-500 rounded-lg overflow-hidden ${
                                    isActive ? "text-primary" : "text-white/50 hover:text-white"
                                }`}
                            >
                                {/* The "Lucrative" Sliding Background */}
                                {isActive && (
                                    <div className="absolute inset-0 bg-accent -z-10 animate-in fade-in zoom-in duration-300" />
                                )}
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="cursor-pointer flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-accent hover:bg-accent hover:text-primary transition-all active:scale-90"
                    >
                        <Download/> Resume
                    </button>

                    {/* Mobile Menu Indicator (Optional) */}
                    <div className="md:hidden w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-[10px]">
                        HI
                    </div>
                </div>
            </div>
        </nav>
    );
}