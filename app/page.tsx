import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import About from "@/components/About";
import Campus from "@/components/Campus";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden bg-(--page-bg) text-foreground">
            <Hero />
            <About />
            <Programs />
            <Campus />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}
