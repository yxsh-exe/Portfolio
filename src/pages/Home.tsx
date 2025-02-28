import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ElegantShape } from "@/components/ui/shape-landing-hero";
import { useTheme } from "@/components/theme-provider";
import React, { useState, useEffect } from 'react';
import { ThemeToggle } from "@/components/theme-toggle";


const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="w-full">
      <div className={`relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden ${isDark ? "bg-[#030303]" : "bg-gray-50"}`}>
        <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-100/[0.05]" : "bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]"} blur-3xl`} />

        <div className="flex flex-col items-center">
        <header className=" absolute top-5 right-5 z-10 bg-background/80">
          <ThemeToggle />
        </header>
          <ElegantShape
            delay={0.3}
            width={100}
            height={140}
            rotate={12}
            gradient={isDark ? "from-indigo-500/[0.15]" : "from-indigo-500/[0.10]"}
            className="md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient={isDark ? "from-rose-500/[0.15]" : "from-rose-500/[0.10]"}
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient={isDark ? "from-violet-500/[0.15]" : "from-violet-500/[0.10]"}
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient={isDark ? "from-amber-500/[0.15]" : "from-amber-500/[0.10]"}
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient={isDark ? "from-cyan-500/[0.15]" : "from-cyan-500/[0.10]"}
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className={`bg-clip-text text-transparent ${isDark ? "bg-gradient-to-b from-white to-white/80" : "bg-gradient-to-b from-gray-900 to-gray-700"}`}>
                  Hello there! I'm Yash
                </span>
                <br />
                <span className={`bg-clip-text text-transparent ${isDark ? "bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300" : "bg-gradient-to-l from-indigo-600 via-purple-600 to-rose-500"}`}>
                  Full-Stack Developer
                </span>
              </h1>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className={`text-base sm:text-lg md:text-xl ${isDark ? "text-white/40" : "text-gray-600"} mb-8 leading-relaxed font-medium tracking-wide max-w-xl mx-auto px-4`}>
                I love building products and web apps that can impact millions of lives with 1 year of experience in scalable, performance-optimized solutions.
              </p>
            </motion.div>
          </div>
        </div>

        <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" : "bg-gradient-to-t from-gray-50 via-transparent to-gray-50/80"} pointer-events-none`} />
      </div>
    </div>
  );
};

export default Home;