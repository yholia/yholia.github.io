import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const offsets: Record<string, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: AnimatedSectionProps) {
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <>
      {/* Screen: animated. Hidden in print so opacity:0 doesn't blank the content. */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-80px" }}
        transition={{ duration, delay, ease: "easeOut" }}
        className={cn(className, "print:hidden")}
      >
        {children}
      </motion.div>
      {/* Print: static copy, always visible. */}
      <div className={cn(className, "hidden print:block")}>{children}</div>
    </>
  );
}
