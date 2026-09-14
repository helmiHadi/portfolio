import React from "react";
import { GraduationCap, Briefcase, ExternalLink } from "lucide-react";

export default function Experience() {
  const education = [
    {
      institution: "SMK NU Bandar",
      role: "Computer and Network Engineering (TKJ)",
      timeline: "2020 - 2023",
      description:
        "Foundational education in network infrastructure and systems administration. Developed hands-on expertise in computer hardware troubleshooting, BIOS configuration, and operating system maintenance, establishing a strong technical baseline for modern software development and database architecture.",
    },
    {
      institution: "Universitas Terbuka",
      role: "Information Systems Student",
      timeline: "2025 - Present",
      description:
        "Studying core computer science concepts with a heavy focus on Java algorithms, object-oriented programming, and complex database management (SQL, Master-Slave replication).",
    },
  ];

  const professional = [
    {
      company: "PT Yih-Quan Footwear Indonesia",
      role: "Operations Staff - Nosew Department",
      timeline: "2024 - Present",
      description:
        "Managing daily operations and maintaining efficiency in a high-paced industrial environment. Balancing full-time professional responsibilities with intensive software development training.",
    },
  ];

  /* -----------------------------------------------------------
     Licenses & Certifications data
  ----------------------------------------------------------- */
  const dicodingLogoUrl = "https://media.licdn.com/dms/image/v2/C560BAQHOIi63tC8k8w/company-logo_200_200/company-logo_200_200/0/1660182933847/dicoding_logo?e=1790812800&v=beta&t=2CnRE-eKkyGQhic88PGtzMSybj6Eneytdb533l5lTFY";
  const alisonLogoUrl = "https://media.licdn.com/dms/image/v2/C4D0BAQHS8A4vdTgmrw/company-logo_200_200/company-logo_200_200/0/1659347075803/alison_learning_logo?e=1790812800&v=beta&t=HEt9tfutGwTfFYuLgTqGH1_33GWNhnfl_iAgsLzFePc";

  const certifications = [
    {
      title: "Memulai Pemrograman dengan Dart",
      issuer: "Dicoding Indonesia",
      date: "Issued Oct 2025 · Expires Oct 2028",
      id: "ERZR2YVLQPYV",
      skills: "Mobile Application Development",
      logo: dicodingLogoUrl,
      // Added the link property!
      link: "https://www.dicoding.com/certificates/ERZR2YVLQPYV",},
    {
      title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
      issuer: "Dicoding Indonesia",
      date: "Issued Jan 2026 · Expires Jan 2029",
      id: "1RXYQ97LQZVM",
      skills: "Mobile Application Development",
      logo: dicodingLogoUrl,
      // Added the link property!
      link: "https://www.dicoding.com/certificates/1RXYQ97LQZVM",
    },
    {
      title: "Mastering AutoCAD: From Beginner to Pro",
      issuer: "Alison",
      date: "Issued Sep 2026",
      id: "5598-60614752",
      skills: "Computer-Aided Design (CAD)",
      logo: alisonLogoUrl,
      // 👇 Paste your actual Alison certificate link here! 👇
      link: "https://alison.com/verify/8c3dcccdd9", 
    },
    {
      title: "AutoCAD: Beginner to Professional Training",
      issuer: "Alison",
      date: "Issued Sep 2026",
      id: "3393-60614752",
      skills: "Computer-Aided Design (CAD)",
      logo: alisonLogoUrl,
      // 👇 Paste your actual Alison certificate link here! 👇
      link: "https://alison.com/verify/fd2abfbc86",
    },
  ];

  return (
    <section id="experience" className="bg-white text-black py-24 md:py-32">
      {/* --- Main Experience & Education Container --- */}
      <div className="max-w-6xl mx-auto text-center px-4 md:px-8">
        
        {/* Header */}
        <h2 className="text-5xl font-extrabold">Experience & Education</h2>
        <p className="text-neutral-600 mt-4">
          Balancing academic rigor with real-world operational efficiency.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-left">
          
          {/* Left column – Academic Background */}
          <div>
            <h3 className="flex items-center justify-center md:justify-start gap-2 text-2xl font-extrabold mb-6">
              <GraduationCap className="w-6 h-6" /> Academic Background
            </h3>
            {/* Timeline container */}
            <div className="border-l-4 border-black ml-4 space-y-12 pb-4">
              {education.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Timeline node */}
                  <span className="absolute -left-[14px] top-6 w-6 h-6 rounded-full bg-lime-400 border-4 border-black" />
                  {/* Card */}
                  <article className="relative bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                    {/* Timeline badge */}
                    <span className="absolute top-4 right-4 bg-lime-400 text-black border border-black px-3 py-1 rounded-full text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {item.timeline}
                    </span>
                    <h4 className="text-2xl font-extrabold mb-1 pr-20">
                      {item.institution}
                    </h4>
                    <p className="text-lg font-semibold text-neutral-700 mb-4">
                      {item.role}
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – Professional Role */}
          <div>
            <h3 className="flex items-center justify-center md:justify-start gap-2 text-2xl font-extrabold mb-6">
              <Briefcase className="w-6 h-6" /> Professional Role
            </h3>
            {/* Timeline container */}
            <div className="border-l-4 border-black ml-4 space-y-12 pb-4">
              {professional.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Timeline node */}
                  <span className="absolute -left-[14px] top-6 w-6 h-6 rounded-full bg-lime-400 border-4 border-black" />
                  {/* Card */}
                  <article className="relative bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                    {/* Timeline badge */}
                    <span className="absolute top-4 right-4 bg-lime-400 text-black border border-black px-3 py-1 rounded-full text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {item.timeline}
                    </span>
                    <h4 className="text-2xl font-extrabold mb-1 pr-20">
                      {item.company}
                    </h4>
                    <p className="text-lg font-semibold text-neutral-700 mb-4">
                      {item.role}
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- UPDATED LICENSES & CERTIFICATIONS SECTION --- */}
      <div className="max-w-4xl mx-auto mt-32 px-6 text-left">
        <h3 className="text-3xl font-extrabold mb-10 border-b-4 border-black pb-4">
          Licenses &amp; Certifications
        </h3>
        
        <ul className="flex flex-col">
          {certifications.map((c, idx) => (
            <li
              key={idx}
              className="flex items-start gap-5 md:gap-6 py-8 border-b-2 border-black last:border-b-0"
            >
              {/* Logo Image */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-sm border-2 border-black bg-white overflow-hidden"
              >
                <img 
                  src={c.logo} 
                  alt={`${c.issuer} logo`} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Details */}
              <div className="flex flex-col items-start w-full">
                <h4 className="text-xl font-extrabold leading-tight">{c.title}</h4>
                <p className="text-base font-semibold text-neutral-800 mt-1">{c.issuer}</p>
                <p className="text-sm text-neutral-600 mt-1">{c.date}</p>
                <p className="text-sm text-neutral-600">Credential ID {c.id}</p>
                
                {/* Show credential button - Now dynamic! */}
                <button
                  className="mt-4 inline-flex items-center gap-2 bg-white text-black border-2 border-black px-4 py-1.5 text-sm font-bold rounded-full hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#ccff00] transition-all"
                  onClick={() => window.open(c.link, "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                  Show credential
                </button>
                
                {/* Skills */}
                <p className="mt-5 text-sm text-neutral-800">
                  <span className="font-bold">Skills:</span> {c.skills}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}