import AnimatedSection from "@/components/ui/AnimatedSection";
import SocialLinks from "@/components/ui/SocialLinks";
import type { SocialLink } from "@/data/types";

interface FooterProps {
  socials: SocialLink[];
}

export default function Footer({ socials }: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-border/20 px-6 py-8">
      <AnimatedSection>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <SocialLinks socials={socials} size="sm" />
          <p className="font-mono text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Holiakhovskyi Yevhen
            <span className="mx-2 text-border-light">/</span>
            <span className="text-accent/40">Built with React + Motion</span>
          </p>
        </div>
      </AnimatedSection>
    </footer>
  );
}
