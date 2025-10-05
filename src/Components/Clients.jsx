"use client";

import { Globe, Smartphone, Image, Layout, Monitor, PenTool, TrendingUp } from "lucide-react";

export function Clients() {
  const brands = [
    { name: "Website", icon: Globe },
    { name: "App", icon: Smartphone },
    { name: "Logo", icon: Image },
    { name: "Banner", icon: Layout },
    { name: "UI/UX", icon: Monitor },
    { name: "Graphics", icon: PenTool },
    { name: "Marketing", icon: TrendingUp },
  ];

  // Repeat brands multiple times for seamless scroll
  const repeatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="relative w-full overflow-hidden bg-blue-600 py-2">
      <div className="relative">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 h-full w-12 z-10 pointer-events-none bg-gradient-to-r from-blue-600 to-transparent"></div>

        {/* Marquee container */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-12">
            {repeatedBrands.map((brand, i) => {
              const Icon = brand.icon;
              return (
                <span
                  key={i}
                  className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium text-white whitespace-nowrap flex-none"
                >
                  {brand.name}
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white opacity-80" />
                </span>
              );
            })}
          </div>
        </div>

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 h-full w-12 z-10 pointer-events-none bg-gradient-to-l from-blue-600 to-transparent"></div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); } /* shift by 1 repetition for seamless scroll */
        }

        .animate-marquee {
          display: flex;
          animation: marquee 12s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
