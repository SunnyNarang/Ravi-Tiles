import React, { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { PRODUCTS, COMPANY } from "../../mock";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(PRODUCTS.map((p) => p.category))),
];

const Products = () => {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="products" className="py-24 lg:py-32 bg-white border-y border-black/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-[#1E3FE8]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#1E3FE8] font-bold">
                Our Products
              </span>
            </div>
            <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Engineered for every project, every space.
            </h2>
          </div>
          <p className="text-foreground/70 lg:text-right max-w-md">
            From driveways to highways, decorative jalis to heavy-duty cable
            covers — our 11 product categories cover every concrete need.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                active === c
                  ? "bg-[#0A0A0F] text-white border-[#0A0A0F]"
                  : "bg-white text-foreground border-black/15 hover:border-black/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Dialog key={p.id}>
              <DialogTrigger asChild>
                <article className="group cursor-pointer bg-[#F7F6F2] border border-black/10 hover:border-[#1E3FE8] transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white text-foreground hover:bg-white border border-black/10 rounded-none uppercase text-[10px] tracking-wider">
                        {p.category}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3 w-9 h-9 bg-[#1E3FE8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-xl tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                      {p.short}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-wider font-semibold text-foreground/60 border border-black/15 px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </DialogTrigger>

              <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-none border-black/15">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto md:h-full bg-black/5">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <DialogHeader className="text-left space-y-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#1E3FE8] font-bold">
                        {p.category}
                      </span>
                      <DialogTitle className="font-display font-black text-2xl tracking-tight">
                        {p.name}
                      </DialogTitle>
                    </DialogHeader>
                    <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                      {p.description}
                    </p>
                    <div className="mt-5 border-t border-black/10">
                      {p.specs.map((s) => (
                        <div
                          key={s.label}
                          className="flex justify-between gap-4 py-2.5 border-b border-black/10"
                        >
                          <span className="text-[11px] uppercase tracking-wider text-foreground/60 font-semibold">
                            {s.label}
                          </span>
                          <span className="text-sm font-semibold text-right">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-2">
                      <Button
                        asChild
                        className="bg-[#1E3FE8] hover:bg-[#1733C0] text-white rounded-none font-semibold"
                      >
                        <a href="#contact">Request Quote</a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-none border-black/30"
                      >
                        <a
                          href={`https://wa.me/${COMPANY.phoneRaw}?text=Hi, I'm interested in ${encodeURIComponent(
                            p.name
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
