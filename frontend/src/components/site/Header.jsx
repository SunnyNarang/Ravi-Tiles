import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { NAV_LINKS, COMPANY } from "../../mock";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#F7F6F2]/90 backdrop-blur border-b border-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <a href="#home" className="flex items-center">
            <Logo size={36} />
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              <Phone size={16} />
              {COMPANY.phone}
            </a>
            <Button
              asChild
              className="bg-[#1E3FE8] hover:bg-[#1733C0] text-white rounded-none font-semibold px-5 h-10"
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/10 bg-[#F7F6F2]">
          <div className="px-5 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#1E3FE8] hover:bg-[#1733C0] text-white rounded-none font-semibold w-full mt-2"
            >
              <a href="#contact" onClick={() => setOpen(false)}>
                Get a Quote
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
