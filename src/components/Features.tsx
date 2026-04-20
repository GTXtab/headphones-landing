import { motion } from 'framer-motion';

const features = [
  {
    title: "Тільки Оригінал",
    desc: "Жодних копій. Тільки сертифікована техніка Apple з офіційною гарантією.",
    icon: ""
  },
  {
    title: "Кастомізація",
    desc: "Допоможемо підібрати унікальні аксесуари, щоб твої AirPods виділялися.",
    icon: "🎨"
  },
  {
    title: "Швидка Доставка",
    desc: "Відправляємо в день замовлення. Твій звук приїде швидше, ніж ти очікуєш.",
    icon: "🚀"
  }
];

export default function Features() {
  return (
    <section id="why-us" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-16"
        >
          Чому обирають <span className="text-red-700">Island_with_apple</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}