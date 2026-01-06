// const designRow1 = [
//     "/design1.png", "/design2.png", "/design3.png", "/design4.png", "/design5.png"
// ];
// const designRow2 = [
//     "/design6.jpg", "/design7.jpg", "/design8.jpg", "/design9.jpg", "/design10.jpg"
// ];
// const designRow3 = [
//     "/design11.jpg", "/design12.jpg", "/design13.jpg", "/design14.jpg", "/design15.jpg"
// ];
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import TitleReveal from "@/app/components/TitleReveal";

const designImages = [
    "/graphics/design1.png", "/graphics/design2.png", "/graphics/design3.png", "/graphics/design4.png", "/graphics/design5.png",
    "/graphics/design6.png", "/graphics/design7.png", "/graphics/design8.png", "/graphics/design9.png", "/graphics/design10.png",
    "/graphics/design11.png",
];

export default function GraphicShowcase() {
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Row 1 & 3: Moving Left
            [row1Ref.current].forEach((el) => {
                const w = el.scrollWidth / 2;
                gsap.to(el, {
                    x: -w,
                    duration: 40, // Slower for 3D appreciation
                    ease: "none",
                    repeat: -1,
                });
            });

            // Row 2: Moving Right
            const row2 = row2Ref.current;
            const w2 = row2.scrollWidth / 2;
            gsap.set(row2, { x: -w2 });
            gsap.to(row2, {
                x: 0,
                duration: 40,
                ease: "none",
                repeat: -1,
            });
        });
        return () => ctx.revert();
    }, []);

    const DesignCard = ({ src, rotationY }) => (
        <div
            className="overflow-hidden relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-0 shrink-0 group cursor-pointer "
        >
            {/* The 3D Wrapper */}
            <div
                className={`relative w-full h-full transition-all duration-700 ease-out preserve-3d shadow-2xl overflow-hidden border border-white/10 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:scale-110 group-hover:translate-z-20`}
                style={{ transform: `rotateY(${rotationY}deg) rotateX(5deg)` }}
            >
                <Image
                    src={src}
                    alt="3D Design"
                    fill
                    className="object-cover  transition-all duration-1000"
                />
            </div>
        </div>
    );

    return (
        <section id="graphics" className="py-24 bg-primary overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-10 mb-20">
                <TitleReveal
                    subtitle="// Visual Artistry"
                    title="GRAPHIC <br /> Design SHOWCASE"
                />
            </div>

            {/* FADE MASK + 3D PERSPECTIVE CONTAINER */}
            <div className="overflow-hidden relative space-y-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">

                {/* Row 1: Left + Angled Right */}
                <div className="flex">
                    <div ref={row1Ref} className="flex">
                        {[...designImages, ...designImages].map((src, i) => (
                            <DesignCard key={i} src={src} rotationY={-15} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Right + Angled Left */}
                <div className="flex">
                    <div ref={row2Ref} className="flex">
                        {[...designImages, ...designImages].map((src, i) => (
                            <DesignCard key={i} src={src} rotationY={15} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom CSS for 3D Transforms (add this to your globals.css or use a style tag) */}
            <style jsx>{`
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .translate-z-20 {
                    transform: translateZ(50px);
                }
            `}</style>

            {/* Background Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-[#5CFF00]/5 blur-[150px] -z-10" />
        </section>
    );
}