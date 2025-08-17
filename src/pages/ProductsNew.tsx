import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Smartphone, 
  Dumbbell, 
  Heart, 
  Calendar, 
  Users, 
  TrendingUp,
  Play,
  Star,
  Clock,
  Activity,
  Utensils,
  Moon,
  Target,
  BarChart3,
  Zap,
  Shield,
  Brain,
  Building2,
  CreditCard,
  User,
  Stethoscope,
  MessageCircle,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

// Import LogX assets
import logxLogo from '@/assets/logx/logX logo.png';
import logxPlaystore from '@/assets/logx/logx_playstore image.png';
import logxSplash from '@/assets/logx/splash-screen.png';

const Products = () => {
  const products = [
    {
      id: 'logx',
      name: 'LogX',
      subtitle: 'Fitness, Food & Progress',
      status: 'Alpha Testing',
      statusColor: 'bg-blue-500',
      description: 'Your comprehensive fitness companion powered by AI. Track workouts, nutrition, and progress with intelligent recommendations.',
      logo: logxLogo,
      banner: logxPlaystore,
      screenshots: [logxSplash],
      available: true,
      features: [
        { icon: User, title: 'Personal Profile', desc: 'Secure registration with personalized fitness goals' },
        { icon: Target, title: 'Smart Goal Setting', desc: 'AI-powered recommendations based on your objectives' },
        { icon: Heart, title: 'Health Monitoring', desc: 'Track allergies, conditions, and body measurements' },
        { icon: Dumbbell, title: 'Custom Workouts', desc: 'Tailored plans with video tutorials and progress tracking' },
        { icon: Utensils, title: 'Nutrition Intelligence', desc: 'Smart meal plans with macro tracking and recipe suggestions' },
        { icon: Moon, title: 'Sleep Analytics', desc: 'Monitor sleep quality for complete wellness tracking' },
        { icon: Brain, title: 'ML Recommendations', desc: 'Personalized suggestions that evolve with your progress' },
        { icon: Activity, title: 'Virtual Classes', desc: 'Join live workout sessions from anywhere' }
      ],
      techSpecs: {
        platform: ['iOS', 'Android'],
        integration: ['Wearables', 'USDA Food Database', 'Barcode Scanner'],
        ai: ['Exercise Recommendation Engine', 'Nutrition Analysis', 'Progress Prediction']
      }
    },
    {
      id: 'ascendancy',
      name: 'Ascendancy',
      subtitle: 'Gym & Subscription Management',
      status: 'In Development',
      statusColor: 'bg-orange-500',
      description: 'Complete gym management solution for fitness centers and their members.',
      logo: '/api/placeholder/100/100',
      banner: '/api/placeholder/800/400',
      screenshots: [],
      available: false,
      features: [
        { icon: Building2, title: 'Gym Management', desc: 'Complete facility and equipment management' },
        { icon: Users, title: 'Member Portal', desc: 'Streamlined member registration and profiles' },
        { icon: CreditCard, title: 'Subscription Billing', desc: 'Automated billing and payment processing' },
        { icon: Calendar, title: 'Class Scheduling', desc: 'Easy booking system for classes and trainers' },
        { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Real-time insights on gym performance' },
        { icon: Smartphone, title: 'Mobile App', desc: 'Companion app for members and staff' }
      ],
      techSpecs: {
        platform: ['Web Dashboard', 'Mobile App'],
        integration: ['Payment Gateways', 'Access Control Systems'],
        features: ['Real-time Analytics', 'Automated Billing', 'Member Management']
      }
    },
    {
      id: 'sha',
      name: 'SHA',
      subtitle: 'Simplified Health Assistant',
      status: 'In Development',
      statusColor: 'bg-purple-500',
      description: 'AI-powered health assistant that simplifies healthcare management and provides intelligent insights.',
      logo: '/api/placeholder/100/100',
      banner: '/api/placeholder/800/400',
      screenshots: [],
      available: false,
      features: [
        { icon: Stethoscope, title: 'Health Monitoring', desc: 'Continuous health parameter tracking' },
        { icon: Brain, title: 'AI Diagnostics', desc: 'Intelligent health analysis and recommendations' },
        { icon: MessageCircle, title: 'Health Chat', desc: '24/7 AI health assistant for queries' },
        { icon: Database, title: 'Medical Records', desc: 'Secure digital health record management' },
        { icon: Shield, title: 'Privacy First', desc: 'End-to-end encryption for all health data' },
        { icon: TrendingUp, title: 'Health Trends', desc: 'Predictive analytics for health patterns' }
      ],
      techSpecs: {
        platform: ['Mobile App', 'Web Portal'],
        integration: ['Healthcare APIs', 'Wearable Devices'],
        ai: ['Diagnostic Assistant', 'Health Prediction', 'Symptom Analysis']
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our innovative healthcare and fitness solutions designed to transform 
              your wellness journey through cutting-edge technology and AI-powered insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className={`border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden ${!product.available ? 'opacity-75' : ''}`}>
                  {!product.available && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
                      <div className="text-center">
                        <Clock className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="text-2xl font-bold text-gradient mb-2">Coming Soon</h3>
                        <p className="text-muted-foreground">Currently in development</p>
                      </div>
                    </div>
                  )}
                  
                  <CardContent className="p-0">
                    {/* Product Header */}
                    <div className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <img 
                              src={product.logo} 
                              alt={`${product.name} Logo`}
                              className="w-16 h-16 rounded-xl shadow-lg"
                            />
                            <div>
                              <h2 className="text-3xl font-bold text-gradient">{product.name}</h2>
                              <p className="text-lg text-muted-foreground">{product.subtitle}</p>
                            </div>
                            <Badge className={`${product.statusColor} text-white`}>
                              {product.status}
                            </Badge>
                          </div>
                          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            {product.description}
                          </p>
                          
                          {product.available && (
                            <div className="flex flex-wrap gap-3">
                              <Button className="group">
                                <Play className="w-4 h-4 mr-2" />
                                Download Beta
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                              <Button variant="outline">
                                <Star className="w-4 h-4 mr-2" />
                                View Demo
                              </Button>
                            </div>
                          )}
                        </div>
                        
                        {/* Product Screenshot */}
                        <div className="lg:w-1/3">
                          <img 
                            src={product.banner} 
                            alt={`${product.name} Interface`}
                            className="w-full rounded-xl shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gradient mb-6">Key Features</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-center">
                            <div className="w-12 h-12 bg-gradient-glow rounded-lg flex items-center justify-center mx-auto mb-3">
                              <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tech Specs */}
                      <div className="border-t border-primary/10 pt-8">
                        <h4 className="text-lg font-semibold mb-4">Technical Specifications</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h5 className="font-medium text-primary mb-2">Platform</h5>
                            <div className="flex flex-wrap gap-2">
                              {product.techSpecs.platform.map((platform, i) => (
                                <Badge key={i} variant="secondary">{platform}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-primary mb-2">Integration</h5>
                            <div className="flex flex-wrap gap-2">
                              {product.techSpecs.integration.map((integration, i) => (
                                <Badge key={i} variant="outline">{integration}</Badge>
                              ))}
                            </div>
                          </div>
                          {product.techSpecs.ai && (
                            <div>
                              <h5 className="font-medium text-primary mb-2">AI Features</h5>
                              <div className="flex flex-wrap gap-2">
                                {product.techSpecs.ai.map((ai, i) => (
                                  <Badge key={i} variant="secondary" className="bg-gradient-glow text-primary">{ai}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          {product.techSpecs.features && (
                            <div>
                              <h5 className="font-medium text-primary mb-2">Core Features</h5>
                              <div className="flex flex-wrap gap-2">
                                {product.techSpecs.features.map((feature, i) => (
                                  <Badge key={i} variant="outline">{feature}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">
              Ready to Transform Your Health Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users who are already experiencing the future of healthcare technology.
              Be the first to access our latest innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/join-the-future">
                  Join Beta Program
                  <Zap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact-us">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
