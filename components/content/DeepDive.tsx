'use client';

import { motion } from 'framer-motion';
import { LanternCursor } from '@/components/atmosphere/LanternCursor';
import { AbyssWire } from '@/components/AbyssWire';
import { ProjectRow } from '@/components/content/ProjectRow';

interface DeepDiveStageProps {
  onClose: (e: React.MouseEvent) => void;
}

export function DeepDiveStage({ onClose: _onClose }: DeepDiveStageProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-[#050505]">
      <LanternCursor />

      {/* O eixo principal de luz e geometria */}
      <AbyssWire />

      {/* Grão de filme sobre toda a cena — textura Lynchiana */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-[0.04] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 flex w-full flex-col pb-[10vh] pt-[22vh]">
        {/* Registro Identificador */}
        <header className="flex min-h-[45vh] w-full flex-col items-center justify-center pb-24 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 0.5, letterSpacing: '0.5em' }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="mb-6 font-mono text-[10px] uppercase text-stone-500"
          >
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl tracking-wide text-stone-100 md:text-7xl"
          >
            Thiago Oliveira Felix
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="mt-6 max-w-md font-serif text-lg italic text-stone-400"
          >
            Software Engineer
          </motion.p>
        </header>

        <div className="relative flex w-full flex-col">
          <ProjectRow
            number="01"
            title="VeriFact"
            description="Extensão de navegador focada em checagem de fatos em tempo real. Verifica noticias em sites como twitter, instagram, reddit e foi construída em React e Plasmo, integrando a Google Fact Checking API e LLMs (Groq) com rigorosa economia de tokens de modelo."
            meta="FEV 2026 — PRESENTE • REACT • FASTAPI • LLM"
            img="/verifact.png"

            isReversed={false}
          />

          <ProjectRow
            number="02"
            title="Macawdemy"
            description="Plataforma educacional completa, com cursos, gamificação e simulados para análise de desempenho com repetição espaçada. Meu papel foi de Liderança técnica, Backend em Python, algoritmos de repetição espaçada (FSRS) e infraestrutura AWS. "
            meta="JAN 2025 — DEZ 2025 • NEXT.JS • PYTHON • AWS"
            img="/macawdemy.png"
            isReversed={true}
          />
        </div>

        {/* Ponto de Extração — nó terminal do fio, revelado só ao chegar ao fim */}
        <motion.footer
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          // viewport={{ once: false, margin: '0px 0px -20% 0px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 flex flex-col items-center gap-36 w-full"
        >
          <span className="h-[7px] w-[7px] rounded-full bg-violet-100 shadow-[0_0_20px_rgba(196,181,253,0.9)]" />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link relative px-3 py-4 font-mono text-[14px] tracking-[0.4em] text-stone-500 transition-colors hover:text-stone-100"
          >
            [ view full resumé ]
            <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-violet-300/70 transition-all duration-700 group-hover/link:w-full" />
          </a>
        </motion.footer>
      </div>
    </div>
  );
}
