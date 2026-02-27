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
      subtitle="Have a project in mind or want to connect? Reach out!"
    >
      <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
        <div>
          <AnimatedSection direction="left">
            <p className="mb-6 text-text-secondary">
              I'm always open to discussing new opportunities, collaboration on
              test automation, or sharing knowledge about quality engineering.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.2}>
            <a
              href={`mailto:${personal.email}`}
              className="group mb-4 flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <FaEnvelope />
              </div>
              <span className="text-lg font-medium text-text-primary transition-colors group-hover:text-accent">
                {personal.email}
              </span>
            </a>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.3}>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <FaMapMarkerAlt />
              </div>
              <span className="text-text-secondary">{personal.location}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.4}>
            <SocialLinks socials={personal.socials} size="lg" />
          </AnimatedSection>
        </div>

        {/* Decorative gradient orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden justify-center md:flex"
        >
          <div className="relative h-64 w-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent-dark/20 blur-3xl" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-accent/10 to-accent-light/10 blur-2xl" />
            <div className="absolute inset-16 rounded-full bg-accent/5 blur-xl" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
