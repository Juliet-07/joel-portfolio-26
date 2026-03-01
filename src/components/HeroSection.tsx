import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(38 92% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(38 92% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm font-body font-medium tracking-widest uppercase">
              Project Manager & Scrum Master
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-primary-foreground leading-[1.05] mb-6">
            Delivering results
            <br />
            across <span className="text-gradient-gold">industries</span>
          </h1>

          <p className="text-base md:text-lg text-primary-foreground/60 font-body font-light leading-relaxed max-w-xl mb-10">
            I lead complex projects to successful delivery — helping organizations bridge technology, oil & energy, and operations through structured leadership and agile execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-gold text-accent-foreground px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-gold-light transition-colors rounded-sm"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/80 px-8 py-3.5 text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition-colors rounded-sm"
            >
              About Joel
            </a>
          </div>
        </motion.div>

        {/* Industry tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 flex flex-wrap gap-3"
        >
          {["Technology", "Oil & Energy", "Operations"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-body font-medium text-primary-foreground/40 border border-primary-foreground/10 px-4 py-2 rounded-sm tracking-wider uppercase"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-primary-foreground/30" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
