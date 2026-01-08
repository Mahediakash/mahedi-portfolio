"use client";
import {useState, useRef} from "react";
import Image from "next/image";
import {ExternalLink, ChevronDown, ChevronUp, Cpu} from "lucide-react";
import TitleReveal from "@/app/components/TitleReveal";

// GSAP Imports
import gsap from "gsap";
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import {useGSAP} from "@gsap/react";

const projects = [
    {
        title: "Rite Care Medical",
        // Changed to Array for button-type tags
        tech: ["Next.js", "Tailwind CSS", "GSAP", "SEO"],
        desc: "A high-performance healthcare platform optimized for patient booking and medical record management with a focus on speed.",
        img: "/frontend/frontend1.jpg",
        link: "https://ritecaremedicalofficepc.com/"
    },
    {
        title: "Raise OS",
        tech: ["React", "D3.js", "Analytics", "Framer"],
        desc: "Complex data visualization dashboard for operational systems, featuring real-time data streaming and interactive charts.",
        img: "/frontend/frontend2.jpg",
        link: "https://www.raiseos.com/"
    },
    {
        title: "DR. Zakia Hossain",
        tech: ["React", "Tailwind", "Vite"],
        desc: "A professional portfolio for medical specialists featuring a custom CMS and optimized mobile-first user experience.",
        img: "/frontend/frontend3.jpg",
        link: "https://drzakiahossain.com/"
    },
    {
        title: "Rite Care Medical",
        tech: ["Next.js", "JavaScript", "HTML"],
        desc: "A healthcare platform designed for medical offices, focusing on seamless appointment booking and patient management systems.",
        img: "/frontend/frontend1.jpg",
        link: "https://ritecaremedicalofficepc.com/"
    },
];

export default function FrontendShowcase() {
    const [showAll, setShowAll] = useState(false);
    const container = useRef(null);
    const contentRef = useRef(null);
    const maskRef = useRef(null);

    // Initial Scroll Entrance
    useGSAP(() => {
        gsap.set(".project-card", {autoAlpha: 0, y: 50});
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
    }, {scope: container});

    const {contextSafe} = useGSAP({scope: container});

    const handleToggle = contextSafe(() => {
        const tl = gsap.timeline({
            onComplete: () => ScrollTrigger.refresh()
        });

        if (!showAll) {
            setShowAll(true);
            tl.to(maskRef.current, {opacity: 0, duration: 0.3});
            setTimeout(() => {
                gsap.fromTo(".extra-card",
                    {autoAlpha: 0, y: 40},
                    {autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power4.out"}
                );
            }, 10);
        } else {
            gsap.to(window, {
                scrollTo: {y: container.current, offsetY: 100},
                duration: 0.8,
                ease: "power3.inOut"
            });
            tl.to(".extra-card", {
                autoAlpha: 0,
                y: 20,
                stagger: 0.05,
                duration: 0.4,
                onComplete: () => {
                    setShowAll(false);
                    gsap.to(maskRef.current, {opacity: 1, duration: 0.5});
                }
            });
        }
    });

    return (
        <section id="work" ref={container} className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
            <TitleReveal subtitle="// Development Core" title="FRONTEND <br /> BUILDS"/>

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
                                {/* IMAGE SECTION */}
                                <div className="relative aspect-video rounded-[1.8rem] overflow-hidden bg-[#001a30]">
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* CONTENT SECTION */}
                                <div className="p-6">
                                    {/* Tech Tags (Button Style) */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((t, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-[#5CFF00] uppercase tracking-wider group-hover:border-[#5CFF00]/20 transition-colors"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-black italic text-white tracking-tighter uppercase leading-none mb-3">
                                                {project.title}
                                            </h3>
                                            {/* Description 2-3 lines */}
                                            <p className="text-white/50 text-sm leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors">
                                                {project.desc}
                                            </p>
                                        </div>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="shrink-0 w-12 h-12 bg-[#5CFF00] rounded-xl flex items-center justify-center text-[#002747] shadow-[0_10px_20px_rgba(92,255,0,0.2)] hover:shadow-[#5CFF00]/50 hover:-translate-y-1 transition-all active:scale-90"
                                        >
                                            <ExternalLink size={20} strokeWidth={3}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ACTION BUTTON */}
            {projects.length > 4 && (
                <div className="mt-12 flex justify-center relative z-20">
                    <button
                        onClick={handleToggle}
                        className="group flex flex-col items-center gap-4 transition-all active:scale-95"
                    >
                        <div
                            className="px-14 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-black italic tracking-widest hover:bg-[#5CFF00] hover:text-[#002747] hover:border-[#5CFF00] transition-all duration-500 shadow-2xl">
                            {showAll ? "SEE LESS PROJECTS" : "SEE MORE PROJECTS"}
                        </div>
                        <div className="animate-bounce">
                            {showAll ? (
                                <ChevronUp size={20} className="text-[#5CFF00]"/>
                            ) : (
                                <ChevronDown size={20} className="text-[#5CFF00]"/>
                            )}
                        </div>
                    </button>
                </div>
            )}
        </section>
    );
}