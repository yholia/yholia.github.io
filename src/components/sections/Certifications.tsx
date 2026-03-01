import { motion } from "motion/react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Certification } from "@/data/types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { usePrintMode } from "@/contexts/PrintContext";

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({
  certifications,
}: CertificationsProps) {
  const isPrinting = usePrintMode();

  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional credentials and accreditations."
    >
      <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
        {certifications.map((cert, i) => {
          const accent = i % 2 === 0 ? "teal" : "warm";
          const cardClass = "group relative overflow-hidden rounded-xl border border-border/40 bg-bg-card/40 p-5 backdrop-blur-sm";
          return (
            <AnimatedSection key={cert.id} delay={i * 0.08}>
              {isPrinting ? (
                <div className={cardClass}>
                  <div className={`absolute bottom-2 left-0 top-2 w-px ${
                    accent === "teal" ? "bg-accent/30" : "bg-accent-warm/30"
                  }`} />
                  <div className="relative pl-3">
                    <h3 className="mb-1 text-sm font-semibold leading-snug text-text-primary">
                      {cert.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-text-secondary">{cert.issuer}</p>
                        <p className="font-mono text-[10px] text-text-muted">{cert.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div
                  whileHover={{
                    borderColor:
                      accent === "teal"
                        ? "rgba(0, 229, 191, 0.25)"
                        : "rgba(255, 159, 67, 0.25)",
                    y: -2,
                  }}
                  className={cardClass}
                >
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {/* Left accent bar */}
                  <div className={`absolute bottom-2 left-0 top-2 w-px ${
                    accent === "teal" ? "bg-accent/30" : "bg-accent-warm/30"
                  }`} />

                  <div className="relative pl-3">
                    <h3 className="mb-1 text-sm font-semibold leading-snug text-text-primary">
                      {cert.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-text-secondary">{cert.issuer}</p>
                        <p className="font-mono text-[10px] text-text-muted">
                          {cert.date}
                        </p>
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${cert.name} credential`}
                          className={`text-text-muted transition-colors ${
                            accent === "teal" ? "hover:text-accent" : "hover:text-accent-warm"
                          }`}
                        >
                          <FaExternalLinkAlt size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
