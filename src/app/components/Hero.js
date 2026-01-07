"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Entrance Animation for Text
            gsap.set(".hero-item", { y: -40, autoAlpha: 0 });
            gsap.to(".hero-item", {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                ease: "power4.out",
                stagger: 0.15,
                delay: 0.2,
            });

            // 2. Entrance for Image
            gsap.fromTo(imageRef.current,
                { x: 100, autoAlpha: 0, scale: 0.9 },
                { x: 0, autoAlpha: 1, scale: 1, duration: 1.2, ease: "expo.out", delay: 0.5 }
            );

            // 3. Floating Animation for the Person (Lucrative feel)
            gsap.to(imageRef.current, {
                y: 20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="rounded-lg relative min-h-[100vh] flex items-center justify-center pt-20 px-6 lg:px-20 max-w-7xl mx-auto"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-primary -z-10" />

            {/* Dynamic Lime Glow behind the person */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full -z-10" />

            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

                {/* Left Content */}
                <div className="space-y-8 z-10 order-2 lg:order-1">
                    <div className="hero-item inline-block px-4 py-1 border border-accent/30 rounded-full text-accent text-sm bg-accent/5 font-mono">
                        // AVAILABLE FOR FREELANCE
                    </div>

                    <h1 className="hero-item text-6xl md:text-8xl font-black text-white leading-[0.85] italic tracking-tighter">
                        MAHEDI <br />
                        <span className="text-accent not-italic">HASAN.</span>
                    </h1>

                    <p className="hero-item text-white/50 max-w-lg text-lg leading-relaxed border-l-2 border-accent/20 pl-6">
                        I don't just hand off designs—I build them. If you are looking for someone who understands both pixels and logic, <span className="text-white"> let’s connect!</span>
                    </p>

                    <div className="hero-item flex flex-wrap gap-4">
                        <button
                            onClick={() => {
                                document.getElementById("footer")?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                            className="relative cursor-pointer group px-10 py-5 bg-accent text-primary font-black rounded-2xl overflow-hidden transition-all shadow-[0_20px_40px_rgba(92,255,0,0.15)] hover:shadow-accent/40 hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                HIRE ME <span className="text-xl">→</span>
              </span>
                        </button>

                        <button
                            onClick={() => {
                                document.getElementById("graphics")?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                            className="cursor-pointer px-10 py-5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-colors"
                        >
                            VIEW PROJECTS
                        </button>
                    </div>
                </div>

                {/* Right Content (The Image) */}
                <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div ref={imageRef} className="relative w-[300px] h-[400px] md:w-[480px] md:h-[600px] flex items-center justify-center">

                        {/* 1. THE "RIM LIGHT" (Backglow) - This makes the subject pop */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 blur-[100px] rounded-full animate-pulse" />

                        {/* 2. THE GLASS FRAME - Subtle secondary layer for depth */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent backdrop-blur-[2px] rounded-[5rem] border border-white/10 -rotate-3 transition-transform duration-700 group-hover:rotate-0" />

                        {/* 3. THE MAIN IMAGE CONTAINER WITH MASK */}
                        <div className="relative w-full h-full overflow-hidden rounded-[5rem] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
                            <Image
                                src="/profile.png"
                                alt="Mahedi Hasan"
                                fill
                                className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-110"
                                priority
                            />
                        </div>

                        {/* 4. FLOATING DECORATIVE BLOB (Lucrative touch) */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 border border-accent/20 rounded-full blur-xl animate-bounce" />

                        {/* 5. REFINED FLOATING TAG */}
                        <div className="absolute -bottom-4 -left-10 bg-[#002747]/80 backdrop-blur-2xl border border-white/10 p-5 rounded-3xl shadow-2xl z-20 hidden md:block group-hover:-translate-y-2 transition-transform duration-500">
                            {/*<div className="flex items-center gap-3 mb-2">*/}
                            {/*    <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#5CFF00]" />*/}
                            {/*    <p className="text-white/40 text-[10px] font-mono tracking-widest uppercase">Verified Expert</p>*/}
                            {/*</div>*/}
                            <p className="text-white font-black text-2xl italic">MAHEDI <span className="text-accent">HASAN</span></p>
                            <div className="mt-2 h-[1px] w-full bg-white/5" />
                            <p className="text-white/60 text-[11px] mt-2 font-medium">FRONTEND DEVELOPER • PRODUCT DESIGNER</p>
                        </div>

                        {/* 6. SECONDARY MINI-TAG (Right side) */}
                        <div className="absolute top-20 -right-6 bg-accent p-3 rounded-2xl shadow-2xl rotate-12 hidden md:block">
                            <p className="text-primary font-black text-xs">99% SUCCESS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}