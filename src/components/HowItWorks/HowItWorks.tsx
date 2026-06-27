import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MessageSquare, Cpu, MousePointer2, Globe } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Describe Your Business",
    description:
      "Tell our AI what you do, who your audience is, and what vibe you are going for.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "AI Generates Website",
    description:
      "In seconds, our engine crafts a multi-page site complete with copy and images.",
    icon: Cpu,
  },
  {
    num: "03",
    title: "Customize Using Drag & Drop",
    description:
      "Visually edit any section, change colors, or regenerate specific text blocks.",
    icon: MousePointer2,
  },
  {
    num: "04",
    title: "Publish Instantly",
    description:
      "Connect your custom domain and go live on our enterprise-grade edge network.",
    icon: Globe,
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="how-it-works" className="py-24 bg-brand-surface/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted"
          >
            From concept to a live production website in four simple steps.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-brand-border">
            <motion.div
              style={{ scaleX, transformOrigin: "left" }}
              className="absolute inset-0 bg-brand-accent h-full"
            />
          </div>

          {/* Mobile Vertical Line */}
          <div className="lg:hidden absolute top-[50px] bottom-[50px] left-[39px] w-[2px] bg-brand-border">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-brand-accent w-full"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative flex flex-col items-start lg:items-center text-left lg:text-center pl-24 lg:pl-0"
              >
                {/* Node */}
                <div className="absolute left-0 lg:static w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center mb-6 shadow-xl shrink-0">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-accent text-black flex items-center justify-center text-xs font-bold font-heading">
                    {step.num}
                  </div>
                  <step.icon className="w-8 h-8 text-brand-text" />
                </div>

                <h3 className="text-xl font-heading font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-muted leading-relaxed text-sm lg:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
