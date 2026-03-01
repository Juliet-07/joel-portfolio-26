import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { tools, methods } from "@/data/portfolio";

const ToolsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const categories = ["Project & Agile", "Documentation & Reporting", "Collaboration"] as const;

  return (
    <section id="tools" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs font-body font-medium tracking-widest uppercase">Toolkit</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 md:mb-12">
            Tools & methods
          </h2>
        </motion.div>

        {/* Tools */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-display text-lg text-foreground mb-4">{cat}</h3>
              <div className="space-y-2">
                {tools.filter((t) => t.category === cat).map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between bg-card border border-border rounded-md px-4 py-3">
                    <span className="text-sm text-foreground font-body">{tool.name}</span>
                    <span className={`text-xs font-body font-medium px-2 py-0.5 rounded-sm ${
                      tool.proficiency === "Expert" ? "bg-gold/10 text-gold" : "bg-secondary text-muted-foreground"
                    }`}>
                      {tool.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methods – Triangle Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4"
        >
          <h3 className="font-display text-2xl text-foreground mb-10">Delivery Methods</h3>

          <div className="relative flex flex-col items-center gap-6">
            {/* Decorative triangle connector lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
              viewBox="0 0 800 380"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <path
                d="M400 40 L160 300 L640 300 Z"
                stroke="hsl(var(--gold))"
                strokeWidth="1"
                strokeDasharray="6 4"
                opacity="0.3"
              />
              <circle cx="400" cy="40" r="4" fill="hsl(var(--gold))" opacity="0.5" />
              <circle cx="160" cy="300" r="4" fill="hsl(var(--gold))" opacity="0.5" />
              <circle cx="640" cy="300" r="4" fill="hsl(var(--gold))" opacity="0.5" />
            </svg>

            {/* Top of triangle – Agile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative z-10 w-full max-w-sm"
            >
              <div className="bg-card border-2 border-gold/30 rounded-xl p-6 text-center shadow-lg hover:border-gold/60 hover:shadow-gold/10 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold">
                    <path d="M12 2L2 19h20L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-display text-xl text-foreground mb-2">{methods[0].name}</h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{methods[0].description}</p>
              </div>
            </motion.div>

            {/* Bottom two – Waterfall & Hybrid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              {methods.slice(1).map((method, i) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-gold/40 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary flex items-center justify-center">
                      {i === 0 ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
                          <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 3v9l6 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                    </div>
                    <h4 className="font-display text-xl text-foreground mb-2">{method.name}</h4>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center label */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 items-center justify-center">
              <span className="text-[10px] text-gold/40 font-body font-medium tracking-widest uppercase">Adapt · Deliver · Lead</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
