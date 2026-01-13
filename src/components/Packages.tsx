import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Standard",
    price: "499",
    description: "Perfect for startups and small businesses",
    features: [
      "Basic Website Development",
      "Social Media Management (2 platforms)",
      "SEO Optimization",
      "Basic Graphic Design",
      "Monthly Analytics Report",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "999",
    description: "Comprehensive solution for growing businesses",
    features: [
      "Custom Website & App Development",
      "Full Social Media Management",
      "Advanced SEO & SEM",
      "Videography & Photography",
      "3D Modeling & UI/UX Design",
      "DevOps & Security Setup",
      "AI Integration",
      "Priority 24/7 Support",
    ],
    popular: true,
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-primary">Package</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing plans tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative h-full flex flex-col transition-all duration-300 hover:shadow-xl ${
                  pkg.popular
                    ? "border-secondary shadow-lg shadow-secondary/20"
                    : "hover:border-primary/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 flex flex-col flex-1">
                  <ul className="space-y-3 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.popular ? "text-secondary" : "text-primary"}`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-8 ${
                      pkg.popular
                        ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
