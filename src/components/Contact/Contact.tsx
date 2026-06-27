import { motion } from "motion/react";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Let's build something{" "}
              <span className="text-brand-accent">amazing together.</span>
            </h2>
            <p className="text-lg text-brand-muted mb-12 max-w-md">
              Whether you have a question about our pricing, features, or
              anything else, our team is ready to answer all your questions.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-accent transition-colors">
                  <Mail className="w-6 h-6 text-brand-text group-hover:text-brand-accent transition-colors" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-brand-text mb-1">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@a3techworld.com"
                    className="text-brand-muted hover:text-brand-accent transition-colors"
                  >
                    hello@a3techworld.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-accent transition-colors">
                  <Phone className="w-6 h-6 text-brand-text group-hover:text-brand-accent transition-colors" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-brand-text mb-1">
                    Call Us
                  </h4>
                  <a
                    href="tel:+18005550199"
                    className="text-brand-muted hover:text-brand-accent transition-colors"
                  >
                    +1 (800) 555-0199
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-accent transition-colors">
                  <MapPin className="w-6 h-6 text-brand-text group-hover:text-brand-accent transition-colors" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-brand-text mb-1">
                    Visit Us
                  </h4>
                  <p className="text-brand-muted">
                    100 Innovation Drive
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-brand-text mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-black transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-black transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent hover:text-black transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-card rounded-3xl p-8 border border-brand-border shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-brand-muted block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-brand-muted block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-brand-muted block"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                    placeholder="Acme Inc"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-brand-muted block"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-brand-muted block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-accent hover:brightness-110 text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(254,127,45,0.3)] mt-4"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
