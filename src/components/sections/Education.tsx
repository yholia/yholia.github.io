import SectionWrapper from "@/components/layout/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import type { Education as EducationType } from "@/data/types";

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="mx-auto max-w-3xl space-y-6">
        {education.map((edu, i) => (
          <AnimatedSection key={edu.id} delay={i * 0.15}>
            <GlassCard>
              <div className="mb-1 font-mono text-xs text-accent">
                {edu.startDate} — {edu.endDate ?? "Present"}
              </div>
              <h3 className="text-lg font-bold text-text-primary">
                {edu.degree} in {edu.field}
              </h3>
              <p className="mb-3 text-sm font-medium text-accent-light">
                {edu.institution}
              </p>
              {edu.description && (
                <p className="mb-3 text-sm text-text-secondary">
                  {edu.description}
                </p>
              )}
              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="space-y-1">
                  {edu.achievements.map((a, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              )}
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
