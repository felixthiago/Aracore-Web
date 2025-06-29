import Navbar from "@/components/pages/navbar";
import { HeroSection } from "@/components/pages/hero-section";
import PricingSection from "@/components/pages/pricing";
import AboutSection from "@/components/pages/about";
import FAQSection from "@/components/pages/faq";
import Footer from "@/components/pages/footer";

export default function Home(){
  return (
    <>
      <div className="min-h-screen bg-black">
        <div className="navbar-container"><Navbar /></div>
        <div id = "hero"><HeroSection /></div>
        <div id = "about"><AboutSection /></div>        
        <div id = "pricing"><PricingSection /></div>
        <div id = "faq"><FAQSection /></div>
        <Footer />
      </div>
    </>
  )
}
