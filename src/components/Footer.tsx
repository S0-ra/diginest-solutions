import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61586479244242",
    },
    { icon: Instagram, url: "https://www.instagram.com/diginest.np/" },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/diginest-solutions-a868763a6/",
    },
  ];
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg  flex items-center justify-center ">
              <img src="/logo.png" alt="Diginest Logo" />
            </div>
            <span className="font-display font-bold text-foreground">
              DigiNest
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center md:text-right"
          >
            © 2026 DigiNest. All rights reserved. Digi Nest Solution Pvt. Ltd.
            <span className="block mt-2 space-x-4">
              <a
                href="/privacy-policy"
                className="hover:text-primary transition-colors hover:underline"
              >
                Privacy Policy
              </a>
              <span className="text-muted-foreground/50">|</span>
              <a
                href="/terms-and-conditions"
                className="hover:text-primary transition-colors hover:underline"
              >
                Terms & Conditions
              </a>
            </span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;