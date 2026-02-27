import { motion } from "motion/react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";
import type { Experience as ExperienceType } from "@/data/types";

interface ExperienceProps {
  experience: ExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="My professional journey in test automation and quality engineering."
      accent="warm"
    >
      <div className="relative">
        {/* Timeline line — gradient from teal to warm */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ originY: 0 }}
          className="absolute left-[18px] top-0 h-full w-px bg-gradient-to-b from-accent via-border-light to-accent-warm md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-10">
          {experience.map((exp, i) => (
            <TimelineItem key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
