import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs font-body font-medium tracking-widest uppercase">Credentials</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-16">
            Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 border border-border rounded-lg p-6"
            >
              <div className="shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                <Award className="text-gold" size={22} />
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="font-display text-lg text-foreground">{cert.name}</h3>
                  <span className="text-xs text-muted-foreground font-body">· {cert.body}</span>
                </div>
                <p className="text-sm text-muted-foreground font-body mb-1">{cert.full}</p>
                <p className="text-xs text-muted-foreground/80 font-body leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
