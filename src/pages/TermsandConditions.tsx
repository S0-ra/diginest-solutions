import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  FileText, 
  Scale, 
  UserCheck, 
  Shield, 
  AlertCircle, 
  Globe,
  CreditCard,
  Ban,
  Copyright,
  Gavel
} from "lucide-react";

const TermsAndConditionsPage = () => {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing or using the DigiNest website (diginest.com.np) and our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes are posted constitutes your acceptance of the modified terms."
        },
        {
          subtitle: "Eligibility",
          text: "You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these requirements."
        }
      ]
    },
    {
      icon: Globe,
      title: "Services Overview",
      content: [
        {
          subtitle: "Service Offerings",
          text: "DigiNest provides a range of digital services including but not limited to web development, software development, digital marketing, videography, 3D modeling, and security & networking solutions. Specific service details will be outlined in individual service agreements or proposals."
        },
        {
          subtitle: "Service Availability",
          text: "We strive to ensure our services are available at all times. However, we do not guarantee uninterrupted access and may suspend or modify services for maintenance, updates, or other operational reasons without prior notice."
        },
        {
          subtitle: "Service Limitations",
          text: "Services are provided on an 'as is' and 'as available' basis. We reserve the right to refuse service to anyone for any reason at any time, subject to applicable laws."
        }
      ]
    },
    {
      icon: UserCheck,
      title: "User Responsibilities",
      content: [
        {
          subtitle: "Account Security",
          text: "If you create an account with us, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use."
        },
        {
          subtitle: "Accurate Information",
          text: "You agree to provide accurate, current, and complete information when using our services and to update such information as necessary to maintain its accuracy."
        },
        {
          subtitle: "Prohibited Uses",
          text: "You agree not to use our services for any unlawful purpose, to violate any applicable laws or regulations, to infringe upon intellectual property rights, to transmit harmful code or malware, to harass or harm others, or to interfere with the proper functioning of our services."
        },
        {
          subtitle: "Content Responsibility",
          text: "You are solely responsible for any content you provide to us, including text, images, videos, and other materials. You warrant that you have all necessary rights to such content and that it does not violate any third-party rights."
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        {
          subtitle: "Pricing",
          text: "Prices for our services are specified in individual proposals or service agreements. All prices are quoted in the agreed currency and are subject to change with prior notice for future services."
        },
        {
          subtitle: "Payment Schedule",
          text: "Payment terms will be outlined in your service agreement. Typically, we require an upfront deposit before commencing work, with remaining payments tied to project milestones or completion. Late payments may incur interest charges as permitted by law."
        },
        {
          subtitle: "Refunds and Cancellations",
          text: "Refund and cancellation policies vary by service type and will be specified in your service agreement. Generally, deposits are non-refundable once work has commenced. Cancellation requests must be made in writing."
        },
        {
          subtitle: "Taxes",
          text: "All prices are exclusive of applicable taxes, duties, and fees unless otherwise stated. You are responsible for payment of all such taxes associated with your purchase."
        }
      ]
    },
    {
      icon: Copyright,
      title: "Intellectual Property Rights",
      content: [
        {
          subtitle: "Our Intellectual Property",
          text: "All content on our website, including text, graphics, logos, images, software, and code, is the property of DigiNest or our licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute this content without our express written permission."
        },
        {
          subtitle: "Deliverables and Ownership",
          text: "Upon full payment, ownership of deliverables created specifically for you (such as custom websites or software) will transfer to you as outlined in your service agreement. We retain ownership of any pre-existing materials, frameworks, or tools used in creating the deliverables."
        },
        {
          subtitle: "License to Use",
          text: "For certain services, you may receive a license to use our proprietary tools, frameworks, or software. The scope and duration of such licenses will be specified in your service agreement."
        },
        {
          subtitle: "Portfolio Rights",
          text: "Unless otherwise agreed in writing, we reserve the right to display completed projects in our portfolio and marketing materials, with appropriate credit and client approval where required."
        }
      ]
    },
    {
      icon: Shield,
      title: "Warranties and Disclaimers",
      content: [
        {
          subtitle: "Service Warranty",
          text: "We warrant that services will be performed in a professional and workmanlike manner consistent with industry standards. Specific warranties for deliverables will be outlined in your service agreement and typically include a limited warranty period for bug fixes and corrections."
        },
        {
          subtitle: "Disclaimer of Warranties",
          text: "Except as expressly stated in your service agreement, our services are provided 'as is' without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement."
        },
        {
          subtitle: "Third-Party Services",
          text: "We may use or recommend third-party services, tools, or platforms. We are not responsible for the performance, availability, or security of such third-party services and make no warranties regarding them."
        },
        {
          subtitle: "Results",
          text: "While we strive for excellence, we do not guarantee specific results from our services, including but not limited to website traffic, search engine rankings, sales conversions, or revenue increases."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Liability Cap",
          text: "To the maximum extent permitted by law, our total liability for any claims arising from or related to our services shall not exceed the total amount paid by you to DigiNest for the specific services giving rise to the claim in the twelve (12) months preceding the claim."
        },
        {
          subtitle: "Excluded Damages",
          text: "In no event shall DigiNest be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, even if we have been advised of the possibility of such damages."
        },
        {
          subtitle: "Force Majeure",
          text: "We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials."
        }
      ]
    },
    {
      icon: Scale,
      title: "Indemnification",
      content: [
        {
          subtitle: "Your Indemnification",
          text: "You agree to indemnify, defend, and hold harmless DigiNest, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from: (a) your use of our services; (b) your violation of these Terms and Conditions; (c) your violation of any rights of another party; or (d) any content you provide to us."
        },
        {
          subtitle: "Our Defense",
          text: "We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which case you agree to cooperate with our defense of such claim."
        }
      ]
    },
    {
      icon: Ban,
      title: "Termination",
      content: [
        {
          subtitle: "Termination by Either Party",
          text: "Either party may terminate a service agreement in accordance with the termination provisions specified in that agreement. Termination does not relieve you of payment obligations for services already rendered."
        },
        {
          subtitle: "Termination for Cause",
          text: "We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms and Conditions, non-payment, or any conduct we deem harmful to our business or other users."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, your right to use our services will immediately cease. Provisions that by their nature should survive termination (including payment obligations, intellectual property rights, warranties, disclaimers, and limitations of liability) shall survive."
        }
      ]
    },
    {
      icon: Gavel,
      title: "Dispute Resolution and Governing Law",
      content: [
        {
          subtitle: "Governing Law",
          text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions."
        },
        {
          subtitle: "Jurisdiction",
          text: "Any disputes arising from or relating to these Terms and Conditions or our services shall be subject to the exclusive jurisdiction of the courts located in Kathmandu, Nepal."
        },
        {
          subtitle: "Dispute Resolution",
          text: "Before initiating any legal proceedings, the parties agree to attempt to resolve disputes through good faith negotiation. If negotiation fails, the parties may pursue mediation or arbitration as agreed upon in writing."
        },
        {
          subtitle: "Class Action Waiver",
          text: "You agree to resolve disputes with us on an individual basis and waive your right to participate in any class action or representative proceeding against DigiNest."
        }
      ]
    },
    {
      icon: FileText,
      title: "General Provisions",
      content: [
        {
          subtitle: "Entire Agreement",
          text: "These Terms and Conditions, together with any service agreements, proposals, or other documents referenced herein, constitute the entire agreement between you and DigiNest regarding our services and supersede all prior agreements and understandings."
        },
        {
          subtitle: "Severability",
          text: "If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable."
        },
        {
          subtitle: "Waiver",
          text: "No waiver of any term or condition shall be deemed a further or continuing waiver of such term or any other term. Our failure to assert any right or provision under these Terms and Conditions shall not constitute a waiver of such right or provision."
        },
        {
          subtitle: "Assignment",
          text: "You may not assign or transfer these Terms and Conditions or your rights and obligations hereunder without our prior written consent. We may assign our rights and obligations without restriction."
        },
        {
          subtitle: "Third-Party Beneficiaries",
          text: "These Terms and Conditions do not create any third-party beneficiary rights except as expressly stated herein."
        },
        {
          subtitle: "Notices",
          text: "All notices under these Terms and Conditions shall be in writing and sent to the addresses specified in your service agreement or to the contact information provided on our website."
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
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Legal Agreement</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Please read these terms and conditions carefully before using our services.
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
                Welcome to Digi Nest Solution Pvt. Ltd. ("DigiNest," "we," "us," or "our"). These Terms and Conditions govern your access to and use of our website, services, and products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These terms create a legally binding agreement between you and DigiNest. By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
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

      {/* Important Notice */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">Important Notice</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    These Terms and Conditions are a legal contract between you and DigiNest. Please read them carefully. By using our services, you agree to be bound by these terms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these terms, please contact us before using our services. We recommend that you print or save a copy of these Terms and Conditions for your records.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions or concerns about these Terms and Conditions, please don't hesitate to contact us:
              </p>
              
              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-foreground min-w-[100px]">Company:</span>
                  <span className="text-muted-foreground">Digi Nest Solution Pvt. Ltd.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-foreground min-w-[100px]">Email:</span>
                  <a href="mailto:legal@diginest.com.np" className="text-primary hover:underline">
                    support@diginest.com.np
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;