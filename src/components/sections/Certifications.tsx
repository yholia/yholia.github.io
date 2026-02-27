import { motion } from "motion/react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Certification } from "@/data/types";
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({
  certifications,
}: CertificationsProps) {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional credentials and accreditations."
      className="bg-bg-secondary"
    >
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <AnimatedSection key={cert.id} delay={i * 0.1}>
            <motion.div
              whileHover={{
                borderColor: "rgba(108, 99, 255, 0.3)",
                boxShadow: "0 0 30px rgba(108, 99, 255, 0.08)",
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-bg-card/40 p-6 backdrop-blur-md"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <div className="relative">
                <div className="mb-3 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <FaCertificate size={18} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold leading-snug text-text-primary">
                      {cert.name}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary">{cert.issuer}</p>
                    <p className="font-mono text-xs text-text-muted">
                      {cert.date}
                    </p>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${cert.name} credential`}
                      className="text-text-muted transition-colors hover:text-accent"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
