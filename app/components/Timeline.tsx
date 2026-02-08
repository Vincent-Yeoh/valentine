"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    date: "2024年1月",
    title: "缘分的开始", // The Start of Fate
    description: "我们在公司初次相遇，那一刻，我体会到了什么是心动。", 
    // "We met at the office. In that moment, I understood what it meant for a heart to flutter."
    icon: "💼",
  },
  {
    date: "2024年3月21日",
    title: "勇敢的告白", // A Brave Confession
    description: "在五味茶城，我终于向你诉说了心意。那是我们故事的正式开篇。",
    // "At Wuwei Tea City, I finally told you how I felt. That was the official opening of our story."
    icon: "🍵",
  },
  {
    date: "2024年3月24日",
    title: "初次约会", // First Date
    description: "一起逛街、看电影，简单的时光里全是甜甜的空气。",
    // "Shopping and movies together; simple moments filled with sweet air."
    icon: "🎬",
  },
  {
    date: "2024年12月",
    title: "温暖的圣诞", // Warm Christmas
    description: "我们一起度过的第一个圣诞节，在这个寒冬，你是最温暖的存在。",
    // "Our first Christmas together. In this cold winter, you are the warmest presence."
    icon: "🎄",
  },
  {
    date: "2025年3月21日",
    title: "周年纪念", // Anniversary
    description: "一年的相守，让我们更加确信彼此就是那个对的人。",
    // "A year of being together made us even more certain that we are the right ones for each other."
    icon: "✨",
  },
  {
    date: "2026年3月21日",
    title: "两载春秋", // Two Years (Poetic)
    description: "这是我人生中最幸福的两年。往后余生，愿始终有你。",
    // "The happiest two years of my life. For the rest of my life, I wish to always have you."
    icon: "♾️",
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  
  // Logic to calculate days since start
  const startDate = new Date("2024-03-21");
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#0f0a0a] py-20 px-4">
      {/* 1. The Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-serif text-white mb-4">Our Story</h2>
        <p className="text-red-400 font-mono tracking-tighter">
          {diffDays} DAYS AND COUNTING
        </p>
      </div>

      {/* 2. The Central Line */}
      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          style={{ scaleY }}
          className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-red-500 to-pink-500 origin-top"
        />

        {/* 3. The Milestones */}
        {milestones.map((item, index) => (
          <div key={index} className={`mb-24 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="hidden md:block w-5/12" />
            
            {/* The Dot */}
            <div className="z-20">
              <div className="h-10 w-10 bg-[#0f0a0a] border-2 border-red-500 rounded-full flex items-center justify-center text-xl shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                {item.icon}
              </div>
            </div>

            {/* The Content Card */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-5/12 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
            >
              <span className="text-red-400 font-mono text-sm">{item.date}</span>
              <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
              <p className="text-gray-400 mt-2 font-light">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;