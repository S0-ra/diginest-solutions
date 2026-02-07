import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, UserCheck, Globe } from "lucide-react";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, including your name, email address, phone number, company name, job title, and any other information you choose to provide when you contact us, request our services, or subscribe to our newsletter."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. We also collect information about your browsing behavior and interaction with our website."
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          text: "We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools."
        }
      ]
    },
    {
      icon: UserCheck,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our services, including web development, software development, digital marketing, videography, 3D modeling, and security & networking solutions."
        },
        {
          subtitle: "Communication",
          text: "We use your contact information to respond to your inquiries, send you service-related communications, provide customer support, and send you marketing communications (with your consent)."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to understand how our services are used, to improve our website and services, and to develop new features and offerings."
        },
        {
          subtitle: "Legal Compliance",
          text: "We may use your information to comply with legal obligations, protect our rights, prevent fraud, and ensure the security of our services."
        }
      ]
    },
    {
      icon: Lock,
      title: "How We Protect Your Information",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law."
        },
        {
          subtitle: "Access Controls",
          text: "Access to your personal information is restricted to authorized personnel who need to know that information to provide services to you."
        }
      ]
    },
    {
      icon: Globe,
      title: "Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with third-party service providers who perform services on our behalf, such as hosting providers, email service providers, and analytics providers. These providers are contractually obligated to protect your information."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your personal information may be transferred as part of that transaction. We will notify you of any such change in ownership or control."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders or government agencies)."
        },
        {
          subtitle: "With Your Consent",
          text: "We may share your information with third parties when we have your explicit consent to do so."
        }
      ]
    },
    {
      icon: Eye,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information. You can do this by contacting us directly at the email address provided below."
        },
        {
          subtitle: "Data Deletion",
          text: "You can request that we delete your personal information, subject to certain exceptions where we are required to retain it by law."
        },
        {
          subtitle: "Opt-Out of Marketing",
          text: "You can opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in our emails or contacting us directly."
        },
        {
          subtitle: "Cookie Preferences",
          text: "You can manage your cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of our website."
        },
        {
          subtitle: "Do Not Track",
          text: "We currently do not respond to Do Not Track signals, but you can manage tracking through your browser and device settings."
        }
      ]
    },
    {
      icon: Shield,
      title: "Additional Information",
      content: [
        {
          subtitle: "Children's Privacy",
          text: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately."
        },
        {
          subtitle: "International Data Transfers",
          text: "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy."
        },
        {
          subtitle: "Third-Party Links",
          text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies."
        },
        {
          subtitle: "Changes to This Policy",
          text: "We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the 'Last Updated' date."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'var(--gradient-glow)' }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Your Privacy Matters</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Digi Nest Solution Pvt. Ltd. is committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            
            <p className="text-sm text-muted-foreground">
              Last Updated: February 8, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Privacy Policy describes how Digi Nest Solution Pvt. Ltd. ("DigiNest," "we," "us," or "our") collects, uses, and shares your personal information when you visit our website (diginest.com.np) or use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our website and services, you agree to the terms of this Privacy Policy. If you do not agree with our practices, please do not use our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
                </div>
                
                <div className="space-y-6 ml-0 md:ml-16">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
              </p>
              
              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-foreground min-w-[100px]">Company:</span>
                  <span className="text-muted-foreground">Digi Nest Solution Pvt. Ltd.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-foreground min-w-[100px]">Email:</span>
                  <a href="mailto:privacy@diginest.com.np" className="text-primary hover:underline">
                    support@diginest.com.np
                  </a>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-8">
                We will respond to your inquiry within 1-2 business days.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;