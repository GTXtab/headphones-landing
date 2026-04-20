import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene from '../canvas/Scene';
import { SLIDES3D } from '../utils/slides.tsx';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES3D.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES3D.length) % SLIDES3D.length);

  const item = SLIDES3D[current];

  return (
    <section className="relative w-full min-h-screen flex items-center bg-white pt-10 md:pt-24 overflow-hidden">
      
      <div className="absolute inset-x-0 top-[60%] -translate-y-1/2 z-50 flex justify-between px-2 md:px-10 pointer-events-none">
        <button onClick={prevSlide} className="p-3 md:p-4 rounded-full bg-black/5 hover:bg-black/10 transition-all pointer-events-auto active:scale-90">
          <span className="text-xl md:text-2xl">‹</span>
        </button>
        <button onClick={nextSlide} className="p-3 md:p-4 rounded-full bg-black/5 hover:bg-black/10 transition-all pointer-events-auto active:scale-90">
          <span className="text-xl md:text-2xl">›</span>
        </button>
      </div>

      <div className="max-w-[1500px] mx-auto w-full px-6 relative flex flex-col items-center justify-center">
        
        <AnimatePresence mode="wait">
          <motion.h1 
            key={item.id}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -50 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="absolute z-0 text-[4rem] sm:text-[8rem] lg:text-[14rem] font-bold tracking-tighter text-black/5 select-none pointer-events-none whitespace-nowrap"
          >
            {item.name}
          </motion.h1>
        </AnimatePresence>

        <div className="relative z-10 w-full h-[350px] sm:h-[500px] md:h-[600px]">
          <Scene modelPath={item.modelPath} scale={item.scale} />
        </div>

        <div className="relative z-20 flex flex-col items-center mt-4 md:mt-[-20px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <p className="text-xl lg:text-3xl font-semibold text-black mb-6">
                {item.price}*
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                <button className="w-full sm:w-auto px-10 py-3 bg-red-700 text-white text-lg font-medium rounded-full hover:bg-red-800 transition-colors">
                  Замовити
                </button>
                <button className="w-full sm:w-auto px-10 py-3 border border-gray-200 text-black text-lg font-medium rounded-full hover:bg-gray-50 transition-colors">
                  Детальніше
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}