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
    >
      <div className="relative">
        {/* Timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ originY: 0 }}
          className="absolute left-5 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <TimelineItem key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
