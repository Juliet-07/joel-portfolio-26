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
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16">
            Tools & methods
          </h2>
        </motion.div>

        {/* Tools */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        {/* Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-display text-2xl text-foreground mb-8">Delivery Methods</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {methods.map((method) => (
              <div key={method.name} className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-display text-lg text-foreground mb-2">{method.name}</h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
