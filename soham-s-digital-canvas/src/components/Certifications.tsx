import { useStaggerReveal } from "@/hooks/useScrollReveal";
import { CheckCircle } from "lucide-react";

const certs = [
  { name: "Developer and Technology Job Simulation", issuer: "Accenture (Forage)", date: "Nov 2025" },
  { name: "Solutions Architecture Job Simulation", issuer: "AWS (Forage)", date: "Nov 2025" },
  { name: "Cyber Job Simulation", issuer: "Deloitte (Forage)", date: "Nov 2025" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte (Forage)", date: "Jun 2025" },
];

export default function Certifications() {
  const ref = useStaggerReveal();

  return (
    <section id="certifications" className="py-16 md:py-24 px-6">
      <div className="max-w-content mx-auto">
        <p className="section-label">&gt; certifications.json</p>
        <h2 className="section-heading">Certifications</h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((c) => (
            <div key={c.name} className="card-surface p-6 scroll-reveal">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-mono-display text-sm font-bold text-foreground leading-tight pr-4">{c.name}</h3>
                <span className="flex items-center gap-1 text-primary text-xs whitespace-nowrap">
                  <CheckCircle size={14} /> Verified
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
              <p className="text-xs text-muted-foreground mt-1">{c.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
