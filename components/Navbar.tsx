"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Innovation", href: "#innovation" },
    { label: "Testimonials", href: "#stories" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40">
            <div className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
                <div className="glass-panel glow-border relative flex items-center justify-between rounded-[1.4rem] px-5 py-3.5 shadow-[0_18px_50px_rgba(15,15,15,0.12)] backdrop-blur-2xl">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="flex size-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#f5c542,#eab308)] text-[#111111] shadow-[0_14px_30px_rgba(245,197,66,0.22)]">
                            <GraduationCap className="size-5" />
                        </span>
                        <span>
                            <span className="block text-base font-bold leading-none text-zinc-950">JG University</span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-8 text-sm text-zinc-800 lg:flex">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className="transition hover:text-black">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <a href="#cta" className="hidden items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-[#f5eed7] transition hover:bg-zinc-900 sm:inline-flex">
                            Apply Now
                            <ArrowRight className="size-4" />
                        </a>
                        <button
                            type="button"
                            aria-label="Toggle navigation"
                            onClick={() => setOpen((value) => !value)}
                            className="inline-flex size-10 items-center justify-center rounded-xl border border-black/15 bg-[#f1e7c0] text-zinc-900 shadow-sm transition hover:bg-[#f6edd0] lg:hidden"
                        >
                            {open ? <X className="size-4" /> : <Menu className="size-4" />}
                        </button>
                    </div>

                    <AnimatePresence>
                        {open ? (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.18, ease: "easeOut" }}
                                className="absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-2xl border border-black/10 bg-[#f1e7c0]/96 p-4 shadow-[0_24px_60px_rgba(15,15,15,0.12)] backdrop-blur-2xl"
                            >
                                <div className="grid gap-2">
                                    {navItems.map((item) => (
                                        <a key={item.href} href={item.href} className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-black/6 hover:text-black" onClick={() => setOpen(false)}>
                                            {item.label}
                                        </a>
                                    ))}
                                    <a href="#cta" className="mt-1 rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold text-[#f5eed7]" onClick={() => setOpen(false)}>
                                        Apply Now
                                    </a>
                                </div>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}
