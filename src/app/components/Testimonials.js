"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {Quote, Star, Plus, ChevronLeft, ChevronRight, Linkedin, LucideLinkedin} from "lucide-react";
import TitleReveal from "@/app/components/TitleReveal";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "PROJECTS COMPLETED", value: 20 },
    { label: "HAPPY CLIENTS", value: 15 },
    { label: "COMPANIES SERVED", value: 10 },
    { label: "CASE STUDY", value: 1 },
];

const reviews = [
    {
        name: "Tanbir Hossain",
        role: "Head of Engineering @ Grameen HealthTech",
        text: "I had the pleasure of working with Mahedi Hasan on a comprehensive e-commerce marketplace project, where he served as our UI/UX designer. From the outset, Mahedi Hasan demonstrated exceptional talent and a keen eye for detail, transforming complex requirements into intuitive and visually stunning designs for both our web and mobile platforms. I highly recommend Mahedi Hasan for any UI/UX design role.",
        img: "/testimonial/img.png"
    },
    {
        name: "Tahsin Tazwar",
        role: "Venture Architect | Capital Advisor | Co-Founder @ RaiseOS",
        text: "I had the opportunity to work closely with Mahedi Hasan across multiple products, including DealDone and RaiseOS. He consistently demonstrated a strong grasp of both product strategy and user experience, translating complex business requirements into elegant, intuitive, and scalable UI/UX solutions. His ability to align design with real business and user needs made a meaningful impact on the overall quality of our platforms. I would confidently recommend him for any product-driven UI/UX role.",
        img: "/testimonial/img_1.png"
    }
];

const companies = [
    { name: "PayStation" },
    { name: "SWAP" },
    { name: "SUKHEE" },
    { name: "SHAFA CARE" },
    { name: "PROGRAMMING FIGHTER" },
    { name: "HEALTHX" },
];

export default function Testimonials() {
    const sectionRef = useRef(null);
    const statsRef = useRef([]);
    const sliderRef = useRef(null);
    const progressRef = useRef(null);
    const [index, setIndex] = useState(0);
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

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Counter Animation
            statsRef.current.forEach((el, i) => {
                if (!el) return;
                const targetValue = stats[i].value;
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: targetValue,
                    duration: 2,
                    ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" },
                    onUpdate: () => { el.innerText = Math.floor(obj.val); },
                });
            });

            // 2. Slider Sync Logic
            gsap.to(sliderRef.current, {
                x: `-${index * 100}%`,
                duration: 1,
                ease: "expo.out"
            });

            // 3. Progress Bar Sync
            const progress = (index + 1) / reviews.length;
            gsap.to(progressRef.current, {
                scaleX: progress,
                duration: 1,
                ease: "expo.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [index]);

    const next = () => setIndex((prev) => (prev + 1) % reviews.length);
    const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section id="testimonials" ref={sectionRef} className="py-24 px-10 max-w-7xl mx-auto relative overflow-hidden">

            {/* 1. IMPACT STATS BAR */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 border-b border-white/5 pb-20">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center lg:text-left group">
                        <div className="flex items-center justify-between lg:justify-start gap-1">
                            <span
                                ref={(el) => (statsRef.current[i] = el)}
                                className="text-6xl md:text-8xl font-black text-accent italic tracking-tighter"
                            >0</span>
                            <Plus className="text-accent w-8 h-8 md:w-10 md:h-10 mt-[-20px] group-hover:rotate-90 transition-transform duration-500" />
                        </div>
                        <p className="text-white/30 font-mono text-xs uppercase tracking-[0.3em] mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>

            <TitleReveal subtitle="// Wall of Proof" title="WHAT THEY <br /> SAY ABOUT ME" align="left" />

            {/* 2. LUCRATIVE SLIDER */}
            <div className="mt-16 relative">
                <div className="overflow-hidden rounded-[3rem] border border-white/5 bg-[#001a30] shadow-2xl">
                    <div ref={sliderRef} className="flex">
                        {reviews.map((rev, i) => (
                            <div key={i} className="min-w-full p-10 md:p-20 flex flex-col md:flex-row items-center gap-12">
                                {/* Profile Side with Rim Light */}
                                <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
                                    <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full animate-pulse" />
                                    <div className="relative w-full h-full rounded-[3rem] border-2 border-accent/30 overflow-hidden rotate-3 hover:rotate-0 transition-all duration-700">
                                        <Image src={rev.img} alt={rev.name} fill className="object-cover grayscale hover:grayscale-0 transition-all" />
                                    </div>
                                </div>
                                {/* Content Side */}
                                <div className="flex flex-col flex-1">
                                    <LucideLinkedin className="text-accent mb-6 opacity-30" size={48} />
                                    <div className="flex gap-1 mb-4 text-accent">
                                        {[...Array(5)].map((_, starI) => <Star key={starI} size={16} fill="currentColor" />)}
                                    </div>
                                    <p className="text-xl md:text-2xl font-medium text-white/80 leading-snug mb-8 italic">"{rev.text}"</p>
                                    <div>
                                        <h4 className="text-white text-xl font-black italic uppercase tracking-tighter">{rev.name}</h4>
                                        <p className="uppercase text-accent font-mono text-xs uppercase tracking-[0.3em] mt-1">{rev.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SLIDER NAVIGATION */}
                <div className="flex justify-between items-center mt-10 px-6">
                    <div className="w-1/2 h-[2px] bg-white/10 relative overflow-hidden">
                        <div ref={progressRef} className="absolute top-0 left-0 h-full w-full bg-accent origin-left scale-x-0" />
                    </div>
                    <div className="flex gap-4">
                        <button onClick={prev} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all active:scale-90">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={next} className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-primary shadow-[0_0_20px_#5CFF0044] hover:shadow-[0_0_30px_#5CFF0088] transition-all active:scale-90">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. LOGO TICKER */}
            <div
                ref={wrapperRef}
                className="mt-24 py-12 border-y border-white/5 overflow-hidden relative opacity-30 hover:opacity-100 transition-opacity duration-700 cursor-pointer"
            >
                {/* Gradient Fades for a professional "Boxed" look */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#001020] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#001020] to-transparent z-10" />

                <div
                    ref={tickerRef}
                    className="flex whitespace-nowrap w-fit items-center"
                >
                    {/* We map twice for a seamless loop, using index in key to prevent warnings */}
                    {[...companies, ...companies].map((logo, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-10 px-10 group"
                        >
                        <span className="font-black italic text-3xl md:text-5xl text-white/50 group-hover:text-accent group-hover:not-italic transition-all duration-500 tracking-tighter">
                            {logo.name}
                        </span>
                            {/* Decorative separator */}
                            <div className="w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent group-hover:shadow-[0_0_15px_#5CFF00] transition-all" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}