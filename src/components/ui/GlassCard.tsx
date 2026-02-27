import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              borderColor: "rgba(108, 99, 255, 0.3)",
              boxShadow: "0 0 30px rgba(108, 99, 255, 0.1)",
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-2xl border border-border/50 bg-bg-card/40 p-6 backdrop-blur-md",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
