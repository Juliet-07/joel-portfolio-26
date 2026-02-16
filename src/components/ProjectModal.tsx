import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { X, Clock, Users, Layers, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-10 px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-lg max-w-3xl w-full my-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-navy p-8 rounded-t-lg relative">
            <button onClick={onClose} className="absolute top-4 right-4 text-primary-foreground/50 hover:text-primary-foreground transition-colors">
              <X size={20} />
            </button>
            <span className="text-gold text-xs font-body font-medium tracking-widest uppercase">{project.industry}</span>
            <h2 className="font-display text-3xl text-primary-foreground mt-2 mb-4">{project.name}</h2>
            <div className="flex flex-wrap gap-4 text-xs text-primary-foreground/60 font-body">
              <span className="flex items-center gap-1.5"><Clock size={13} />{project.duration}</span>
              <span className="flex items-center gap-1.5"><Users size={13} />{project.teamSize}</span>
              <span className="flex items-center gap-1.5"><Layers size={13} />{project.deliveryModel}</span>
            </div>
            <p className="text-sm text-primary-foreground/50 font-body mt-3">{project.role}</p>
          </div>

          {/* Body */}
          <div className="p-8 space-y-8 font-body">
            <div>
              <h3 className="font-display text-lg text-foreground mb-2">Overview</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.overview}</p>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-2">Business Objective</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.objective}</p>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-2">Key Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-2">Delivery Approach</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.approach}</p>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-2">Stakeholder Strategy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.stakeholderStrategy}</p>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-2">Risk Management</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.riskManagement}</p>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-2">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span key={t} className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-sm">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-3">Outcomes</h3>
              <div className="space-y-2">
                {project.outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                    {o}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
