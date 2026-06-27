import { motion } from "motion/react";
import {
  Sparkles,
  LayoutTemplate,
  FileText,
  Search,
  Move,
  LineChart,
  Palette,
  Globe2,
} from "lucide-react";

const features = [
  {
    title: "AI Website Generator",
    description:
      "Instantly generate fully functional websites based on a single text prompt.",
    icon: Sparkles,
  },
  {
    title: "Smart Templates",
    description:
      "Start with conversion-optimized layouts that adapt to your brand automatically.",
    icon: LayoutTemplate,
  },
  {
    title: "AI Content Writer",
    description:
      "Say goodbye to lorem ipsum. Get engaging, industry-specific copy instantly.",
    icon: FileText,
  },
  {
    title: "SEO Optimization",
    description:
      "Built-in meta tags, sitemaps, and semantic HTML for superior search rankings.",
    icon: Search,
  },
  {
    title: "Drag & Drop Builder",
    description:
      "Refine your AI-generated design with an intuitive visual editor.",
    icon: Move,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track visitors, page views, and conversion rates in real-time.",
    icon: LineChart,
  },
  {
    title: "Branding Generator",
    description:
      "Extract color palettes and typography pairings that match your vibe.",
    icon: Palette,
  },
  {
    title: "Custom Domains",
    description:
      "Connect your own domain with automated SSL certificate provisioning.",
    icon: Globe2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Everything you need to succeed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted"
          >
            A3TechWorld combines the power of artificial intelligence with
            enterprise-grade infrastructure.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-brand-surface/30 hover:bg-brand-surface/60 rounded-2xl p-6 border border-brand-border hover:border-brand-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(254,127,45,0.05)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-12 h-12 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center mb-5 relative z-10 group-hover:border-brand-accent/50 transition-colors">
                <feature.icon className="w-6 h-6 text-brand-text group-hover:text-brand-accent transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              </div>

              <h3 className="text-lg font-heading font-semibold text-brand-text mb-2 relative z-10">
                {feature.title}
              </h3>

              <p className="text-brand-muted text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
