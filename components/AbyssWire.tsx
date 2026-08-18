'use client';

import { motion, useScroll, useMotionTemplate } from 'framer-motion';

export function AbyssWire() {
  // Captura o progresso do scroll do usuário (0 a 1)
  const { scrollYProgress } = useScroll();

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[300vh] pointer-events-none z-0">
      
      {/* O SVG que mapeia o caminho. A altura (300vh) deve acompanhar o tamanho total do seu currículo */}
      <svg 
        viewBox="0 0 100 1200" 
        className="w-full h-full opacity-40" 
        preserveAspectRatio="none"
      >
        {/* 
          1. O Fio Sinuoso (Curvas de Bezier) 
          Desenhado progressivamente com base no scrollYProgress 
        */}
        <motion.path
          d="
            M 50 0 
            C 100 100, 0 200, 50 300 
            C 100 400, 0 500, 50 600 
            C 100 700, 0 800, 50 900 
            C 100 1000, 0 1100, 50 1200
          "
          fill="none"
          stroke="#e7e5e4"
          strokeWidth="1.5"
          strokeLinecap="round"
          // A Mágica acontece aqui: o pathLength desenha a linha conforme o scroll
          style={{ pathLength: scrollYProgress }} 
        />

        {/* 2. Os Pontos (Nodes) Estáticos pelo caminho */}
        <motion.circle cx="50" cy="300" r="3" fill="#e7e5e4" />
        <motion.circle cx="50" cy="600" r="3" fill="#e7e5e4" />
        <motion.circle cx="50" cy="900" r="3" fill="#e7e5e4" />

        {/* 3. (Opcional) A Lanterna do Peixe Abissal guiando a ponta da linha */}
        <motion.circle 
          cx="50" 
          cy="0" 
          r="6" 
          fill="#e7e5e4" 
          className="drop-shadow-[0_0_8px_rgba(231,229,228,0.8)]"
          style={{ 
            // A bolinha de luz desce seguindo a porcentagem do scroll
            y: useMotionTemplate`calc(${scrollYProgress} * 100%)` 
          }} 
        />
      </svg>
    </div>
  );
}