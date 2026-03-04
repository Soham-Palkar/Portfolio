import { useStaggerReveal } from "@/hooks/useScrollReveal";

type Status = "In Development" | "Concept" | "Completed" | "Deployed";

const statusColors: Record<Status, string> = {
  "In Development": "bg-status-dev",
  Concept: "bg-status-concept",
  Completed: "bg-status-completed",
  Deployed: "bg-status-deployed",
};

const projects = [
  {
    name: "Carpooling Web Application",
    problem: "Finding shared rides is fragmented and unreliable — no single platform connects drivers and passengers efficiently.",
    features: ["User authentication and profile management", "Ride creation and seat booking system", "Route search and filtering", "Scalable relational database design with Flask backend"],
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    status: "In Development" as Status,
    github: "https://github.com/Soham-Palkar/car-pooling-system",
  },
  {
    name: "SightMate",
    problem: "Many digital tools fail to prioritize accessibility for users with visual or cognitive impairments.",
    features: ["Accessibility-first UI design", "Clean, minimal interface for ease of use", "User-centric interaction patterns"],
    tech: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    status: "In Development" as Status,
    github: "https://github.com/Soham-Palkar/SightMate-Smart-Walking-Assistant-Powered-by-Gemini",
  },
  {
    name: "Saaya App",
    problem: "Real-world social problems need fast, technology-driven solutions that can be built and deployed rapidly.",
    features: ["Rapid prototype built under hackathon constraints", "Team collaboration and agile development", "Firebase-backed real-time data", "Flutter cross-platform frontend"],
    tech: ["Flutter", "Firebase", "Web Technologies"],
    status: "In Development" as Status,
    github: "https://github.com/Jidnya-0926/Saaya-Your-silent-protector",
  },
  {
    name: "Jarvis — Python Assistant",
    problem: "Repetitive tasks and queries consume developer time with no intelligent automation layer.",
    features: ["Modular logic for input processing", "Task automation capabilities", "Query response generation", "Extensible architecture"],
    tech: ["Python"],
    status: "In Development" as Status,
    github: "https://github.com/Soham-Palkar/Jarvis-Chat-bot-",
  },
  {
    name: "Career Guidance Agents",
    problem: "Students and early-career professionals struggle to get personalized, actionable career advice.",
    features: ["AI agents that analyze user interests", "Career path and skill recommendations", "Learning resource suggestions", "Context-aware agent workflows"],
    tech: ["Python", "Google ADK"],
    status: "In Development" as Status,
    github: "https://github.com/Soham-Palkar/Career-Guide-Mentor",
  },
  {
    name: "FixFast",
    problem: "Finding reliable, nearby technicians for repairs and maintenance is slow, opaque, and frustrating.",
    features: ["Technician discovery using Maps API", "Service booking and request tracking", "Verified technician profiles", "Transparent pricing and availability"],
    tech: ["React", "Node.js / Flask", "MongoDB", "Maps API"],
    status: "Concept" as Status,
    github: "https://github.com/Soham-Palkar",
  },
  {
    name: "Cognify",
    problem: "Traditional learning tools lack intelligence and fail to adapt to individual cognitive development needs.",
    features: ["Smart learning tools powered by Python AI/ML", "Personalized learning pathways", "Progress tracking and adaptation", "Flask-powered backend with React frontend"],
    tech: ["React", "Flask", "MongoDB", "Python AI/ML"],
    status: "In Development" as Status,
    github: "https://github.com/Jidnya-0926/Cognify",
  },
];

export default function Projects() {
  const ref = useStaggerReveal();

  return (
    <section id="projects" className="py-16 md:py-24 px-6">
      <div className="max-w-content mx-auto">
        <p className="section-label">&gt; projects/</p>
        <h2 className="section-heading">What I've Built</h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="card-surface p-6 relative scroll-reveal">
              <span className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full text-foreground animate-status-pulse ${statusColors[p.status]}`}>
                {p.status}
              </span>

              <h3 className="font-mono-display text-lg font-bold text-primary mb-2 pr-28">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{p.problem}</p>

              <ul className="text-xs text-muted-foreground mb-4 space-y-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span> {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded border border-border bg-secondary text-muted-foreground">{t}</span>
                ))}
              </div>

              <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline font-mono-display">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
