"use client";
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedNumber = ({ value }) => {
  const count = useMotionValue(value);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 0.5, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

const CheckIcon = ({ className = "text-blue-600" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`flex-shrink-0 transition-colors duration-300 ${className}`}>
    <circle cx="8" cy="8" r="8" fill="currentColor"/>
    <path d="M11.3334 5.5L6.75004 10.0833L4.66671 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeCard, setActiveCard] = useState(1); // 1 = Essential, 2 = Advanced, 3 = Global

  const features = [
    "Up to 10 team seats",
    "Role-based permissions",
    "Tracking dashboard",
    "Payment scheduling",
    "Priority email support",
    "Monthly finance reports"
  ];

  return (
    <div className="relative min-h-screen bg-[#F9FAFB] py-16 md:py-24 font-sans text-gray-900 overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px)',
          backgroundSize: 'calc(100% / 12) 100%'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Plans & Pricing</p>
          <h1 className="text-4xl md:text-[56px] font-black uppercase tracking-tight text-[#111827] mb-4 leading-[1.1]">
            Flexible Pricing For<br />Growing Banks
          </h1>
          <p className="text-base md:text-lg text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
            Optimize payment accuracy and manage transfers with secure workflows.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center relative mt-6">
            <div className="bg-[#F3F4F6] rounded-full p-1 flex items-center">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isAnnual ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Yearly
              </button>
            </div>
            
            {/* Arrow & Save text */}
            <div className="absolute left-1/2 ml-20 md:ml-24 -mt-6 flex items-center">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10 Q 12 3 20 8 M 15 8 L 20 8 L 20 3" />
              </svg>
              <span className="text-blue-600 font-medium text-xs md:text-sm">Save 20%</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto items-start">
          
          {/* Essential Plan - Blue */}
          <div 
            onClick={() => setActiveCard(1)}
            data-active={activeCard === 1}
            className="group cursor-pointer rounded-[24px] p-[3px] pt-10 relative transition-all duration-300 bg-white border border-gray-200 hover:border-transparent data-[active=true]:border-transparent hover:bg-[#E0E7FF] data-[active=true]:bg-[#E0E7FF] transform hover:-translate-y-2 data-[active=true]:-translate-y-2 hover:shadow-xl data-[active=true]:shadow-xl hover:shadow-black/[.06] data-[active=true]:shadow-black/[.06]"
          >
            <div className="absolute top-3 left-0 right-0 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100">
              <span className="text-gray-500 group-hover:text-blue-700 group-data-[active=true]:text-blue-700 text-xs font-semibold tracking-wide transition-colors duration-300">
                Billed annually — save 15%
              </span>
            </div>
            <div className="bg-white rounded-[22px] p-6 md:p-8 h-full flex flex-col transition-all duration-300">
              <h3 className="text-[22px] font-semibold mb-2">Essential plan</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">Perfect for small teams handling payments and transfers daily.</p>
              <div className="flex items-center gap-2 mb-8 mt-auto">
                <span className="text-[48px] font-bold tracking-tight text-gray-900">$<AnimatedNumber value={isAnnual ? 249 : 299} /></span>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-medium text-gray-500 leading-tight">monthly</span>
                  <span className="text-[11px] text-gray-400 leading-tight">billed annually</span>
                </div>
              </div>
              <button className="w-full font-medium py-3 rounded-lg transition-colors duration-300 mb-8 shadow-sm bg-white text-gray-900 border border-gray-200 group-hover:bg-blue-600 group-data-[active=true]:bg-blue-600 group-hover:text-white group-data-[active=true]:text-white group-hover:border-transparent group-data-[active=true]:border-transparent">
                Start free trial
              </button>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckIcon className="text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Advanced Plan - Green */}
          <div 
            onClick={() => setActiveCard(2)}
            data-active={activeCard === 2}
            className="group cursor-pointer rounded-[24px] p-[3px] pt-10 relative transition-all duration-300 bg-white border border-gray-200 hover:border-transparent data-[active=true]:border-transparent hover:bg-[#dcfce7] data-[active=true]:bg-[#dcfce7] transform hover:-translate-y-2 data-[active=true]:-translate-y-2 hover:shadow-xl data-[active=true]:shadow-xl hover:shadow-black/[.06] data-[active=true]:shadow-black/[.06]"
          >
            <div className="absolute top-3 left-0 right-0 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100">
              <span className="text-gray-500 group-hover:text-green-800 group-data-[active=true]:text-green-800 text-xs font-semibold tracking-wide transition-colors duration-300">
                Billed annually — save 25%
              </span>
            </div>
            <div className="bg-white rounded-[22px] p-6 md:p-8 h-full flex flex-col transition-all duration-300">
              <h3 className="text-[22px] font-semibold mb-2">Advanced</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">For startups sending, receiving and managing global payments.</p>
              <div className="flex items-center gap-2 mb-8 mt-auto">
                <span className="text-[48px] font-bold tracking-tight text-gray-900">$<AnimatedNumber value={isAnnual ? 449 : 549} /></span>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-medium text-gray-500 leading-tight">monthly</span>
                  <span className="text-[11px] text-gray-400 leading-tight">billed annually</span>
                </div>
              </div>
              <button className="w-full font-medium py-3 rounded-lg transition-colors duration-300 mb-8 shadow-sm bg-white text-gray-900 border border-gray-200 group-hover:bg-blue-600 group-data-[active=true]:bg-blue-600 group-hover:text-white group-data-[active=true]:text-white group-hover:border-transparent group-data-[active=true]:border-transparent">
                Start free trial
              </button>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckIcon className="text-blue-600 group-hover:text-[#16a34a] group-data-[active=true]:text-[#16a34a]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Global Plan - Pink */}
          <div 
            onClick={() => setActiveCard(3)}
            data-active={activeCard === 3}
            className="group cursor-pointer rounded-[24px] p-[3px] pt-10 relative transition-all duration-300 bg-white border border-gray-200 hover:border-transparent data-[active=true]:border-transparent hover:bg-[#fae8ff] data-[active=true]:bg-[#fae8ff] transform hover:-translate-y-2 data-[active=true]:-translate-y-2 hover:shadow-xl data-[active=true]:shadow-xl hover:shadow-black/[.06] data-[active=true]:shadow-black/[.06]"
          >
            <div className="absolute top-3 left-0 right-0 text-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100">
              <span className="text-gray-500 group-hover:text-fuchsia-800 group-data-[active=true]:text-fuchsia-800 text-xs font-semibold tracking-wide transition-colors duration-300">
                Billed annually — save 45%
              </span>
            </div>
            <div className="bg-white rounded-[22px] p-6 md:p-8 h-full flex flex-col transition-all duration-300">
              <h3 className="text-[22px] font-semibold mb-2">Global plan</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">Built for scaling companies with finance teams and compliance needs.</p>
              <div className="flex items-center gap-2 mb-8 mt-auto">
                <span className="text-[48px] font-bold tracking-tight text-gray-900">$<AnimatedNumber value={isAnnual ? 549 : 689} /></span>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-medium text-gray-500 leading-tight">monthly</span>
                  <span className="text-[11px] text-gray-400 leading-tight">billed annually</span>
                </div>
              </div>
              <button className="w-full font-medium py-3 rounded-lg transition-colors duration-300 mb-8 shadow-sm bg-white text-gray-900 border border-gray-200 group-hover:bg-blue-600 group-data-[active=true]:bg-blue-600 group-hover:text-white group-data-[active=true]:text-white group-hover:border-transparent group-data-[active=true]:border-transparent">
                Start free trial
              </button>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckIcon className="text-blue-600 group-hover:text-[#c026d3] group-data-[active=true]:text-[#c026d3]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Text */}
        <div className="mt-12 md:mt-16 text-center text-[15px] text-gray-500 px-4">
          All plans include a 14-day free trial. No credit card required. <span className="text-gray-700 ml-1 whitespace-nowrap">Questions?</span> <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center ml-1">See our FAQ <span className="ml-1 text-lg leading-none">→</span></a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
