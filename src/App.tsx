import { ReactLenis } from 'lenis/react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid'; 
import FeaturesGallery from './components/FeaturesGallery';
import TrustBlock from './components/TrustBlock';
import Comparison from './components/Comparison';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2 }}>
      <main className="w-full min-h-screen bg-white">
        <Header />

        {/* In progress ---> <Hero3D />*/}
        <Hero />
        <TrustBlock />
        <FeaturesGallery />
        <ProductGrid />
        <Comparison />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;