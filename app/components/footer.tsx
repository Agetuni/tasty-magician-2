import React from "react";

export const Footer: React.FC = () => (
  <footer className="w-full py-8 bg-gray-50 border-t mt-16">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
      <span>&copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</span>
      <a href="/resume.pdf" download className="underline hover:no-underline">Download Resume</a>
    </div>
  </footer>
);
