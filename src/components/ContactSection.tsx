import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, open mailto
    window.location.href = `mailto:joel@example.com?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <section id="contact" className="section-padding bg-navy">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-xs font-body font-medium tracking-widest uppercase">Contact</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
              Let's collaborate
            </h2>
            <p className="text-primary-foreground/50 font-body leading-relaxed mb-10">
              Whether you're looking for a project manager to lead a complex delivery, 
              a Scrum Master to coach your teams, or a strategic partner to help plan your next initiative — 
              I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <a href="mailto:joel@example.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors font-body text-sm">
                <Mail size={18} />
                joel@example.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors font-body text-sm">
                <Linkedin size={18} />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-xs text-primary-foreground/50 font-body mb-2 tracking-wider uppercase">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-navy-light border border-primary-foreground/10 rounded-sm px-4 py-3 text-sm text-primary-foreground font-body placeholder:text-primary-foreground/20 focus:outline-none focus:border-gold transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs text-primary-foreground/50 font-body mb-2 tracking-wider uppercase">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-navy-light border border-primary-foreground/10 rounded-sm px-4 py-3 text-sm text-primary-foreground font-body placeholder:text-primary-foreground/20 focus:outline-none focus:border-gold transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs text-primary-foreground/50 font-body mb-2 tracking-wider uppercase">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-navy-light border border-primary-foreground/10 rounded-sm px-4 py-3 text-sm text-primary-foreground font-body placeholder:text-primary-foreground/20 focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-gold text-accent-foreground px-8 py-3 text-sm font-medium tracking-wide hover:bg-gold-light transition-colors rounded-sm"
            >
              <Send size={15} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
