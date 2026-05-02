import React, { useState, useMemo } from "react";
import { ArrowUpRight, X, Images } from "lucide-react";
import {
  Dialog,
  DialogClose,
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

/**
 * Individual product card + dialog. Each card manages its own
 * "active variant" state so the main image can swap when a user
 * clicks a thumbnail inside the dialog.
 */
const ProductCard = ({ p }) => {
  const variants = p.variants || [];
  const hasVariants = variants.length > 0;
  const [activeIdx, setActiveIdx] = useState(0);

  const activeImage = hasVariants ? variants[activeIdx].image : p.image;
  const activeVariant = hasVariants ? variants[activeIdx] : null;

  return (
    <Dialog onOpenChange={(open) => !open && setActiveIdx(0)}>
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
            {hasVariants && (
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#0A0A0F]/85 text-white px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold">
                <Images size={12} />
                {variants.length} Designs
              </div>
            )}
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

      <DialogContent className="max-w-4xl w-[calc(100%-1.5rem)] p-0 overflow-hidden rounded-none border-black/15 max-h-[92vh] overflow-y-auto [&>button:last-of-type]:hidden">
        {/* Prominent mobile-friendly close button */}
        <DialogClose
          aria-label="Close"
          className="absolute top-3 right-3 z-20 w-10 h-10 flex items-center justify-center bg-[#0A0A0F] text-white shadow-lg hover:bg-[#1E3FE8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3FE8] focus:ring-offset-2"
        >
          <X size={20} />
        </DialogClose>

        <div className="grid grid-cols-1 md:grid-cols-2 min-w-0">
          {/* Image panel - cinematic 16:10 ratio on mobile (~25% screen height),
              perfect square on desktop */}
          <div className="relative bg-black/5 min-w-0 w-full">
            <div className="aspect-[12/10] md:aspect-square w-full">
              <img
                src={activeImage}
                alt={activeVariant ? activeVariant.name : p.name}
                className="w-full h-full object-cover transition-opacity duration-300"
                key={activeImage}
              />
            </div>
            {activeVariant && (
              <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-2 shadow-md">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#1E3FE8] font-bold">
                  Design
                </div>
                <div className="font-display font-bold text-sm tracking-tight mt-0.5">
                  {activeVariant.name}
                </div>
              </div>
            )}
          </div>

          {/* Mobile-only horizontal variant strip — sits BETWEEN image and info
              so all designs are visible without scrolling. Hidden on md+. */}
          {hasVariants && (
            <div className="md:hidden bg-[#F7F6F2] border-t border-black/10 px-4 py-3">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w- h-px bg-[#1E3FE8]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#1E3FE8] font-bold">
                    {variants.length} Designs
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-foreground/50 font-semibold">
                  Swipe →
                </span>
              </div>
              <div
                className="flex flex-nowrap gap-2 overflow-x-auto pb-1 -mx-4 px-4 snap-x scroll-smooth no-scrollbar touch-pan-x"
                style={{
                  WebkitOverflowScrolling: "touch",
                  overscrollBehaviorX: "contain",
                }}
              >
                {variants.map((v, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className={`shrink-0 w-[80px] snap-start text-left bg-white border-2 transition-all ${
                      i === activeIdx
                        ? "border-[#1E3FE8] shadow-md"
                        : "border-transparent active:border-black/30"
                    }`}
                  >
                    <div className="aspect-square overflow-hidden bg-black/5">
                      <img
                        src={v.image}
                        alt={v.name}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    </div>
                    <div className="px-2 py-1.5">
                      <div className="text-[10px] font-semibold uppercase tracking-wider truncate leading-tight">
                        {v.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Info panel */}
          <div className="p-6 md:p-7">
            <DialogHeader className="text-left space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#1E3FE8] font-bold">
                {p.category}
              </span>
              <DialogTitle className="font-display font-black text-2xl tracking-tight pr-8">
                {p.name}
              </DialogTitle>
            </DialogHeader>
            <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
              {activeVariant?.desc || p.description}
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
                    activeVariant ? `${p.name} - ${activeVariant.name}` : p.name
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

        {/* Desktop variants gallery — full grid below info. Hidden on mobile
            (mobile uses the horizontal swipeable strip above). */}
        {hasVariants && (
          <div className="hidden md:block border-t border-black/10 bg-[#F7F6F2] p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#1E3FE8]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#1E3FE8] font-bold">
                {variants.length} Designs Available
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
              {variants.map((v, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className={`relative group text-left bg-white border-2 transition-all ${
                    i === activeIdx
                      ? "border-[#1E3FE8] shadow-md"
                      : "border-transparent hover:border-black/30"
                  }`}
                >
                  <div className="aspect-square overflow-hidden bg-black/5">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-1.5 py-1.5">
                    <div className="text-[10px] font-semibold uppercase tracking-wider truncate">
                      {v.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

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
    <section
      id="products"
      className="py-24 lg:py-32 bg-white border-y border-black/10"
    >
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
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
