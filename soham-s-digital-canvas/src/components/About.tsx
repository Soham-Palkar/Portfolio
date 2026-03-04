import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const terminalLines = [
  "soham@portfolio:~$ whoami",
  "> Soham Palkar",
  "",
  "soham@portfolio:~$ cat interests.txt",
  "> Backend Development",
  "> Web Applications",
  "> AI & Agents",
  "> Problem Solving",
  "",
  "soham@portfolio:~$ echo $status",
  "> Ready to build. 🚀",
];

const pills = [
  "📍 Mumbai, Maharashtra",
  "🎓 Xavier Institute of Engineering",
  "📅 B.E. Information Technology (2024–2028)",
  "🏆 CGPA: 8.90 / 10",
];

export default function About() {
  const sectionRef = useScrollReveal();
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [started, setStarted] = useState(false);
  const termRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!termRef.current) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(termRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setVisibleLines(terminalLines.slice(0, i));
      if (i >= terminalLines.length) clearInterval(timer);
    }, 300);
    return () => clearInterval(timer);
  }, [started]);

  return (
    <section id="about" className="py-16 md:py-24 px-6">
      <div ref={sectionRef} className="max-w-content mx-auto scroll-reveal">
        <p className="section-label">&gt; about_me.txt</p>
        <h2 className="section-heading">Who I Am</h2>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <p className="text-muted-foreground leading-[1.8] text-base mb-8">
              I'm Soham Palkar, a second-year IT student at Xavier Institute of Engineering, Mumbai. I love building web applications that solve real problems — from carpooling platforms to assistive tools. I'm drawn to clean backend architecture and user-focused design, and I'm always looking for ways to bridge the gap between code and impact. When I'm not building, I'm sharpening my problem-solving skills and exploring new technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              {pills.map((p) => (
                <span key={p} className="skill-pill text-xs">{p}</span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2" ref={termRef}>
            <div className="rounded-lg overflow-hidden" style={{ background: "#0D0D0D", border: "1px solid hsla(133,100%,50%,0.15)", boxShadow: "0 0 30px hsla(133,100%,50%,0.05)" }}>
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground ml-2 font-mono-display">terminal</span>
              </div>
              <div className="p-4 font-mono-display text-sm text-primary min-h-[280px]">
                {visibleLines.map((line, i) => (
                  <div key={i} className={line.startsWith(">") ? "text-primary pl-2" : "text-muted-foreground"}>
                    {line || "\u00A0"}
                  </div>
                ))}
                <span className="animate-blink">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
