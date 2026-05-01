import React from "react";
import {
  ShieldCheck,
  Crosshair,
  Mountain,
  CloudRain,
  Wrench,
  Leaf,
} from "lucide-react";
import { FEATURES } from "../../mock";

const ICONS = {
  ShieldCheck,
  Crosshair,
  Mountain,
  CloudRain,
  Wrench,
  Leaf,
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0F] text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#1E3FE8]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#7E94FF] font-bold">
              Why Ravi Tiles
            </span>
          </div>
          <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Quality in every block.
            <br />
            Trust in every project.
          </h2>
          <p className="mt-5 text-white/70 text-lg leading-relaxed">
            Six promises behind every product we ship — from your driveway to
            India&apos;s national highways.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] || ShieldCheck;
            return (
              <div
                key={i}
                className="bg-[#0A0A0F] p-7 lg:p-9 group hover:bg-[#11121A] transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#1E3FE8]">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="mt-5 font-display font-bold text-xl tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {f.desc}
                </p>
                <div className="mt-5 flex items-center gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-semibold">
                    0{i + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
