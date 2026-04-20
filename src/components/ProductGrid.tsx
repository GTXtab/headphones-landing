import { motion } from 'framer-motion';

const products = [
  { name: "AirPods Pro 2", price: "від 9 900 ₴", img: "🎧" }, // Тут потім заміниш на фото
  { name: "AirPods 3", price: "від 6 500 ₴", img: "🎵" },
  { name: "AirPods Max", price: "від 24 000 ₴", img: "💎" }
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Наявність</h2>
          <a href="#" className="text-red-700 font-semibold hover:underline">Дивитись всі ›</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] bg-[#f5f5f7] rounded-3xl overflow-hidden flex flex-col items-center justify-between p-10 text-center"
            >
              <div className="text-8xl">{p.img}</div> 
              <div>
                <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
                <p className="text-gray-500 mb-6 font-medium">{p.price}</p>
                <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                  Замовити
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}