import { motion } from "motion/react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SocialLinks from "@/components/ui/SocialLinks";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { PersonalInfo } from "@/data/types";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface ContactProps {
  personal: PersonalInfo;
}

export default function Contact({ personal }: ContactProps) {
  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to connect? Reach out."
      accent="warm"
    >
      <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <AnimatedSection direction="left">
            <p className="mb-6 text-sm leading-relaxed text-text-secondary">
              I'm always open to discussing new opportunities, collaboration on
              test automation, or sharing knowledge about quality engineering.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.15}>
            <a
              href={`mailto:${personal.email}`}
              className="group mb-3 flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/5 text-accent transition-colors group-hover:bg-accent/10">
                <FaEnvelope size={14} />
              </div>
              <span className="font-mono text-sm text-text-primary transition-colors group-hover:text-accent">
                {personal.email}
              </span>
            </a>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.25}>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-warm/20 bg-accent-warm/5 text-accent-warm">
                <FaMapMarkerAlt size={14} />
              </div>
              <span className="text-sm text-text-secondary">{personal.location}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.35}>
            <SocialLinks socials={personal.socials} size="md" />
          </AnimatedSection>
        </div>

        {/* Decorative — abstract geometric element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="hidden items-center justify-center md:flex"
          data-print-hide
        >
          <div className="relative h-56 w-56">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-accent/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-dashed border-accent-warm/10"
            />
            <div className="absolute inset-12 rounded-2xl bg-gradient-to-br from-accent/5 to-accent-warm/5 blur-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-4xl font-bold tracking-tighter">
                <span className="text-gradient-teal">Let's</span>
                <br />
                <span className="text-gradient-warm">talk.</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
