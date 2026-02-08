"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0f0a0a]">
      {/* 1. Flashy Background: Floating Hearts */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500/20 text-4xl"
            initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
            animate={{ 
              y: "-10vh", 
              opacity: [0, 1, 0],
              rotate: 360 
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10 
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      {/* 2. Main Content Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10 text-center px-4"
      >
        <div className="backdrop-blur-md bg-white/5 p-12 rounded-3xl border border-white/10 shadow-2xl">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            致<span className="text-red-300">我的灵魂伴侣 </span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-300 text-lg md:text-xl font-light tracking-widest uppercase mb-8"
          >
            Approaching 2 Years of Us
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center"
          >
            <div className="h-12 w-[1px] bg-gradient-to-b from-red-400 to-transparent animate-bounce" />
          </motion.div>
          
          <p className="text-xs text-gray-500 mt-4 animate-pulse">Scroll to explore our journey</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;