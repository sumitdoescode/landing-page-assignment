import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "JG University",
    description: "A premium modern university landing page built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("h-full", "antialiased", "font-sans")}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
