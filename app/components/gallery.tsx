import React, { useState } from "react";
import { Project } from "../data";
import { Badge } from "@/components/ui/badge";

const projects: Project[] = [
  {
    id: 1,
    title: "Branding for Moonlight Cafe",
    description: "Cozy atmospheres meet playful design for a boutique coffee shop.",
    categories: ["Branding", "Design"],
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=800&fit=crop&auto=format",
    largeImageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&h=1500&fit=crop&auto=format",
    details:
      "Full branding package for an artisan cafe—logo, colors, menus, environmental design, and social presence.",
    technologies: ["Illustrator", "Photoshop", "Brand Strategy"],
    caseStudy:
      "The client sought to create an inviting yet modern identity. I worked closely with their team to craft each visual detail, from color palettes to signage. The launch led to a 40% increase in foot traffic.",
    externalLink: "#"
  },
  {
    id: 2,
    title: "Portfolio Website Redesign",
    description: "Modern, responsive portfolio for a digital agency.",
    categories: ["Web", "UI"],
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=800&fit=crop&auto=format",
    largeImageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1000&h=1500&fit=crop&auto=format",
    details: "Custom-built React website, emphasizing interactivity and bold layouts.",
    technologies: ["React", "Figma", "Next.js"],
    caseStudy:
      "I reimagined their digital presence, enabling faster load times and increased conversions by 2x. The experience highlights animation and user journey.",
    externalLink: "#"
  },
  {
    id: 3,
    title: "App UI for FlowTask",
    description: "Sleek mobile task manager, colorful and minimal.",
    categories: ["UI", "App"],
    imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?w=600&h=800&fit=crop&auto=format",
    largeImageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3a8b?w=1000&h=1500&fit=crop&auto=format",
    details:
      "Mobile UI/UX for productivity. Clean screens, delightful gestures, and a bright palette for modern users.",
    technologies: ["Sketch", "User Testing", "InVision"],
    caseStudy:
      "Worked iteratively with focus groups to test features and accessibility. The app was featured on Product Hunt's front page.",
    externalLink: "#"
  },
  {
    id: 4,
    title: "Packaging for Wildflower Soap",
    description: "Eco-friendly, floral-inspired soap packaging.",
    categories: ["Packaging", "Branding"],
    imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=800&fit=crop&auto=format",
    largeImageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1000&h=1500&fit=crop&auto=format",
    details:
      "Designed packaging using sustainable materials and custom illustration, communicating the artisan process.",
    technologies: ["Illustrator", "Sustainability"],
    caseStudy:
      "Brand received positive attention in eco-friendly circles and was stocked by a major boutique retail chain.",
    externalLink: "#"
  },
  {
    id: 5,
    title: "Event Campaign – Night Light Run",
    description: "Run-themed event branding, posters, and merch.",
    categories: ["Branding", "Event"],
    imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&h=800&fit=crop&auto=format",
    largeImageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000&h=1500&fit=crop&auto=format",
    details:
      "Posters, digital content, merch, and social campaign for annual night running event, targeting younger outdoor sports audiences.",
    technologies: ["InDesign", "Illustrator"],
    caseStudy:
      "Helped double event registrations and drove a 60% increase in social engagement.",
    externalLink: "#"
  }
];

const allCategories = [
  ...Array.from(new Set(projects.flatMap((p) => p.categories)))
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.categories.includes(selectedCategory))
    : projects;

  return (
    <section id="gallery" className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-1">Featured Projects</h2>
          <p className="text-gray-600">Browse creative projects across branding, UI, packaging, and more.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded text-sm font-medium border ${selectedCategory===null ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} hover:bg-gray-800 hover:text-white transition`}
            onClick={() => setSelectedCategory(null)}
          >All</button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`px-3 py-1 rounded text-sm font-medium border ${selectedCategory===cat ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} hover:bg-gray-800 hover:text-white transition`}
              onClick={() => setSelectedCategory(cat)}
            >{cat}</button>
          ))}
        </div>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 animate-fade-in">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative group w-full break-inside-avoid cursor-pointer shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.025] bg-white border"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full aspect-[3/4] object-cover group-hover:brightness-90 transition-all duration-300"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-gray-900/80 to-gray-900/0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-bold text-lg mb-1">{project.title}</h3>
              <p className="text-sm mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.categories.map((c) => (
                  <Badge key={c} className="text-xs bg-indigo-500/90">{c}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
