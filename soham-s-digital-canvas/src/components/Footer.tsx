export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border" style={{ background: "#080808" }}>
      <div className="max-w-content mx-auto text-center">
        <p className="font-mono-display text-xl text-accent-glow mb-3">&lt;SP /&gt;</p>
        <p className="text-sm text-muted-foreground mb-4 italic">"Building solutions, one commit at a time."</p>
        <div className="flex justify-center gap-6 text-xs text-muted-foreground mb-4">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground">© 2025 Soham Palkar. Built with passion.</p>
      </div>
    </footer>
  );
}
