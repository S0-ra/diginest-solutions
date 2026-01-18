import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to transform your digital presence? Contact us today and let's discuss 
            how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-glass rounded-2xl p-8"
          >
            <h3 className="font-display font-semibold text-xl mb-6">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  placeholder="Your Name"
                  className="bg-muted/50 border-border/50 focus:border-primary"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-muted/50 border-border/50 focus:border-primary"
                />
              </div>
              <Input
                placeholder="Subject"
                className="bg-muted/50 border-border/50 focus:border-primary"
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-muted/50 border-border/50 focus:border-primary resize-none"
              />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
                Send Message
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "diginest@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+977 9856011762",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Bastolathar Rd, Pokhara-9, 33700, Kaski",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-border/30">
              <p className="text-muted-foreground text-sm">
                <span className="text-foreground font-medium">Response Time:</span> We typically 
                respond within 24 hours during business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
