import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";
import type { SocialLink } from "@/data/types";
import { cn } from "@/utils/cn";

const iconMap: Record<SocialLink["platform"], React.ComponentType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  telegram: FaTelegramPlane,
  email: FaEnvelope,
  twitter: FaTwitter,
};

const sizeMap = {
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
};

interface SocialLinksProps {
  socials: SocialLink[];
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function SocialLinks({
  socials,
  size = "md",
  className,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map((social, i) => {
        const Icon = iconMap[social.platform];
        return (
          <motion.a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + i * 0.08 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex items-center justify-center rounded-lg border border-border/50 bg-bg-card/40 text-text-muted transition-colors hover:border-accent/40 hover:text-accent",
              sizeMap[size]
            )}
          >
            <Icon />
          </motion.a>
        );
      })}
    </div>
  );
}
