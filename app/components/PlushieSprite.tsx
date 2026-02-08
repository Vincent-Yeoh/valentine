"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

interface PlushieProps {
  src: string;
  position: "left" | "right";
  delay?: number
}

const PlushieSprite = ({ src, position, delay = 0 }: PlushieProps) => {
  const [isTwirling, setIsTwirling] = useState(false);
  
  // 1. Hook into the page scroll
  const { scrollYProgress } = useScroll();

  /* 2. Map scroll progress to opacity:
     From 0% to 80% scroll: Opacity is 1 (Visible)
     From 80% to 90% scroll: Opacity fades to 0 (Invisible)
     Adjust these numbers based on how long your page is!
  */
  const opacity = useTransform(scrollYProgress, [0, 0.8, 0.9], [1, 1, 0]);
  const pointerEvents = useTransform(scrollYProgress, [0, 0.8, 0.9], ["auto", "auto", "none"]);

  const handleTwirl = () => {
    if (isTwirling) return;
    setIsTwirling(true);
    setTimeout(() => setIsTwirling(false), 800);
  };

  return (
    <motion.div
      style={{ opacity, pointerEvents }} // Link the fade and disable clicks when gone
      onClick={handleTwirl}
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      animate={{
        y: isTwirling ? [0, -40, 0] : [0, -10, 0],
        rotate: isTwirling ? [0, 360] : [0, 2, -2, 0],
      }}
      transition={{
        y: { duration: isTwirling ? 0.6 : 3, repeat: isTwirling ? 0 : Infinity, ease: "easeInOut" },
        rotate: { duration: 0.8, repeat: isTwirling ? 0 : Infinity, ease: isTwirling ? "circOut" : "easeInOut" },
      }}
      className={`fixed bottom-6 ${position === "left" ? "left-4" : "right-4"} md:bottom-10 md:left-10 z-[100]`}
    >
      <div className="relative group flex items-center justify-center">
        {/* Core Glow */}
        <motion.div
          animate={{ opacity: isTwirling ? 0.4 : 0.15, scale: isTwirling ? 1.2 : 1 }}
          className="absolute w-full h-full bg-yellow-600 blur-[40px] rounded-full z-0"
        />

        {/* Energy Burst */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isTwirling ? { scale: [1, 2.2], opacity: [0.6, 0] } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute w-full h-full bg-yellow-400 blur-xl rounded-full z-0 border border-yellow-200/20"
        />

        <motion.img
          src={src}
          alt="Plushie"
          animate={{
            filter: isTwirling 
              ? "brightness(1.2) drop-shadow(0 0 15px rgba(253, 224, 71, 0.4))" 
              : "brightness(1) drop-shadow(0 0 5px rgba(0,0,0,0.2))"
          }}
          className="w-20 h-20 md:w-32 md:h-32 object-contain relative z-10"
        />
      </div>
    </motion.div>
  );
};

export default PlushieSprite;