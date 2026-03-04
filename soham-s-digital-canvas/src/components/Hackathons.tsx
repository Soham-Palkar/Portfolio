import { useStaggerReveal } from "@/hooks/useScrollReveal";

const hackathons = [
  {
    name: "Technoova",
    org: "Xavier Institute of Engineering",
    desc: "Built a technology-driven solution for a real-world problem. Designed system architecture and rapidly built a working prototype.",
    learnings: "Rapid prototyping, teamwork, functional delivery under pressure",
    emoji: "🏛️",
  },
  {
    name: "Hackxelerate",
    org: "VJTI (Veermata Jijabai Technological Institute)",
    desc: "Developed a concept-based project into a working solution within 24 hours. Focused on innovation and practical solutions for modern challenges.",
    learnings: "Rapid development, collaboration, presenting technical ideas to judges",
    emoji: "💡",
  },
];

const skillPills = ["Rapid Prototyping", "Team Collaboration", "Problem Solving", "Technical Presentation"];

export default function Hackathons() {
  const ref = useStaggerReveal();

  return (
    <section id="hackathons" className="py-16 md:py-24 px-6">
      <div className="max-w-content mx-auto">
        <p className="section-label">&gt; hackathons.log</p>
        <h2 className="section-heading">Hackathon Experience</h2>
        <p className="text-muted-foreground italic mb-10 text-sm">
          "I actively participate in hackathons because they challenge me to build innovative solutions under time constraints while collaborating with teams."
        </p>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 mb-10">
          {hackathons.map((h) => (
            <div key={h.name} className="card-surface p-6 scroll-reveal">
              <h3 className="font-mono-display text-lg font-bold text-primary mb-1">{h.emoji} {h.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">Organized by: {h.org}</p>
              <p className="text-sm text-muted-foreground mb-3">{h.desc}</p>
              <p className="text-xs text-muted-foreground"><span className="text-primary">Key learnings:</span> {h.learnings}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skillPills.map((s) => (
            <span key={s} className="skill-pill">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
