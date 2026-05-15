"use client";

import { motion } from "motion/react";
import { MonitorSmartphone, Lightbulb, Orbit, BookOpen } from "lucide-react";

export const innovationHighlights = [
    {
        title: "Smart Classrooms",
        text: "Modern teaching spaces designed to support interactive and engaging learning experiences.",
        icon: MonitorSmartphone,
    },
    {
        title: "Innovation Labs",
        text: "Dedicated labs that encourage experimentation, problem solving, and practical exploration.",
        icon: Lightbulb,
    },
    {
        title: "Startup Incubation",
        text: "A culture that supports entrepreneurship, mentorship, and student-led ideas.",
        icon: Orbit,
    },
    {
        title: "Collaborative Learning Spaces",
        text: "Student-focused spaces that encourage teamwork, discussion, and creativity.",
        icon: BookOpen,
    },
];

export default function Campus() {
    return (
        <section id="innovation" className="bg-transparent px-5 py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease: "easeOut" }} className="max-w-4xl">
                    <p className="inline-flex rounded-full border border-black/15 bg-[#f1e7c0] px-3 py-1 text-sm font-semibold text-black">Campus & Innovation</p>
                    <h2 className="mt-6 text-4xl font-bold tracking-tighter text-black sm:text-5xl">An Environment Designed For Growth</h2>
                    <p className="mt-5 max-w-3xl text-lg leading-7 text-black/68">Modern infrastructure, collaborative spaces, innovation labs, and student-focused experiences that inspire learning and creativity.</p>
                </motion.div>

                <div className="mt-12 grid gap-5 lg:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        whileHover={{ y: -4 }}
                        className="relative min-h-112 overflow-hidden rounded-[2rem] border border-black/8 lg:col-span-7"
                    >
                        <div role="img" aria-label="Smart classroom collaboration" className="absolute inset-0 bg-[url('/main/4.jpg')] bg-cover bg-center transition duration-500 hover:scale-[1.03]" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4))]" />
                        <div className="absolute bottom-0 left-0 right-0 p-7">
                            <div className="w-fit rounded-full bg-white/86 px-3 py-1 text-sm font-semibold text-zinc-900">Smart Classrooms</div>
                            <p className="mt-4 max-w-md text-sm leading-7 text-white">Modern infrastructure and learning spaces built to inspire student growth and creativity.</p>
                        </div>
                    </motion.div>

                    <div className="grid gap-4 lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
                            whileHover={{ y: -4 }}
                            className="relative min-h-52 overflow-hidden rounded-[2rem] border border-black/8"
                        >
                            <div role="img" aria-label="Innovation lab" className="absolute inset-0 bg-[url('/main/5.jpg')] bg-cover bg-center transition duration-500 hover:scale-[1.03]" />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5))]" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-lg font-semibold text-white">Startup Incubation</p>
                                <p className="mt-2 text-sm leading-7 text-zinc-100">An innovation-focused ecosystem that encourages ideas, startups, and collaborative learning.</p>
                            </div>
                        </motion.div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {innovationHighlights.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.article
                                        key={item.title}
                                        initial={{ opacity: 0, y: 22 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.42, delay: 0.1 + index * 0.04, ease: "easeOut" }}
                                        whileHover={{ y: -4 }}
                                        className="dark-panel rounded-[1.65rem] border border-black/60 p-6 shadow-[0_18px_44px_rgba(15,15,15,0.16)]"
                                    >
                                        <div className="flex size-11 items-center justify-center rounded-2xl bg-[#dcc47a] text-black">
                                            <Icon className="size-5" />
                                        </div>
                                        <h3 className="mt-6 text-lg font-semibold text-[#f5eed7]">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-[#f5eed7]/72">{item.text}</p>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
