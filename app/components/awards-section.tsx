import React from "react";
import { Award } from "../data";
import { AwardIcon } from "lucide-react";

const awards: Award[] = [
  {
    id: 1,
    title: "Awwwards Site of the Day",
    year: "2023",
    description: "Recognized for exceptional design, creativity, and innovation for the FlowTask mobile UI."
  },
  {
    id: 2,
    title: "CSS Design Awards Winner",
    year: "2022",
    description: "Awarded for the Moonlight Cafe branding & digital campaign."
  },
  {
    id: 3,
    title: "ADC Young Guns Finalist",
    year: "2022",
    description: "Honored among the top creative talents under 30."
  }
];

export const AwardsSection: React.FC = () => (
  <section id="awards" className="max-w-4xl mx-auto mt-20 px-6">
    <h2 className="text-3xl font-bold mb-8 flex gap-2 items-center"><AwardIcon className="w-8 h-8 text-indigo-500"/> Awards & Honors</h2>
    <div className="flex flex-col gap-6">
      {awards.map(a => (
        <div key={a.id} className="border px-6 py-5 rounded-xl bg-gradient-to-r from-white to-gray-50/50 shadow hover:shadow-lg transition">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-lg">{a.title}</h3>
            <span className="text-sm text-gray-500">{a.year}</span>
          </div>
          <p className="text-gray-700 text-sm">{a.description}</p>
        </div>
      ))}
    </div>
  </section>
);
