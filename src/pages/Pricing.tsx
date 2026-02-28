import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Globe, Megaphone } from "lucide-react";
import { useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState<"marketing" | "website">("marketing");
  const navigate = useNavigate();

  const digitalMarketingPackages = [
    {
      name: "Basic",
      price: "NPR 8,000",
      features: [
        "6 Post Design",
        "2 Festival Posts",
        "Content Writing",
        "Social Media Handling",
        "Boost Available (*)",
      ],
    },
    {
      name: "Standard",
      price: "NPR 12,000",
      features: [
        "10 Post Design",
        "4 Festival Posts",
        "Content Writing",
        "Customer Targeting",
        "1 Facebook Cover/Banner",
        "Social Media Handling",
        "Boost Available (*)",
      ],
    },
    {
      name: "Premium",
      price: "NPR 24,000",
      features: [
        "20 Post Design",
        "All Festival/Event Posts",
        "Customer Targeting",
        "Monthly Reporting",
        "Content Writing",
        "Priority Support",
        "1 Facebook Cover/Banner",
        "Boost Available (*)",
      ],
    },
  ];

  const websitePackages = [
    {
      name: "Basic",
      price: "NPR 25,000",
      features: [
        "5 Page Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "1 Month Free Support",
      ],
    },
    {
      name: "Standard",
      price: "NPR 45,000",
      features: [
        "10 Page Website",
        "Custom UI/UX Design",
        "SEO Optimization",
        "Admin Dashboard",
        "Speed Optimization",
        "3 Months Free Support",
      ],
    },
    {
      name: "Premium",
      price: "NPR 75,000",
      features: [
        "Unlimited Pages",
        "Custom Web Application",
        "Advanced SEO",
        "API Integration",
        "Performance Optimization",
        "6 Months Free Support",
            ],
    },
  ];

  const packages =
    activeTab === "marketing" ? digitalMarketingPackages : websitePackages;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Our <span className="text-gradient">Pricing</span>
        </h1>
        <p className="text-muted-foreground">
          Flexible pricing plans tailored for your business growth.
        </p>
      </section>

      {/* Tabs */}
      <section className="pb-8">
        <div className="flex justify-center">
          <div className="bg-card border border-border rounded-full p-2 flex gap-2">
            <button
              onClick={() => setActiveTab("marketing")}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition ${
                activeTab === "marketing"
                  ? "bg-primary text-white"
                  : "text-muted-foreground"
              }`}
            >
              <Megaphone size={16} />
              Digital Marketing
            </button>

            <button
              onClick={() => setActiveTab("website")}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition ${
                activeTab === "website"
                  ? "bg-primary text-white"
                  : "text-muted-foreground"
              }`}
            >
              <Globe size={16} />
              Website Development
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/40 transition flex flex-col"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>

                  <p className="text-3xl font-bold text-primary mb-6">
                    {pkg.price}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="text-primary mt-1" size={16} />
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom aligned area */}
                <div className="mt-auto">
                  <p className="text-xs text-muted-foreground mb-3">
                    *Price can vary for additional requirements
                  </p>

                  <button
                    onClick={() => navigate("/contact")}
                    className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;