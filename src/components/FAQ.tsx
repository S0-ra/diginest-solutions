import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does DigiNest offer?",
    answer: "DigiNest provides a comprehensive range of IT solutions including Digital Marketing, Software Development, Videography, Security & Networking, 3D Modeling, UI/UX Design, AI Modeling, and DevOps services. We're your one-stop solution for all digital needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while complex software development projects can take 3-6 months. During our initial consultation, we'll provide a detailed timeline tailored to your specific requirements."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Absolutely! We offer flexible support and maintenance packages to ensure your digital assets remain secure, up-to-date, and performing optimally. Our Premium package includes priority support with 24/7 availability."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer both Standard and Premium packages to suit different business needs. Our Standard package covers essential services, while our Premium package includes advanced features and priority support. Contact us for a customized quote based on your specific requirements."
  },
  {
    question: "Can you work with existing systems and platforms?",
    answer: "Yes, we specialize in integrating with and enhancing existing systems. Whether you need to modernize legacy software, integrate new features, or connect multiple platforms, our team has the expertise to work seamlessly with your current infrastructure."
  },
  {
    question: "How do you ensure project quality and security?",
    answer: "We follow industry best practices including code reviews, automated testing, and security audits. Our DevOps approach ensures continuous integration and deployment with robust monitoring. All our projects comply with relevant security standards and data protection regulations."
  },
  {
    question: "Do you provide training for the solutions you develop?",
    answer: "Yes, comprehensive training is included with all our projects. We ensure your team is fully equipped to manage and utilize the solutions we develop. We also provide detailed documentation and ongoing support resources."
  },
  {
    question: "How do I get started with DigiNest?",
    answer: "Getting started is easy! Simply reach out through our contact form, give us a call, or send us an email. We'll schedule a free consultation to discuss your needs, understand your goals, and propose the best solutions for your business."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-glass border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
