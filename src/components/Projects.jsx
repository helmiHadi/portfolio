import React, { useEffect, useRef, useState } from "react";
import { Smartphone, Gamepad2, Monitor, PenTool, ChevronLeft, ChevronRight } from "lucide-react";
import mobileImg from "../assets/Assets/mobile.webp";
import gameDevImg from "../assets/Assets/game.webp";
import webAppImg from "../assets/Assets/web.webp";

// Import all images from the Art folder
const designImg = Object.values(
  import.meta.glob("../assets/Assets/Art/*.webp", { eager: true, import: "default" })
);

// --- Helper Component for the Auto/Manual Slider ---
function ProjectCarousel({ project }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (project.images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [project.images.length, isHovered]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollBy({ 
        left: direction === "left" ? -container.clientWidth : container.clientWidth, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <div 
      className="relative h-64 border-b-2 border-black flex overflow-hidden w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-4 left-4 z-10 bg-white text-black border-2 border-black px-3 py-1.5 rounded-full flex items-center gap-2 font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] pointer-events-none">
        {project.icon}
        <span>{project.category}</span>
      </div>

      {project.images.length > 1 && (
        <>
          <button 
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20 hover:bg-lime-400 hover:-translate-y-[calc(50%+2px)] transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-1.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20 hover:bg-lime-400 hover:-translate-y-[calc(50%+2px)] transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar w-full h-full"
      >
        {project.images.map((item, i) => {
          if (typeof item === "string" && item.includes("youtube.com")) {
            return (
              <div key={i} className="min-w-full h-full snap-center bg-black relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={item}
                  title={`${project.title} Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            );
          }

          if (typeof item === "string" && item.startsWith("bg-")) {
            return (
              <div key={i} className={`min-w-full h-full snap-center ${item}`}></div>
            );
          }

          return (
            <img
              key={i}
              src={item}
              alt={`${project.title} preview ${i + 1}`}
              className="min-w-full h-full snap-center object-cover"
            />
          );
        })}
      </div>

      {project.images.length > 1 && (
        <div className="absolute bottom-4 right-4 bg-black text-white text-xs px-2 py-1 rounded border border-white/50 z-10 pointer-events-none">
          {project.images.length} items
        </div>
      )}
    </div>
  );
}

// --- Main Projects Section ---
export default function Projects() {
  const projects = [
    {
      category: "Mobile",
      icon: <Smartphone className="w-5 h-5" />,
      title: "Butler - Digital Wellbeing",
      description:
        "A screen-time tracking and application-blocking tool built to optimize daily focus. Developed and deployed during the #JuaraVibeCoding event.",
      tags: ["Flutter", "Serverpod", "Google Cloud Run", "Dart"],
      images: [mobileImg],
      // 👇 Drop your Butler GitHub or Live Link here
      link: "https://github.com/helmiHadi/Habit-Manager-Butler", 
    },
    {
      category: "Game Dev",
      icon: <Gamepad2 className="w-5 h-5" />,
      title: "Mobile-Developed 2D Platformer",
      description:
        "A fully playable side-scrolling platformer built entirely on a mobile device using Godot Engine. Features a classic pixel-art aesthetic, dynamic level design with moving hazards, and complete game loop integration.",
      tags: ["Godot Engine", "Mobile Dev", "Pixel Art", "Level Design"],
      images: [
        "https://www.youtube.com/embed/fL1B7hklpG0?si=4hlqsE1t_DrJ8x-p"
      ],
      // Links directly to the YouTube gameplay video
      link: "https://youtu.be/fL1B7hklpG0", 
    },
    {
      category: "Web",
      icon: <Monitor className="w-5 h-5" />,
      title: "Deezer Music Explorer",
      description:
        "A dynamic music discovery application integrating the Deezer REST API. Engineered to fetch and display tracks, artists, and album data in real-time, featuring seamless state management and a responsive user interface.",
      tags: ["API Integration", "Deezer API", "Async Fetching", "UI/UX Design"],
      images: [webAppImg],
      // 👇 Drop your Deezer App GitHub or Live Link here
      link: "https://helmiHadi.github.io", 
    },
    {
      category: "Art & Design",
      icon: <PenTool className="w-5 h-5" />,
      title: "Freelance Typography Art",
      description:
        "Bespoke typographic illustrations and custom vector graphics commissioned by international freelance clients. Projects focus on modern lettering, distinct visual branding elements, and precise digital drafting tailored to specific creative briefs.",
      tags: ["Affinity Designer", "Typography", "Vector Graphics", "Fiverr"],
      images: designImg, 
      // Links directly to your Fiverr profile
      link: "https://pin.it/6oJmH0xgA", 
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-5xl font-extrabold">Featured Projects</h2>
        <p className="text-neutral-400 mt-4">
          A selection of my technical builds, from mobile applications to Website and vector art.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {projects.map((proj, idx) => (
            <article
              key={idx}
              className="border-2 border-black bg-white text-black shadow-[8px_8px_0px_0px_#ccff00] flex flex-col"
            >
              <ProjectCarousel project={proj} />

              {/* Card body */}
              <div className="p-8 flex flex-col flex-grow text-left">
                <h3 className="text-3xl font-extrabold mb-3">{proj.title}</h3>
                <p className="text-neutral-700 mb-8 flex-grow text-lg">
                  {proj.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 border border-black rounded-full text-xs font-bold bg-neutral-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Link - Now dynamic and opens in a new tab! */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 font-bold hover:text-lime-600 transition-colors uppercase tracking-wider inline-block"
                >
                  View Details →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* Inline style to hide scrollbars */}
      <style jsx="true">{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}