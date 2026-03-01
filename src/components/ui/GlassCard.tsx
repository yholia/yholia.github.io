import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { usePrintMode } from "@/contexts/PrintContext";

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
  const isPrinting = usePrintMode();

  const glowColor =
    accent === "teal"
      ? "rgba(0, 229, 191, 0.15)"
      : "rgba(255, 159, 67, 0.12)";
  const borderColor =
    accent === "teal"
      ? "rgba(0, 229, 191, 0.25)"
      : "rgba(255, 159, 67, 0.25)";

  const cardClass = cn(
    "rounded-xl border border-border/60 bg-bg-card/60 p-6 backdrop-blur-sm",
    className
  );

  if (isPrinting) {
    return <div className={cardClass}>{children}</div>;
  }

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
      className={cardClass}
    >
      {children}
    </motion.div>
  );
}
