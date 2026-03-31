import { useRef } from "react";
import { useInView } from "motion/react";

type MarginValue = `${number}${"px" | "%"}`;
type MarginType =
   | MarginValue
   | `${MarginValue} ${MarginValue}`
   | `${MarginValue} ${MarginValue} ${MarginValue}`
   | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

/**
 * Shared hook for glass-panel reveal-on-scroll cards.
 * Returns a ref to attach and a boolean indicating visibility.
 */
const useRevealInView = (margin: MarginType = "0px 0px -60px 0px") => {
   const ref = useRef<HTMLDivElement>(null);
   const isInView = useInView(ref, { once: false, margin });
   return { ref, isInView } as const;
};

export default useRevealInView;
