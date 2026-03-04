import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Download } from "lucide-react";

export default function Resume() {
  const ref = useScrollReveal();

  return (
    <section id="resume" className="py-16 md:py-24 px-6">
      <div ref={ref} className="max-w-content mx-auto scroll-reveal">
        <p className="section-label">&gt; resume.pdf</p>
        <h2 className="section-heading">Resume</h2>

        <div className="card-surface p-10 text-center max-w-lg mx-auto">
          <p className="text-muted-foreground mb-6">
            Download my resume to learn more about my experience, projects, and skills.
          </p>
          {/* [REPLACE: Update href with actual resume PDF link] */}
          <a
            href="https://drive.google.com/file/d/1W1325eABQcG8Cj7dvMRa3Nw1yox4fuJR/view?usp=sharing"
            download
            className="btn-primary-green inline-flex items-center gap-2"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
