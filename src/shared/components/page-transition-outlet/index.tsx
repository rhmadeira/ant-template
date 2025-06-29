import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

interface IPageTransitionProps {
  animated?: boolean;
  type?:
    | "fade"
    | "fadeSlideUp"
    | "fadeSlideDown"
    | "slideLeft"
    | "slideRight"
    | "zoom";
}

export default function PageTransitionOutlet({
  animated = true,
  type = "fadeSlideUp",
}: IPageTransitionProps) {
  const location = useLocation();
  const outlet = useOutlet();

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fadeSlideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    fadeSlideDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
    slideRight: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 100 },
    },
    zoom: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
  };

  const current = useMemo(() => variants[type] ?? variants.fade, [type]);

  if (!animated || !outlet) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={current.initial}
        animate={current.animate}
        exit={current.exit}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{ height: "100%" }}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
}
