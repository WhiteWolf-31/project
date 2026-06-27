/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SmoothScroll from "./components/Common/SmoothScroll";

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-black">
        <Header />

        <main>
          <Hero />
          <About />
          <HowItWorks />
          <Features />
          <Pricing />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
