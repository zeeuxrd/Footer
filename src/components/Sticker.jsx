"use client";

import { useId, useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const Sparkle = ({ className, delay }) => (
  <svg 
    className={`absolute animate-glitter pointer-events-none ${className}`} 
    style={{ animationDelay: delay }} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
  </svg>
);

export default function Sticker({ text, color, rotation, delay = 0 }) {
  const stickerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const timeoutRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Generate unique IDs for this instance to prevent SVG mask clashes
  const maskId = useId();
  const clipId0 = useId();
  const clipId1 = useId();

  return (
    <div 
      className="animate-float-in opacity-0 pointer-events-auto" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <motion.div 
        ref={stickerRef}
        drag
        whileDrag={{ scale: 1.15, cursor: "grabbing", zIndex: 50, filter: "drop-shadow(0px 0px 14px rgba(255, 255, 255, 0.55))" }}
        onDragStart={() => {
          setIsDragging(true);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }}
        onDrag={(e, info) => {
          const x = info.point.x;
          const y = info.point.y;
          document.querySelectorAll('.sticker-element').forEach(el => {
            if (el === stickerRef.current) return;
            const rect = el.getBoundingClientRect();
            const cx = rect.left + window.scrollX + rect.width / 2;
            const cy = rect.top + window.scrollY + rect.height / 2;
            const dist = Math.hypot(cx - x, cy - y);
            if (dist < 220) {
              el.classList.add('nearby-shake');
            } else {
              el.classList.remove('nearby-shake');
            }
          });
        }}
        onDragEnd={() => {
          setIsDragging(false);
          document.querySelectorAll('.sticker-element').forEach(el => el.classList.remove('nearby-shake'));
          
          timeoutRef.current = setTimeout(() => {
            animate(x, 0, { type: "spring", stiffness: 200, damping: 20 });
            animate(y, 0, { type: "spring", stiffness: 200, damping: 20 });
          }, 1500);
        }}
        className="sticker-element relative flex items-center justify-center w-[110px] h-[55px] md:w-[160px] md:h-[80px] drop-shadow-xl cursor-grab"
        style={{ x, y, rotate: rotation }}
      >
        {/* Glitters */}
        {isDragging && (
          <div className="absolute -inset-8 pointer-events-none z-0">
            <Sparkle className="top-2 left-0 text-yellow-300 w-5 h-5" delay="0s" />
            <Sparkle className="bottom-0 right-2 text-pink-300 w-5 h-5" delay="0.2s" />
            <Sparkle className="-top-4 right-4 text-blue-300 w-6 h-6" delay="0.4s" />
            <Sparkle className="-bottom-4 left-6 text-white w-4 h-4" delay="0.6s" />
            <Sparkle className="top-1/2 -right-6 text-yellow-200 w-5 h-5" delay="0.3s" />
            <Sparkle className="top-1/2 -left-6 text-pink-200 w-4 h-4" delay="0.7s" />
          </div>
        )}

        <div className="w-full h-full flex items-center justify-center hover-jiggle">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 190 105" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id={maskId} style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="190" height="105">
          <g clipPath={`url(#${clipId0})`}>
            <g clipPath={`url(#${clipId1})`}>
              <path d="M15.2381 75.5481C6.9086 74.0866 1.30772 66.3388 2.7283 58.243L10.3756 14.6613C11.7962 6.56548 19.7002 1.18748 28.0297 2.64906C36.3592 4.11064 41.9601 11.8583 40.5395 19.9542L32.8922 63.5359C31.4716 71.6317 23.5676 77.0097 15.2381 75.5481Z" fill="#fff"/>
              <path d="M44.5545 80.6923C36.225 79.2307 30.6241 71.483 32.0447 63.3872L39.692 19.8055C41.1126 11.7096 49.0166 6.33165 57.3461 7.79322C65.6756 9.2548 71.2765 17.0025 69.8559 25.0984L62.2086 68.68C60.788 76.7759 52.884 82.1539 44.5545 80.6923Z" fill="#fff"/>
              <path d="M73.8719 85.8367C65.5424 84.3751 59.9415 76.6274 61.3621 68.5315L69.0094 24.9498C70.43 16.854 78.334 11.476 86.6635 12.9376C94.993 14.3991 100.594 22.1469 99.1733 30.2427L91.526 73.8244C90.1046 81.9201 82.2005 87.2981 73.8719 85.8367Z" fill="#fff"/>
              <path d="M103.189 90.9808C94.8593 89.5192 89.2584 81.7715 90.679 73.6757L98.3263 30.094C99.7469 21.9982 107.651 16.6202 115.98 18.0817C124.31 19.5433 129.911 27.291 128.49 35.3869L120.843 78.9685C119.422 87.0644 111.518 92.4424 103.189 90.9808Z" fill="#fff"/>
              <path d="M132.505 96.125C124.176 94.6635 118.575 86.9158 119.995 78.8199L127.643 35.2382C129.063 27.1424 136.967 21.7644 145.297 23.226C153.626 24.6875 159.227 32.4353 157.807 40.5311L150.159 84.1128C148.739 92.2086 140.835 97.5866 132.505 96.125Z" fill="#fff"/>
              <path d="M161.823 101.269C153.493 99.8078 147.892 92.0601 149.313 83.9642L156.96 40.3826C158.381 32.2867 166.285 26.9087 174.614 28.3703C182.944 29.8319 188.545 37.5796 187.124 45.6755L179.477 89.2571C178.055 97.3528 170.151 102.731 161.823 101.269Z" fill="#fff"/>
            </g>
          </g>
        </mask>
        
        <g mask={`url(#${maskId})`}>
          <rect x="12.9331" width="179.65" height="74.77" transform="rotate(9.95239 12.9331 0)" fill={color} />
        </g>
        
        <defs>
          <clipPath id={clipId0}>
            <rect width="179.65" height="74.77" fill="white" transform="translate(12.9331) rotate(9.95239)"/>
          </clipPath>
          <clipPath id={clipId1}>
            <rect width="179.62" height="74.77" fill="white" transform="translate(12.9478 0.00262451) rotate(9.95239)"/>
          </clipPath>
        </defs>
      </svg>
      <span 
        className="relative z-10 text-black font-medium tracking-tight text-[10px] md:text-sm uppercase whitespace-nowrap pl-2 pt-2 line-through decoration-1"
        style={{ transform: "rotate(10deg)" }}
      >
        {text}
      </span>
        </div>
      </motion.div>
    </div>
  );
}
