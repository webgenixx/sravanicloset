import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <>
      <a
        href="https://wa.me/919999999999?text=Hi%20Sweety's%20Closet%2C%20I%27d%20love%20to%20see%20your%20latest%20collection."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full inline-flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ background: "var(--color-maroon)", color: "var(--color-ivory)", boxShadow: "var(--shadow-elegant)" }}
      >
        <MessageCircle size={22} />
        <span className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ background: "var(--color-gold)" }} />
      </a>

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="md:hidden fixed bottom-0 inset-x-0 z-40 text-center py-4 text-xs uppercase tracking-[0.3em]"
        style={{ background: "var(--color-maroon)", color: "var(--color-ivory)" }}
      >
        Find Your Perfect Outfit →
      </a>
    </>
  );
}
