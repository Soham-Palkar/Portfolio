import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const title = "Full-Stack Developer & IT Student";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(title.slice(0, i));
      if (i >= title.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  const stagger = (delay: number) => ({
    opacity: showContent ? 1 : 0,
    transform: showContent ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
  });

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 800px 500px at 50% 0%, rgba(0,255,65,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-content mx-auto text-center relative z-10">
        <p className="font-mono-display text-sm text-accent-glow mb-6" style={stagger(0)}>
          &gt; initializing portfolio.exe...<span className="animate-blink">_</span>
        </p>

        <h1 className="font-mono-display text-4xl md:text-[64px] font-bold text-foreground leading-tight mb-4" style={stagger(100)}>
          Soham Palkar
        </h1>

        <p className="text-lg md:text-[22px] text-muted-foreground mb-8" style={stagger(300)}>
          <span className="text-primary animate-blink">|</span> {typed}
        </p>

        <p className="max-w-[600px] mx-auto text-muted-foreground leading-[1.8] text-base md:text-[17px] mb-10" style={stagger(500)}>
          I'm Soham Palkar, a second-year IT student at Xavier Institute of Engineering, Mumbai. I love building web applications that solve real problems — from carpooling platforms to assistive tools. I'm drawn to clean backend architecture and user-focused design, and I'm always looking for ways to bridge the gap between code and impact.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12" style={stagger(700)}>
          <a href="#projects" className="btn-primary-green">View Projects</a>
          <a href="#resume" className="btn-outline-green">Download Resume</a>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto" style={stagger(900)}>
          {[
            { value: "7+", label: "Projects Built" },
            { value: "2", label: "Hackathons" },
            { value: "8.90", label: "CGPA" },
          ].map((s) => (
            <div key={s.label} className="card-surface p-4 text-center">
              <div className="font-mono-display text-2xl md:text-[28px] text-primary font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce-arrow text-muted-foreground">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}
