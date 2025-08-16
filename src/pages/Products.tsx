import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Clock, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const Products = () => {
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
            className="text-center space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                <span className="text-gradient">Products</span> Coming Soon
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                We're working hard to bring you revolutionary healthcare products that will 
                transform the way you manage your health and wellbeing.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <Rocket className="w-12 h-12 lg:w-16 lg:h-16 text-background" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Features */}
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
              What's <span className="text-gradient">Coming</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Get ready for innovative healthcare solutions that will revolutionize 
              how you interact with healthcare technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full p-6 lg:p-8 shadow-card hover:shadow-neural transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <span className="text-xl font-bold text-background">AI</span>
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Powered Health App</h3>
                <p className="text-muted-foreground">
                  Intelligent health monitoring and personalized recommendations 
                  powered by advanced machine learning algorithms.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full p-6 lg:p-8 shadow-card hover:shadow-neural transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <span className="text-xl font-bold text-background">Tel</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Telemedicine Platform</h3>
                <p className="text-muted-foreground">
                  Seamless virtual consultations with healthcare providers, 
                  bringing quality care directly to your home.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full p-6 lg:p-8 shadow-card hover:shadow-neural transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <span className="text-xl font-bold text-background">IoT</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Health Monitoring Suite</h3>
                <p className="text-muted-foreground">
                  Comprehensive health tracking with wearable integration 
                  and real-time analytics for complete health insights.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notification Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 lg:p-12 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-glow rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Bell className="w-8 h-8 text-background" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold">
                    Be the First to <span className="text-gradient">Know</span>
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Our products are in active development. Join our community to get 
                    early access, beta testing opportunities, and exclusive updates 
                    on our launch timeline.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/join-the-future">
                    <Button variant="hero" size="lg" className="group">
                      Join the Future
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/learn-more">
                    <Button variant="neural" size="lg" className="group">
                      <Clock className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Development <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated on our progress as we build the future of healthcare technology
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Q2 2023 - Planning & Design</h4>
                  <p className="text-sm text-muted-foreground">Research, user experience design, and technical architecture</p>
                </div>
                <span className="text-xs text-primary font-medium">Completed</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Q1 & Q2 2024 - Literature review</h4>
                  <p className="text-sm text-muted-foreground">Researching existing breakthroughs and opensource contributions in healthcare.</p>
                </div>
                <span className="text-xs text-primary font-medium">Completed</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="w-4 h-4 bg-secondary rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Q1 2025 - Development</h4>
                  <p className="text-sm text-muted-foreground">Core platform development and AI model training</p>
                </div>
                <span className="text-xs text-secondary font-medium">In Progress</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="w-4 h-4 bg-muted rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-muted-foreground">Q2 2025 - Beta Testing</h4>
                  <p className="text-sm text-muted-foreground">Limited beta release and user feedback collection</p>
                </div>
                <span className="text-xs text-muted-foreground font-medium">Upcoming</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="w-4 h-4 bg-muted rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-muted-foreground">Q1 2026 - Launch</h4>
                  <p className="text-sm text-muted-foreground">Public launch of ShaithilYog platform</p>
                </div>
                <span className="text-xs text-muted-foreground font-medium">Upcoming</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
