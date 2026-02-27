import { useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export function useScrollProgress() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return { scrollY, isScrolled };
}
