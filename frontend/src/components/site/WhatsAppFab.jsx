import React from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "../../mock";

const WhatsAppFab = () => {
  return (
    <a
      href={`https://wa.me/${COMPANY.phoneRaw}?text=Hi, I'm interested in your products`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#1E3FE8] hover:bg-[#1733C0] text-white px-4 py-3 shadow-2xl border border-white/10 transition-colors group"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline text-sm font-semibold uppercase tracking-wider">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppFab;
