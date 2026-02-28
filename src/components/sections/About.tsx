import {animate, motion, useMotionValue} from "motion/react";
import {useEffect, useState} from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import {useInViewOnce} from "@/hooks/useInViewOnce";

interface AboutProps {
  text: string;
}

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  isInView: boolean;
  accent: "teal" | "warm";
}

function StatCounter({ value, suffix, label, delay, isInView, accent }: StatProps) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    return count.on("change", (v) => {
      setDisplayValue(Math.round(v));
    });
  }, [count]);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 1.5, delay, ease: "easeOut" });
    }
  }, [isInView, value, delay, count]);

  return (
    <GlassCard className="text-center" accent={accent}>
      <div className={`mb-1 font-display text-3xl font-bold ${accent === "teal" ? "text-gradient-teal" : "text-gradient-warm"}`}>
        {/* Screen: animated counter. Print: actual value. */}
        <span data-print-hide>{displayValue}</span>
        <span data-print-only>{value}</span>
        <span>{suffix}</span>
      </div>
      <p className="font-mono text-xs uppercase tracking-wider text-text-muted">{label}</p>
    </GlassCard>
  );
}

const stats: { value: number; suffix: string; label: string; accent: "teal" | "warm" }[] = [
  { value: 9, suffix: "+", label: "Years Experience", accent: "teal" },
  { value: 15, suffix: "+", label: "Projects Delivered", accent: "warm" },
  { value: 9, suffix: "", label: "Engineers Mentored", accent: "teal" },
  { value: 60, suffix: "%", label: "Regression Saved", accent: "warm" },
];

export default function About({ text }: AboutProps) {
  const { ref, isInView } = useInViewOnce();

  const heading = (
    <>
      <div className="flex items-center gap-4 mb-3">
        <div className="h-px w-12 bg-accent/50" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
          about
        </span>
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-gradient-teal md:text-5xl">
        About Me
      </h2>
    </>
  );

  return (
    <section id="about" className="section-divider relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Screen: animated heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
          data-print-hide
        >
          {heading}
        </motion.div>
        {/* Print: static heading */}
        <div className="mb-10 md:mb-14" data-print-only>
          {heading}
        </div>

        <div className="grid items-start gap-12 md:grid-cols-[1.3fr_1fr]">
          <AnimatedSection direction="left">
            <p className="text-base leading-[1.8] text-text-secondary">
              {text}
            </p>
            {/* Decorative element */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-accent/30" />
              <div className="h-1 w-4 rounded-full bg-accent-warm/30" />
              <div className="h-1 w-2 rounded-full bg-accent/20" />
            </div>
          </AnimatedSection>

          <div ref={ref} className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08}>
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={i * 0.12}
                  isInView={isInView}
                  accent={stat.accent}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
