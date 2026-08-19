'use client';

import { useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const VB_W = 40;
const VB_H = 1000;
const CENTER_X = VB_W / 2;
const AMPLITUDE = 6; // amplitude horizontal pequena → fio fluido, não caótico
const WAVES = 3.2; // número de respirações ao longo da descida

function waveX(t: number) {
  return CENTER_X + AMPLITUDE * Math.sin(t * Math.PI * WAVES);
}

export function AbyssWire() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 22,
    mass: 0.8,
  });

  const pathD = useMemo(() => {
    const steps = 120;
    let d = '';
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = waveX(t).toFixed(2);
      const y = (t * VB_H).toFixed(2);
      d += `${i === 0 ? 'M' : 'L'} ${x} ${y} `;
    }
    return d.trim();
  }, []);

  const lanternY = useTransform(smoothProgress, (v) => v * VB_H);
  const lanternX = useTransform(smoothProgress, (v) => waveX(v));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wire-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.05" />
          </linearGradient>
          <filter id="wire-glow" x="-400%" y="-50%" width="900%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={pathD}
          fill="none"
          stroke="rgba(168, 162, 158, 0.06)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#wire-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: smoothProgress }}
        />

        <motion.circle
          cx={lanternX}
          cy={lanternY}
          fill="#c4b5fd"
          filter="url(#wire-glow)"
          vectorEffect="non-scaling-stroke"
          animate={{ r: [5, 8, 5], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.circle
          cx={lanternX}
          cy={lanternY}
          r="2"
          fill="#f5f3ff"
          vectorEffect="non-scaling-stroke"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
