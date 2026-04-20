import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MODELS } from "../utils/models";

export default function Comparison() {
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  const toggleCard = useCallback((id: string) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-center mb-16 md:mb-24 text-black px-6">
          Які AirPods <br /> підійдуть саме вам?
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="flex overflow-x-auto pb-12 gap-4 md:gap-4 snap-x snap-mandatory scrollbar-hide px-[7.5vw] md:px-6 md:grid md:grid-cols-4 md:overflow-visible"
        >
          {MODELS.map((model) => {
            const isExpanded = expandedCards.includes(model.id);

            return (
              <div
                key={model.id}
                className="w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none md:min-w-0 flex flex-col items-center text-center relative"
              >
                <div className="h-48 md:h-56 flex items-end justify-center mb-8 w-full px-2">
                  <img
                    src={model.img}
                    alt={model.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-contain object-bottom transform-gpu ${model.imgStyle}`}
                  />
                </div>

                <div className="mb-4 min-h-[140px] flex flex-col items-center w-full px-4">
                  <h3 className="text-2xl font-bold text-black">
                    {model.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 h-5">{model.sub}</p>
                  <p className="text-lg font-bold text-black mb-6">
                    {model.price}
                  </p>

                  <button className="w-full md:w-auto px-8 py-3 md:py-2 bg-[#0071e3] text-white text-sm font-semibold rounded-full hover:bg-[#0077ED] transition-colors mb-4 transform-gpu active:scale-95">
                    Купити
                  </button>

                  <button
                    onClick={() => toggleCard(model.id)}
                    className="text-[#0071e3] text-sm md:text-base py-2 font-semibold hover:underline flex items-center justify-center gap-1 transition-all"
                  >
                    {isExpanded ? "Згорнути" : "Детальніше"}
                    {isExpanded ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                </div>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out w-full transform-gpu ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden flex flex-col w-full">
                    <div className="w-full h-[1px] bg-gray-100 mb-8 mt-4" />

                    <div className="space-y-8 md:space-y-10 mb-12 flex-1">
                      {model.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="min-h-[70px] md:min-h-[80px] flex flex-col items-center justify-start px-2"
                        >
                          <div className="mb-3 md:mb-4">{feat.icon}</div>
                          <p className="text-sm font-semibold leading-tight text-gray-900 max-w-[200px]">
                            {feat.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-gray-100 w-full mb-6">
                      <p className="text-4xl font-bold text-black mb-2">
                        {model.battery}
                      </p>
                      <p className="text-xs text-gray-500 max-w-[150px] mx-auto leading-tight">
                        {model.batterySub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <div className="mt-6 md:mt-10 text-center px-6">
          <a
            href="#"
            className="text-[#0071e3] hover:underline text-base md:text-lg font-medium flex items-center justify-center gap-1 group transform-gpu"
          >
            Порівняти всі моделі AirPods{" "}
            <span className="text-xl group-hover:translate-x-1 transition-transform">
              ›
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
