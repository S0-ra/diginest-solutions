import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  TrendingUp,
  Globe,
  Lightbulb,
  Handshake,
  Shield
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "4+", label: "Happy Clients" },
    { number: "1+", label: "Years Experience" },
    { number: "5+", label: "Team Members" },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex digital challenges."
    },
    {
      icon: Shield,
      title: "Quality",
      description: "We maintain the highest standards in every project, ensuring excellence in execution and delivery."
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "We build lasting relationships through honesty, transparency, and ethical business practices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their vision becomes reality."
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "DigiNest was founded with a vision to transform digital experiences for businesses in Nepal."
    },
    {
      year: "2021",
      title: "Growth & Expansion",
      description: "Expanded our team and service offerings, completing 20+ successful projects."
    },
    {
      year: "2023",
      title: "Market Leader",
      description: "Recognized as a leading digital solutions provider, serving clients across multiple industries."
    },
    {
      year: "2026",
      title: "Innovation Hub",
      description: "Continuing to pioneer digital transformation with cutting-edge technologies and creative excellence."
    },
  ];

  const team = [
    {
      icon: Globe,
      title: "Web Development",
      count: "5 Specialists"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      count: "3 Experts"
    },
    {
      icon: Award,
      title: "Design & Creative",
      count: "4 Designers"
    },
    {
      icon: Shield,
      title: "Security & Network",
      count: "3 Engineers"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--gradient-glow)' }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              About Us
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Building Digital <span className="text-gradient">Success Stories</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a passionate team of digital innovators dedicated to transforming businesses through technology, creativity, and strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <About />

      {/* Mission & Vision Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div 
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--gradient-glow)' }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their audiences. We strive to be the trusted partner for companies seeking to thrive in the digital age through excellence in technology, design, and strategic thinking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading digital transformation partner in Nepal and beyond, recognized for our innovation, quality, and commitment to client success. We envision a future where every business, regardless of size, has access to world-class digital solutions that propel them toward their goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Drives <span className="text-gradient">Us Forward</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Team Structure Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expert <span className="text-gradient">Professionals</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our diverse team brings together expertise across all digital disciplines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((dept, index) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <dept.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{dept.title}</h3>
                <p className="text-primary text-sm font-medium">{dept.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--gradient-glow)' }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-12 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Digital Journey?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Get in touch with us today and discover how DigiNest can transform your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Started
                <Heart className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-card border border-border rounded-lg font-semibold hover:border-primary/50 transition-colors inline-flex items-center justify-center"
              >
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;