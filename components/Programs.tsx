"use client";

import { motion } from "motion/react";
import { ArrowRight, Atom, Code2, DatabaseZap, LayoutPanelTop, LockKeyhole, Users } from "lucide-react";

export const programs = [
    {
        title: "AI & Machine Learning",
        description: "Build intelligent systems and learn modern AI technologies shaping the future.",
        icon: Atom,
    },
    {
        title: "Full Stack Development",
        description: "Master frontend, backend, databases, APIs, and real-world product development.",
        icon: Code2,
    },
    {
        title: "Cyber Security",
        description: "Learn digital security, ethical hacking, and modern cybersecurity practices.",
        icon: LockKeyhole,
    },
    {
        title: "Data Science",
        description: "Work with data analytics, visualization, predictive systems, and business intelligence.",
        icon: DatabaseZap,
    },
    {
        title: "UI/UX Design",
        description: "Create intuitive digital experiences with modern design principles and tools.",
        icon: LayoutPanelTop,
    },
    {
        title: "Business Management",
        description: "Develop leadership, communication, and strategic management skills for modern businesses.",
        icon: Users,
    },
];

export default function Programs() {
    return (
        <section id="programs" className="border-y border-black/10 bg-[#241f16] px-5 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl lg:px-3">
                <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease: "easeOut" }} className="max-w-4xl">
                    <div>
                        <p className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-sm font-semibold text-[#dcc47a]">Programs & Opportunities</p>
                        <h2 className="mt-6 text-4xl font-bold leading-tighter text-[#f5eed7] sm:text-5xl">Explore Career-Focused Programs</h2>
                        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#f5eed7]/72">Specialized programs designed to equip students with practical skills, innovation mindset, and industry-ready experience.</p>
                    </div>
                </motion.div>

                <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {programs.map((program, index) => {
                        const Icon = program.icon;
                        return (
                            <motion.article
                                key={program.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.42, delay: index * 0.05, ease: "easeOut" }}
                                whileHover={{ y: -6 }}
                                className="rounded-[1.9rem] bg-[linear-gradient(180deg,rgba(220,196,122,1),rgba(241,231,192,1))] p-px shadow-[0_18px_44px_rgba(15,15,15,0.18)]"
                            >
                                <div className="h-full rounded-[1.8rem] border border-black/12 bg-[#efe2b5] p-7">
                                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#241f16] text-[#dcc47a]">
                                        <Icon className="size-6" />
                                    </div>
                                    <h3 className="mt-7 text-2xl font-semibold text-black">{program.title}</h3>
                                    <p className="mt-4 text-sm leading-7 text-black/72">{program.description}</p>
                                    <a href="#cta" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-black">
                                        Explore
                                        <ArrowRight className="size-4" />
                                    </a>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
