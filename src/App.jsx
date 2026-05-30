import RibbonTicker from  "./components/RibbonTicker";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import CtaSection from "./components/CtaSection";
import FeaturSection from "./components/FeaturesSection";
import ProductShowcase from "./components/ProductsShowcase";
import FooterSection from "./components/FooterSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="app">
      {/* NavBar */}
      <NavBar />

      {/*  Hero */}
      <section className="hero bg-hero">
        <div className="hero-grid">
          <HeroSection />
        </div>
      </section>

      <RibbonTicker />

      {/* Featuers / Carousel */}
      <section className="features bg-features" id="shop">
        <FeaturSection />
      </section>

      {/* product showcase */}
      <section className="bg-cta">
        <ProductShowcase />
      </section>

      <RibbonTicker />

      {/* CTA */}
      <section className="bg-cta">
        <CtaSection />
      </section>

      {/* About */}
      <section className="bg-cta" id="about">
        <AboutSection />
      </section>

      {/* Contact */}
      <section className="bg-cta" id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <section className="bg-footer">
        <FooterSection />
      </section>
    </div>
  );
}