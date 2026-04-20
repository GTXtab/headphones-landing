import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { FEATURES } from '../utils/features';


export default function FeaturesGallery() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollStep = window.innerWidth < 768 ? clientWidth * 0.8 : clientWidth / 1.5;
      const scrollTo = direction === 'left' ? scrollLeft - scrollStep : scrollLeft + scrollStep;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-32 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight text-black leading-tight">
          Магічне підключення <br className="hidden sm:block" /> до ваших пристроїв.
        </h2>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2))] pb-12 snap-x snap-mandatory scrollbar-hide touch-pan-x"
      >
        {FEATURES.map((feature) => {
          const isExpanded = expandedId === feature.id;
          return (
            <div
              key={feature.id}
              onClick={() => setExpandedId(isExpanded ? null : feature.id)}
              className={`
                relative flex-shrink-0 snap-center
                /* Картки стають вужчими на мобільних */
                w-[280px] sm:w-[320px] md:w-[480px] 
                aspect-[4/5] 
                bg-white rounded-[2rem] md:rounded-[2.5rem] 
                p-8 md:p-10 
                shadow-sm border border-gray-100 
                cursor-pointer transition-all duration-500 ease-out
                ${isExpanded ? 'ring-2 ring-red-600 shadow-xl' : 'hover:shadow-lg'}
              `}
            >
              <div className="relative h-full w-full flex flex-col">
                
                <div className={`absolute inset-0 flex flex-col transition-opacity duration-300 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-xl md:text-3xl font-bold text-black max-w-[180px] md:max-w-[220px] leading-tight mb-4">
                    {feature.title}
                  </h3>
                  
                  <div className="flex-1 relative overflow-hidden flex items-center justify-center">
                    <img 
                      src={feature.img} 
                      alt={feature.title} 
                      className={`w-full h-auto max-h-full transition-transform duration-500 ${feature.imgStyle}`}
                    />
                  </div>
                </div>

                {/* ЗАДНЯ СТОРОНА */}
                <div className={`absolute inset-0 flex flex-col transition-all duration-500 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">{feature.title}</h3>
                  <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* КНОПКА ПЛЮС: трохи менша на мобільних */}
                <div className="absolute bottom-0 right-0 z-10">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${isExpanded ? 'bg-black rotate-45' : 'bg-black'}`}>
                    <Plus size={24} className="md:w-[28px]" />
                  </div>
                </div>

              </div>
            </div>
          );
        })}
        <div className="flex-shrink-0 w-6 md:w-24" />
      </div>

      <div className="max-w-7xl mx-auto px-6 hidden sm:flex items-center justify-end gap-4">
        <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white/50 hover:bg-white transition-all">
          <ChevronLeft size={24} className="text-gray-600" />
        </button>
        <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white/50 hover:bg-white transition-all">
          <ChevronRight size={24} className="text-gray-600" />
        </button>
      </div>
    </section>
  );
}