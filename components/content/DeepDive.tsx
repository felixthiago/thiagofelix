'use client';

import { LanternCursor } from '@/components/LanternCursor';
import { AbyssWire } from '@/components/AbyssWire';
import { ProjectRow } from './ProjectRow';

interface DeepDiveStageProps {
  onClose: (e: React.MouseEvent) => void;
}

export function DeepDiveStage({ onClose }: DeepDiveStageProps) {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center overflow-x-hidden">
      
      <LanternCursor />
      
      {/* O eixo principal de luz e geometria */}
      <AbyssWire />

      <div className="relative z-10 w-full flex flex-col py-[15vh]">
        
        {/* Registro Identificador */}
        <header className="flex flex-col items-center justify-center w-full min-h-[30vh] pb-24 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-stone-200 tracking-wide">
            Thiago Oliveira Felix
          </h1>
          <p className="mt-6 text-[10px] tracking-[0.4em] font-mono text-stone-500 uppercase">
            Engenharia de Software // Lógica de Baixo Nível
          </p>
        </header>

        {/* Integração de Dados Técnicos */}
        <div className="flex flex-col w-full relative">
          
          <ProjectRow 
            number="01"
            title="VeriFact"
            description="Construção de uma extensão de navegador focada em checagem de fatos em tempo real[cite: 1, 2]. Desenvolvimento operado em React e Plasmo, integrando a Google Fact Checking API e LLMs (Groq) com rigorosa economia de tokens de modelo[cite: 1, 2]."
            meta="FEV 2026 — PRESENTE • REACT • FASTAPI • LLM"
            imagePlaceholderText="Pipeline Real-Time"
            isReversed={false}
          />

          <ProjectRow 
            number="02"
            title="Macawdemy"
            description="Atuação na liderança técnica para estruturação do ecossistema da plataforma de aprendizagem[cite: 1, 2]. Implementação de backend focado em microsserviços via Python, utilizando algoritmos de repetição espaçada (FSRS) sob infraestrutura AWS[cite: 1, 2]."
            meta="JAN 2025 — DEZ 2025 • NEXT.JS • PYTHON • AWS"
            imagePlaceholderText="Arquitetura de Microsserviços"
            isReversed={true}
          />

          <ProjectRow 
            number="03"
            title="ETEC (Centro Paula Souza)"
            description="Elaboração arquitetural de aplicação fullstack envolvendo React, React Native e Python conectados a bancos PostgreSQL[cite: 1, 2]. O projeto de conclusão consolidou pipelines de dados orientados à geração de simulados adaptativos por IA[cite: 1, 2]."
            meta="JAN 2023 — DEZ 2025 • CLEAN ARCHITECTURE"
            imagePlaceholderText="Estrutura Relacional"
            isReversed={false}
          />

          <ProjectRow 
            number="04"
            title="UNICSUL"
            description="Imersão na graduação de Análise e Desenvolvimento de Sistemas[cite: 1, 2]. Construção da base acadêmica direcionada ao suporte de ecossistemas complexos de software."
            meta="JAN 2026 — PRESENTE • GRAU SUPERIOR"
            imagePlaceholderText="Registro Analítico"
            isReversed={true}
          />

        </div>

        {/* Ponto de Extração de Dados */}
        <footer className="flex justify-center w-full mt-32 mb-48 relative z-20">
          <a 
            href="https://seulink.vercel.app/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-6 py-4 text-[10px] tracking-[0.4em] font-mono uppercase text-stone-500 hover:text-stone-200 transition-colors bg-[#050505]/50 backdrop-blur-md"
          >
            [ Extrair Currículo Completo ]
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-stone-500 group-hover:w-full transition-all duration-700" />
          </a>
        </footer>

      </div>
    </div>
  );
}