import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useState } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
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
      animate(count, level, { duration: 1.2, delay, ease: "easeOut" });
    }
  }, [isInView, level, delay, count]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-text-primary">{name}</span>
        <span className="font-mono text-text-secondary">
          {displayValue}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-bg-card">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-dark to-accent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      </div>
    </div>
  );
}
