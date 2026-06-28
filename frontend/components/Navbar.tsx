import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span
            className="display-serif text-2xl tracking-wider"
            style={{ color: scrolled ? "var(--color-maroon)" : "var(--color-ivory)" }}
          >
            Sweety's
          </span>
          <span
            className="text-[0.65rem] uppercase tracking-[0.4em]"
            style={{ color: scrolled ? "var(--color-gold-deep)" : "var(--color-gold)" }}
          >
            Closet
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-xs uppercase tracking-[0.28em] transition-colors"
                style={{ color: scrolled ? "var(--color-foreground)" : "var(--color-ivory)" }}
                activeProps={{ style: { color: "var(--color-gold-deep)" } }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex text-xs uppercase tracking-[0.24em] px-5 py-2.5 border transition-all"
          style={{
            color: scrolled ? "var(--color-maroon)" : "var(--color-ivory)",
            borderColor: scrolled ? "var(--color-maroon)" : "var(--color-ivory)",
          }}
        >
          Shop on WhatsApp
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ color: scrolled || open ? "var(--color-maroon)" : "var(--color-ivory)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ivory border-t border-border animate-fade-in">
          <ul className="px-6 py-8 space-y-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm uppercase tracking-[0.28em] text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
