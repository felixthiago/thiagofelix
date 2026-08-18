'use client';

import { LanternCursor } from '@/components/LanternCursor';
import { AbyssWire } from '@/components/AbyssWire';
import { MemoryNode } from '@/components/MemoryNode';

interface DeepDiveStageProps {
  onClose: (e: React.MouseEvent) => void;
}

export default function DeepDiveStage({ onClose }: DeepDiveStageProps) {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center">
      
      {/* Componentes Atmosféricos (Só nascem quando o portal abre) */}
      <LanternCursor />
      <AbyssWire />

      {/* Container de Mergulho */}
      <div className="relative z-10 w-full max-w-5xl px-8 py-[15vh] flex flex-col gap-[35vh]">
        {/* --- EDUCAÇÃO --- */}
        <MemoryNode 
          title="Universidade Cruzeiro do Sul" 
          role="Análise e Desenvolvimento de Sistemas" 
          date="Jan 2026 — Presente"
          align="left"
        >
          <p>Construindo a base acadêmica para arquiteturas de alta complexidade.</p>
        </MemoryNode>

        <MemoryNode 
          title="ETEC Centro Paula Souza" 
          role="Técnico em Desenvolvimento de Sistemas" 
          date="Jan 2023 — Dez 2025"
          align="right"
        >
          <p>TCC: Arquitetura e desenvolvimento de aplicação fullstack com PostgreSQL. Implementação de pipelines de dados integrados a LLMs para correções de redações e geração de simulados adaptativos.</p>
        </MemoryNode>

        {/* --- EXPERIÊNCIAS --- */}
        <MemoryNode 
          title="VeriFact" 
          role="Desenvolvedor Fullstack" 
          date="Fev 2026 — Presente"
          align="left"
        >
          <p>Desenvolvimento da extensão de navegador utilizando React e o framework Plasmo para checagem de fatos em tempo real. Integração da Google Fact Checking API e LLMs via Groq, estruturando um pipeline focado em baixo tempo de resposta e otimização de tokens.</p>
        </MemoryNode>

        <MemoryNode 
          title="Macawdemy" 
          role="Engenheiro de Software" 
          date="Jan 2025 — Dez 2025"
          align="right"
        >
          <p>Liderança técnica e desenvolvimento do ecossistema web e mobile (Next.js, React Native, AWS). Construção de microsserviços em Python, implementando um sistema de repetição espaçada (FSRS) focado em eficiência.</p>
        </MemoryNode>

        {/* --- RODAPÉ DE TRANSIÇÃO --- */}
        <div className="flex justify-center w-full my-32">
          <a 
            href="https://seulink.vercel.app/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-6 py-3 text-[10px] tracking-[0.3em] font-mono uppercase text-stone-500 hover:text-stone-300 transition-colors z-20"
          >
            [ View Full Resumé ]
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-stone-500 group-hover:w-full transition-all duration-700" />
          </a>
        </div>

      </div>
    </div>
  );
}