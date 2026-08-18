'use client';

import { motion, useScroll, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

export function AbyssWire() {
  const { scrollYProgress } = useScroll();
  
  // Suaviza a leitura do scroll para evitar que a linha "trema" durante a rolagem rápida
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[100%] pointer-events-none z-0">
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full opacity-60" 
        preserveAspectRatio="none"
      >
        {/* A Trilha Fantasma (Background) */}
        <path
          d="M 50 0 C 90 10, 10 30, 50 50 C 90 70, 10 90, 50 100"
          fill="none"
          stroke="rgba(168, 162, 158, 0.05)"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* O Feixe de Luz Orgânico */}
        <motion.path
          d="M 50 0 C 90 10, 10 30, 50 50 C 90 70, 10 90, 50 100"
          fill="none"
          stroke="#d6d3d1"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: smoothProgress }}
        />

        {/* A Lanterna Guia */}
        <motion.circle 
          cx="50" 
          cy="0" 
          r="2.5" 
          fill="#ffffff" 
          className="drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
          style={{ 
            y: useMotionTemplate`calc(${smoothProgress} * 100%)` 
          }} 
        />
      </svg>
    </div>
  );
}