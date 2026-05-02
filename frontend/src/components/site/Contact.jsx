import React, { useState } from "react";
import emailjs from '@emailjs/browser';

import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useToast } from "../../hooks/use-toast";
import { COMPANY, PRODUCTS } from "../../mock";

const initial = {
  name: "",
  phone: "",
  email: "",
  product: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initial);
  const { toast } = useToast();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({
        title: "Missing details",
        description: "Please share your name and phone number.",
      });
      return;
    }
    // Mock: store in localStorage
    const all = JSON.parse(localStorage.getItem("rt_quotes") || "[]");
    all.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("rt_quotes", JSON.stringify(all));
    //SEND EMAIL
    emailjs.sendForm('service_ep30o7o', 'template_57rfhhk', form.current, 'Fg7q2R_sSth9KcSK7').then((result) => {
      console.log(result.text);
      }, (error) => {
      console.log(error.text);
    });

    toast({
      title: "Quote request received",
      description: "Our team will reach out within 24 hours.",
    });
    setForm(initial);
  };

  const waText = encodeURIComponent(
    `Hi Ravi Tiles,\n\nName: ${form.name || "_"}\nProduct: ${
      form.product || "_"
    }\nMessage: ${form.message || "Interested in your products"}`
  );

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0A0A0F] text-white relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#1E3FE8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-[#1E3FE8]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#7E94FF] font-bold">
                Get a Quote
              </span>
            </div>
            <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              Let&apos;s build something that lasts.
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              Share your project details and our team will reach out with the
              right product mix, pricing and timelines — typically within 24
              hours.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-[#1E3FE8] group-hover:border-[#1E3FE8] transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                    Call us
                  </div>
                  <div className="font-display font-bold text-lg mt-0.5">
                    {COMPANY.phone}
                  </div>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-[#1E3FE8] group-hover:border-[#1E3FE8] transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                    Email
                  </div>
                  <div className="font-display font-bold text-lg mt-0.5">
                    {COMPANY.email}
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                    Location
                  </div>
                  <div className="font-display font-bold text-lg mt-0.5">
                    {COMPANY.address}
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY.phoneRaw}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-white text-[#0A0A0F] hover:bg-[#1E3FE8] hover:text-white transition-colors font-semibold px-5 h-12 text-sm tracking-wider"
            >
              <MessageCircle size={18} /> Message on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-white text-foreground p-7 lg:p-10 border border-white/10"
            >
              <h3 className="font-display font-black text-2xl tracking-tight">
                Request a Quote
              </h3>
              <p className="text-sm text-foreground/60 mt-1">
                Fill the form — we&apos;ll get back within 24 hours.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-foreground/70">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className="mt-1.5 rounded-none border-black/15 h-11"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-foreground/70">
                    Phone *
                  </label>
                  <Input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+91 …"
                    className="mt-1.5 rounded-none border-black/15 h-11"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-foreground/70">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className="mt-1.5 rounded-none border-black/15 h-11"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-foreground/70">
                    Product Interest
                  </label>
                  <Select
                    value={form.product}
                    onValueChange={(v) => setForm({ ...form, product: v })}
                  >
                    <SelectTrigger className="mt-1.5 rounded-none border-black/15 h-11">
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      {PRODUCTS.map((p) => (
                        <SelectItem key={p.id} value={p.name}>
                          {p.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-[11px] uppercase tracking-wider font-semibold text-foreground/70">
                  Project Details
                </label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  placeholder="Tell us about your project, quantity, timeline…"
                  className="mt-1.5 rounded-none border-black/15"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  className="bg-[#1E3FE8] hover:bg-[#1733C0] text-white rounded-none font-semibold h-12 px-6 text-base inline-flex items-center gap-2"
                >
                  <Send size={16} /> Submit Request
                </Button>
                <Button
                  asChild
                  type="button"
                  variant="outline"
                  className="rounded-none border-black/30 h-12 px-6 font-semibold"
                >
                  <a
                    href={`https://wa.me/${COMPANY.phoneRaw}?text=${waText}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={16} className="mr-2" /> WhatsApp Instead
                  </a>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
