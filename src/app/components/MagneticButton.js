// components/MagneticButton.js
"use client";
import { useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({ children }) {
    const btnRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = btnRef.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        gsap.to(btnRef.current, { x: x * 0.9, y: y * 0.9, duration: 0.1 });
    };

    const handleMouseLeave = () => {
        gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.3 });
    };

    return (
        <button
            ref={btnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold transition-transform active:scale-95"
        >
            {children}
        </button>
    );
}