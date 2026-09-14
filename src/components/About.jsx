// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="bg-black text-white py-24 md:py-32" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout: title on the left, content on the right (stack on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column – title */}
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            About Me.
          </h2>

          {/* Right column – paragraphs + accent tags */}
          <div className="flex flex-col space-y-6">
            <p className="text-neutral-200 text-lg leading-relaxed">
              I am a software developer and Information Systems student at
              Universitas Terbuka, based in Kabupaten Batang, Jawa Tengah.
            </p>

            <p className="text-neutral-200 text-lg leading-relaxed">
              I balance a full‑time role in the{" "}
              <span className="text-lime-400 font-medium">
                Nosew department
              </span>{" "}
             at PT Yih-Quan Footwear Indonesia with a deep passion for digital engineering. This dual experience has taught me discipline, operational efficiency, and how to solve complex problems under pressure. 
            </p>

            <p className="text-neutral-200 text-lg leading-relaxed">
              Whether I am architecting a{" "}
              <span className="text-lime-400 font-medium">Flutter</span>{" "}
              mobile app, structuring a 
              <span className="text-lime-400 font-medium"> MySQL </span>
              database, or {" "}
              <span className="text-lime-400 font-medium">Designing
              </span> Art for my clients, my
              goal is always the same: building systems that are robust,
              scalable, and visually engaging.
            </p>

            {/* Accent tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              {["Continuous Learner", "Problem Solver", "Creative Technologist", "Digital Craftsman"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-white/30 rounded-full px-4 py-1 text-sm text-white/80"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}