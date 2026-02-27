import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  accent?: "teal" | "warm";
}

export default function GlassCard({
  children,
  className,
  hover = true,
  accent = "teal",
}: GlassCardProps) {
  const glowColor =
    accent === "teal"
      ? "rgba(0, 229, 191, 0.15)"
      : "rgba(255, 159, 67, 0.12)";
  const borderColor =
    accent === "teal"
      ? "rgba(0, 229, 191, 0.25)"
      : "rgba(255, 159, 67, 0.25)";

  return (
    <motion.div
      whileHover={
        hover
          ? {
              borderColor,
              boxShadow: `0 0 30px ${glowColor}`,
              y: -2,
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-xl border border-border/60 bg-bg-card/60 p-6 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
