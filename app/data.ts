import React from "react";

export type Project = {
  id: number;
  title: string;
  description: string;
  categories: string[];
  imageUrl: string;
  largeImageUrl?: string;
  details: string;
  technologies: string[];
  caseStudy?: string;
  externalLink?: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
};

export type Award = {
  id: number;
  title: string;
  year: string;
  description: string;
};
