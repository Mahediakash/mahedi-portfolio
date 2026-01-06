// components/TitleReveal.js
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TitleReveal({ title, subtitle, align = "left" }) {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the Subtitle (The Lime tag)
            gsap.from(subRef.current, {
                x: -20,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                }
            });

            // Animate the Main Title (The Masked Reveal)
            gsap.from(titleRef.current, {
                y: 120,
                skewY: 7,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
            <div ref={subRef} className="flex items-center gap-2 mb-4 justify-inherit">
                <span className="w-8 h-[1px] bg-accent" />
                <span className="text-accent font-mono text-xs uppercase tracking-[0.3em]">
          {subtitle}
        </span>
            </div>
            <div className="overflow-hidden">
                <h2 ref={titleRef} className="text-5xl md:text-7xl font-black text-white italic leading-[1.1]">
                    {title.split('<br />').map((line, i) => (
                        <span key={i} className="block">
              {line}
                            {i === 1 && <span className="text-white/20">.</span>}
            </span>
                    ))}
                </h2>
            </div>
        </div>
    );
}