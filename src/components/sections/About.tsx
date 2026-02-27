import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { useInViewOnce } from "@/hooks/useInViewOnce";

interface AboutProps {
  text: string;
}

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  isInView: boolean;
}

function StatCounter({ value, suffix, label, delay, isInView }: StatProps) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = count.on("change", (v) => {
      setDisplayValue(Math.round(v));
    });
    return unsubscribe;
  }, [count]);

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 1.5, delay, ease: "easeOut" });
    }
  }, [isInView, value, delay, count]);

  return (
    <GlassCard className="text-center">
      <div className="mb-1 text-3xl font-bold text-accent">
        <span>{displayValue}</span>
        <span>{suffix}</span>
      </div>
      <p className="text-sm text-text-secondary">{label}</p>
    </GlassCard>
  );
}

const stats = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "", label: "Engineers Mentored" },
  { value: 60, suffix: "%", label: "Regression Time Saved" },
];

export default function About({ text }: AboutProps) {
  const { ref, isInView } = useInViewOnce();

  return (
    <section id="about" className="px-4 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <AnimatedSection direction="left">
            <p className="text-lg leading-relaxed text-text-secondary">
              {text}
            </p>
          </AnimatedSection>

          <div ref={ref} className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={i * 0.15}
                  isInView={isInView}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
