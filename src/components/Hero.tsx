import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDES } from '../utils/slides';

const AUTO_PLAY_INTERVAL = 5000; 

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isUserNavigating, setIsUserNavigating] = useState(false);
  
  const isMobile = useIsMobile();

  const nextSlide = () => {
    setIsUserNavigating(true); 
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };
  const prevSlide = () => {
    setIsUserNavigating(true);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isUserNavigating) return; 
    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(intervalId); 
  }, [current, isUserNavigating]);

  useEffect(() => {
    if (isUserNavigating) {
      const timeoutId = setTimeout(() => setIsUserNavigating(false), 100);
      return () => clearTimeout(timeoutId);
    }
  }, [current, isUserNavigating]);

  const item = SLIDES[current];

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
            className="absolute z-0 text-[4rem] sm:text-[8rem] lg:text-[14rem] font-bold tracking-tighter text-black/10 select-none pointer-events-none whitespace-nowrap"
          >
            {item.name}
          </motion.h1>
        </AnimatePresence>

        <div className="relative z-10 w-full h-[350px] sm:h-[500px] md:h-[600px] flex justify-center items-center pointer-events-none">
          
          {item.left && item.right && (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`left-${item.id}`} 
                  initial={{ opacity: 0, ...(isMobile ? item.left.mobile.position : item.left.desktop.position) }}
                  animate={{ opacity: 1, ...(isMobile ? item.left.mobile.animation : item.left.desktop.animation) }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeOut" }} 
                  className="absolute"
                >
                  <img src={item.left.image} alt="Left" className="max-h-[250px] sm:max-h-[300px] md:max-h-[450px] object-contain drop-shadow-2xl" />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`right-${item.id}`}
                  initial={{ opacity: 0, ...(isMobile ? item.right.mobile.position : item.right.desktop.position) }}
                  animate={{ opacity: 1, ...(isMobile ? item.right.mobile.animation : item.right.desktop.animation) }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute"
                >
                  <img src={item.right.image} alt="Right" className="max-h-[250px] sm:max-h-[300px] md:max-h-[450px] object-contain drop-shadow-2xl" />
                </motion.div>
              </AnimatePresence>
            </>
          )}

          {item.center && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`center-${item.id}`}
                initial={{ opacity: 0, ...(isMobile ? item.center.mobile.position : item.center.desktop.position) }}
                animate={{ opacity: 1, ...(isMobile ? item.center.mobile.animation : item.center.desktop.animation) }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute flex items-center justify-center w-full h-full"
              >
                <img src={item.center.image} alt="Max" className="max-h-[300px] sm:max-h-[500px] md:max-h-[550px] object-contain drop-shadow-2xl" />
              </motion.div>
            </AnimatePresence>
          )}
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
                <button className="w-full sm:w-auto px-10 py-3 bg-[#0071e3] text-white text-lg font-medium rounded-full hover:bg-[#0077ED] transition-colors">
                  Замовити
                </button>
                <button className="w-full sm:w-auto px-10 py-3 text-[#0071e3] text-lg font-medium hover:underline transition-colors flex items-center justify-center gap-1">
                  Детальніше <span className="text-xl">›</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}