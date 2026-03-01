import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, Clock, Users, Triangle } from "lucide-react";

const industryColors: Record<string, string> = {
  Technology: "bg-blue-500/10 text-blue-600 border-blue-200",
  "Oil & Energy": "bg-amber-500/10 text-amber-700 border-amber-200",
  Operations: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  "Technology / Operations": "bg-violet-500/10 text-violet-600 border-violet-200",
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selected = projects.find((p) => p.id === selectedProject);

  return (
    <section id="projects" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs font-body font-medium tracking-widest uppercase">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Project case studies
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mb-16">
            Real delivery stories from technology and energy environments. Each project
            showcases structured leadership, stakeholder management, and measurable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedProject(project.id)}
              className="group bg-card border border-border rounded-lg p-8 cursor-pointer hover:border-gold/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${industryColors[project.industry]}`}>
                  {project.industry}
                </span>
                <ArrowUpRight className="text-muted-foreground group-hover:text-gold transition-colors" size={18} />
              </div>

              <h3 className="font-display text-2xl text-foreground mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground font-body mb-6 leading-relaxed">{project.overview}</p>

              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-body">
                <span className="flex items-center gap-1.5"><Clock size={13} />{project.duration}</span>
                <span className="flex items-center gap-1.5"><Users size={13} />{project.teamSize}</span>
                <span className="flex items-center gap-1.5"><Triangle size={13} className="fill-current" />{project.deliveryModel}</span>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground font-body font-medium">{project.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default ProjectsSection;
