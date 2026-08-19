'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ProjectRowProps {
  number: string;
  title: string;
  description: string;
  meta: string;
  img: string;
  isReversed?: boolean;
}

export function ProjectRow({
  number,
  title,
  description,
  meta,
  img,
  isReversed,
}: ProjectRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start end', 'end start'],
  });

  const centerGlow = useTransform(scrollYProgress, (v) =>
    Math.max(0, 1 - Math.abs(v - 0.5) * 2.4),
  );
  const nodeOpacity = useTransform(centerGlow, [0, 1], [0.12, 1]);
  const nodeScale = useTransform(centerGlow, [0, 1], [0.4, 1]);
  const nodeBlur = useTransform(centerGlow, (g) => `blur(${(1 - g) * 3}px)`);
  const nodeShadow = useTransform(
    centerGlow,
    (g) => `0 0 ${4 + g * 20}px rgba(196,181,253,${0.15 + g * 0.75})`,
  );

  return (
    <div
      ref={rowRef}
      className="relative w-full flex items-center justify-center py-24 md:py-32 group"
    >
      <motion.div
        style={{
          opacity: nodeOpacity,
          scale: nodeScale,
          filter: nodeBlur,
          boxShadow: nodeShadow,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-violet-100 z-20"
      />

      <div
        className={`w-full max-w-6xl flex flex-col md:flex-row items-center relative z-10 ${
          isReversed ? 'md:flex-row-reverse' : ''
        }`}
      >

        <motion.div
          initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 ${
            isReversed ? 'text-left' : 'text-right'
          }`}
        >
          <div className={`flex flex-col gap-4 ${isReversed ? 'items-start' : 'items-end'}`}>
            <span className="font-mono text-2xl tracking-widest text-stone-700">
              {number}
            </span>

            <h2 className="font-serif text-4xl md:text-5xl tracking-wide text-stone-200 transition-colors duration-500 group-hover:text-white">
              {title}
            </h2>

            <p className="max-w-md text-sm font-light leading-relaxed text-stone-400">
              {description}
            </p>

            <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.3em] text-stone-500">
              {meta}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="mt-12 w-full px-8 md:mt-0 md:w-1/2 md:px-16"
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm border border-stone-800/40 bg-[#080808] transition-colors duration-700 group-hover:border-violet-400/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_100%)]" />

            <div
              className="animate-signal-flicker absolute inset-0 bg-cover bg-center bg-repeat-x opacity-70 mix-blend-screen"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />

            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_2px,rgba(0,0,0,0.35)_3px,rgba(0,0,0,0.35)_4px)] opacity-60" />

            <div className="animate-scanline pointer-events-none absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-violet-300/5 to-transparent" />

          </div>
        </motion.div>
      </div>
    </div>
  );
}
