"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronUp, Cpu } from "lucide-react";
import TitleReveal from "@/app/components/TitleReveal";

// GSAP Imports
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const projects = [
    { title: "Rite Care Medical", tech: "NEXT.JS / JS / Tailwind css / HTML", img: "/frontend/frontend1.jpg", link: "https://ritecaremedicalofficepc.com/" },
    { title: "Raise OS", tech: "REACT / D3.JS", img: "/frontend/frontend2.jpg", link: "https://www.raiseos.com/" },
    { title: "VELOCITY ENGINE", tech: "GSAP / THREE.JS", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", link: "#" },
    { title: "CYBER SHIELD", tech: "NODE / TAILWIND", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop", link: "#" },
    { title: "DATA STREAM X", tech: "WEBSOCKETS", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", link: "#" },
    { title: "CLOUD MESH", tech: "AWS / NEXT.JS", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", link: "#" },
];

export default function FrontendShowcase() {
    const [showAll, setShowAll] = useState(false);
    const container = useRef(null);
    const contentRef = useRef(null);
    const maskRef = useRef(null);

    // 1. Initial Scroll Entrance
    useGSAP(() => {
        gsap.set(".project-card", { autoAlpha: 0, y: 50 });
        gsap.to(".project-card", {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
        });
    }, { scope: container });

    // 2. Smooth Height & Stagger Animation Logic
    const { contextSafe } = useGSAP({ scope: container });

    const handleToggle = contextSafe(() => {
        const tl = gsap.timeline({
            onComplete: () => ScrollTrigger.refresh()
        });

        if (!showAll) {
            // --- ACTION: SEE MORE ---
            setShowAll(true);

            // Fade out mask immediately
            tl.to(maskRef.current, { opacity: 0, duration: 0.3 });

            // Stagger in the new cards
            // Timeout ensures they are in the DOM before we animate
            setTimeout(() => {
                gsap.fromTo(".extra-card",
                    { autoAlpha: 0, y: 40 },
                    { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power4.out" }
                );
            }, 10);
        } else {
            // --- ACTION: SEE LESS ---
            // 1. Scroll back to section top so user isn't disoriented
            gsap.to(window, {
                scrollTo: { y: container.current, offsetY: 100 },
                duration: 0.8,
                ease: "power3.inOut"
            });

            // 2. Fade out extra cards
            tl.to(".extra-card", {
                autoAlpha: 0,
                y: 20,
                stagger: 0.05,
                duration: 0.4,
                onComplete: () => {
                    setShowAll(false);
                    // 3. Fade mask back in
                    gsap.to(maskRef.current, { opacity: 1, duration: 0.5 });
                }
            });
        }
    });

    return (
        <section id="work" ref={container} className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
            <TitleReveal subtitle="// Development Core" title="FRONTEND <br /> BUILDS" />

            <div className="relative">
                <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => {
                        if (i >= 4 && !showAll) return null;

                        return (
                            <div
                                key={i}
                                className={`group relative p-4 bg-white/5 rounded-[2.5rem] border border-white/5 hover:border-[#5CFF00]/30 transition-all duration-500 shadow-2xl flex flex-col 
                                ${i >= 4 ? "extra-card" : "project-card"}`}
                            >
                                <div className="relative aspect-video rounded-[1.8rem] overflow-hidden bg-[#001a30]">
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#5CFF00]/10 to-transparent group-hover:left-[100%] transition-all duration-1000 pointer-events-none" />
                                </div>

                                <div className="p-6 flex justify-between items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Cpu size={12} className="text-[#5CFF00]" />
                                            <span className="text-white/20 font-mono text-[9px] uppercase tracking-[0.2em]">{project.tech}</span>
                                        </div>
                                        <h3 className="text-2xl font-black italic text-white tracking-tighter uppercase leading-none">{project.title}</h3>
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 bg-[#5CFF00] rounded-2xl flex items-center justify-center text-[#002747] shadow-[0_10px_20px_rgba(92,255,0,0.2)] hover:shadow-[#5CFF00]/50 hover:-translate-y-1 transition-all active:scale-90"
                                    >
                                        <ExternalLink size={24} strokeWidth={3} />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/*/!* THE "FEATHERED" MASK (Deep Blend with Navy Background) *!/*/}
                {/*<div*/}
                {/*    ref={maskRef}*/}
                {/*    className={`absolute bottom-0 left-0 w-full h-80 z-10 pointer-events-none transition-opacity duration-500 ${showAll ? 'opacity-0' : 'opacity-100'}`}*/}
                {/*    style={{*/}
                {/*        background: "linear-gradient(to bottom, transparent 0%, #002747 85%, #002747 100%)"*/}
                {/*    }}*/}
                {/*/>*/}
            </div>

            {/* ACTION BUTTON */}
            <div className="mt-12 flex justify-center relative z-20">
                <button
                    onClick={handleToggle}
                    className="group flex flex-col items-center gap-4 transition-all active:scale-95"
                >
                    <div className="px-14 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-black italic tracking-widest hover:bg-[#5CFF00] hover:text-[#002747] hover:border-[#5CFF00] transition-all duration-500 shadow-2xl">
                        {showAll ? "SEE LESS PROJECTS" : "SEE MORE PROJECTS"}
                    </div>

                    {showAll ? (
                        <ChevronUp size={20} className="text-[#5CFF00] animate-bounce" />
                    ) : (
                        <ChevronDown size={20} className="text-[#5CFF00] animate-bounce" />
                    )}
                </button>
            </div>
        </section>
    );
}