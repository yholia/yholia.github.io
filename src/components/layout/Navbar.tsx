import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { useTriggerPrint } from "@/contexts/PrintContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isScrolled } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerPrint = useTriggerPrint();

  return (
    <>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-50"
        animate={{
          backgroundColor: isScrolled
            ? "rgba(8, 9, 13, 0.85)"
            : "rgba(8, 9, 13, 0)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          borderBottom: isScrolled
            ? "1px solid rgba(30, 34, 51, 0.5)"
            : "1px solid transparent",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="font-display text-lg font-bold tracking-tight text-accent transition-colors hover:text-accent-light"
          >
            YH<span className="text-accent-warm">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ color: "rgb(0, 229, 191)" }}
                className="rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:bg-white/[0.03]"
              >
                {link.label}
              </motion.a>
            ))}
            <button
              onClick={triggerPrint}
              aria-label="Download PDF"
              className="ml-2 flex items-center gap-1.5 rounded-md border border-accent/20 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:border-accent/40 hover:bg-accent/5"
            >
              <FiDownload size={12} />
              PDF
            </button>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center gap-6 bg-bg-primary/98 px-10 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, type: "spring", damping: 20 }}
                className="font-display text-3xl font-bold text-text-primary transition-colors hover:text-accent"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => {
                setMobileOpen(false);
                triggerPrint();
              }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: navLinks.length * 0.06,
                type: "spring",
                damping: 20,
              }}
              className="mt-4 flex items-center gap-2 rounded-lg border border-accent/30 px-5 py-2.5 font-mono text-sm uppercase tracking-widest text-accent transition-colors hover:bg-accent/5"
            >
              <FiDownload size={16} />
              Download PDF
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
