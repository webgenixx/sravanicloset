import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
