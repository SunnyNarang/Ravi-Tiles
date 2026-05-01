import React from "react";
import { CheckCircle2 } from "lucide-react";
import { COMPANY } from "../../mock";

const BULLETS = [
  "Hydraulic press manufacturing for consistent strength",
  "In-house quality testing on every batch",
  "45 years of trust across infrastructure & defense",
  "Custom colors, sizes and patterns on request",
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5]">
              <div className="absolute -top-4 -left-4 w-3/4 h-3/4 bg-[#1E3FE8]" />
              <div className="absolute inset-0 ml-6 mt-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579300254612-0ad98473c2d4?w=1200&q=85"
                  alt="Manufacturing facility"
                  className="w-full h-full object-cover grayscale-[15%]"
                />
              </div>
              <div className="absolute bottom-6 right-0 bg-[#0A0A0F] text-white px-6 py-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold">
                  Established
                </div>
                <div className="font-display font-black text-3xl mt-1">
                  1980
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-[#1E3FE8]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#1E3FE8] font-bold">
                About Ravi Tiles
              </span>
            </div>
            <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance">
              Four decades of building India&apos;s most trusted spaces.
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              From {COMPANY.city.split(",")[0]}, we&apos;ve been crafting paver
              blocks, precast tiles and cement infrastructure for{" "}
              {COMPANY.yearsInIndustry}+ years. From private homes to airforce
              stations, from highways to industrial plants — our products carry
              the weight of generations.
            </p>
            <p className="mt-4 text-lg text-foreground/75 leading-relaxed">
              Every block we make is hydraulically pressed, steam-cured and
              quality-tested in-house. Because when foundations matter, you
              choose builders who never compromise.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {BULLETS.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#1E3FE8] shrink-0 mt-0.5"
                  />
                  <span className="text-sm font-medium text-foreground/85">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
