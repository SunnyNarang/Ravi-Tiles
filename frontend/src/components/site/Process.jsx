import React from "react";
import { PROCESS_STEPS } from "../../mock";

const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white border-y border-black/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#1E3FE8]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#1E3FE8] font-bold">
              Our Process
            </span>
          </div>
          <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            From inquiry to installation — simple, transparent, on time.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={i}
              className="bg-white p-7 lg:p-8 group hover:bg-[#F7F6F2] transition-colors relative"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display font-black text-5xl text-[#1E3FE8]">
                  {s.step}
                </span>
                <span className="w-8 h-px bg-black/20 group-hover:w-12 group-hover:bg-[#1E3FE8] transition-all" />
              </div>
              <h3 className="mt-6 font-display font-bold text-xl tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
