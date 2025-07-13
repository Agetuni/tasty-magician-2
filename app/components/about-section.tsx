import React from "react";

const aboutImg = "https://images.unsplash.com/photo-1519340333755-caf473c0ce42?w=600&h=800&fit=crop&auto=format";

export const AboutSection: React.FC = () => (
  <section id="about" className="max-w-4xl mx-auto my-24 px-6 flex flex-col md:flex-row gap-10 items-center">
    <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center">
      <img src={aboutImg} alt="Alex Doe portrait" className="rounded-2xl shadow-xl w-64 h-80 object-cover" loading="lazy" />
    </div>
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-5 text-lg text-gray-700">
        I'm Alex Doe, a multidisciplinary designer and front-end developer based in San Francisco. I blend clean aesthetics with technical proficiency to create branding, web, and product experiences that empower people and organizations.
      </p>
      <p className="mb-2 text-gray-600">
        With over 7 years shaping digital brands and products, I thrive on collaborative challenges, story-driven visuals, and thoughtful code. When not designing, you'll find me hiking, shooting film, or at a local art event.
      </p>
      <a href="/resume.pdf" download className="inline-block mt-5 px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition">Download Resume</a>
    </div>
  </section>
);
