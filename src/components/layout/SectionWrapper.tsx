import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("px-4 py-20 md:py-32", className)}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-2xl text-text-secondary">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
