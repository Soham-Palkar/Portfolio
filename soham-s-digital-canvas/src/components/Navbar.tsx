import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href.replace("#", "#")));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all"
        style={{
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
        }}
      >
        <div className="max-w-content mx-auto flex items-center justify-between">
          <a href="#home" className="font-mono-display text-xl text-accent-glow">&lt;SP /&gt;</a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono-display text-sm transition-colors duration-200"
                style={{ color: activeSection === l.href.slice(1) ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a href="#resume" className="hidden md:inline-block btn-outline-green text-sm py-2 px-4">
            Download Resume
          </a>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center gap-8">
          <button className="absolute top-6 right-6 text-foreground" onClick={() => setMobileOpen(false)}>
            <X size={28} />
          </button>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono-display text-2xl text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#resume" className="btn-outline-green mt-4" onClick={() => setMobileOpen(false)}>
            Download Resume
          </a>
        </div>
      )}
    </>
  );
}
