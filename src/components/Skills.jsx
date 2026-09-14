import React from "react";
import { Smartphone, Database, Box, PenTool, DraftingCompass, Terminal } from "lucide-react";

export default function Skills() {
  return (
    <section className="bg-white text-black py-20 px-4 md:px-8 lg:px-12" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-5xl font-extrabold mb-4">Technical Arsenal</h2>
        <p className="text-lg text-neutral-800 max-w-2xl mx-auto mb-12">
          Tools, frameworks, and creative disciplines I use to build systems and design spaces.
        </p>
        {/* Grid of skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mobile & Backend */}
          <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 hover:-translate-y-1 transition-transform bg-white">
            <Smartphone className="w-8 h-8 mx-auto mb-4 text-lime-500" />
            <h3 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">
              Mobile & Backend
            </h3>
            <ul className="list-none space-y-2 text-neutral-800 font-medium leading-relaxed">
              <li>Flutter</li>
              <li>Dart</li>
              <li>Serverpod</li>
              <li>Google Cloud Run</li>
            </ul>
          </div>

          {/* Core & Databases */}
          <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 hover:-translate-y-1 transition-transform bg-white">
            <Database className="w-8 h-8 mx-auto mb-4 text-lime-500" />
            <h3 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">
              Core & Databases
            </h3>
            <ul className="list-none space-y-2 text-neutral-800 font-medium leading-relaxed">
              <li>Java</li>
              <li>SQL</li>
              <li>MariaDB</li>
              <li>MySQL</li>
            </ul>
          </div>

          {/* Game Dev & Environments */}
          <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 hover:-translate-y-1 transition-transform bg-white">
            <Box className="w-8 h-8 mx-auto mb-4 text-lime-500" />
            <h3 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">
              Game Dev & Environments
            </h3>
            <ul className="list-none space-y-2 text-neutral-800 font-medium leading-relaxed">
              <li>Godot Engine </li>
              <li>Blender (PBR Texturing)</li>
              <li>Spine 2D</li>
            </ul>
          </div>

          {/* Design & Typography */}
          <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 hover:-translate-y-1 transition-transform bg-white">
            <PenTool className="w-8 h-8 mx-auto mb-4 text-lime-500" />
            <h3 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">
              Design & Typography
            </h3>
            <ul className="list-none space-y-2 text-neutral-800 font-medium leading-relaxed">
              <li>Freelance Typography Art (Fiverr)</li>
              <li>Affinity Designer & Photo</li>
              <li>Vector Graphics</li>
            </ul>
          </div>

          {/* Technical Drafting */}
          <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 hover:-translate-y-1 transition-transform bg-white">
            <DraftingCompass className="w-8 h-8 mx-auto mb-4 text-lime-500" />
            <h3 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">
              Technical Drafting
            </h3>
            <ul className="list-none space-y-2 text-neutral-800 font-medium leading-relaxed">
              <li>AutoCAD</li>
              <li>2D/3D Layouts</li>
            </ul>
          </div>

          {/* DevOps & SysAdmin */}
          <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 hover:-translate-y-1 transition-transform bg-white">
            <Terminal className="w-8 h-8 mx-auto mb-4 text-lime-500" />
            <h3 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">
              DevOps & SysAdmin
            </h3>
          
            <ul className="list-none space-y-2 text-neutral-800 font-medium leading-relaxed">
              <li>Ubuntu</li>
              <li>Git</li>
              <li>PowerShell</li>
              <li>Hardware & BIOS Troubleshooting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
