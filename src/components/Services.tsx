import { motion } from "framer-motion";
import {
  Search,
  Code,
  Video,
  Megaphone,
  Shield,
  Box,
  Palette,
  Brain,
  GitBranch,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Search,
    title: "Digital Marketing",
    description: "Strategic SEO and social media marketing to boost your online presence and drive qualified leads.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web and mobile applications built with cutting-edge technology for optimal performance.",
  },
  {
    icon: Video,
    title: "Videography & Photography",
    description: "Professional visual content that tells your brand story and captivates your audience.",
  },
  {
    icon: Megaphone,
    title: "Promotional & PR",
    description: "Strategic communications and promotional campaigns that amplify your brand message.",
  },
  {
    icon: Shield,
    title: "Security & Networking",
    description: "Robust cybersecurity solutions and network infrastructure to protect your business.",
  },
  {
    icon: Box,
    title: "3D Modeling",
    description: "Stunning 3D visualizations and models for products, architecture, and immersive experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX & Graphic Design",
    description: "User-centered design that creates intuitive interfaces and memorable brand identities.",
  },
  {
    icon: Brain,
    title: "AI Modeling",
    description: "Custom AI and machine learning solutions to automate processes and unlock insights.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "Streamlined deployment pipelines and infrastructure automation for faster delivery.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Complete Digital <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground">
            From concept to execution, we provide comprehensive services to transform 
            your digital presence and accelerate your business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
