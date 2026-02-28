import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  accent?: "teal" | "warm";
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
  accent = "teal",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("section-divider relative px-6 py-16 md:py-24", className)}
    >
      <div className="mx-auto max-w-6xl">
        {/* Screen: animated header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14 print:hidden"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className={cn(
              "h-px flex-1 max-w-12",
              accent === "teal" ? "bg-accent/50" : "bg-accent-warm/50"
            )} />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
              {id.replace("-", " ")}
            </span>
          </div>
          <h2 className={cn(
            "font-display text-3xl font-bold tracking-tight md:text-5xl",
            accent === "teal" ? "text-gradient-teal" : "text-gradient-warm"
          )}>
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-xl text-text-secondary text-sm leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
        {/* Print: static header */}
        <div className="mb-10 hidden print:block">
          <div className="flex items-center gap-4 mb-3">
            <div className={cn(
              "h-px flex-1 max-w-12",
              accent === "teal" ? "bg-accent/50" : "bg-accent-warm/50"
            )} />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
              {id.replace("-", " ")}
            </span>
          </div>
          <h2 className={cn(
            "font-display text-3xl font-bold tracking-tight md:text-5xl",
            accent === "teal" ? "text-gradient-teal" : "text-gradient-warm"
          )}>
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-xl text-text-secondary text-sm leading-relaxed">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
