import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-4 inset-x-4 lg:top-6 lg:max-w-6xl mx-auto z-50 rounded-2xl lg:rounded-full transition-all duration-300 ease-in-out border",
        isScrolled
          ? "h-16 bg-black/70 backdrop-blur-xl border-white/10 shadow-2xl px-4 sm:px-8"
          : "h-20 bg-transparent border-transparent px-4 sm:px-8",
      )}
    >
      <div className="flex items-center justify-between w-full h-full">
        <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center font-bold text-black group-hover:brightness-110 transition-all">
              <Rocket className="w-5 h-5 text-black" />
            </div>
            <span className="font-semibold text-xl tracking-tight uppercase">
              A3TechWorld
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium opacity-70 hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button className="bg-brand-accent text-black px-5 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all">
              Start Building
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-brand-text"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 sm:w-1/2 bg-brand-surface border-l border-brand-border z-50 p-6 flex flex-col shadow-2xl lg:hidden"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-brand-muted hover:text-brand-text transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-brand-muted hover:text-brand-text transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                <button className="w-full bg-brand-accent hover:brightness-110 text-black font-semibold py-4 px-6 rounded-full transition-colors text-lg">
                  Start Building
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
