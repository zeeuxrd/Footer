"use client";

import Sticker from './Sticker';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stickers = [
  { text: "MARKETING", color: "#22C55E", rotation: "-15deg", delay: 200, desktopClass: "absolute bottom-16 -left-[10%] z-10" },
  { text: "SALES", color: "#60A5FA", rotation: "20deg", delay: 400, desktopClass: "absolute bottom-28 left-[17%] z-10" },
  { text: "FRAMER DEV", color: "#FEF3C7", rotation: "-10deg", delay: 600, desktopClass: "absolute bottom-8 left-[34%] z-10" },
  { text: "WEBFLOW", color: "#4ADE80", rotation: "-5deg", delay: 800, desktopClass: "absolute bottom-20 left-[52%] z-10" },
  { text: "PORTFOLIO", color: "#EAB308", rotation: "-25deg", delay: 1000, desktopClass: "absolute bottom-10 left-[70%] z-10" },
  { text: "ILLUSTRATION", color: "#F472B6", rotation: "-15deg", delay: 1200, desktopClass: "absolute bottom-32 right-[0%] z-10" },
  { text: "STRATEGY", color: "#FEF08A", rotation: "5deg", delay: 1400, desktopClass: "absolute bottom-28 left-[0%] z-20" },
  { text: "BRANDING", color: "#F97316", rotation: "-5deg", delay: 1600, desktopClass: "absolute bottom-12 left-[8%] z-20" },
  { text: "WEBSITE DEV", color: "#FBCFE8", rotation: "-15deg", delay: 1800, desktopClass: "absolute bottom-8 left-[25%] z-20" },
  { text: "NEWSLETTER", color: "#F97316", rotation: "18deg", delay: 2000, desktopClass: "absolute bottom-8 left-[43%] z-20" },
  { text: "UI/UX DESIGN", color: "#60A5FA", rotation: "10deg", delay: 2200, desktopClass: "absolute bottom-24 left-[60%] z-20" },
  { text: "AI DESIGNS", color: "#FEF3C7", rotation: "5deg", delay: 2400, desktopClass: "absolute bottom-4 left-[80%] z-20" },
  { text: "ADVERTISEMENT", color: "#60A5FA", rotation: "-8deg", delay: 2600, desktopClass: "absolute bottom-12 -right-[10%] z-20" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 md:pt-24 pb-8 relative min-h-[600px] md:min-h-[800px] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 xl:px-0 z-10 flex-grow">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:gap-6 mb-8 md:mb-14">
          <h2 className="w-full animate-fairy-shimmer text-[32px] md:text-5xl font-bold tracking-tight leading-tight">

            {/* Mobile Hand Layout (Floated to allow text wrapping) */}
            <div className="md:hidden float-right ml-4 mt-6 flex-shrink-0">
              <Image
                src="/hand-icon.svg"
                alt="Hand Icon"
                width={100}
                height={100}
                className="drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] w-[42px] h-auto object-contain"
              />
            </div>

            THANK YOU FOR YOUR CURIOSITY.<br className="hidden md:block" />
            LET'S BUILD SOMETHING COOL.
          </h2>

          {/* Desktop Hand Layout */}
          <div className="hidden md:block flex-shrink-0 mt-4 md:mt-0">
            <Image
              src="/hand-icon.svg"
              alt="Hand Icon"
              width={100}
              height={100}
              className="drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] w-[84px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="border-t border-b border-gray-800 border-dashed py-10 md:py-16 flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
              <Image src="/logoicon.svg" alt="Apex Logo" width={32} height={32} />
              <span className="text-2xl font-semibold">Apex™</span>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Smarter tools for modern finance teams.<br />
              All rights reserved.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-24 w-full lg:w-auto">
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-sm">Quick Links</h4>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-sm">Products</h4>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Ai Assistant</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Credit Card</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-sm">Company</h4>
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stickers Section */}
      <div className="relative h-[120px] sm:h-[160px] md:h-[250px] w-full mt-5 md:mt-14 z-0 flex items-center">
        
        {/* Mobile Marquee (Hidden on Desktop) */}
        <div className="md:hidden flex w-full pointer-events-auto h-full items-center">
          <motion.div 
            className="flex w-max gap-8 pr-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {/* First Set */}
            <div className="flex gap-8 items-center">
              {stickers.map((s, i) => (
                <motion.div 
                  key={`m1-${i}`} 
                  className="flex-shrink-0"
                  animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + (i % 3), ease: "easeInOut", delay: i * 0.15 }}
                >
                  <Sticker text={s.text} color={s.color} rotation={s.rotation} delay={s.delay} />
                </motion.div>
              ))}
            </div>
            {/* Duplicate Set for Infinite Loop */}
            <div className="flex gap-8 items-center">
              {stickers.map((s, i) => (
                <motion.div 
                  key={`m2-${i}`} 
                  className="flex-shrink-0"
                  animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + (i % 3), ease: "easeInOut", delay: i * 0.15 }}
                >
                  <Sticker text={s.text} color={s.color} rotation={s.rotation} delay={s.delay} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop Absolute Layout (Hidden on Mobile) */}
        <div className="hidden md:block absolute -bottom-6 left-0 right-0 h-full w-full mx-auto overflow-visible pointer-events-none">
          {stickers.map((s, i) => (
            <div key={`d-${i}`} className={s.desktopClass}>
              <Sticker text={s.text} color={s.color} rotation={s.rotation} delay={s.delay} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
