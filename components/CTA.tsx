"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section id="cta" className="bg-transparent px-5 py-20 lg:px-8 lg:py-24">
            <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, ease: "easeOut" }} className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-[2.2rem] border border-black/28 shadow-[0_24px_64px_rgba(15,15,15,0.14)]">
                    <div className="absolute inset-0 bg-[url('/main/6.jpg')] bg-cover bg-center" aria-hidden="true" />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.66)_48%,rgba(0,0,0,0.78))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,196,122,0.22),transparent_24%)]" />

                    <div className="relative p-8 sm:p-10 lg:p-14">
                        <div className="max-w-3xl">
                            <p className="inline-flex rounded-full border border-white/16 bg-white/8 px-3 py-1 text-sm font-semibold text-[#f5eed7]">Admissions Open</p>
                            <h2 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-[#f5eed7] sm:text-5xl">Build Your Future With JG University</h2>
                            <p className="mt-5 max-w-2xl text-lg leading-7 text-[#f5eed7]/78">Join a future-focused learning ecosystem designed to help students innovate, grow, and succeed.</p>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href="mailto:vikas@codingjr.online" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#dcc47a] px-6 py-3.5 font-semibold text-black transition hover:bg-[#e6d094]">
                                Start Your Journey
                                <ArrowRight className="size-4" />
                            </a>
                            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/16 bg-white/6 px-6 py-3.5 font-semibold text-[#f5eed7] transition hover:bg-white/10">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
