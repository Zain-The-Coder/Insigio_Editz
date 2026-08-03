"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  
  const getInitial = () => {
    switch (direction) {
      case 'up': return { y: 40, x: 0, opacity: 0 };
      case 'down': return { y: -40, x: 0, opacity: 0 };
      case 'left': return { x: -40, y: 0, opacity: 0 };
      case 'right': return { x: 40, y: 0, opacity: 0 };
      default: return { y: 40, x: 0, opacity: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
