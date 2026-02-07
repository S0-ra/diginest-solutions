import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Video,
  Palette,
  TrendingUp,
  Megaphone,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    highlights: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive, scalable websites and web applications built with modern frameworks and best practices.",
    highlights: ["React/Next.js", "E-commerce", "Custom CMS"],
  },
  {
    icon: Video,
    title: "Videography & Photography",
    description: "Professional visual storytelling through high-quality video production and photography services.",
    highlights: ["Brand Videos", "Product Shoots", "Event Coverage"],
  },
  {
    icon: Palette,
    title: "Graphic Design & UI/UX",
    description: "Beautiful, intuitive designs that combine aesthetic appeal with seamless user experiences.",
    highlights: ["Brand Identity", "UI Design", "User Research"],
  },
  {
    icon: TrendingUp,
    title: "SEO Services",
    description: "Data-driven search engine optimization to improve your visibility and rank higher in search results.",
    highlights: ["Keyword Research", "Technical SEO", "Link Building"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies across social media, content, and paid channels to grow your brand.",
    highlights: ["Social Media", "Content Strategy", "PPC Campaigns"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4 px-4 py-1.5 bg-primary/10 rounded-full"
          >
            Our Services
          </motion.span>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="card-glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-medium border border-primary/30 hover:border-primary/50 transition-colors inline-flex items-center justify-center"
              >
                Start Your Project
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;