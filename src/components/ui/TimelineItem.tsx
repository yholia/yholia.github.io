import { motion } from "motion/react";
import type { Experience } from "@/data/types";
import GlassCard from "./GlassCard";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({
  experience,
  index,
}: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex w-full items-start ${
        isEven ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 }}
        className="absolute left-4 top-6 z-10 h-4 w-4 rounded-full border-2 border-accent bg-bg-primary md:left-1/2 md:-translate-x-1/2"
      />

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
        className={`ml-12 w-full md:ml-0 md:w-[45%] ${
          isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <GlassCard>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-accent">
              {experience.startDate} — {experience.endDate ?? "Present"}
            </span>
            <span className="text-xs text-text-muted">
              {experience.location}
            </span>
          </div>
          <h3 className="text-lg font-bold text-text-primary">
            {experience.role}
          </h3>
          <p className="mb-3 text-sm font-medium text-accent-light">
            {experience.company}
          </p>
          <p className="mb-3 text-sm leading-relaxed text-text-secondary">
            {experience.description}
          </p>
          <ul className="mb-4 space-y-1">
            {experience.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
