import { useStaggerReveal } from "@/hooks/useScrollReveal";

const categories = [
  { name: "Programming Languages", skills: ["Python", "JavaScript", "C", "C++", "SQL"] },
  { name: "Web Development", skills: ["HTML", "CSS", "React", "Flask"] },
  { name: "Mobile", skills: ["Flutter"] },
  { name: "Databases", skills: ["SQLite", "MySQL", "Firebase", "MongoDB"] },
  { name: "Tools & Platforms", skills: ["Git", "GitHub", "Google Colab", "Google ADK"] },
  { name: "Core CS Concepts", skills: ["Data Structures", "DBMS", "Operating Systems", "Computer Networks"] },
];

export default function Skills() {
  const ref = useStaggerReveal();

  return (
    <section id="skills" className="py-16 md:py-24 px-6">
      <div className="max-w-content mx-auto">
        <p className="section-label">&gt; skills.json</p>
        <h2 className="section-heading">Tech Stack</h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="card-surface p-6 scroll-reveal">
              <h3 className="font-mono-display text-primary text-sm font-bold mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-pill text-xs">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
