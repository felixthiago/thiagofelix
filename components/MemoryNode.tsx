'use client';

import { motion } from 'framer-motion';

interface MemoryNodeProps {
  title: string;
  role: string;
  date: string;
  align?: 'left' | 'right';
  children: React.ReactNode;
}

export function MemoryNode({ title, role, date, align = 'left', children }: MemoryNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, margin: "-25% 0px -25% 0px" }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full max-w-md flex flex-col gap-2 ${
        align === 'right' ? 'ml-auto text-right' : 'mr-auto text-left'
      }`}
    >
      <span className="text-[9px] tracking-[0.4em] font-mono text-stone-600 uppercase">{date}</span>
      <h3 className="text-xl md:text-2xl font-serif text-stone-200 tracking-wide">{title}</h3>
      <h4 className="text-[10px] tracking-widest uppercase text-stone-500 mb-3">{role}</h4>
      
      <div className="text-xs font-light leading-relaxed text-stone-400">
        {children}
      </div>
    </motion.div>
  );
}