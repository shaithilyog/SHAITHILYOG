import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Database, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechnologySection = () => {
  const technologies = [
    {
      icon: Cpu,
      title: "Frontier-model reasoning",
      description: "We use Google's Gemini 2.5 Flash and Anthropic's Claude for the actual medical literacy work — schema-constrained outputs, structured reasoning over messy clinical documents.",
      features: ["Structured JSON output", "Schema-validated responses", "No prose hallucination"],
      color: "primary"
    },
    {
      icon: Database,
      title: "Server-side PHI redaction",
      description: "Names, SSNs, MRNs, phone numbers, addresses, dates of birth — scrubbed in memory before any text reaches the model. The original file is released the moment your brief is rendered.",
      features: ["Regex + heuristic scrub", "Post-redaction sanity check", "No database, no backup"],
      color: "secondary"
    },
    {
      icon: Shield,
      title: "Hard guardrails",
      description: "Every system prompt forbids diagnosis, prescription advice, or prognosis. Crisis signals trigger hard handoffs to 911, 988, or Poison Control. The model knows what it isn't.",
      features: ["No diagnosis", "No Rx changes", "Crisis routing built in"],
      color: "accent"
    },
    {
      icon: Zap,
      title: "Open by default",
      description: "Our evaluation datasets, redaction tooling, and medical-literacy benchmarks are released under MIT on GitHub. The commercial product is the workflow, not the model.",
      features: ["MIT-licensed tooling", "Public eval datasets", "Build in public"],
      color: "primary-glow"
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-background to-card">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <span className="text-gradient">What's</span> under the hood
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Healthcare AI fails in two ways: it makes things up, or it stores things it shouldn&apos;t.
            We engineer against both, on every product.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="p-4 sm:p-6 lg:p-8 h-full shadow-card hover:shadow-neural transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-${tech.color} to-${tech.color}/60 shadow-glow`}>
                    <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
                  </div>
                  
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-gradient transition-colors mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {tech.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="inline-block p-8 shadow-neural border-primary/20 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              See it in action
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg">
              Kavach is the first product. Drop in a real medical document and watch
              what the engineering above produces in about a minute.
            </p>
            <a href="https://kavach.shaithilyog.tech" target="_blank" rel="noopener noreferrer">
              <Button variant="innovation" size="lg" className="group">
                Try Kavach
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;