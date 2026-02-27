import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="group h-full rounded-2xl border border-border/50 bg-bg-card/40 p-6 backdrop-blur-md transition-colors hover:border-accent/30"
      >
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-lg font-bold text-text-primary">
            {project.title}
          </h3>
          <div className="flex gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} repository`}
                className="text-text-muted transition-colors hover:text-accent"
              >
                <FaGithub size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-text-muted transition-colors hover:text-accent"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent-light"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
