"use client";
import { useEffect, useRef } from "react";
import { Monitor, Code2, Zap, Layout } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TitleReveal from "@/app/components/TitleReveal";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "UI/UX Design",
        desc: "Designing scalable design systems that prioritize user flow and conversion.",
        icon: <Layout className="w-8 h-8" />,
    },
    {
        title: "Frontend Development",
        desc: "Building lightning-fast, SEO-optimized web applications with the latest tech stack.",
        icon: <Code2 className="w-8 h-8" />,
    },
    {
        title: "Graphics Design",
        desc: "Bringing interfaces to life with GSAP and Framer Motion for that 'premium' feel.",
        icon: <Monitor className="w-8 h-8" />,
    },
    // {
    //     title: "Digital Strategy",
    //     desc: "Consulting on product-market fit and technical architecture for startups.",
    //     icon: <Monitor className="w-8 h-8" />,
    // },
];

export default function Services() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section id="services" ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
            <TitleReveal
                subtitle="// Expert Solutions"
                title="SERVICES THAT <br /> DRIVE IMPACT"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardsRef.current[i] = el)}
                        className="group p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-500 hover:border-accent/50 cursor-pointer"
                    >
                        <div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-500 origin-left">
                            {service.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                        <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}