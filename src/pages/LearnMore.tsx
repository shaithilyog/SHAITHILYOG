import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BarChart3, Heart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const LearnMore = () => {
  const pillars = [
    {
      icon: Users,
      title: "Personalized Recommendations",
      description: "Our AI-powered platform analyzes your unique health data to provide personalized recommendations tailored specifically to your needs and goals.",
      features: ["AI Analysis", "Custom Plans", "Personal Insights"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Gain valuable insights from comprehensive health data analytics that help you understand patterns and trends in your health journey.",
      features: ["Data Visualization", "Trend Analysis", "Predictive Insights"]
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Connect with a supportive community of healthcare professionals and individuals on similar health journeys for guidance and motivation.",
      features: ["Expert Network", "Peer Support", "24/7 Assistance"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-glow opacity-20" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
              <span className="text-gradient">Learn More</span> About ShaithilYog
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
              Discover how our innovative healthcare technology platform is revolutionizing 
              the way people manage their health and wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              To empower individuals to take control of their health and wellness by providing 
              innovative, user-friendly, and effective solutions that make healthcare more 
              accessible, personalized, and preventive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 lg:p-12 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
                <span className="text-gradient">Our Vision</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                To revolutionize the healthcare industry by creating a holistic and interconnected 
                ecosystem that empowers individuals to take control of their health and wellbeing. 
                We aim to bridge the gap between healthcare providers, patients, and innovators, 
                fostering a culture of collaboration, innovation, and accessibility. We envision 
                a future where healthcare is personalized, preventive, and predictive, leveraging 
                cutting-edge technologies such as AI, blockchain, and IoT to create a seamless 
                and integrated experience.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Three Pillars</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on three fundamental principles that drive our approach to healthcare innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full p-6 lg:p-8 shadow-card hover:shadow-neural transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                      <pillar.icon className="w-6 h-6 text-background" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {pillar.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced algorithms and machine learning to analyze user data and provide 
              personalized recommendations for optimal health outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 lg:p-12 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-2xl font-bold text-background">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Data Collection</h3>
                  <p className="text-sm text-muted-foreground">
                    Gather comprehensive health data from various sources and wearables
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-2xl font-bold text-background">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced machine learning algorithms analyze patterns and trends
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-2xl font-bold text-background">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Personalized Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive tailored recommendations and treatment plans
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to <span className="text-gradient">Transform</span> Your Health?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              For questions or support, reach out to us at support@shaithilyog.live
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join-the-future">
                <Button variant="hero" size="lg" className="group">
                  Join the Future
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="neural" size="lg" className="group">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LearnMore;
