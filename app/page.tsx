import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Declaration from './components/Declaration';
import BeatingHeart from './components/BeatingHeart';
import PlushieSprite from './components/PlushieSprite';

export default function Home() {
  return (
    <main className="bg-[#0f0a0a] selection:bg-red-500/30">
      <Hero />
      <Timeline />
      <Declaration />
      <BeatingHeart />

      {/* Plushie Sprites */}
      <PlushieSprite src="/plushie2.png" position="left" delay={0} />
    </main>
  );
}