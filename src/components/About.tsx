import { motion } from "framer-motion";
import { CheckCircle2, Zap, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile processes ensure rapid turnaround without compromising quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals across all digital disciplines.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About DigiNest</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Your Digital Nest for <span className="text-gradient">Innovation</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At DigiNest, we believe in creating digital ecosystems where businesses thrive. 
              Our comprehensive suite of services covers every aspect of digital transformation, 
              from the initial concept to final deployment and beyond.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "End-to-end digital solutions under one roof",
                "Tailored strategies for every business size",
                "Cutting-edge technology and creative excellence",
                "Dedicated support and continuous optimization",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glass rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
