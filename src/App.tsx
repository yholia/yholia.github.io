import { cvData } from "@/data/cv";
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
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main>
        <Hero personal={cvData.personal} />
        <About text={cvData.about} />
        <Skills skills={cvData.skills} />
        <Experience experience={cvData.experience} />
        <Projects projects={cvData.projects} />
        <Education education={cvData.education} />
        <Certifications certifications={cvData.certifications} />
        <Contact personal={cvData.personal} />
      </main>
      <Footer socials={cvData.personal.socials} />
    </div>
  );
}
