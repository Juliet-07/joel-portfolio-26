import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Flame } from "lucide-react";

const IndustrySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs font-body font-medium tracking-widest uppercase">Industries</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
            Bridging two worlds
          </h2>
          <p className="text-primary-foreground/50 font-body max-w-xl mb-16 leading-relaxed">
            Project management principles are universal, but context matters. I adapt 
            leadership style, governance structures, and delivery frameworks to fit each environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-primary-foreground/10 rounded-lg p-8"
          >
            <Monitor className="text-gold mb-6" size={28} />
            <h3 className="font-display text-2xl text-primary-foreground mb-4">Technology & Digital</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/60 font-body">
              <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />Agile-first delivery with Scrum and Kanban</li>
              <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />Rapid iteration, CI/CD, and continuous deployment</li>
              <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />Product-oriented mindset with user-centric metrics</li>
              <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />Cross-functional teams spanning design, engineering, and QA</li>
              <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />Stakeholder demos and transparent velocity tracking</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-primary-foreground/10 rounded-lg p-8"
          >
            <Flame className="text-gold mb-6" size={28} />
            <h3 className="font-display text-2xl text-primary-foreground mb-4">Oil, Energy & Operations</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/60 font-body">
              <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />Gate-based delivery with formal governance structures</li>
              <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />Safety-first culture with HAZOP and compliance requirements</li>
              <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />Multi-vendor coordination in complex supply chains</li>
              <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />Remote and offshore environment challenges</li>
              <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />Integration with legacy SCADA and industrial systems</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border border-primary-foreground/10 rounded-lg p-8"
        >
          <h3 className="font-display text-xl text-primary-foreground mb-4">What changes between industries?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-primary-foreground/60 font-body">
            <div>
              <p className="text-primary-foreground font-medium mb-1">Governance</p>
              <p>Tech favors lightweight governance. Energy requires formal steering committees, change boards, and audit trails.</p>
            </div>
            <div>
              <p className="text-primary-foreground font-medium mb-1">Risk Tolerance</p>
              <p>Tech embraces "fail fast." Energy demands exhaustive risk analysis where failure can mean safety incidents.</p>
            </div>
            <div>
              <p className="text-primary-foreground font-medium mb-1">Pace & Cadence</p>
              <p>Tech operates in sprints and releases. Energy follows project phases aligned with operational windows.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySection;
