import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, PRODUCTS, NAV_LINKS } from "../../mock";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#070710] text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-10">
        {/* CTA strip */}
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <Logo size={42} theme="light" />
            <p className="mt-5 text-white/65 leading-relaxed max-w-sm">
              Premium paver blocks and precast cement solutions, manufactured in
              {" "}{COMPANY.city.split(",")[0]} since 1980. Built strong. Built to last.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-10 h-10 flex items-center justify-center border border-white/15 hover:bg-[#1E3FE8] hover:border-[#1E3FE8] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-bold">
              Navigate
            </div>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/75 hover:text-white text-sm font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-bold">
              Products
            </div>
            <ul className="mt-5 space-y-3">
              {PRODUCTS.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <a
                    href="#products"
                    className="text-white/75 hover:text-white text-sm font-medium"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-bold">
              Reach Us
            </div>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/75">
                <Phone size={14} className="mt-1 shrink-0" />
                <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/75">
                <Mail size={14} className="mt-1 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="break-all">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/75">
                <MapPin size={14} className="mt-1 shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <div className="text-xs text-white/50 font-medium">
            © {year} Ravi Tiles. All rights reserved. Built strong. Built to last.
          </div>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
      {/* Brand stripe */}
      <div className="h-1.5 w-full grid grid-cols-3">
        <div className="bg-[#1E3FE8]" />
        <div className="bg-white" />
        <div className="bg-[#0A0A0F]" />
      </div>
    </footer>
  );
};

export default Footer;
