import { useStaggerReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "sohampalkar059@gmail.com", href: "mailto:sohampalkar059@gmail.com", external: false },
  { icon: Github, label: "GitHub", value: "github.com/Soham-Palkar", href: "https://github.com/Soham-Palkar", external: true },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/soham-palkar-a07058387", href: "https://linkedin.com/in/soham-palkar-a07058387", external: true },
];

export default function Contact() {
  const ref = useStaggerReveal();

  return (
    <section id="contact" className="py-16 md:py-24 px-6">
      <div className="max-w-content mx-auto text-center">
        <p className="section-label">&gt; contact.sh</p>
        <h2 className="section-heading">Get In Touch</h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          I'm always open to new opportunities, collaborations, and interesting conversations. Let's build something together.
        </p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="card-surface p-6 flex flex-col items-center gap-3 scroll-reveal"
            >
              <c.icon size={24} className="text-primary" />
              <span className="font-mono-display text-sm text-foreground font-bold">{c.label}</span>
              <span className="text-xs text-muted-foreground break-all">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
