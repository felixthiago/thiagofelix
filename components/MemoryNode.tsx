// 'use client';

// import { motion } from 'framer-motion';

// interface MemoryNodeProps {
//   title: string;
//   role: string;
//   date: string;
//   align?: 'left' | 'right';
//   children: React.ReactNode;
// }

// export function MemoryNode({ title, role, date, align = 'left', children }: MemoryNodeProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
//       whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
//       viewport={{ once: false, margin: "-25% 0px -25% 0px" }}
//       transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//       className={`relative w-full max-w-md flex flex-col gap-2 ${
//         align === 'right' ? 'ml-auto text-right' : 'mr-auto text-left'
//       }`}
//     >
//       <span className="text-[9px] tracking-[0.4em] font-mono text-stone-600 uppercase">{date}</span>
//       <h3 className="text-xl md:text-2xl font-serif text-stone-200 tracking-wide">{title}</h3>
//       <h4 className="text-[10px] tracking-widest uppercase text-stone-500 mb-3">{role}</h4>
      
//       <div className="text-xs font-light leading-relaxed text-stone-400">
//         {children}
//       </div>
//     </motion.div>
//   );
// }

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
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      // Um container que ocupa toda a largura, centralizando a lógica
      className="relative w-full max-w-4xl mx-auto flex items-center justify-center my-16 group"
    >
      {/* O PONTO NODAL (Ele acende junto com o card) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-stone-500 shadow-[0_0_12px_rgba(168,162,158,0)] group-hover:bg-stone-200 group-hover:shadow-[0_0_15px_rgba(231,229,228,0.8)] transition-all duration-700 z-10" />

      {/* LADO ESQUERDO */}
      <div className={`w-1/2 px-12 ${align === 'left' ? 'text-right' : 'opacity-0'}`}>
        {align === 'left' && (
          <>
            <span className="text-[9px] tracking-[0.4em] font-mono text-stone-600 uppercase block mb-2">{date}</span>
            <h3 className="text-xl md:text-2xl font-serif text-stone-200 tracking-wide">{title}</h3>
            <h4 className="text-[10px] tracking-widest uppercase text-stone-500 mb-3">{role}</h4>
            <div className="text-xs font-light leading-relaxed text-stone-400">{children}</div>
          </>
        )}
      </div>

      {/* LADO DIREITO */}
      <div className={`w-1/2 px-12 ${align === 'right' ? 'text-left' : 'opacity-0'}`}>
        {align === 'right' && (
          <>
            <span className="text-[9px] tracking-[0.4em] font-mono text-stone-600 uppercase block mb-2">{date}</span>
            <h3 className="text-xl md:text-2xl font-serif text-stone-200 tracking-wide">{title}</h3>
            <h4 className="text-[10px] tracking-widest uppercase text-stone-500 mb-3">{role}</h4>
            <div className="text-xs font-light leading-relaxed text-stone-400">{children}</div>
          </>
        )}
      </div>
    </motion.div>
  );
}