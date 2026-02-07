import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    content: "DigiNest transformed our digital presence completely. Their team delivered a stunning website and marketing strategy that increased our leads by 300%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    content: "The software development team at DigiNest exceeded our expectations. They built a scalable platform that handles millions of users seamlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    content: "Their videography and 3D modeling work is absolutely phenomenal. The product videos they created boosted our conversion rates significantly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "David Thompson",
    role: "CTO, SecureNet Solutions",
    content: "DigiNest's security and networking expertise is top-notch. They implemented a robust infrastructure that keeps our data safe and systems running 24/7.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'var(--gradient-glow)' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm mb-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with DigiNest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-glass h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardContent className="p-8 relative z-10">

                  
                  <p className="text-foreground/90 text-base md:text-lg mb-8 leading-relaxed font-light">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm mt-0.5">{testimonial.role}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary/80 text-primary/80 drop-shadow-sm" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;