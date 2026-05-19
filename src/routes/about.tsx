import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import experience from "@/assets/experience.jpg";
import portrait from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Sravani Closet" },
      { name: "description", content: "The story behind Sravani Closet — a boutique built on women's empowerment, craft and modern Indian elegance." },
      { property: "og:title", content: "Our Story — Sravani Closet" },
      { property: "og:description", content: "A boutique built on craft, empowerment and modern Indian elegance." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="pt-40 pb-20" style={{ background: "var(--color-blush-soft)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="eyebrow"><span className="gold-rule mr-3" />Our Story<span className="gold-rule ml-3" /></p>
          <h1 className="display-serif text-5xl md:text-7xl mt-6 leading-[1.05]">
            A closet built on <em style={{ color: "var(--color-maroon)" }}>her courage</em>.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <img src={portrait} alt="Founder portrait" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="lg:col-span-3 space-y-10">
            <div>
              <p className="eyebrow">The Beginning</p>
              <h2 className="display-serif text-3xl md:text-4xl mt-3 leading-tight">Born from a love letter to Indian craft.</h2>
              <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground">
                Sravani Closet began in a small studio with three sarees, a
                grandmother's sewing machine, and a single belief — that
                Indian wear must move with the modern woman, not behind her.
              </p>
            </div>
            <div>
              <p className="eyebrow">Women, In Their Power</p>
              <h2 className="display-serif text-3xl md:text-4xl mt-3 leading-tight">Fashion as a form of self-belief.</h2>
              <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground">
                Every drape we curate is in service of one thing — the woman
                wearing it. Confidence is the only accessory we insist on.
                The rest, we make beautiful.
              </p>
            </div>
            <div>
              <p className="eyebrow">The Vision</p>
              <h2 className="display-serif text-3xl md:text-4xl mt-3 leading-tight">A modern Indian luxury house.</h2>
              <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground">
                We work hand-in-hand with weavers, embroiderers and emerging
                designers across India. Every piece carries the maker's name,
                the place it was born, and the soul of the woman it was made for.
              </p>
            </div>
            <div>
              <p className="eyebrow">Styling Philosophy</p>
              <h2 className="display-serif text-3xl md:text-4xl mt-3 leading-tight">Quiet. Considered. Unapologetically her.</h2>
              <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground">
                We don't dress trends. We dress women. Our stylists listen
                first — to your story, your skin, your silhouette — and only
                then do we drape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--color-maroon)", color: "var(--color-ivory)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12 text-center">
          {[
            { k: "12+", v: "Years of atelier craft" },
            { k: "2.4k", v: "Brides dressed with love" },
            { k: "60+", v: "Indian artisans & weavers" },
          ].map((s) => (
            <div key={s.v}>
              <p className="display-serif text-6xl" style={{ color: "var(--color-gold)" }}>{s.k}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] opacity-80">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <img src={experience} alt="Inside the boutique" loading="lazy" className="w-full aspect-[16/9] object-cover" />
        </div>
      </section>
    </Layout>
  );
}
