import { motion } from "motion/react";
import type { PersonalInfo } from "@/data/types";
import Typewriter from "@/components/ui/Typewriter";
import ParticleBackground from "@/components/ui/ParticleBackground";
import SocialLinks from "@/components/ui/SocialLinks";
import { FaChevronDown } from "react-icons/fa";

interface HeroProps {
  personal: PersonalInfo;
}

export default function Hero({ personal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      <ParticleBackground count={50} />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-2 font-mono text-sm text-accent"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
          >
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              {personal.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-4 text-xl font-semibold text-text-primary md:text-2xl"
          >
            <Typewriter
              words={[
                personal.title,
                "Test Automation Architect",
                "Quality Champion",
                "Framework Builder",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mb-6 max-w-lg text-text-secondary"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mb-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent/50 hover:text-accent"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <SocialLinks socials={personal.socials} />
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.4,
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-accent-light opacity-50 blur-xl" />
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-2 border-accent/30 bg-bg-card md:h-72 md:w-72">
              <span className="text-6xl font-bold text-accent md:text-7xl">
                {personal.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted"
        aria-label="Scroll down"
      >
        <FaChevronDown size={20} />
      </motion.a>
    </section>
  );
}
