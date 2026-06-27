import { useState, useEffect } from "react";
import { motion } from "motion/react";
import CountUp from "react-countup";
import { Play, Sparkles, Layout, Code, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [promptText, setPromptText] = useState("");
  const fullPrompt = "Build a modern portfolio for a creative agency...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setPromptText(fullPrompt.slice(0, i));
      i++;
      if (i > fullPrompt.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen lg:pt-0 overflow-hidden flex flex-col justify-center"
      >
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Left Column */}
            <div className="p-8 lg:p-12 flex flex-col justify-center border-r border-white/5 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 text-brand-accent text-[10px] font-bold uppercase tracking-widest bg-brand-accent/5 mb-6 w-fit">
                  <Sparkles className="w-3 h-3" />
                  <span>Enterprise-Ready AI</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tighter mb-6">
                  Build Websites <br className="hidden lg:block" />
                  <span className="text-brand-accent">Instantly</span> with AI
                </h1>

                <p className="text-lg lg:text-xl text-white/60 mb-8 max-w-md">
                  Transform your ideas into beautiful, responsive business
                  websites in minutes. No coding required, just pure innovation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                    Start Building
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </button>
                  <button className="border border-white/20 bg-white/5 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    <Play className="w-4 h-4" fill="currentColor" />
                    Watch Demo
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <div className="text-2xl font-bold mb-1">
                      <CountUp end={50} duration={2.5} />
                      K+
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold">
                      Websites Generated
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">
                      <CountUp end={99.9} decimals={1} duration={2.5} />%
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold">
                      Platform Uptime
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-brand-card p-8 lg:p-12 relative flex items-center justify-center overflow-hidden min-h-[500px]"
            >
              {/* Ambient Background Glows */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-surface/20 blur-[100px] rounded-full pointer-events-none" />

              {/* Main Mockup Container */}
              <div className="w-full h-full max-h-[480px] bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl flex flex-col relative z-10 max-w-lg mx-auto">
                {/* Fake Window Header */}
                <div className="h-10 border-b border-white/10 px-4 flex items-center gap-2 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="ml-4 bg-white/5 px-3 py-1 rounded text-[9px] text-white/40 flex items-center gap-1 font-mono">
                    <Globe className="w-3 h-3" />
                    a3techworld.com/builder/v2
                  </div>
                </div>

                <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                  {/* AI Input Mockup */}
                  <div className="space-y-2">
                    <div className="text-[10px] text-white/30 uppercase font-bold tracking-tighter">
                      AI PROMPT
                    </div>
                    <div className="bg-black/40 border border-white/10 p-3 rounded-lg text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-brand-accent shrink-0" />
                        <span className="font-mono">
                          {promptText}
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-1.5 h-4 bg-brand-accent ml-1 align-middle"
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Generation Progress */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-10 h-10 rounded-full border-2 border-t-brand-accent border-white/10 mb-3 animate-spin"></div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold">
                        Generating Assets...
                      </div>
                    </div>

                    <div className="h-32 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-xl border border-brand-accent/20 p-4 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-2">
                        <Layout className="w-4 h-4 text-brand-accent" />
                        <div className="text-xs font-bold text-white">
                          Layout Selected
                        </div>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 2, delay: 1 }}
                          className="h-full bg-brand-accent rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mockup Result Preview */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5, duration: 0.5 }}
                    className="h-24 bg-white/5 rounded-xl border border-white/5 p-4 flex gap-4 mt-6"
                  >
                    <div className="w-16 h-16 bg-white/10 rounded shrink-0 flex items-center justify-center">
                      <Code className="w-6 h-6 text-white/20" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center space-y-2.5">
                      <div className="h-2 w-1/3 bg-white/20 rounded-full" />
                      <div className="h-2 w-full bg-white/10 rounded-full" />
                      <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 top-20 bg-brand-surface border border-brand-border p-4 rounded-xl shadow-xl z-20 hidden md:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-text">
                    Published
                  </div>
                  <div className="text-xs text-brand-muted">2 seconds ago</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Feature Bar */}
      <section className="hidden md:flex h-32 bg-black border-y border-white/10 items-center justify-around px-10">
        <div className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-bold">AI Automation</div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider">
              Build faster
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m16 12-4-4-4 4" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-bold">One-click Deploy</div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider">
              Instant scale
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-bold">Smart Engine</div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider">
              SEO Optimized
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-bold">Enterprise Security</div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider">
              Bank-grade
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
