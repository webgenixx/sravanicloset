import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import saree from "@/assets/collection-saree.jpg";
import lehenga from "@/assets/collection-lehenga.jpg";
import kurti from "@/assets/collection-kurti.jpg";
import wedding from "@/assets/collection-wedding.jpg";
import party from "@/assets/collection-party.jpg";
import festive from "@/assets/collection-festive.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Sweet's Closet" },
      { name: "description", content: "Wedding, festive, daily ethnic, designer sarees and boutique specials — curated for the modern Indian woman." },
      { property: "og:title", content: "Collections — Sweet's Closet" },
      { property: "og:description", content: "Wedding, festive, designer sarees and boutique specials." },
    ],
  }),
  component: Collections,
});

const sets = [
  { tag: "Forever pieces", name: "Wedding Collection", desc: "Heirloom lehengas, hand-embroidered bridal sarees and timeless silhouettes for the day she remembers forever.", img: wedding },
  { tag: "Glow of celebration", name: "Festive Wear", desc: "Silks, brocades, organzas — dressed for diyas, dholaks and the quiet moments in between.", img: festive },
  { tag: "Everyday luxe", name: "Daily Ethnic Wear", desc: "Featherlight cottons and modal kurtas crafted for women who move through their day with grace.", img: kurti },
  { tag: "Drape stories", name: "Designer Sarees", desc: "Banarasi, Kanjeevaram, Chanderi — reimagined in a contemporary boutique vocabulary.", img: saree },
  { tag: "After dark", name: "Party Wear", desc: "Statement indo-westerns and embellished sets for evenings that deserve attention.", img: party },
  { tag: "Boutique Specials", name: "Atelier Edit", desc: "Limited-run pieces designed in-house, each one signed by our atelier.", img: lehenga },
];

function Collections() {
  return (
    <Layout>
      <section className="pt-40 pb-20" style={{ background: "var(--color-sand)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="eyebrow"><span className="gold-rule mr-3" />The Closet<span className="gold-rule ml-3" /></p>
          <h1 className="display-serif text-5xl md:text-7xl mt-6 leading-[1.05]">
            Six edits. <em style={{ color: "var(--color-maroon)" }}>Endless moments.</em>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg font-light text-muted-foreground">
            Every collection at Sweet's Closet is hand-curated — from the loom
            to the last finishing stitch.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-28">
          {sets.map((s, i) => (
            <article key={s.name} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`hover-zoom ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={s.img} alt={s.name} loading="lazy" className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="eyebrow" style={{ color: "var(--color-gold-deep)" }}>0{i + 1} · {s.tag}</p>
                <h2 className="display-serif text-4xl md:text-5xl mt-3 leading-tight">{s.name}</h2>
                <span className="gold-rule mt-6" />
                <p className="mt-6 text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-md">
                  {s.desc}
                </p>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"
                   className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] group" style={{ color: "var(--color-maroon)" }}>
                  Enquire on WhatsApp
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
