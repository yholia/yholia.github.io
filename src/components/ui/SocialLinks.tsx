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
      {socials.map((social) => {
        const Icon = iconMap[social.platform];
        return (
          <motion.a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className={cn(
              "flex items-center justify-center rounded-full border border-border/50 bg-bg-card/40 text-text-secondary transition-colors hover:border-accent/50 hover:text-accent",
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
