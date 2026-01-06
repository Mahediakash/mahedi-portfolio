"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TitleReveal from "@/app/components/TitleReveal";
// Import icons that represent your stack
import {
    Code2,
    Wind,
    Zap,
    Figma,
    LayoutTemplate,
    Cpu,
    FileJson,
    Palette
} from "lucide-react";

const skills = [
    { name: "NEXT.JS", icon: <Cpu size={40} /> },
    { name: "TAILWIND CSS", icon: <Wind size={40} /> },
    { name: "GSAP", icon: <Zap size={40} /> },
    { name: "FIGMA", icon: <Figma size={40} /> },
    { name: "UI/UX DESIGN", icon: <LayoutTemplate size={40} /> },
    { name: "FRAMER MOTION", icon: <Code2 size={40} /> },
    { name: "JAVASCRIPT", icon: <FileJson size={40} /> },
    { name: "POSTER DESIGN", icon: <Palette size={40} /> },
];

export default function Ticker() {
    const tickerRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const ticker = tickerRef.current;

            // Calculate total width of half the content
            const totalWidth = ticker.scrollWidth / 2;

            const animation = gsap.to(ticker, {
                x: -totalWidth,
                duration: 25,
                ease: "none",
                repeat: -1,
            });

            // Lucrative Interaction: Slow down on hover
            wrapperRef.current.addEventListener("mouseenter", () => {
                gsap.to(animation, { timeScale: 0.2, duration: 1 });
            });
            wrapperRef.current.addEventListener("mouseleave", () => {
                gsap.to(animation, { timeScale: 1, duration: 1 });
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 overflow-hidden max-w-7xl mx-auto border-y border-white/5 bg-primary">
            {/* Consistent Header Style */}
            <div className="px-10">
                <TitleReveal
                    subtitle="// Technology Stack"
                    title="TOOLS OF <br /> THE TRADE"
                />
            </div>

            {/* Ticker Container */}
            <div ref={wrapperRef} className="relative flex whitespace-nowrap bg-white/5 py-12 rotate-[-1deg] scale-[1.02] border-y border-accent/20">
                <div ref={tickerRef} className="flex gap-16 items-center">
                    {/* Double the items to create a seamless loop */}
                    {[...skills, ...skills].map((skill, i) => (
                        <div key={i} className="flex items-center gap-8 group cursor-default">
                            {/* Icon - Using the 20% Accent Rule */}
                            <div className="text-white/20 group-hover:text-accent group-hover:scale-110 transition-all duration-500 transform">
                                {skill.icon}
                            </div>

                            {/* Name */}
                            <span className="text-5xl md:text-7xl font-black text-white/10 transition-all duration-500 group-hover:text-white group-hover:italic">
                                {skill.name}
                            </span>

                            {/* Decorative separator with Glow */}
                            <div className="w-3 h-3 rounded-full bg-accent/30 group-hover:bg-accent shadow-[0_0_15px_transparent] group-hover:shadow-[0_0_20px_#5CFF00] transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle bottom text for balance */}
            <div className="px-10 mt-10 flex justify-between items-center">
                <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="text-white/20 font-mono text-[10px] uppercase tracking-widest">System Status: Optimized</p>
                </div>
                <p className="text-white/30 font-mono text-xs uppercase tracking-widest">
                    Continuous Integration • Scalable Performance
                </p>
            </div>
        </section>
    );
}