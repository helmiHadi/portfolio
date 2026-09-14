import React from "react";
import { Mail, Briefcase } from "lucide-react";

// Custom inline SVG for GitHub
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// Custom inline SVG for LinkedIn
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  return (
    <section className="bg-black text-white py-24 md:py-32 flex flex-col items-center" id="contact">
      {/* Header */}
      <h2 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 text-center">
        Let's Connect.
      </h2>
      <p className="text-xl text-neutral-400 max-w-2xl mx-auto text-center mb-16">
        Currently open for freelance projects, technical collaborations, and new opportunities.
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Email */}
        <a
          href="mailto:helmihadiwibo@gmail.com"
          className="flex items-center gap-4 bg-white text-black border-2 border-white px-8 py-5 text-xl font-extrabold hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#ccff00] transition-all"
        >
          <Mail className="w-6 h-6" /> Email
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/helmi-wibowo-8418403b0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white text-black border-2 border-white px-8 py-5 text-xl font-extrabold hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#ccff00] transition-all"
        >
          <LinkedInIcon /> LinkedIn
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/helmiHadi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white text-black border-2 border-white px-8 py-5 text-xl font-extrabold hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#ccff00] transition-all"
        >
          <GitHubIcon /> GitHub
        </a>
        {/* Fiverr */}
        <a
          href="https://www.fiverr.com/s/emRZrAD"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white text-black border-2 border-white px-8 py-5 text-xl font-extrabold hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#ccff00] transition-all"
        >
          <Briefcase className="w-6 h-6" /> Fiverr
        </a>
      </div>

      {/* Footer */}
      <div className="w-full max-w-6xl mx-auto mt-32 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500">
        <p>© 2026 Helmi H.W. All rights reserved.</p>
        <p>Built with React &amp; Tailwind CSS.</p>
      </div>
    </section>
  );
}