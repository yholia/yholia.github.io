import { useEffect } from "react";
import {cvData} from "@/data/cv";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function App() {
  useEffect(() => {
    const handleBeforePrint = () => {
      // Force all Motion-animated inline styles to their end state.
      // whileInView animations leave opacity:0 / transform on elements that
      // haven't scrolled into view — they'd be invisible in the PDF.
      document.querySelectorAll<HTMLElement>("[style]").forEach((el) => {
        el.style.setProperty("opacity", "1", "important");
        el.style.setProperty("transform", "none", "important");
      });
    };

    const handleAfterPrint = () => {
      // Remove the forced overrides so Motion can resume control.
      document.querySelectorAll<HTMLElement>("[style]").forEach((el) => {
        el.style.removeProperty("opacity");
        el.style.removeProperty("transform");
      });
      // Restore scroll position to top.
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

    return (
        <div className="noise-overlay min-h-screen bg-bg-primary text-text-primary">
            {/* Floating gradient mesh blobs */}
            <div className="pointer-events-none fixed inset-0 z-0" data-print-hide>
                <div
                    className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-[120px]"/>
                <div
                    className="absolute -right-32 top-2/3 h-[400px] w-[400px] rounded-full bg-accent-warm/[0.03] blur-[100px]"/>
                <div
                    className="absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full bg-accent/[0.02] blur-[80px]"/>
            </div>

            <Navbar/>
            <main className="relative z-10">
                <Hero personal={cvData.personal}/>
                <About text={cvData.about}/>
                <Skills skills={cvData.skills}/>
                <Experience experience={cvData.experience}/>
                {cvData.projects.length > 0 && (
                    <Projects projects={cvData.projects}/>
                )}
                <Education education={cvData.education}/>
                {cvData.certifications.length > 0 && (
                    <Certifications certifications={cvData.certifications}/>
                )}
                <Contact personal={cvData.personal}/>
            </main>
            <Footer socials={cvData.personal.socials}/>
        </div>
    );
}
