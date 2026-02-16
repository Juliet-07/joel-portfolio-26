const Footer = () => {
  return (
    <footer className="bg-navy border-t border-primary-foreground/5 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg text-primary-foreground">
          Joel<span className="text-gold">.</span>
        </span>
        <p className="text-xs text-primary-foreground/30 font-body">
          © {new Date().getFullYear()} Joel. Project Manager & Scrum Master.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
