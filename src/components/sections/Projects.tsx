import SectionWrapper from "@/components/layout/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import type { Project } from "@/data/types";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Open-source tools and frameworks I've built."
      className="grid-pattern"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
