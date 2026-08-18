'use client';

import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useEffect } from 'react';

export function LanternCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Cria um feixe radial sutil que imita a bioluminescência no escuro
  const bgLight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.06), transparent 40%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 mix-blend-screen"
      style={{ background: bgLight }}
    />
  );
}