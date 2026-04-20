import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', phone: '', model: 'AirPods Pro 2' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order:', formData);
    setIsSent(true);
    // Тут можна додати відправку в Telegram Bot або на пошту
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Блок форми замовлення */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Готові до нового звуку?</h3>
          <p className="text-gray-500 mb-10 font-medium">Залиште заявку, і ми зв'яжемося з вами для уточнення деталей доставки.</p>

          {!isSent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row md:items-end">
              <div className="flex-1 flex flex-col items-start gap-2">
                <label className="text-xs font-bold text-gray-400 ml-4 uppercase">Ваше ім'я</label>
                <input 
                  required
                  type="text" 
                  placeholder="Олександр"
                  className="w-full bg-[#f5f5f7] border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-red-600/20 transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="flex-1 flex flex-col items-start gap-2">
                <label className="text-xs font-bold text-gray-400 ml-4 uppercase">Телефон</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+380"
                  className="w-full bg-[#f5f5f7] border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-red-600/20 transition-all"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="flex-1 flex flex-col items-start gap-2">
                <label className="text-xs font-bold text-gray-400 ml-4 uppercase">Модель</label>
                <select 
                  className="w-full bg-[#f5f5f7] border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 ring-red-600/20 transition-all appearance-none cursor-pointer"
                  onChange={(e) => setFormData({...formData, model: e.target.value})}
                >
                  <option>AirPods Pro 2</option>
                  <option>AirPods 3</option>
                  <option>AirPods 2</option>
                  <option>AirPods Max</option>
                </select>
              </div>

              <button 
                type="submit"
                className="bg-black text-white p-4 rounded-2xl hover:bg-red-700 transition-colors flex items-center justify-center group"
              >
                <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          ) : (
            <div className="bg-green-50 text-green-700 p-8 rounded-[2.5rem] font-bold text-xl animate-bounce">
              Дякуємо! Менеджер зателефонує вам протягом 15 хвилин 🚀
            </div>
          )}
        </div>

        {/* Навігація або соцмережі (опціонально) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-gray-50">
          <div className="flex gap-8 text-sm font-semibold text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Telegram</a>
            <a href="#" className="hover:text-black transition-colors">Відгуки</a>
          </div>

          <div className="text-gray-400 text-sm">
            © 2026 **Island_with_apple**. Всі права захищені. <br className="md:hidden" />
            <span className="hidden md:inline mx-2">|</span>
            Не є офіційним сайтом Apple Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}