'use client';

import { motion } from 'framer-motion';

interface ProjectRowProps {
  number: string;
  title: string;
  description: string;
  meta: string;
  imagePlaceholderText?: string;
  isReversed?: boolean;
}

export function ProjectRow({ number, title, description, meta, imagePlaceholderText, isReversed }: ProjectRowProps) {
  return (
    <div className="relative w-full flex items-center justify-center py-24 md:py-32 group">
      
      {/* O Ponto Nodal: Nasce silenciosamente quando a linha central cruza o projeto */}
      <motion.div
        initial={{ opacity: 0, scale: 0, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ margin: "-50% 0px -50% 0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-stone-300 z-20 shadow-[0_0_12px_rgba(214,211,209,0.9)]"
      />

      <div className={`w-full max-w-6xl flex flex-col md:flex-row items-center relative z-10 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Bloco de Texto (50% da largura, com espaçamento generoso em direção ao centro) */}
        <motion.div 
          initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 ${isReversed ? 'text-left' : 'text-right'}`}
        >
          <div className={`flex flex-col gap-4 ${isReversed ? 'items-start' : 'items-end'}`}>
            {/* Numeração minimalista e contida */}
            <span className="text-2xl font-mono text-stone-700 tracking-widest">
              {number}
            </span>
            
            <h2 className="text-3xl md:text-4xl font-serif text-stone-200 tracking-wide group-hover:text-white transition-colors duration-500">
              {title}
            </h2>
            
            <p className="text-sm text-stone-400 font-light leading-relaxed max-w-md">
              {description}
            </p>
            
            <span className="text-[9px] tracking-[0.3em] font-mono uppercase text-stone-500 mt-2">
              {meta}
            </span>
          </div>
        </motion.div>

        {/* Bloco Cinematográfico (50% da largura) */}
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 px-8 md:px-16 mt-12 md:mt-0"
        >
          <div className="w-full aspect-[21/9] bg-[#0a0a0a] border border-stone-800/40 rounded-sm overflow-hidden relative group-hover:border-stone-600/60 transition-colors duration-700 grayscale group-hover:grayscale-0">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-900/50 to-[#050505] opacity-80 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center text-stone-700 font-mono text-[10px] uppercase tracking-widest">
              [ {imagePlaceholderText || 'Sinal Ausente'} ]
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}