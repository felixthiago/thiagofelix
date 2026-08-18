'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

interface LenisScrollProps {
  children: ReactNode;
}

export function LenisScroll({ children }: LenisScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05, // Quanto menor, mais pesada e fluida é a "água" (Padrão é ~0.1)
        duration: 1.5, // Duração da inércia
        smoothWheel: true,
        wheelMultiplier: 1, // Mantém a velocidade da rolagem normal, mas com o peso do lerp
      }}
    >
      {children}
    </ReactLenis>
  );
}