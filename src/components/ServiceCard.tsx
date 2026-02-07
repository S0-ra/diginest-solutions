import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  index: number;
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  highlights,
  index 
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      {/* Card Content */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative card-glass rounded-2xl p-8 h-full flex flex-col hover:border-primary/40 transition-all duration-300"
      >
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300"
        >
          <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
        </motion.div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {highlights.map((highlight, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
              viewport={{ once: true }}
              className="text-xs font-medium text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300"
            >
              {highlight}
            </motion.span>
          ))}
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;