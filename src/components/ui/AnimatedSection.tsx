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
      {/* Screen: animated. data-print-hide removes it from print layout entirely. */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-80px" }}
        transition={{ duration, delay, ease: "easeOut" }}
        className={cn(className)}
        data-print-hide
      >
        {children}
      </motion.div>
      {/* Print: static copy. data-print-only hides on screen via @media screen rule,
          so Chromium includes it in the print layout tree from the start. */}
      <div className={cn(className)} data-print-only>
        {children}
      </div>
    </>
  );
}
