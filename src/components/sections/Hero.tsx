import { motion } from "motion/react";
import type { PersonalInfo } from "@/data/types";
import Typewriter from "@/components/ui/Typewriter";
import ParticleBackground from "@/components/ui/ParticleBackground";
import SocialLinks from "@/components/ui/SocialLinks";
import { FaChevronDown } from "react-icons/fa";

interface HeroProps {
  personal: PersonalInfo;
}

function GeometricVisual() {
  return (
    <div className="relative h-80 w-80 md:h-[420px] md:w-[420px]">
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="h-full w-full rounded-full border border-accent/20" />
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent-warm" />
      </motion.div>

      {/* Inner counter-rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10"
      >
        <div className="h-full w-full rounded-full border border-dashed border-accent-warm/15" />
        <div className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent-warm" />
      </motion.div>

      {/* Hexagonal center glow */}
      <div className="absolute inset-16 md:inset-20">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-warm/10 blur-2xl" />
          <div className="absolute inset-0 rotate-45 rounded-3xl border border-accent/20 bg-bg-card/30 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-5xl font-bold tracking-tighter md:text-6xl">
              <span className="text-gradient-teal">Y</span>
              <span className="text-gradient-warm">H</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating accent dots */}
      {[
        { x: "15%", y: "20%", size: 3, delay: 0 },
        { x: "80%", y: "30%", size: 2, delay: 1 },
        { x: "25%", y: "75%", size: 2.5, delay: 0.5 },
        { x: "70%", y: "80%", size: 2, delay: 1.5 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -8, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-accent"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero({ personal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      <div data-print-hide>
        <ParticleBackground count={35} />
      </div>

      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" data-print-hide />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.2fr_1fr]">
        {/* Text — left-aligned, not centered */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              {personal.title}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-2 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="text-gradient-teal">
              {personal.name.split(" ")[0]}
            </span>
            <br />
            <span className="text-text-primary">
              {personal.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-5 font-mono text-sm text-text-secondary md:text-base"
          >
            <Typewriter
              words={[
                "Test Automation Architect",
                "Quality Champion",
                "Framework Builder",
                "CI/CD Pipeline Expert",
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-8 max-w-md text-sm leading-relaxed text-text-muted"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mb-8 flex flex-wrap gap-3"
            data-print-hide
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-bg-primary transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 -translate-x-full bg-accent-light transition-transform duration-300 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border-light px-6 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-accent/40 hover:text-accent"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <SocialLinks socials={personal.socials} />
          </motion.div>
        </div>

        {/* Geometric visual — right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 0.3,
          }}
          className="flex justify-center"
          data-print-hide
        >
          <GeometricVisual />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { delay: 2, duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
        aria-label="Scroll down"
        data-print-hide
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-text-muted">
          Scroll
        </span>
        <FaChevronDown size={12} className="text-text-muted" />
      </motion.a>
    </section>
  );
}
