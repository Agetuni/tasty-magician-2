import React from "react";

const bgUrl = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&auto=format";

export const HeroSection: React.FC = () => (
  <section className="w-full h-[60vh] flex flex-col justify-center items-center relative overflow-hidden">
    <img src={bgUrl} alt="Creative workspace background" className="absolute inset-0 w-full h-full object-cover brightness-75" loading="lazy"/>
    <div className="relative z-10 flex flex-col items-center text-white ">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-center">Hi, I'm Alex Doe</h1>
      <p className="max-w-xl text-lg md:text-2xl text-center opacity-90 mb-8 font-medium">A Creative Designer & Developer passionate about unique digital experiences, artful visuals, and impactful storytelling.</p>
      <a href="#gallery" className="text-lg bg-white/80 hover:bg-white/100 text-gray-900 font-bold px-8 py-3 rounded-full shadow transition-all">See My Work</a>
    </div>
  </section>
);
