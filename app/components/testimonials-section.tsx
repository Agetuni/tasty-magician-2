import React from "react";
import { Testimonial } from "../data";
import { QuoteIcon } from "lucide-react";
import { TestimonialCard } from "./testimonial-card";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jamie Park",
    role: "Creative Director, FlowTask",
    quote:
      "Alex is that rare creative who bridges vision and clarity—our app felt both beautiful and easy to use thanks to their process.",
    avatarUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=80&h=80&fit=crop&auto=format"
  },
  {
    id: 2,
    name: "Sloan Reese",
    role: "Owner, Moonlight Cafe",
    quote:
      "Collaborating with Alex was seamless and fun. The new brand identity drew dozens of new patrons and boosted our Instagram engagement!",
    avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&auto=format"
  },
  {
    id: 3,
    name: "Morgan Lee",
    role: "Product Manager, FlowTask",
    quote:
      "From onboarding to handoff, every prototype felt sharp and purpose-built. Alex's work is smart, refined, and highly collaborative.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format"
  },
  {
    id: 4,
    name: "Riya Chopra",
    role: "Design Lead, Alphex Solutions",
    quote:
      "Alex brought our vision to life with brilliant UX instincts and constant communication. The handover was smooth and code-ready—will definitely collaborate again!",
    avatarUrl: "https://images.unsplash.com/photo-1519340333755-cd3d123a524b?w=80&h=80&fit=crop&auto=format"
  }
];

export const TestimonialsSection: React.FC = () => (
  <section id="testimonials" className="w-full max-w-3xl mx-auto mt-24 px-6">
    <h2 className="text-3xl font-bold mb-8 flex gap-2 items-center">
      <QuoteIcon className="w-8 h-8 text-indigo-500"/> Testimonials
    </h2>
    <div className="grid gap-8 md:grid-cols-2">
      {testimonials.map((t) => (
        <TestimonialCard key={t.id} testimonial={t} />
      ))}
    </div>
  </section>
);
