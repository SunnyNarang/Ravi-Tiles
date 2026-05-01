import React from "react";
import { MapPin } from "lucide-react";
import { PROJECTS } from "../../mock";

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-[#1E3FE8]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#1E3FE8] font-bold">
                Our Work
              </span>
            </div>
            <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Projects we&apos;ve built our name on.
            </h2>
          </div>
          <p className="text-foreground/70 lg:text-right max-w-md">
            From private homes to industrial complexes — here&apos;s a glimpse of
            where Ravi Tiles is making a mark.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-5">
          {PROJECTS.map((p, i) => {
            const layouts = [
              "col-span-12 md:col-span-7 row-span-2",
              "col-span-12 md:col-span-5",
              "col-span-12 md:col-span-5",
              "col-span-6 md:col-span-4",
              "col-span-6 md:col-span-4",
              "col-span-12 md:col-span-4",
            ];
            return (
              <article
                key={p.id}
                className={`relative group overflow-hidden bg-black/5 ${layouts[i] || "col-span-12 md:col-span-4"}`}
              >
                <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[260px]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#7E94FF] font-bold">
                    {p.category}
                  </span>
                  <h3 className="mt-1.5 font-display font-bold text-xl lg:text-2xl text-white tracking-tight">
                    {p.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-white/75 text-xs font-medium">
                    <MapPin size={13} /> {p.location}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
