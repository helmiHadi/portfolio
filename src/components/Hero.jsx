import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden flex items-center min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column (Text) */}
        <div className="relative w-full flex flex-col items-start z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-black max-w-2xl mt-4 md:mt-8">
            Building Systems, Designing Spaces, Optimizing Operations.
          </h1>
          <p className="text-base md:text-lg text-neutral-600 max-w-lg mt-6 leading-relaxed">
            An Information Systems student blending a passion for mobile development, database management, and design with solid practical experience in industrial operations. Dedicated to building efficient digital solutions and tackling complex technical challenges.
          </p>
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full mt-8 hover:bg-neutral-800 transition-colors font-bold"
          >
            Explore My Work &rarr;
          </a>
        </div>

        {/* Right Column (Visual Section) - Background watermark on mobile, right-aligned */}
        <div className="absolute inset-0 z-0 flex items-center justify-end opacity-10 pointer-events-none translate-x-[15%] md:relative md:translate-x-0 md:h-auto md:w-full md:items-center md:justify-center mt-8 md:mt-0 md:opacity-100 md:pointer-events-auto">
          <div className="w-[400px] h-[400px] shrink-0 md:max-w-md md:w-full md:aspect-square md:border-2 md:border-black md:rounded-3xl md:p-12 md:bg-white md:shadow-xl relative overflow-hidden flex items-center justify-center">
             
             {/* Abstract Geometric Graphic */}
             <div className="relative w-full h-full flex items-center justify-center">
                {/* Outlined Square */}
                <div className="absolute w-48 h-48 border-[4px] border-black rounded-2xl rotate-12"></div>
                
                {/* Outlined Circle */}
                <div className="absolute w-56 h-56 border-[4px] border-black rounded-full -translate-x-4 translate-y-4"></div>
                
                {/* Lime Green Accent Dot (#ccff00) */}
                <div className="absolute w-6 h-6 bg-[#ccff00] rounded-full top-[15%] right-[15%] md:top-8 md:right-12"></div>
                
                {/* Additional Accent Dot for balance */}
                <div className="absolute w-3 h-3 bg-black rounded-full bottom-[20%] left-[20%] md:bottom-16 md:left-12"></div>
             </div>
             
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
