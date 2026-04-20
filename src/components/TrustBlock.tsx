import { motion } from 'framer-motion';
import { TRUST_ITEMS } from '../utils/trust.tsx';
import { Star } from 'lucide-react';

export default function TrustBlock() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-12 md:inter-tight text-black">
          Більше, ніж магазин. <br />
          <span className="text-gray-400">Твій провідник у світ Apple.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[300px]">
          {TRUST_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`
                relative rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden border border-gray-100 shadow-sm
                ${item.size === 'large' ? 'md:col-span-2 md:row-span-2 bg-[#f5f5f7] min-h-[400px] md:min-h-0' : 'bg-white min-h-[250px] md:min-h-0'}
                ${item.size === 'medium' ? 'md:col-span-1 md:row-span-1' : ''}
              `}
            >
              {item.type === 'feature' ? (
                <>
                  <div className="z-10">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-500 font-medium leading-tight md:leading-relaxed max-w-[260px]">
                      {item.text}
                    </p>
                  </div>
                  
                  {item.img && (
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 md:w-2/3 md:h-2/3 opacity-80 md:opacity-100">
                      <img 
                        src={item.img} 
                        className="w-full h-full object-contain object-right-bottom translate-x-4 translate-y-4" 
                        alt="" 
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="black" className="text-black" />
                      ))}
                    </div>
                    <p className="text-base md:text-lg italic text-gray-700 font-medium leading-snug">
                      "{item.text}"
                    </p>
                  </div>
                  <span className="font-bold text-sm md:text-base text-black mt-4 inline-block">
                    {item.author}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}