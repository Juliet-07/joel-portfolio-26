import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-xs font-body font-medium tracking-widest uppercase">About</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Engineering mindset,<br />leadership focus
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p>
              With roots in engineering and a career built on leading cross-functional delivery, 
              I bring structure, clarity, and momentum to complex projects. My journey from hands-on 
              technical work to project leadership gives me a unique perspective — I understand both the 
              challenges teams face and the outcomes stakeholders expect.
            </p>
            <p>
              I specialize in environments where ambiguity is high and the stakes are real. Whether 
              it's a cloud migration for a tech company or a digitalization initiative in offshore 
              energy operations, I adapt my leadership style and delivery approach to fit the context.
            </p>
            <p>
              My focus is always on three things: <span className="text-foreground font-medium">clear communication</span>, 
              <span className="text-foreground font-medium"> stakeholder alignment</span>, and 
              <span className="text-foreground font-medium"> disciplined execution</span>. I believe great 
              project management is invisible — when it's done right, teams feel empowered, stakeholders 
              feel informed, and results speak for themselves.
            </p>
          </div>
        </motion.div>

        {/* Key stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border"
        >
          {[
            { value: "8+", label: "Years Experience" },
            { value: "15+", label: "Projects Delivered" },
            { value: "2", label: "Industries" },
            { value: "100%", label: "On-time Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-4xl text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
