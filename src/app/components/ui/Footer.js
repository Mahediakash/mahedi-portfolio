"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Github, Twitter, Linkedin, ArrowUpRight, Mail, Phone } from "lucide-react";
import behance from "../../../../public/behance.svg"
import Image from "next/image";
import BehanceIcon from "@/app/components/icons/BehanceIcon";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef(null);
    const bigTextRef = useRef(null);

    useEffect(() => {
        // Parallax effect on the big background text
        gsap.fromTo(bigTextRef.current,
            { y: 100 },
            {
                y: -50,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            }
        );
    }, []);

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "UI/UX", href: "#ui-ux" },
        { name: "Graphic", href: "#graphics" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    const handleScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <footer
            id="footer"
            ref={footerRef}
            className="relative bg-primary pt-24 pb-12 overflow-hidden border-t border-white/5"
        >
            {/* 1. THE BIG TYPE (Decorative Layer - 30% Secondary Area) */}
            <div
                ref={bigTextRef}
                className="absolute -bottom-10 left-0 w-full text-[20vw] font-black text-white/[0.02] leading-none whitespace-nowrap select-none pointer-events-none italic"
            >
                MAHEDI HASAN
            </div>

            <div className="max-w-7xl mx-auto px-10 relative z-10">

                {/* 2. THE TOP SECTION (The "Let's Work" CTA) */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-20">
                    <div className="max-w-xl">
                        <h2 className="text-white text-5xl md:text-7xl font-black italic leading-[0.9] mb-6">
                            LET’S MAKE SOMETHING <br />
                            <span className="text-accent">LEGENDARY.</span>
                        </h2>
                        <p className="text-white/40 text-lg">
                            Currently available for new projects and digital collaborations.
                        </p>
                    </div>

                    <button onClick={() => {
                       window.location.href = "mailto:mahedihasan9065@gmail.com"
                    }} className="cursor-pointer group relative px-12 py-12 bg-accent text-primary rounded-full font-black text-xl hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(92,255,0,0.3)]">
            <span className="flex items-center gap-2">
              START A PROJECT <ArrowUpRight size={28} />
            </span>
                    </button>
                </div>

                {/* 3. THE MIDDLE GRID (50-30-20 Rule applied) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-20">

                    {/* Brand Info */}
                    <div className="md:col-span-2">
                        <div className="text-accent font-black text-3xl italic tracking-tighter mb-6">MAHEDI H.</div>
                        <div className="space-y-4">
                            <a href="mailto:mahedihasan9065@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                                <Mail size={18} /> mahedihasan9065@gmail.com
                            </a>
                            <a href="tel:+8801778220643" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                                <Phone size={18} /> +880 1778-220643
                            </a>
                        </div>
                    </div>

                    {/* Sitemaps */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <button href={item.href}
                                            onClick={(e) => handleScroll(e, item.href)}
                                            className="cursor-pointer text-white/40 hover:text-accent transition-all flex items-center group">
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-accent mr-0 group-hover:mr-2 transition-all" />
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials with Magnetic-style hover */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Social Presence</h4>
                        <div className="flex gap-4">
                            {[
                                { Icon: Github, link: "#" },
                                { Icon: Linkedin, link: "https://www.linkedin.com/in/mahedi-hasan9080/" },
                            ].map(({ Icon, link }, i) => (
                                <a
                                    key={i}
                                    href={link}
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary hover:border-accent hover:-translate-y-2 transition-all duration-300 shadow-xl"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}

                            <a
                                href="https://www.behance.net/mahedihasan41"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10
                                    flex items-center justify-center
                                    text-white hover:text-black
                                    hover:bg-accent hover:border-accent
                                    hover:-translate-y-2
                                    transition-all duration-300 shadow-xl
                                  "><BehanceIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* 4. THE BOTTOM BAR */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-white/20 text-[10px] font-mono tracking-[0.2em] uppercase">
                    <p>© 2026 MAHEDI HASAN — CRAFTED WITH PASSION</p>
                    {/*<div className="flex gap-10 mt-6 md:mt-0">*/}
                    {/*    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>*/}
                    {/*    <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </footer>
    );
}