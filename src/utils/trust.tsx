import { Heart, ShieldCheck, Zap } from 'lucide-react';

export const TRUST_ITEMS = [
  {
    id: 1,
    type: 'feature',
    size: 'large', 
    title: "Тільки оригінал",
    text: "Ми не граємо в ігри з репліками. Кожна коробка Island_with_apple має офіційну гарантію.",
    icon: <ShieldCheck className="text-red-600" size={32} />,
    img: "1.png",
  },
  {
    id: 2,
    type: 'review',
    size: 'small',
    author: "@vlad_it",
    text: "Замовив AirPods Pro 2, приїхали за добу. Серійник б’ється, звук — космос. Рекомендую!",
    rating: 5,
  },
  {
    id: 3,
    type: 'feature',
    size: 'medium',
    title: "Доставка сьогодні",
    text: "Замовляй до 16:00 — і твої AirPods поїдуть до тебе сьогодні.",
    icon: <Zap className="text-yellow-500" size={28} />,
  },
  {
    id: 4,
    type: 'review',
    size: 'small',
    author: "Олена К.",
    text: "Найкраща ціна в Instagram, хлопці проконсультували топ. Дякую за кастомний чохол!",
    rating: 5,
  },
  {
    id: 5,
    type: 'feature',
    size: 'medium',
    title: "500+ клієнтів",
    text: "Ми не просто продаємо, ми створюємо ком’юніті любителів якісного звуку.",
    icon: <Heart className="text-red-500" size={28} />,
  }
];