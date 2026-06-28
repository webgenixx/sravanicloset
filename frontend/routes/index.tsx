import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Sparkles, Scissors, Gem } from "lucide-react";
import hero from "@/assets/hero.jpg";
import saree from "@/assets/collection-saree.jpg";
import lehenga from "@/assets/collection-lehenga.jpg";
import kurti from "@/assets/collection-kurti.jpg";
import wedding from "@/assets/collection-wedding.jpg";
import party from "@/assets/collection-party.jpg";
import festive from "@/assets/collection-festive.jpg";
import experience from "@/assets/experience.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const collections = [
  { name: "Sarees", img: saree, count: "48 pieces" },
  { name: "Lehengas", img: lehenga, count: "32 pieces" },
  { name: "Designer Kurtis", img: kurti, count: "64 pieces" },
  { name: "Wedding", img: wedding, count: "26 pieces" },
  { name: "Party Wear", img: party, count: "38 pieces" },
  { name: "Festive Wear", img: festive, count: "41 pieces" },
];

const testimonials = [
  { name: "Aishwarya R.", text: "The lehenga Sweety's styled for my engagement made me feel like the most beautiful version of myself. The craftsmanship is unreal.", city: "Bhimavaram" },
  { name: "Meghana K.", text: "Every visit feels personal. They listen, they understand drape, body and soul. My festive wardrobe is now entirely from here.", city: "Bangalore" },
  { name: "Divya S.", text: "From silk to chiffon, every piece carries quiet luxury. I felt beautiful, empowered and entirely myself.", city: "Chennai" },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Sweety's Closet hero" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(90deg, color-mix(in oklab, var(--color-maroon) 75%, transparent) 0%, color-mix(in oklab, var(--color-maroon) 40%, transparent) 50%, transparent 100%)"
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
          <div className="max-w-2xl text-ivory" style={{ color: "var(--color-ivory)" }}>
            <p className="eyebrow animate-fade-up" style={{ color: "var(--color-gold)" }}>
              <span className="gold-rule mr-3" />
              Sweety's Closet · Est. Bhimavaram
            </p>
            <h1 className="display-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-6 animate-fade-up delay-100">
              Wear Confidence
              <br />
              <em className="not-italic" style={{ color: "var(--color-gold)", fontStyle: "italic", fontWeight: 300 }}>
                With Elegance.
              </em>
            </h1>
            <p className="mt-8 text-lg md:text-xl font-light max-w-lg leading-relaxed opacity-90 animate-fade-up delay-200">
              Curated Indian wear for every beautiful woman — where heirloom
              craft meets quiet, modern luxury.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link to="/collections" className="btn-primary" style={{ background: "var(--color-ivory)", color: "var(--color-maroon)", borderColor: "var(--color-ivory)" }}>
                Explore Collections <ArrowRight size={14} />
              </Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn-ghost">
                Shop The Look
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory opacity-70 animate-fade-in delay-500" style={{ color: "var(--color-ivory)" }}>
          <div className="w-px h-12 mx-auto" style={{ background: "var(--color-gold)" }} />
          <p className="text-[0.65rem] uppercase tracking-[0.4em] mt-3">Scroll</p>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="eyebrow"><span className="gold-rule mr-3" />Featured</p>
              <h2 className="display-serif text-4xl md:text-6xl mt-4 max-w-xl">
                Collections that tell <em style={{ color: "var(--color-maroon)" }}>her story</em>
              </h2>
            </div>
            <Link to="/collections" className="text-sm uppercase tracking-[0.3em] inline-flex items-center gap-2 hover:gap-4 transition-all" style={{ color: "var(--color-maroon)" }}>
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {collections.map((c, i) => (
              <Link to="/collections" key={c.name}
                className={`group relative hover-zoom block ${i === 0 ? "md:row-span-2 md:col-span-1" : ""}`}>
                <div className={`relative ${i === 0 ? "aspect-[3/4] md:aspect-[3/5]" : "aspect-[3/4]"} bg-sand`} style={{ background: "var(--color-sand)" }}>
                  <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent"
                       style={{ background: "linear-gradient(to top, color-mix(in oklab, var(--color-maroon) 65%, transparent), transparent 60%)" }} />
                  <div className="absolute bottom-0 inset-x-0 p-6 md:p-8" style={{ color: "var(--color-ivory)" }}>
                    <p className="text-[0.65rem] uppercase tracking-[0.35em] opacity-80" style={{ color: "var(--color-gold)" }}>{c.count}</p>
                    <h3 className="display-serif text-2xl md:text-3xl mt-1">{c.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOUTIQUE EXPERIENCE */}
      <section className="py-28 lg:py-36" style={{ background: "var(--color-sand)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <img src={experience} alt="Boutique experience" loading="lazy" className="w-full aspect-[5/4] object-cover" />
            <div className="absolute -bottom-8 -right-4 md:-right-8 px-8 py-6 hidden md:block" style={{ background: "var(--color-maroon)", color: "var(--color-ivory)" }}>
              <p className="display-serif text-4xl">12<span style={{ color: "var(--color-gold)" }}>+</span></p>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] mt-1 opacity-80">Years of craft</p>
            </div>
          </div>
          <div>
            <p className="eyebrow"><span className="gold-rule mr-3" />The Sweety's Experience</p>
            <h2 className="display-serif text-4xl md:text-5xl mt-4 leading-tight">
              An atelier where every drape is <em style={{ color: "var(--color-maroon)" }}>personal</em>.
            </h2>
            <p className="mt-6 text-base leading-relaxed font-light text-muted-foreground max-w-lg">
              From the first thread to the final fitting — we walk with you.
              Sweety's Closet is built on intimacy, intention, and a deep
              reverence for Indian textile heritage.
            </p>

            <div className="mt-12 space-y-8">
              {[
                { icon: Sparkles, t: "Personalized Styling", d: "One-on-one sessions to find silhouettes that move with you." },
                { icon: Scissors, t: "Elegant Craftsmanship", d: "Hand-finished embroidery and made-to-measure tailoring." },
                { icon: Gem, t: "Premium Ethnic Collections", d: "Curated from heritage looms and emerging Indian designers." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-5 items-start group">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 border transition-colors group-hover:bg-maroon group-hover:text-ivory"
                       style={{ borderColor: "var(--color-gold)", color: "var(--color-maroon)" }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="display-serif text-2xl">{t}</h3>
                    <p className="text-sm text-muted-foreground font-light mt-1.5 leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING LOOKS */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="eyebrow">Trending On The Gram</p>
            <h2 className="display-serif text-4xl md:text-6xl mt-4">
              Looks she's <em style={{ color: "var(--color-maroon)" }}>loving</em> this season
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[g1, g3, g5, g4].map((src, i) => (
              <div key={i} className="hover-zoom relative aspect-[3/4]">
                <img src={src} alt={`Trending look ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity flex items-end p-5"
                     style={{ background: "linear-gradient(to top, color-mix(in oklab, var(--color-maroon) 70%, transparent), transparent)", color: "var(--color-ivory)" }}>
                  <p className="text-xs uppercase tracking-[0.3em]">Look 0{i + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-primary">
              @sweetyscloset
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 lg:py-36" style={{ background: "var(--color-maroon)", color: "var(--color-ivory)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="eyebrow" style={{ color: "var(--color-gold)" }}>Customer Love</p>
            <h2 className="display-serif text-4xl md:text-6xl mt-4">
              Feel beautiful. <em style={{ color: "var(--color-gold)" }}>Feel empowered.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col">
                <div className="display-serif text-6xl leading-none mb-4" style={{ color: "var(--color-gold)" }}>"</div>
                <blockquote className="text-base md:text-lg font-light leading-relaxed flex-1">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t" style={{ borderColor: "color-mix(in oklab, var(--color-ivory) 20%, transparent)" }}>
                  <p className="display-serif text-xl">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] mt-1 opacity-70">{t.city}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="py-28 lg:py-36" style={{ background: "var(--color-blush-soft)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow"><span className="gold-rule mr-3" />Direct From The Atelier<span className="gold-rule ml-3" /></p>
          <h2 className="display-serif text-4xl md:text-6xl mt-6 leading-tight">
            Find your perfect outfit <em style={{ color: "var(--color-maroon)" }}>today</em>.
          </h2>
          <p className="mt-6 text-lg font-light text-muted-foreground max-w-xl mx-auto">
            Chat with our stylists on WhatsApp. Share an occasion, a memory, a
            colour you love — we'll bring the closet to you.
          </p>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn-primary mt-10">
            Start Styling On WhatsApp <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </Layout>
  );
}
