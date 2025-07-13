import React from "react";
import { Button } from "@/components/ui/button";

export const Navigation: React.FC = () => (
  <nav className="flex items-center justify-between py-6 px-6 md:px-12 w-full">
    <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
      <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">MyPortfolio</span>
    </div>
    <ul className="flex gap-4 md:gap-8 text-base font-medium">
      <li><a href="#gallery" className="hover:underline transition-colors">Work</a></li>
      <li><a href="#about" className="hover:underline transition-colors">About</a></li>
      <li><a href="#awards" className="hover:underline transition-colors">Awards</a></li>
      <li><a href="#testimonials" className="hover:underline transition-colors">Testimonials</a></li>
      <li><a href="#contact"><Button size="sm">Contact</Button></a></li>
    </ul>
  </nav>
);

