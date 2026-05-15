"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export const testimonials = [
    {
        quote: "JG University helped me build practical skills and confidence through hands-on learning and mentorship.",
        name: "Aarav Sharma",
        role: "Full Stack Developer Intern",
        image: "/avatar/1.avif",
    },
    {
        quote: "The learning environment and industry exposure truly prepared me for real-world opportunities.",
        name: "Priya Mehta",
        role: "UI/UX Designer",
        image: "/avatar/2.avif",
    },
    {
        quote: "The innovation-driven culture motivated me to work on impactful projects and grow professionally.",
        name: "Rohan Verma",
        role: "AI & Data Science Student",
        image: "/avatar/3.avif",
    },
];

export default function Testimonials() {
    return (
        <section id="stories" className="border-y border-black/10 bg-[#efe2b5] px-5 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl lg:px-3">
                <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, ease: "easeOut" }} className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
                    <div>
                        <p className="inline-flex rounded-full border border-black/15 bg-[#f3e8bf] px-3 py-1 text-sm font-semibold text-black">Student Success Stories</p>
                        <h2 className="mt-6 text-4xl font-bold tracking-tighter text-black sm:text-5xl">What Students Say About Their Experience</h2>
                    </div>
                    <div className="dark-panel rounded-[1.9rem] border border-black/28 p-7 shadow-[0_18px_44px_rgba(15,15,15,0.12)]">
                        <p className="text-lg leading-8 text-[#f5eed7]">&quot;We are building a learning ecosystem where innovation, practical exposure, and student growth go hand in hand.&quot;</p>
                        <p className="mt-5 font-semibold text-[#f5eed7]">JG University</p>
                        <p className="mt-1 text-sm text-[#f5eed7]/65">Admissions Team</p>
                    </div>
                </motion.div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.article
                            key={item.name}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.42, delay: index * 0.05, ease: "easeOut" }}
                            whileHover={{ y: -4 }}
                            className="rounded-[1.9rem] border border-black/12 bg-[#f3e8bf] p-7 shadow-[0_14px_34px_rgba(15,15,15,0.08)]"
                        >
                            <div className="flex gap-1 text-black">
                                {Array.from({ length: 5 }).map((_, starIndex) => (
                                    <Star key={starIndex} className="size-4 fill-current" />
                                ))}
                            </div>
                            <p className="mt-5 leading-8 text-black/72">&quot;{item.quote}&quot;</p>
                            <div className="mt-6 flex items-center gap-4 border-t border-black/8 pt-4">
                                <img src={item.image} alt={item.name} className="size-14 rounded-2xl object-cover" />
                                <div>
                                    <p className="font-semibold text-black">{item.name}</p>
                                    <p className="mt-1 text-sm text-black/58">{item.role}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
