import Tag from "./ui/tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import djangoIcon from "@/assets/images/django.svg";
import flutterIcon from "@/assets/images/flutter.svg";
import nextjsIcon from "@/assets/images/nextjs.svg";
import laravelIcon from "@/assets/images/laravel.svg";
import vuejsIcon from "@/assets/images/vue.svg";
import wordpressIcon from "@/assets/images/wordpress.svg";
import IntegrationsColumn from "./IntegrationsColumn";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
  {
    name: "Django",
    icon: djangoIcon,
    description: "Django is a Python framework for secure web apps.",
  },
  {
    name: "Flutter",
    icon: flutterIcon,
    description:
      "Flutter is Google's toolkit for building cross-platform apps.",
  },
  {
    name: "Next.js",
    icon: nextjsIcon,
    description:
      "Next.js is a React framework for fast, SEO-friendly web apps.",
  },
  {
    name: "Laravel",
    icon: laravelIcon,
    description: "Laravel is a PHP framework for elegant web development.",
  },
  {
    name: "Vue.js",
    icon: vuejsIcon,
    description: "Vue.js is a JavaScript framework for interactive UIs.",
  },
  {
    name: "WordPress",
    icon: wordpressIcon,
    description:
      "WordPress is a CMS for building websites and managing content.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: 'var(--gradient-glow)' }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="text-6xl font-medium mt-6">
              <span className="text-primary">Technologies</span> We Use
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              We leverage modern, reliable technologies to build secure,
              scalable, and high-performance digital solutions tailored to your
              business needs.
            </p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}