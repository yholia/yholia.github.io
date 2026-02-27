import SectionWrapper from "@/components/layout/SectionWrapper";
import SkillBar from "@/components/ui/SkillBar";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Skill, SkillCategory } from "@/data/types";

interface SkillsProps {
  skills: Skill[];
}

const categoryLabels: Record<SkillCategory, string> = {
  automation: "Test Automation",
  languages: "Languages",
  tools: "Tools & Platforms",
  "ci-cd": "CI / CD",
  methodologies: "Methodologies",
};

const categoryOrder: SkillCategory[] = [
  "automation",
  "languages",
  "tools",
  "ci-cd",
  "methodologies",
];

export default function Skills({ skills }: SkillsProps) {
  const grouped = categoryOrder.reduce(
    (acc, cat) => {
      acc[cat] = skills.filter((s) => s.category === cat);
      return acc;
    },
    {} as Record<SkillCategory, Skill[]>
  );

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Technologies and methodologies I work with daily."
      className="bg-bg-secondary"
    >
      <div className="grid gap-10 md:grid-cols-2">
        {categoryOrder.map((cat, ci) => (
          <AnimatedSection key={cat} delay={ci * 0.1}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              {categoryLabels[cat]}
            </h3>
            <div className="space-y-4">
              {grouped[cat].map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={si * 0.08}
                />
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
