import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedLogos from "../components/TrustedLogos";
import Solutions from "../components/Solutions";
import CTA from "../components/CTA";
import MobileShowcase from "../components/MobileShowcase";
import Insights from "../components/Insights";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#02141D] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <TrustedLogos />
      <Solutions />
      <CTA />
      <MobileShowcase />
      <Insights />
      <Footer />
    </main>
  );
}
