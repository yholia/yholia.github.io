import SectionWrapper from "@/components/layout/SectionWrapper";
import SkillBar from "@/components/ui/SkillBar";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Skill, SkillCategory } from "@/data/types";

interface SkillsProps {
  skills: Skill[];
}

const categoryConfig: Record<SkillCategory, { label: string; accent: "teal" | "warm" }> = {
  automation: { label: "Test Automation", accent: "teal" },
  languages: { label: "Languages", accent: "warm" },
  tools: { label: "Tools & Platforms", accent: "teal" },
  "ci-cd": { label: "CI / CD", accent: "warm" },
  methodologies: { label: "Methodologies", accent: "teal" },
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
      className="stripe-accent"
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categoryOrder.map((cat, ci) => {
          const config = categoryConfig[cat];
          return (
            <AnimatedSection key={cat} delay={ci * 0.08}>
              <div className="rounded-xl border border-border/40 bg-bg-card/30 p-5">
                <h3 className={`mb-4 font-display text-sm font-semibold uppercase tracking-wider ${
                  config.accent === "teal" ? "text-accent" : "text-accent-warm"
                }`}>
                  {config.label}
                </h3>
                <div className="space-y-3">
                  {grouped[cat].map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={si * 0.06}
                      accent={config.accent}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
