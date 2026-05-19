import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import s1 from "@/assets/collection-saree.jpg";
import s2 from "@/assets/collection-lehenga.jpg";
import s3 from "@/assets/collection-festive.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sravani Closet" },
      { name: "description", content: "Editorial fashion photography from the Sravani Closet atelier — traditional and modern Indian wear, captured beautifully." },
      { property: "og:title", content: "Gallery — Sravani Closet" },
      { property: "og:description", content: "Editorial fashion photography from our atelier." },
    ],
  }),
  component: Gallery,
});

const grid = [
  { src: g1, span: "md:col-span-1 md:row-span-2", ratio: "aspect-[3/4]" },
  { src: g2, span: "", ratio: "aspect-square" },
  { src: g3, span: "md:row-span-2", ratio: "aspect-[3/4]" },
  { src: s1, span: "", ratio: "aspect-square" },
  { src: g4, span: "md:col-span-2", ratio: "aspect-[16/10]" },
  { src: g5, span: "md:row-span-2", ratio: "aspect-[3/4]" },
  { src: s2, span: "", ratio: "aspect-square" },
  { src: g6, span: "", ratio: "aspect-square" },
  { src: s3, span: "md:col-span-2", ratio: "aspect-[16/10]" },
];

function Gallery() {
  return (
    <Layout>
      <section className="pt-40 pb-16" style={{ background: "var(--color-sand)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="eyebrow"><span className="gold-rule mr-3" />The Gallery<span className="gold-rule ml-3" /></p>
          <h1 className="display-serif text-5xl md:text-7xl mt-6 leading-[1.05]">
            Frames of <em style={{ color: "var(--color-maroon)" }}>her</em>.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg font-light text-muted-foreground">
            Editorials, candid moments and details from inside the atelier.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 md:auto-rows-[220px]">
            {grid.map((g, i) => (
              <div key={i} className={`hover-zoom ${g.span} ${g.ratio} md:aspect-auto`}>
                <img src={g.src} alt={`Gallery ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--color-blush-soft)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="display-serif text-3xl md:text-4xl italic leading-snug">
            "She didn't dress to be seen.
            <br />She dressed to remember who she was."
          </p>
          <p className="eyebrow mt-6">— Sravani Closet</p>
        </div>
      </section>
    </Layout>
  );
}
