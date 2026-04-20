export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
      
      <div className="text-xl font-black tracking-tight text-black flex items-center gap-2">
        <span className="text-red-600 text-2xl"></span>
        Island With Apple
      </div>
      
      <nav className="hidden md:flex gap-8 text-[15px] font-medium text-gray-600">
        <a href="#products" className="hover:text-red-600 transition-colors">Продукти</a>
        <a href="#why-us" className="hover:text-red-600 transition-colors">Чому ми</a>
        <a href="#community" className="hover:text-red-600 transition-colors">Спільнота</a>
      </nav>
      
      <div className="flex gap-3">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer"
          className="px-5 py-2 text-sm font-semibold text-white bg-red-700 hover:bg-red-800 rounded-full transition-all"
        >
          Instagram
        </a>
      </div>
      
    </header>
  );
}