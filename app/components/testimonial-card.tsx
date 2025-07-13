import React from "react";
import { Testimonial } from "../data";

export type TestimonialCardProps = {
  testimonial: Testimonial;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="bg-white rounded-xl shadow border p-6 group hover:scale-[1.02] transition-transform">
    <div className="flex items-center mb-4 gap-4">
      <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-indigo-200" loading="lazy" />
      <div>
        <div className="font-semibold text-gray-900">{testimonial.name}</div>
        <div className="text-sm text-gray-500">{testimonial.role}</div>
      </div>
    </div>
    <blockquote className="italic text-gray-700">“{testimonial.quote}”</blockquote>
  </div>
);
