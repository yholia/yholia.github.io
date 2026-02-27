import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isScrolled } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-50 transition-colors duration-300"
        animate={{
          backgroundColor: isScrolled
            ? "rgba(10, 10, 15, 0.8)"
            : "rgba(10, 10, 15, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a
            href="#"
            className="font-mono text-lg font-bold text-accent transition-colors hover:text-accent-light"
          >
            {"<YH />"}
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-text-secondary transition-colors hover:text-text-primary md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg-primary/95 backdrop-blur-lg md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-xl font-medium text-text-primary transition-colors hover:text-accent"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
