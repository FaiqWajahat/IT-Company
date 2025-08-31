"use client"

import { Globe } from "lucide-react";


export function Clients() {
  

  return (
    <section className="relative w-full overflow-hidden py-2 bg-blue-600"> {/* Slightly darker blue for better contrast */}
      <div className="relative">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-blue-600 to-transparent"></div>

        {/* Marquee container */}
        <div
          className="marquee-inner flex will-change-transform min-w-[200%] hover:[animation-play-state:paused]"
          style={{ animation: "marquee 25s linear infinite" }}
        >
          <div className="flex items-center">
            {[
              "Website",
              "App",
              "Logo",
              "Banner",
              "UI/UX",
              "Graphics",
              "Marketing",
              
            ].map((brand, i) => (
              <span
                key={i}
                className="mx-8 flex items-center text-lg font-medium tracking-wider text-white  transition-all duration-500 ease-in-out whitespace-nowrap"
              >
                {brand}
                {/* Placeholder for Lucide Icon. In a real project, replace this with an actual Lucide React component */}
                <span className={`lucide-icon ml-7 inline-block opacity-80`} style={{ fontSize: '1em' }}>
                  {/* Example: If using Lucide-react, it would be <Briefcase size={18} /> */}
                 <Globe className="text-md text-white"/>{/* Unicode star as a simple placeholder icon */}
                </span>
              </span>
            ))}
            {/* duplicate text for seamless loop */}
            {[
          "Website",
              "App",
              "Logo",
              "Banner",
              "UI/UX",
              "Graphics",
              "Marketing",
            ].map((brand, i) => (
              <span
                key={`dup-${i}`}
                className="mx-8 flex items-center text-lg font-medium tracking-wider text-white  transition-all duration-500 ease-in-out whitespace-nowrap"
              >
                {brand}
                {/* Placeholder for Lucide Icon */}
                <span className={`lucide-icon ml-6 inline-block opacity-80`} style={{ fontSize: '1em' }}>
                  <Globe className="text-md text-white"/> {/* Unicode star as a simple placeholder icon */}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-blue-600 to-transparent"></div>
      </div>
    </section>
  );
}