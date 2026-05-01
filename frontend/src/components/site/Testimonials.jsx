import React from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../../mock";

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#1E3FE8]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#1E3FE8] font-bold">
              Client Voices
            </span>
          </div>
          <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Built on trust. Backed by results.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="bg-white border border-black/10 p-7 lg:p-8 flex flex-col"
            >
              <Quote size={28} className="text-[#1E3FE8]" />
              <blockquote className="mt-5 text-foreground/85 leading-relaxed text-[15px] flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-black/10">
                <div className="font-display font-bold text-base tracking-tight">
                  {t.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-foreground/55 font-semibold mt-1">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
