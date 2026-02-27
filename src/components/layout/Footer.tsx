import AnimatedSection from "@/components/ui/AnimatedSection";
import SocialLinks from "@/components/ui/SocialLinks";
import type { SocialLink } from "@/data/types";

interface FooterProps {
  socials: SocialLink[];
}

export default function Footer({ socials }: FooterProps) {
  return (
    <footer className="border-t border-border/30 px-4 py-10">
      <AnimatedSection>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <SocialLinks socials={socials} size="sm" />
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Holiakhovskyi Yevhen. Built with
            React + Motion.
          </p>
        </div>
      </AnimatedSection>
    </footer>
  );
}
