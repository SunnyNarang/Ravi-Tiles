import React from "react";
import { ArrowRight, ShieldCheck, Hammer, Leaf } from "lucide-react";
import { Button } from "../ui/button";
import { COMPANY, STATS } from "../../mock";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      {/* Diagonal accent on right */}
      <div className="absolute -right-32 top-20 w-[520px] h-[520px] diag-stripes opacity-50 pointer-events-none rotate-12" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border border-black/15 bg-white/60 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold">
              <span className="w-1.5 h-1.5 bg-[#1E3FE8]" />
              Since 1980 • ISI Marked • ISO Certified
            </div>

            <h1 className="mt-6 font-display font-black text-[3rem] sm:text-[3.75rem] lg:text-[5.25rem] leading-[0.95] tracking-tight text-balance">
              Strong{" "}
              <span className="text-[#1E3FE8]">Foundations.</span>
              <br />
              Timeless Spaces.
            </h1>

            <p className="mt-6 text-lg text-foreground/70 max-w-xl leading-relaxed">
              Premium <strong>ISI Marked</strong> paver blocks and precast cement solutions engineered for
              strength, beauty and generations. Trusted by India&apos;s leading
              infrastructure, defense and industrial enterprises.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="bg-[#1E3FE8] hover:bg-[#1733C0] text-white rounded-none font-semibold h-12 px-6 text-base"
              >
                <a href="#products" className="inline-flex items-center gap-2">
                  Explore Products <ArrowRight size={18} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-black/30 hover:bg-black hover:text-white h-12 px-6 text-base font-semibold"
              >
                <a href="#contact">Request Quote</a>
              </Button>
            </div>

            {/* Mini feature row */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { icon: ShieldCheck, label: "Built to Last" },
                { icon: Hammer, label: "Engineered for Performance" },
                { icon: Leaf, label: "Designed for Life" },
              ].map((f, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <f.icon size={20} className="text-[#1E3FE8]" />
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              {/* Blue back panel */}
              <div className="absolute -top-4 -right-4 w-3/4 h-3/4 bg-[#1E3FE8]" />
              {/* Black stripe */}
              <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[#0A0A0F]" />
              {/* Image card */}
              <div className="absolute inset-0 m-6 overflow-hidden border border-black/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1657045898640-9dc5b0772ebd?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Premium paver blocks"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-black/10 shadow-xl px-5 py-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-foreground/60 font-semibold">
                  Compressive Strength
                </div>
                <div className="font-display font-black text-2xl mt-1">
                  25–50 <span className="text-[#1E3FE8]">MPa</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="bg-[#F7F6F2] px-6 py-7 lg:py-9"
            >
              <div className="font-display font-black text-3xl lg:text-5xl tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-foreground/60 font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
