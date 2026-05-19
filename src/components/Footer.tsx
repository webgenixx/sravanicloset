import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-maroon text-ivory" style={{ background: "var(--color-maroon)", color: "var(--color-ivory)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="display-serif text-3xl tracking-wider">Sravani</span>
              <span className="text-[0.7rem] uppercase tracking-[0.4em]" style={{ color: "var(--color-gold)" }}>
                Closet
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed opacity-80 font-light">
              A modern Indian wear boutique crafted for women who wear their
              confidence with elegance. Curated silhouettes, heirloom craft,
              quiet luxury.
            </p>
            <span className="gold-rule mt-8 block" />
            <p className="mt-4 eyebrow" style={{ color: "var(--color-gold)" }}>
              Wear Confidence With Elegance
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5" style={{ color: "var(--color-gold)" }}>Explore</p>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/collections" className="hover:opacity-100 opacity-80">Collections</Link></li>
              <li><Link to="/gallery" className="hover:opacity-100 opacity-80">Gallery</Link></li>
              <li><Link to="/about" className="hover:opacity-100 opacity-80">Our Story</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 opacity-80">Visit Boutique</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5" style={{ color: "var(--color-gold)" }}>Reach Us</p>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-center gap-3 opacity-80"><MapPin size={14} /> Hyderabad, India</li>
              <li className="flex items-center gap-3 opacity-80"><Mail size={14} /> hello@sravanicloset.com</li>
              <li className="flex items-center gap-3 opacity-80"><MessageCircle size={14} /> +91 99999 99999</li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                 className="w-10 h-10 inline-flex items-center justify-center border border-ivory/30 hover:bg-ivory hover:text-maroon transition-colors"
                 style={{ borderColor: "color-mix(in oklab, var(--color-ivory) 30%, transparent)" }}>
                <Instagram size={16} />
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"
                 className="w-10 h-10 inline-flex items-center justify-center border hover:bg-ivory hover:text-maroon transition-colors"
                 style={{ borderColor: "color-mix(in oklab, var(--color-ivory) 30%, transparent)" }}>
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
             style={{ borderColor: "color-mix(in oklab, var(--color-ivory) 15%, transparent)" }}>
          <p className="text-xs opacity-60 tracking-wider">
            © {new Date().getFullYear()} Sravani Closet. Crafted with love.
          </p>
          <p className="text-xs opacity-60 tracking-[0.3em] uppercase">
            Boutique · Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
