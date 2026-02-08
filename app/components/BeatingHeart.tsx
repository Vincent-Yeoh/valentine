"use client";
import { motion, useAnimation } from "framer-motion";
import confetti from "canvas-confetti";

const AetherHeart = () => {
  const controls = useAnimation();

  const handleHeartClick = () => {
    // 1. Trigger the "Pop" animation
    controls.start({
      scale: [1, 0.8, 1.4, 1],
      transition: { duration: 0.5, ease: "easeInOut" }
    });

    // 2. Heart-shaped Confetti Burst
    const scalar = 2;
    const heart = confetti.shapeFromPath({ path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' });

    confetti({
      shapes: [heart],
      particleCount: 40,
      spread: 80,
      origin: { y: 0.7 }, // Adjust based on your heart's screen position
      colors: ['#ff1f1f', '#ef4444', '#ffffff'],
      scalar
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full pt-0 pb-60 bg-[#0f0a0a] -mt-24 overflow-visible">
      
      {/* 1. The Aura */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-red-600 rounded-full blur-[120px] z-0 pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle, black 20%, transparent 80%)",
        }}
      />

      {/* 2. Floating Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
          className="absolute border-[0.5px] border-white/5 rounded-full z-10 pointer-events-none"
          style={{
            width: `${280 + i * 80}px`,
            height: `${280 + i * 80}px`,
          }}
        />
      ))}

      {/* 3. The Interactive Heart Core */}
      <motion.div
        animate={controls}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleHeartClick}
        className="relative z-20 cursor-pointer"
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="240" height="240" viewBox="0 0 24 24" className="filter drop-shadow-[0_0_40px_rgba(239,68,68,0.6)]">
            <defs>
              <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1f1f" />
                <stop offset="100%" stopColor="#5e0000" />
              </linearGradient>
            </defs>
            
            {/* The Beating Core */}
            <motion.path
              animate={{
                scale: [1, 1.03, 1],
                fill: ["#7a0000", "#ef4444", "#7a0000"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ originX: "12px", originY: "12px" }}
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AetherHeart;