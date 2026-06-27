import { Rocket, ArrowUp, Twitter, Linkedin, Github } from "lucide-react";
import { useLenis } from "lenis/react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Templates", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Webinars", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" },
  ],
};

export default function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-2 mb-6 group inline-flex"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors">
                <Rocket className="w-5 h-5 text-brand-accent" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                A3TechWorld
              </span>
            </a>
            <p className="text-brand-muted text-sm leading-relaxed mb-6 max-w-sm">
              The AI-powered platform for building stunning, responsive, and
              blazing-fast websites in minutes. No coding required.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold text-brand-text mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-muted hover:text-brand-accent text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-brand-text mb-6">
              Product
            </h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-muted hover:text-brand-accent text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-brand-text mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-muted hover:text-brand-accent text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-brand-text mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-muted hover:text-brand-accent text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-brand-muted text-sm text-center md:text-left">
            © {new Date().getFullYear()} A3TechWorld. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a
                href="#"
                className="text-brand-muted hover:text-brand-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-brand-muted hover:text-brand-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-brand-muted hover:text-brand-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <div className="w-px h-6 bg-brand-border hidden md:block" />

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-brand-text hover:text-brand-accent transition-colors group"
            >
              Back to top
              <div className="w-8 h-8 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
