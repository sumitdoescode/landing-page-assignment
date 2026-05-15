"use client";

import { CirclePlay, Handshake, Lightbulb, ScanSearch } from "lucide-react";
import { motion } from "motion/react";

export const strengths = [
    {
        title: "Industry Collaboration",
        text: "Learn with real-world exposure through partnerships, workshops, and mentorship programs.",
        icon: Handshake,
        className: "lg:col-span-3",
    },
    {
        title: "Experiential Learning",
        text: "Hands-on projects, innovation labs, and practical sessions designed for modern careers.",
        icon: CirclePlay,
        className: "lg:col-span-3",
    },
    {
        title: "Future-Focused Curriculum",
        text: "Programs aligned with emerging technologies, AI, and modern industry demands.",
        icon: ScanSearch,
        className: "lg:col-span-3",
    },
    {
        title: "Innovation Ecosystem",
        text: "A campus culture that encourages creativity, startups, leadership, and innovation.",
        icon: Lightbulb,
        className: "lg:col-span-3",
    },
];

export default function About() {
    return (
        <section id="about" className="bg-transparent px-5 py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div initial={{ opacity: 0, x: 26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease: "easeOut" }} className="max-w-4xl">
                    <p className="inline-flex rounded-full border border-black/15 bg-[#f1e7c0] px-3 py-1 text-sm font-semibold text-black">Why Choose JG University</p>
                    <h2 className="mt-6 text-4xl font-bold tracking-tighter text-black sm:text-5xl">A Modern Learning Experience Built Around Innovation</h2>
                    <p className="mt-5 max-w-3xl text-lg leading-7 text-black/68">We combine academic excellence, industry collaboration, and practical learning to create an ecosystem where students can grow, innovate, and lead with confidence.</p>
                </motion.div>

                <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="relative min-h-80 overflow-hidden rounded-[2rem] border border-black/10"
                    >
                        <div className="absolute inset-0 bg-[url('/main/2.avif')] bg-cover bg-center" aria-hidden="true" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.6),rgba(17,17,17,0.7))]" />
                        <div className="absolute bottom-0 left-0 right-0 p-7">
                            <p className="text-sm font-semibold tracking-[0.12em] text-[#f5eed7]/82">CAMPUS LIFE</p>
                            <p className="mt-3 max-w-lg text-2xl font-semibold leading-tight text-white">A learning environment shaped by collaboration, mentorship, and practical experience.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
                        className="relative overflow-hidden rounded-[2rem] border border-black/12 shadow-[0_14px_34px_rgba(15,15,15,0.08)]"
                    >
                        <div className="absolute inset-0 bg-[url('/main/3.jpg')] bg-cover bg-center" aria-hidden="true" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.8),rgba(17,17,17,0.6))]" />
                        <div className="relative p-7">
                            <p className="text-sm font-semibold tracking-[0.12em] text-[#f5eed7]/78">STUDENT EXPERIENCE</p>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Built to support growth inside and outside the classroom.</h3>
                            <p className="mt-4 leading-8 text-[#f5eed7]/78">From modern classrooms and innovation labs to mentorship and project-based learning, students get an environment designed to prepare them for real opportunities.</p>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 grid gap-5 lg:grid-cols-12">
                    {strengths.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                                whileHover={{ y: -6 }}
                                className={`${item.className} dark-panel group rounded-[1.9rem] border border-black/28 p-7 shadow-[0_18px_44px_rgba(15,15,15,0.12)]`}
                            >
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#dcc47a] text-black">
                                    <Icon className="size-6" />
                                </div>
                                <h3 className="mt-7 text-2xl font-semibold text-[#f5eed7]">{item.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-[#f5eed7]/72">{item.text}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
