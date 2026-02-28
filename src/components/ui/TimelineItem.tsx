import { motion } from "motion/react";
import type { Experience } from "@/data/types";
import GlassCard from "./GlassCard";
import { usePrintMode } from "@/contexts/PrintContext";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({
  experience,
  index,
}: TimelineItemProps) {
  const isPrinting = usePrintMode();
  const isEven = index % 2 === 0;

  const cardContent = (
    <GlassCard accent={isEven ? "teal" : "warm"}>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className={`font-mono text-[10px] uppercase tracking-wider ${
          isEven ? "text-accent" : "text-accent-warm"
        }`}>
          {experience.startDate} — {experience.endDate ?? "Present"}
        </span>
        <span className="text-[10px] text-text-muted">
          {experience.location}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-text-primary">
        {experience.role}
      </h3>
      <p className={`mb-3 text-sm font-medium ${
        isEven ? "text-accent/70" : "text-accent-warm/70"
      }`}>
        {experience.company}
      </p>
      <p className="mb-3 text-xs leading-relaxed text-text-secondary">
        {experience.description}
      </p>
      <ul className="mb-4 space-y-1.5">
        {experience.highlights.map((h, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-xs text-text-secondary"
          >
            <span className={`mt-1 h-1 w-1 shrink-0 rounded-full ${
              isEven ? "bg-accent/60" : "bg-accent-warm/60"
            }`} />
            {h}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className={`rounded-md px-2 py-0.5 font-mono text-[10px] ${
              isEven
                ? "bg-accent/8 text-accent/80"
                : "bg-accent-warm/8 text-accent-warm/80"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </GlassCard>
  );

  const cardClass = `ml-12 w-full md:ml-0 md:w-[46%] ${
    isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
  }`;

  const dot = (
    <div className={`h-3 w-3 rounded-full border-2 ${
      isEven ? "border-accent bg-accent/20" : "border-accent-warm bg-accent-warm/20"
    }`} />
  );

  if (isPrinting) {
    return (
      <div
        className={`relative flex w-full items-start ${
          isEven ? "md:justify-start" : "md:justify-end"
        }`}
      >
        <div className="absolute left-4 top-6 z-10 md:left-1/2 md:-translate-x-1/2">
          {dot}
        </div>
        <div className={cardClass}>{cardContent}</div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex w-full items-start ${
        isEven ? "md:justify-start" : "md:justify-end"
      }`}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.12 }}
        className="absolute left-4 top-6 z-10 md:left-1/2 md:-translate-x-1/2"
      >
        {dot}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
        className={cardClass}
      >
        {cardContent}
      </motion.div>
    </div>
  );
}
