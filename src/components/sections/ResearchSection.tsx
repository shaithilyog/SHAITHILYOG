import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Microscope, Brain, Heart, Dna } from 'lucide-react';

const ResearchSection = () => {
  const researchAreas = [
    {
      icon: Microscope,
      title: "Telemedicine Platform",
      description: "Connect patients with healthcare providers seamlessly through advanced telemedicine solutions.",
      tags: ["Remote Care", "Virtual Consultations", "Digital Health"],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Brain,
      title: "Personalized Treatment Plans",
      description: "Use AI to create tailored treatment plans based on individual patient data and health patterns.",
      tags: ["AI Treatment", "Personalization", "Patient Care"],
      gradient: "from-secondary to-accent"
    },
    {
      icon: Heart,
      title: "Preventive Healthcare",
      description: "Advanced preventive care solutions leveraging AI and continuous health monitoring.",
      tags: ["Prevention", "Monitoring", "Early Detection"],
      gradient: "from-accent to-primary"
    },
    {
      icon: Dna,
      title: "Holistic Ecosystem",
      description: "Creating an interconnected healthcare ecosystem that bridges providers, patients, and innovators.",
      tags: ["Integration", "Collaboration", "Innovation"],
      gradient: "from-primary-glow to-secondary"
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-glow opacity-10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <span className="text-gradient">Core</span> Features
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Our comprehensive healthcare platform combines innovative technology with personalized care 
            to create a seamless and integrated healthcare experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full p-4 sm:p-6 shadow-card hover:shadow-neural transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                <div className="space-y-3 sm:space-y-4">
                  {/* Icon */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${area.gradient} p-2.5 sm:p-3 shadow-glow`}>
                    <area.icon className="w-full h-full text-background" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {[
            { label: "Live products", value: "1", suffix: "" },
            { label: "Outside funding", value: "$0", suffix: "" },
            { label: "Founders", value: "1", suffix: "" },
            { label: "Building since", value: "2026", suffix: "" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6 rounded-lg bg-card/30 border border-primary/10 shadow-card"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-1 sm:mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;