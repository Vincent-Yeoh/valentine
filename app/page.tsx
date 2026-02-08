import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Declaration from './components/Declaration';
import BeatingHeart from './components/BeatingHeart';
import PlushieSprite from './components/PlushieSprite';

export default function Home() {
  return (
  <main className="bg-[#0f0a0a] min-h-screen overflow-x-hidden relative">
      <Hero />
      <Timeline />
      <Declaration />
      <BeatingHeart />

      {/* Plushie Sprites */}
      <PlushieSprite src="/plushie2.png" position="left" delay={0} />
    </main>
  );
}