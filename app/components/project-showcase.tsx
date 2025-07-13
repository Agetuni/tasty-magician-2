import React, { useState } from "react";
import { Project } from "../data";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLinkIcon } from "lucide-react";

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

export const ProjectShowcase: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {selected && (
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="w-full max-w-3xl mx-auto flex flex-col md:flex-row p-0 overflow-hidden pointer-events-auto">
            <div className="bg-gray-100 md:w-2/5 flex items-center justify-center h-64 md:h-auto">
              <img
                src={selected.largeImageUrl || selected.imageUrl}
                alt={selected.title}
                className="object-cover w-full h-full max-h-96 rounded-l-xl"
              />
            </div>
            <div className="p-8 md:w-3/5 flex flex-col">
              <h3 className="font-bold text-2xl mb-2">{selected.title}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {selected.categories.map(c => (
                  <Badge key={c} className="bg-indigo-400 text-xs text-white">{c}</Badge>
                ))}
              </div>
              <p className="mb-4 text-gray-800">{selected.details}</p>
              <div className="mb-4">
                <span className="block font-semibold text-gray-700 mb-1">Case Study:</span>
                <span className="text-sm text-gray-600">{selected.caseStudy}</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-5">
                {selected.technologies.map(tech => (
                  <span key={tech} className="bg-gray-200 text-xs text-gray-700 rounded px-2 py-1">{tech}</span>
                ))}
              </div>
              {selected.externalLink && (
                <a
                  href={selected.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center text-indigo-700 hover:underline mt-auto font-semibold"
                >View Project <ExternalLinkIcon className="w-4 h-4"/></a>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
