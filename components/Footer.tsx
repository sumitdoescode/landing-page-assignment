import { GraduationCap } from "lucide-react";

export const footerQuickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Innovation", href: "#innovation" },
    { label: "Testimonials", href: "#stories" },
    { label: "Contact", href: "#contact" },
];

export const footerPrograms = ["Artificial Intelligence", "Full Stack Development", "Cyber Security", "Business Management", "UI/UX Design"];

export default function Footer() {
    return (
        <footer id="contact" className="relative overflow-hidden border-t border-black/10 bg-black">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1fr_auto_auto] lg:px-8">
                <div>
                    <div className="flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-[#dcc47a] text-black">
                            <GraduationCap className="size-5" />
                        </span>
                        <div>
                            <p className="font-semibold text-[#f5eed7]">JG University</p>
                            <p className="text-sm text-[#f5eed7]/58">Ahmedabad, Gujarat</p>
                        </div>
                    </div>
                    <p className="mt-5 max-w-sm text-sm leading-7 text-[#f5eed7]/68">© 2026 JG University. All rights reserved.</p>
                </div>

                <div>
                    <p className="text-sm font-semibold text-[#f5eed7]">Quick Links</p>
                    <div className="mt-4 grid gap-2 text-sm text-[#f5eed7]/64">
                        {footerQuickLinks.map((item) => (
                            <a key={item.href} href={item.href} className="transition hover:text-[#dcc47a]">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold text-[#f5eed7]">Programs</p>
                    <div className="mt-4 grid gap-2 text-sm text-[#f5eed7]/64">
                        {footerPrograms.map((item) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 py-6 text-sm text-[#f5eed7]/64 lg:px-8">
                <p className="font-semibold text-[#f5eed7]">Contact</p>
                <a href="mailto:[EMAIL_ADDRESS]" className="transition hover:text-[#dcc47a]">
                    admissions@jguni.edu
                </a>
                <p>+91 98765 43210</p>
                <p>Ahmedabad, Gujarat</p>
            </div>
        </footer>
    );
}
