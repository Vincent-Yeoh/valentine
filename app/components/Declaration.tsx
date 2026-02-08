"use client";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const Declaration = () => {
  // Trigger heart confetti when she reaches the end
  const handleConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const bounceEffect = {
    whileHover: { scale: 1.02, color: "#f87171" }, // Glows red on hover    
    whileTap: { scale: 0.95, rotate: [0, -1, 1, 0] }, // Subtle shrink and jiggle
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  return (
    <section className="min-h-screen bg-[#0f0a0a] flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full space-y-12">
        {/* Paragraph 1 */}
        <motion.p 
          {...bounceEffect}
          
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic"
        >
          "嗨我的寶貝，情人節快樂！看到了吧，這個就是程序員的浪漫啦哈哈。滿天飛的特效~"
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-100 font-medium leading-relaxed"
        >
          "有时候我在想，最开心的其实不是什么大日子，而是那种平凡的瞬间。比如我们一起笑某个諧音梗，或者一起準備晚餐的時候。谢谢你走进我的生活，让我发现原来两个人在一起可以这么舒服。我可能不太会表达，但我真的很珍惜你，也很珍惜我们的小日子。"
        </motion.p>

        {/* Final Big Declaration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          onViewportEnter={handleConfetti}
          transition={{ duration: 1.5 }}
          className="pt-10 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-red-500 mb-4">
            I love you, Tan Pei Jie!
          </h2>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-[0.3em]">
            To 2026 and way beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Declaration;