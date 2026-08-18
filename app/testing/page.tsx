'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'
import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
import { DeepDiveStage } from '@/components/content/DeepDive';

export default function Portal() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springCFG = { stiffness: 100, damping: 20, mass: 0.5}
  const springX = useSpring(cardX, springCFG)
  const springY = useSpring(cardY, springCFG)

  const bgLight = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.05), transparent 40%)`

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if(cardRef.current && !isOpen) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY

        if (Math.sqrt(distanceX ** 2 + distanceY ** 2) < 300) {
          cardX.set(distanceX * 0.1)
          cardY.set(distanceY * 0.1) 
        }else {
          cardX.set(0);
          cardY.set(0);
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isOpen, isLoading, mouseX, mouseY, cardX, cardY]);

  const bubbleKeyframes = [
    '45% 55% 60% 40% / 45% 45% 55% 55%',
    '55% 45% 40% 60% / 55% 55% 45% 45%',
    '40% 60% 55% 45% / 50% 40% 60% 50%',
    '45% 55% 60% 40% / 45% 45% 55% 55%',
  ];

  const handleClosePortal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClosing(true);
    setIsHovered(false);

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 1000)
  }

  return (
    <div className={`relative flex flex-col bg-[#050505] font-sans text-stone-200 select-none ${
      isOpen ? 'w-full min-h-screen' : 'min-h-screen items-center justify-center overflow-hidden p-8 gap-12'
      }`}>

      <motion.div className="pointer-events-none fixed inset-0 z-0" style={{ background: bgLight }} />

      <AnimatePresence>
        {!isOpen && (
        <motion.div 
          initial = {{ opacity: 0, y: 10 }}
          animate={{ opacity: isLoading || isOpen ? 0 : 0.4, y: isLoading ? 10 : isOpen ? -20 : 0 }}
          transition={{ duration: 1, delay: isLoading ? 0 : 0.2 }}
          exit = {{opacity: 0, scale: 0.95}}
          className = "text-center space-y-2 relative z-10"
        >
          <p className="text-xs tracking-[0.4em] uppercase ">Thiago O. Felix</p>
          <h2 className="text-sm font-light italic text-stone-400 ">Software Engineer</h2>
        </motion.div>
        )}
      </AnimatePresence>

        <motion.div
          ref = {cardRef}
          layout
          onClick={() => {
            if (isLoading) return;
            setIsOpen(true)
            cardX.set(0)
            cardY.set(0)
          }}

          initial = {{
            width: '8rem',
            height: '8rem',
            borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
          }}
          
          onMouseEnter={() => !isLoading && setIsHovered(true)}
          onMouseLeave={() => !isLoading && setIsHovered(false)}

          // className={`relative flex items-center justify-center border-2 ${
          //   isOpen ? 'fixed inset-0 z-50 cursor-default bg-[#050505] border-transparent overflow-y-auto scrollbar-hide' : 'w-64 h-64 cursor-pointer z-10'
          // }`}

          className={`relative flex items-center justify-center border-2 ${
            isOpen ? 'w-full min-h-screen z-30 cursor-default bg-[#050505] border-transparent' : 'w-64 h-64 cursor-pointer z-10'
          }`}

          animate={{
            width: isOpen ? '100vw' : '16rem',
            height: isOpen ? '100vh' : '16rem',
            borderRadius: isOpen ? '0px' : bubbleKeyframes,
            borderColor: isOpen ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.15)',
          }}
          
          transition={{
            layout: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            width: { duration: 1.2, ease: [0.19, 1, 0.36, 1] },
            height: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            borderRadius: {
              duration: isOpen ? 0.8 : 10,
              repeat: isOpen ? 0 : Infinity,
              ease: "linear"
            }
          }}
          
          style={{
            x: isOpen ? 0 : springX,
            y: isOpen ? 0 : springY,
            border: '2px solid rgba(255, 255, 255, 0.15)'
           }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-purple-500/5 blur-md -z-10"
            animate={{ opacity: isHovered && !isOpen ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />

          <AnimatePresence>
            {!isOpen && !isClosing &&(
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6, scale: isHovered ? 1.05 : 1 }}
                exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
                className="w-32 h-32 text-stone-300 absolute pointer-events-none"
                viewBox="0 0 100 100" fill="none"
              >
                <motion.path
                  d = "M20,50 C20,20 80,20 80,50 C80,80 20,80 20,50 Z M35,35 C50,65 50,35 65,65"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  style={{ originX: "50%", originY: "50%" }}
                  animate={{
                    d: isHovered
                      ? "M22,48 C25,25 75,18 78,52 C82,82 18,78 22,48 Z M38,32 C48,62 52,38 62,68"
                      : "M20,50 C20,20 80,20 80,50 C80,80 20,80 20,50 Z M35,35 C50,65 50,35 65,65"
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </motion.svg>
            )}
          </AnimatePresence>


          <AnimatePresence>
            {isOpen && !isClosing && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{duration: 1, ease: "easeInOut" }}
                className="relative z-20 flex w-full min-h-screen text-stone-400"
              >
                <div className="fixed bottom-8 right-8 z-50 p-3 border border-stone-800 rounded-full bg-[#050505]/80 backdrop-blur-md hover:scale-105 transition transform duration-300 ease-in-out cursor-pointer group">
                
                <button onClick={handleClosePortal} className="cursor-pointer flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <img src="exit.svg" alt="Exit" width={32} height={32}/>
                </button>
              </div>
                <DeepDiveStage onClose={handleClosePortal} />
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              initial = {{opacity: 0}}
              animate={{ opacity: isLoading ? 0 : 1 }}
              transition={{ duration: 0.8, delay: isLoading ? 0 : 0.2 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center relative z-10"
            >
              <span className="text-[14px] tracking-[0.2em] text-stone-500 block hover:opacity-80 transition-opacity duration-700">
                [ entre no portal ]
              </span>
            </motion.div>
          )}
            
        </AnimatePresence>
    </div>
  );
}