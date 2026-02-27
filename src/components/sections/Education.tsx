import SectionWrapper from "@/components/layout/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import type { Education as EducationType } from "@/data/types";

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <SectionWrapper id="education" title="Education" accent="warm">
      <div className="mx-auto max-w-3xl space-y-4">
        {education.map((edu, i) => (
          <AnimatedSection key={edu.id} delay={i * 0.1}>
            <GlassCard accent="warm">
              <div className="flex items-start gap-4">
                {/* Year badge */}
                <div className="hidden shrink-0 sm:block">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-accent-warm/20 bg-accent-warm/5">
                    <span className="font-mono text-xs font-medium text-accent-warm">
                      {edu.endDate ?? "Now"}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-accent-warm sm:hidden">
                    {edu.startDate} — {edu.endDate ?? "Present"}
                  </div>
                  <h3 className="font-display text-base font-bold text-text-primary">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="mb-2 text-sm text-text-secondary">
                    {edu.institution}
                    <span className="mx-2 hidden text-border-light sm:inline">/</span>
                    <span className="hidden font-mono text-xs text-text-muted sm:inline">
                      {edu.startDate} — {edu.endDate ?? "Present"}
                    </span>
                  </p>
                  {edu.description && (
                    <p className="mb-2 text-xs text-text-muted">
                      {edu.description}
                    </p>
                  )}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="space-y-1">
                      {edu.achievements.map((a, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs text-text-secondary"
                        >
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-warm/50" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
