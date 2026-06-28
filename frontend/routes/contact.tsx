import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Instagram, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Sweet's Closet" },
      { name: "description", content: "Visit Sweet's Closet boutique in Menteyvari Thota, Bhimavaram, or chat with our stylists on WhatsApp and Instagram." },
      { property: "og:title", content: "Visit Us — Sweet's Closet" },
      { property: "og:description", content: "Boutique address, WhatsApp & Instagram." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <section className="pt-40 pb-20" style={{ background: "var(--color-maroon)", color: "var(--color-ivory)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="eyebrow" style={{ color: "var(--color-gold)" }}>
            <span className="gold-rule mr-3" />Come Visit<span className="gold-rule ml-3" />
          </p>
          <h1 className="display-serif text-5xl md:text-7xl mt-6 leading-[1.05]">
            Let's find your <em style={{ color: "var(--color-gold)" }}>perfect drape</em>.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg font-light opacity-85">
            Walk in. Tell us about an occasion, a memory, a feeling. We'll
            bring the closet to you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <p className="eyebrow">Atelier</p>
              <h2 className="display-serif text-3xl md:text-4xl mt-3">Sweet's Closet · Bhimavaram</h2>
            </div>

            {[
              { icon: MapPin, t: "The Boutique", lines: ["Menteyvari Thota", "Bhimavaram, Andhra Pradesh"] },
              { icon: Clock, t: "Boutique Hours", lines: ["Tuesday – Sunday · 11 AM – 8 PM", "Monday by appointment"] },
              { icon: Mail, t: "Write To Us", lines: ["hello@sweetscloset.com"] },
              { icon: MessageCircle, t: "Call / WhatsApp", lines: ["+91 99999 99999"] },
            ].map(({ icon: Icon, t, lines }) => (
              <div key={t} className="flex gap-5 items-start pb-8 border-b">
                <div className="w-11 h-11 flex items-center justify-center shrink-0 border"
                     style={{ borderColor: "var(--color-gold)", color: "var(--color-maroon)" }}>
                  <Icon size={16} />
                </div>
                <div>
                  <p className="eyebrow" style={{ color: "var(--color-gold-deep)" }}>{t}</p>
                  <div className="mt-2 space-y-1">
                    {lines.map((l) => <p key={l} className="text-base font-light">{l}</p>)}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn-primary flex-1 justify-center">
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                 className="btn-primary flex-1 justify-center"
                 style={{ background: "transparent", color: "var(--color-maroon)" }}>
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <form className="p-8 md:p-10" style={{ background: "var(--color-sand)" }}
                  onSubmit={(e) => { e.preventDefault(); window.open("https://wa.me/919999999999", "_blank"); }}>
              <p className="eyebrow">Book A Styling Session</p>
              <h3 className="display-serif text-3xl mt-3">Tell us about her.</h3>

              <div className="mt-8 space-y-5">
                {[
                  { label: "Your name", type: "text" },
                  { label: "Phone or email", type: "text" },
                  { label: "Occasion", type: "text" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">{f.label}</label>
                    <input type={f.type} required
                           className="w-full mt-2 bg-transparent border-b py-3 outline-none focus:border-maroon transition-colors"
                           style={{ borderColor: "color-mix(in oklab, var(--color-maroon) 25%, transparent)" }} />
                  </div>
                ))}
                <div>
                  <label className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">A note</label>
                  <textarea rows={4}
                           className="w-full mt-2 bg-transparent border-b py-3 outline-none focus:border-maroon transition-colors resize-none"
                           style={{ borderColor: "color-mix(in oklab, var(--color-maroon) 25%, transparent)" }} />
                </div>
                <button type="submit" className="btn-primary w-full justify-center mt-4">
                  Send Enquiry
                </button>
              </div>
            </form>

            <div className="aspect-[4/3] w-full overflow-hidden">
              <a
                href="https://share.google/fd0RHnh0ve7GcqmBE"
                target="_blank"
                rel="noreferrer"
                className="block w-full h-full relative group"
              >
                <iframe
                  title="Sweet's Closet location map"
                  src="https://maps.google.com/maps?q=Menteyvari+Thota,+Bhimavaram,+Andhra+Pradesh&output=embed"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs uppercase tracking-[0.3em] px-4 py-2"
                        style={{ background: "var(--color-maroon)", color: "var(--color-ivory)" }}>
                    Open in Google Maps →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
