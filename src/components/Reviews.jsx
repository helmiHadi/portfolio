import React from "react";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      text: `"Good understanding of my project and fast delivery. I definetly recommend Helmi."`,
      clientName: "lil_neinei",
      date: "Feb 13, 2024",
      rating: "4.7",
      initial: "L",
      bgColor: "bg-amber-600",
    },
    {
      text: `"Thanks for collaboration. Recomend seller for professional work."`,
      clientName: "daikibo",
      date: "Feb 10, 2024",
      rating: "5.0",
      initial: "D",
      bgColor: "bg-rose-800",
    },
    {
      text: `"very good seller"`,
      clientName: "daikibo",
      date: "Feb 12, 2024",
      rating: "4.7",
      initial: "D",
      bgColor: "bg-rose-800",
    },
  ];

  return (
    <section id="reviews" className="bg-lime-400 text-black py-24 md:py-32 border-y-4 border-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">
          Client Feedback
        </h2>
        <p className="text-black/80 mt-4 font-bold text-lg">
          What my Fiverr clients are saying about my typography and vector art.
        </p>

        {/* Reviews grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <a
              key={idx}
              href="https://www.fiverr.com/s/emRZ5lr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all text-left cursor-pointer group"
            >
              {/* Stars & Numeric Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-black text-black w-5 h-5"
                  />
                ))}
                <span className="font-extrabold text-lg ml-2">{rev.rating}</span>
              </div>

              {/* Review text */}
              <p className="text-lg font-bold leading-relaxed mb-8 flex-grow group-hover:text-lime-700 transition-colors">
                {rev.text}
              </p>

              {/* Client info & Dynamic Avatar */}
              <div className="flex items-center mt-auto border-t-2 border-black pt-6">
                <div 
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-black mr-4 text-white font-extrabold text-xl ${rev.bgColor}`}
                >
                  {rev.initial}
                </div>
                <div>
                  <p className="font-extrabold text-lg leading-none">{rev.clientName}</p>
                  <p className="text-sm font-semibold text-black/70 mt-1">{rev.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}