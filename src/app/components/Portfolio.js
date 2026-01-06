"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import TitleReveal from "@/app/components/TitleReveal";

const projects = [
    {
        id: "01",
        title: "SUKHEE MOBILE",
        category: "DIGITAL HEALTH",
        img: "/UI/shukhee mobile.png",
        tags: ["Figma", "Photoshop", "Illustrator"],
        githubUrl: "https://github.com/yourname/ai-career",
        brief:"A high-performance digital solution focused on user experience and technical excellence using the latest industry standards.",
        link:"https://www.behance.net/gallery/239774233/Medical-Telemedicine-Mobile-App-UIUX-Design"
    },
    {
        id: "02",
        title: "PayStation WEB",
        category: "FINTECH",
        img: "/UI/paystation.png",
        tags: ["Figma","Framer", "Photoshop", "Illustrator"],
        githubUrl: "https://github.com/yourname/ai-career",
        brief:"A high-performance digital solution focused on user experience and technical excellence using the latest industry standards.",
        link:"https://paystation.framer.website/"
    },
    {
        id: "03",
        title: "SUKHEE WEB APP",
        category: "HEALTHCARE",
        img: "/UI/sukhee-web.png",
        tags: ["Figma", "Photoshop", "Illustrator"],
        githubUrl: "https://github.com/yourname/ai-career",
        brief:"A high-performance digital solution focused on user experience and technical excellence using the latest industry standards.",
        link:"https://www.behance.net/gallery/239266067/Shukhee-Medical-Clinic-Management-Dashboard"
    },
];

export default function Portfolio() {
    const [active, setActive] = useState(0);
    const displayRef = useRef(null);
    const imgRef = useRef(null);

    // GSAP Transition when switching projects
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(displayRef.current,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.6, ease: "expo.out" }
        );
        tl.fromTo(imgRef.current,
            { scale: 1.1 },
            { scale: 1, duration: 1.2, ease: "expo.out" },
            "-=0.6"
        );
    }, [active]);

    return (
        <section id="ui-ux" className="py-24 max-w-7xl mx-auto px-6">
            <TitleReveal
                subtitle="// Selected Case Studies"
                title="BUILT WITH <br /> PRECISION"
            />

            <div className="flex flex-col lg:flex-row gap-0 border border-white/5 rounded-[3rem] overflow-hidden bg-[#001a30] shadow-2xl">

                {/* SIDE TABS - 30% Secondary Area */}
                <div className="lg:w-1/3 flex flex-col bg-primary/50 backdrop-blur-xl border-r border-white/5">
                    {projects.map((p, i) => (
                        <button
                            key={i}
                            onMouseEnter={() => setActive(i)}
                            className={`group relative p-10 text-left transition-all duration-500 border-b border-white/5 last:border-0 ${
                                active === i ? "bg-accent/5" : "hover:bg-white/[0.02]"
                            }`}
                        >
                            {/* Active Indicator Line */}
                            <div className={`absolute left-0 top-0 h-full w-[4px] bg-accent transition-all duration-500 shadow-[0_0_20px_#5CFF00] ${
                                active === i ? "opacity-100" : "opacity-0"
                            }`} />

                            <div className="flex items-center gap-4 mb-3">
                <span className={`font-mono text-xs ${active === i ? "text-accent" : "text-white/20"}`}>
                  {p.id}
                </span>
                                <div className={`h-[1px] transition-all duration-500 ${active === i ? "w-8 bg-accent" : "w-0 bg-white/10"}`} />
                            </div>

                            <h3 className={`text-3xl font-black italic transition-all duration-500 ${
                                active === i ? "text-white translate-x-2" : "text-white/30"
                            }`}>
                                {p.title}
                            </h3>

                            <p className={`mt-2 text-xs font-bold tracking-widest transition-all ${
                                active === i ? "text-accent/60" : "text-transparent"
                            }`}>
                                {p.category}
                            </p>
                        </button>
                    ))}
                </div>

                {/* PROJECT VIEW - 50% Primary Canvas */}
                <div ref={displayRef} className="w-fit p-8 lg:p-16 relative flex flex-col">

                    {/* Main Image Container with Rim Light */}
                    <div className="relative h-[550px] rounded-[2rem] overflow-hidden border border-white/10 group">

                        {/* Rim Light Glow */}
                        <div className="absolute -inset-4 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <Image
                            ref={imgRef}
                            src={projects[active].img}
                            alt={projects[active].title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Image Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />

                        {/* Floating Action Button inside Image */}
                        <button className="absolute bottom-6 right-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 hover:rotate-12">
                            <ArrowUpRight size={32} strokeWidth={3} />
                        </button>
                    </div>

                    {/* Project Details */}
                    <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div>
                            <div className="flex gap-3 mb-4">
                                {projects[active].tags.map((tag, t) => (
                                    <span key={t} className="px-4 py-1.5 border border-white/10 rounded-full text-[10px] font-mono text-white/40 uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h4 className="text-accent font-black text-sm tracking-[0.4em] uppercase mb-2">Project Brief</h4>
                            <p className="text-white/50 max-w-md leading-relaxed">
                                {projects[active].brief}
                            </p>
                        </div>

                        <div className="flex h-fit gap-4">
                            {/* GITHUB */}
                            {/*{projects[active].githubUrl && (*/}
                            {/*    <a*/}
                            {/*        href={projects[active].githubUrl}*/}
                            {/*        target="_blank"*/}
                            {/*        rel="noopener noreferrer"*/}
                            {/*        className="flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-accent hover:text-primary transition-all duration-300"*/}
                            {/*    >*/}
                            {/*        <Github size={20} />*/}
                            {/*    </a>*/}
                            {/*)}*/}

                            {/* LIVE DEMO */}
                            {projects[active].link && (
                                <a
                                    href={projects[active].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 rounded-2xl bg-accent text-primary font-black flex items-center gap-3 hover:shadow-[0_0_30px_#5CFF0066] transition-all"
                                >
                                    LIVE DEMO <ArrowUpRight size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}