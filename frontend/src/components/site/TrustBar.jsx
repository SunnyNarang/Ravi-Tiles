import React from "react";
import { CLIENTS } from "../../mock";

const TrustBar = () => {
  const list = [...CLIENTS, ...CLIENTS]; // duplicate for seamless loop
  return (
    <section className="bg-[#0A0A0F] text-white py-10 lg:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-6">
        <div className="flex items-center gap-4">
          <span className="w-8 h-px bg-white/30" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-semibold">
            Trusted by India&apos;s leading enterprises
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {list.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-10 px-8 shrink-0"
            >
              <span className="font-display font-black text-2xl lg:text-3xl text-white/85 tracking-wide uppercase">
                {c}
              </span>
              <span className="w-1.5 h-1.5 bg-[#1E3FE8] rotate-45" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
