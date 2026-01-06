"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SendHorizontal } from "lucide-react";

export default function Contact() {
    const formRef = useRef(null);

    useEffect(() => {
        gsap.from(formRef.current, {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: formRef.current,
                start: "top 85%",
            },
        });
    }, []);

    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
            <div
                ref={formRef}
                className="relative overflow-hidden bg-slate-900/40 border border-white/10 rounded-[3rem] flex flex-col lg:flex-row"
            >
                {/* Contact Info Side */}
                <div className="lg:w-2/5 p-12 lg:p-16 bg-accent flex flex-col justify-between">
                    <div>
                        <h2 className="text-primary text-5xl font-black leading-tight mb-6">
                            READY TO <br /> START A <br /> PROJECT?
                        </h2>
                        <p className="text-primary/70 font-medium">
                            Shoot me a message and let's turn your ideas into a digital masterpiece.
                        </p>
                    </div>
                    <div className="mt-12">
                        <p className="text-primary/40 text-xs font-bold uppercase tracking-widest mb-2">Direct Mail</p>
                        <a href="mailto:mahedihasan9065@gmail.com" className="text-primary text-2xl font-bold underline">mahedihasan9065@gmail.com</a>
                    </div>
                </div>

                {/* Form Side */}
                <div className="lg:w-3/5 p-12 lg:p-16">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <label className="text-white/30 text-xs font-mono uppercase">Full Name</label>
                            <input
                                type="text"
                                className="bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none text-white transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-white/30 text-xs font-mono uppercase">Email Address</label>
                            <input
                                type="email"
                                className="bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none text-white transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-white/30 text-xs font-mono uppercase">Project Brief</label>
                            <textarea
                                rows="4"
                                className="bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none text-white transition-colors resize-none"
                                placeholder="Tell me about your goals..."
                            />
                        </div>

                        <div className="md:col-span-2 flex justify-end pt-6">
                            <button className="flex items-center gap-3 bg-accent text-primary font-black px-10 py-5 rounded-full hover:scale-105 transition-transform active:scale-95 group">
                                SEND MESSAGE
                                <SendHorizontal size={20} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}