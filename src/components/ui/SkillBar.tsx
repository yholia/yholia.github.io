import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useState } from "react";
import type React from "react";
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
        <span className="font-mono text-text-muted">{isInView ? displayValue : level}</span>
      </div>
      {/* --bar-fill lets @media print set the correct width via CSS var */}
      <div
        className="h-1.5 overflow-hidden rounded-full bg-bg-elevated"
        style={{ "--bar-fill": `${level}%` } as React.CSSProperties}
      >
        <motion.div
          className={`skill-bar-fill h-full rounded-full bg-gradient-to-r ${gradientClass}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
