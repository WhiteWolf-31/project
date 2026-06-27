import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects.",
    price: "$15",
    period: "/month",
    features: [
      "1 AI-Generated Website",
      "Basic Customization",
      "Standard Templates",
      "Community Support",
      "a3techworld.com subdomain",
    ],
    buttonText: "Get Started",
    isPopular: false,
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses and agencies.",
    price: "$49",
    period: "/month",
    features: [
      "10 AI-Generated Websites",
      "Advanced Customization",
      "Premium Templates",
      "Priority Email Support",
      "Custom Domain Connection",
      "Advanced Analytics",
    ],
    buttonText: "Start Pro",
    isPopular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Websites",
      "Custom AI Training",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "White-label Publishing",
      "Custom Integrations",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted"
          >
            Choose the perfect plan for your needs. Upgrade or downgrade at any
            time.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={cn(
                "relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2",
                plan.isPopular
                  ? "bg-brand-surface border-brand-accent shadow-[0_0_40px_rgba(254,127,45,0.15)] md:-mt-8 md:mb-8"
                  : "bg-brand-card border-brand-border hover:border-brand-text/30",
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-accent text-black text-xs font-bold font-heading uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-heading font-bold text-brand-text mb-2">
                {plan.name}
              </h3>
              <p className="text-brand-muted text-sm mb-6 h-10">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-heading font-bold">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-brand-muted font-medium ml-1">
                    {plan.period}
                  </span>
                )}
              </div>

              <button
                className={cn(
                  "w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 mb-8",
                  plan.isPopular
                    ? "bg-brand-accent text-black hover:brightness-110 shadow-[0_0_20px_rgba(254,127,45,0.2)]"
                    : "bg-white/5 border border-white/10 text-brand-text hover:bg-white/10",
                )}
              >
                {plan.buttonText}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "w-5 h-5 shrink-0",
                        plan.isPopular
                          ? "text-brand-accent"
                          : "text-brand-muted",
                      )}
                    />
                    <span className="text-sm text-brand-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
