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

  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const isFeatured = project.featured;
  const accentColor = index % 2 === 0 ? "teal" : "warm";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className={isFeatured ? "sm:col-span-1" : ""}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className={`group relative h-full overflow-hidden rounded-xl border bg-bg-card/40 p-5 backdrop-blur-sm transition-all duration-300 ${
          accentColor === "teal"
            ? "border-border/40 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,229,191,0.08)]"
            : "border-border/40 hover:border-accent-warm/30 hover:shadow-[0_0_30px_rgba(255,159,67,0.06)]"
        }`}
      >
        {/* Top accent line */}
        <div className={`absolute left-0 right-0 top-0 h-px ${
          accentColor === "teal"
            ? "bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            : "bg-gradient-to-r from-transparent via-accent-warm/40 to-transparent"
        }`} />

        <div className="mb-3 flex items-start justify-between">
          <div>
            {isFeatured && (
              <span className="mb-1 inline-block font-mono text-[9px] uppercase tracking-widest text-accent-warm">
                Featured
              </span>
            )}
            <h3 className="font-display text-base font-bold text-text-primary">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} repository`}
                className="text-text-muted transition-colors hover:text-accent"
              >
                <FaGithub size={16} />
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
                <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        </div>
        <p className="mb-4 text-xs leading-relaxed text-text-secondary">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-bg-elevated/80 px-2 py-0.5 font-mono text-[10px] text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
