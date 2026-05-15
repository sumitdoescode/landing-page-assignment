"use client";

import { ArrowRight, Building2, BriefcaseBusiness, GraduationCap, Lightbulb, Play, Rocket, Star } from "lucide-react";
import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

export const heroStats = [
    { value: 15, suffix: "K+", label: "Students" },
    { value: 120, suffix: "+", label: "Industry Mentors" },
    { value: 95, suffix: "%", label: "Placement Support" },
];

export const floatingCards = [
    {
        title: "Explore Programs",
        text: "Career-focused pathways built around practical learning and future opportunities.",
        icon: Rocket,
    },
    {
        title: "Campus Tour",
        text: "Discover collaborative spaces, innovation labs, and a vibrant student environment.",
        icon: Building2,
    },
    {
        title: "Industry Mentorship",
        text: "Learn from mentors, workshops, and experiences connected to real-world careers.",
        icon: GraduationCap,
    },
];

export const proofPoints = [
    { label: "15K+ Students", icon: GraduationCap },
    { label: "120+ Industry Mentors", icon: BriefcaseBusiness },
    { label: "Innovation-Focused Programs", icon: Lightbulb },
    { label: "95% Placement Support", icon: Star },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.7 });
    const motionValue = useMotionValue(0);
    const [display, setDisplay] = useState(0);

    useMotionValueEvent(motionValue, "change", (latest) => {
        setDisplay(Math.round(latest));
    });

    useEffect(() => {
        if (!inView) return;
        const controls = animate(motionValue, value, { duration: 1.2, ease: "easeOut" });
        return () => controls.stop();
    }, [inView, motionValue, value]);

    return (
        <motion.span ref={ref}>
            {display}
            {suffix}
        </motion.span>
    );
}

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden border-b border-black/6">
            <div className="grid-pattern absolute inset-0 opacity-55" />
            <div className="absolute inset-x-0 top-0 h-112 bg-[radial-gradient(circle_at_top_left,rgba(247,238,204,0.3),transparent_30%)]" />

            <Navbar />

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl gap-12 px-5 pt-8 pb-20 lg:grid-cols-[minmax(0,1.04fr)_31rem] lg:items-center lg:gap-16 lg:px-8 lg:pt-20 lg:pb-24">
                <div className="order-2 lg:order-1">
                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
                        className="mt-8 max-w-5xl text-5xl font-bold tracking-tighter text-black sm:text-6xl lg:text-[5.5rem]"
                    >
                        Shape Your Future at JG University
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.62, delay: 0.16, ease: "easeOut" }} className="mt-8 max-w-2xl text-lg leading-8 text-black/72 sm:text-xl">
                        Experience world-class education, innovation-focused programs, industry mentorship, and a vibrant campus environment built to prepare students for the future.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.56, delay: 0.24, ease: "easeOut" }} className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <a href="#programs" className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 font-semibold text-[#f5eed7] shadow-[0_20px_44px_rgba(15,15,15,0.2)] transition hover:bg-zinc-900">
                            Explore programs
                            <ArrowRight className="size-4" />
                        </a>
                        <a href="#innovation" className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/15 bg-[#f1e7c0] px-6 py-3.5 font-semibold text-black transition hover:bg-[#f6edd0]">
                            <Play className="size-4 fill-current" />
                            Campus Tour
                        </a>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.62, delay: 0.32, ease: "easeOut" }} className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {heroStats.map((stat) => (
                            <div key={stat.label} className="dark-panel rounded-[1.6rem] border border-black/28 p-5 shadow-[0_18px_44px_rgba(15,15,15,0.14)]">
                                <div className="text-3xl font-semibold text-[#f5eed7]">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-[#f5eed7]/72">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.15, ease: "easeOut" }} className="relative order-1 h-105 sm:h-135 lg:order-2 lg:h-162.5">
                    {/* Main Image */}
                    <div className="glow-border relative h-full overflow-hidden rounded-[2rem] border border-black/12 bg-[#241f16] p-3 shadow-[0_28px_90px_rgba(15,15,15,0.18)]">
                        <img src="/main/1.avif" alt="Students collaborating in a modern campus environment" className="h-full w-full rounded-[1.5rem] object-cover" />
                    </div>

                    {/* Floating Card 1 */}
                    <div className="absolute -left-3 top-12 hidden w-56 lg:block">
                        <motion.div whileHover={{ y: -4 }} className="dark-panel rounded-2xl border border-black/30 p-4 shadow-[0_20px_50px_rgba(15,15,15,0.12)]">
                            <p className="text-sm font-semibold text-[#f5eed7]">{floatingCards[0].title}</p>

                            <p className="mt-2 text-sm leading-6 text-[#f5eed7]/72">{floatingCards[0].text}</p>
                        </motion.div>
                    </div>

                    {/* Floating Card 2 */}
                    <div className="absolute -right-4 top-28 hidden w-52 xl:block">
                        <motion.div whileHover={{ y: -4 }} className="dark-panel rounded-2xl border border-black/30 p-4 shadow-[0_20px_50px_rgba(15,15,15,0.12)]">
                            <p className="text-sm font-semibold text-[#f5eed7]">{floatingCards[1].title}</p>

                            <p className="mt-2 text-sm leading-6 text-[#f5eed7]/72">{floatingCards[1].text}</p>
                        </motion.div>
                    </div>

                    {/* Floating Card 3 */}
                    <div className="absolute bottom-8 left-8 hidden w-60 xl:block">
                        <motion.div whileHover={{ y: -4 }} className="dark-panel rounded-2xl border border-black/30 p-4 shadow-[0_20px_50px_rgba(15,15,15,0.12)]">
                            <p className="text-sm font-semibold text-[#f5eed7]">{floatingCards[2].title}</p>

                            <p className="mt-2 text-sm leading-6 text-[#f5eed7]/72">{floatingCards[2].text}</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-24"
            >
                <div className="dark-panel grid gap-3 rounded-[1.8rem] border border-black/30 p-4 shadow-[0_18px_40px_rgba(15,15,15,0.12)] sm:grid-cols-2 lg:grid-cols-4">
                    {proofPoints.map((point) => {
                        const Icon = point.icon;
                        return (
                            <div key={point.label} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/4 p-4">
                                <span className="flex size-10 items-center justify-center rounded-xl bg-[#dcc47a] text-black">
                                    <Icon className="size-5" />
                                </span>
                                <p className="text-sm font-medium leading-6 text-[#f5eed7]/82">{point.label}</p>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
