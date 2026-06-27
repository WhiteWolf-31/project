import { motion } from "motion/react";
import { Cpu, Settings2, Rocket } from "lucide-react";

const features = [
  {
    title: "AI Automation",
    description:
      "Our proprietary AI engine understands your business context and generates a fully-structured website tailored to your industry.",
    icon: Cpu,
    color: "text-[#ff9650]",
    bgColor: "bg-[#ff9650]/10",
    borderColor: "group-hover:border-[#ff9650]/50",
  },
  {
    title: "Smart Customization",
    description:
      "Intuitively tweak designs, regenerate content, and adjust layouts with intelligent suggestions that maintain design integrity.",
    icon: Settings2,
    color: "text-[#4f83ff]",
    bgColor: "bg-[#4f83ff]/10",
    borderColor: "group-hover:border-[#4f83ff]/50",
  },
  {
    title: "One-click Deployment",
    description:
      "Go live instantly on our global edge network. Enjoy 99.9% uptime, built-in SSL, and lightning-fast load speeds out of the box.",
    icon: Rocket,
    color: "text-[#22c55e]",
    bgColor: "bg-[#22c55e]/10",
    borderColor: "group-hover:border-[#22c55e]/50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Why A3TechWorld?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-brand-muted"
          >
            We are redefining how the internet is built. Stop wrestling with
            complex builders and let AI handle the heavy lifting while you focus
            on your business.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative bg-brand-card rounded-2xl p-8 border border-brand-border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${feature.borderColor}`}
            >
              {/* Subtle hover glow effect behind the card */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              <div
                className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>

              <h3 className="text-xl font-heading font-bold text-brand-text mb-4">
                {feature.title}
              </h3>

              <p className="text-brand-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
