# 🎧 AirPods Landing Page — Apple Aesthetic

Сучасний, високопродуктивний лендінг для продажу AirPods, розроблений з акцентом на бездоганний UI/UX та технічну довершеність. Проєкт демонструє підхід **Performance-First**, забезпечуючи 60 FPS навіть під час складних анімацій на мобільних пристроях.

Розробник проєкту — Назар, студент 2-го курсу університету, що спеціалізується на Full-stack розробці.

## 💎 Ключові фішки

* **Apple-Style Typography & Layout:** Мінімалістичний дизайн з акцентом на контент.
* **Interactive Header Slider:** Динамічна зміна моделей з унікальними траєкторіями анімації для кожного пристрою.
* **Advanced Comparison Table:** Адаптивна таблиця порівняння з використанням CSS Grid анімацій для максимальної плавності.
* **Mobile-First Experience:** Реалізація нативного **Snap-Scrolling** (магнітного скролу) та оптимізованих тач-зон.
* **Quick Order Form:** Лаконічна форма замовлення з вбудованою валідацією.

## 🚀 Технологічний стек

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Deployment:** GitHub Pages

## ⚡ Оптимізація та продуктивність

У проєкті реалізовано ряд рішень для досягнення високих балів у Lighthouse:

* **Image Optimization:** Перехід на формат **WebP** та використання `fetchpriority="high"` для LCP-зображень.
* **Main Thread Efficiency:** Важкі JS-анімації замінено на **GPU-accelerated CSS transitions** (grid-template-rows).
* **Rendering Logic:** Використання `React.memo` та `useCallback` для ізоляції рендеру та запобігання зайвим обчисленням.
* **Zero Forced Reflows:** Анімації побудовані виключно на властивостях `transform` та `opacity`.

## 🛠 Інсталяція

1. Клонуйте репозиторій:
```bash
git clone https://github.com/твій-юзернейм/headphones-landing.git

```


2. Встановіть залежності:
```bash
npm install

```


3. Запустіть локальний сервер:
```bash
npm run dev

```



## 📦 Деплой

Проєкт автоматично збирається та деплоїться на GitHub Pages за допомогою скрипта:

```bash
npm run deploy

```

---

© 2026 Island_with_apple. Всі права захищені.

```

```
