import { useInView } from "motion/react";
import { useRef } from "react";

export function useInViewOnce() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return { ref, isInView };
}
