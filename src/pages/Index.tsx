import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Integrations from "@/components/Integrations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Introduction/>
      <Integrations />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
