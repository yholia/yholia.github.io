import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useState } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
  accent?: "teal" | "warm";
}

export default function SkillBar({ name, level, delay = 0, accent = "teal" }: SkillBarProps) {
  const { ref, isInView } = useInViewOnce();
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
      animate(count, level, { duration: 1, delay, ease: "easeOut" });
    }
  }, [isInView, level, delay, count]);

  const gradientClass =
    accent === "teal"
      ? "from-accent-dark to-accent"
      : "from-accent-warm to-accent-warm-light";

  return (
    <div ref={ref} className="group space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-text-primary transition-colors group-hover:text-accent">
          {name}
        </span>
        {/* Screen: animated counter. Print: actual level value. */}
        <span className="font-mono text-text-muted print:hidden">{displayValue}</span>
        <span className="hidden font-mono text-text-muted print:inline">{level}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-bg-elevated">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradientClass}`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          style={{ originX: 0, ["--bar-width" as string]: `${level}%` }}
        />
      </div>
    </div>
  );
}
