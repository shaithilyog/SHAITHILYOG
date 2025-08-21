import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information such as name, email address, and contact details when you register or contact us",
        "Health data that you voluntarily provide through our platform",
        "Usage data including how you interact with our services",
        "Device information and technical data for service optimization"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: UserCheck,
      content: [
        "To provide personalized healthcare recommendations and services",
        "To improve our AI algorithms and service quality",
        "To communicate with you about our services and updates",
        "To comply with legal and regulatory requirements"
      ]
    },
    {
      title: "Data Protection",
      icon: Shield,
      content: [
        "All health data is encrypted using state-of-the-art encryption protocols",
        "We implement blockchain technology for secure data storage",
        "Access to your data is strictly controlled and monitored",
        "Regular security audits and compliance checks are performed"
      ]
    },
    {
      title: "Your Rights",
      icon: Lock,
      content: [
        "You have the right to access, modify, or delete your personal data",
        "You can opt-out of data collection at any time",
        "You can request a copy of all data we have about you",
        "You can file complaints with relevant data protection authorities"
      ]
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
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
              <span className="text-gradient">Privacy</span> Policy
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Your privacy and data security are our top priorities. Learn how we protect 
              and handle your healthcare information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: December 2023
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 lg:p-12 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Comprehensive Healthcare <span className="text-gradient">Data Protection</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At ShaithilYog, we understand that your health information is among your most 
                  sensitive personal data. This Privacy Policy explains how we collect, use, 
                  protect, and share your information when you use our healthcare technology platform.
                </p>
                <p>
                  We are committed to maintaining the highest standards of data protection and 
                  comply with all applicable healthcare data protection regulations, including 
                  HIPAA, GDPR, and other relevant privacy laws.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information 
                  in accordance with this policy. We will never sell your personal or health 
                  data to third parties.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full p-6 lg:p-8 shadow-card hover:shadow-neural transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                        <section.icon className="w-5 h-5 text-background" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <Card className="p-8 lg:p-12 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Age Requirements</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our services are intended for users who are 18 years of age or older. 
                  We do not knowingly collect personal information from children under 18. 
                  If you are under 18, please do not use our services or provide any 
                  personal information.
                </p>
                <p>
                  If we become aware that we have collected personal information from 
                  a child under 18, we will delete such information from our systems 
                  immediately.
                </p>
              </div>
            </Card>

            <Card className="p-8 lg:p-12 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Third-Party Services</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our platform may integrate with third-party healthcare services and 
                  wearable devices. We only work with partners who maintain similar 
                  high standards of data protection and privacy.
                </p>
                <p>
                  When you connect third-party services, you are subject to their 
                  privacy policies as well. We encourage you to review the privacy 
                  policies of any third-party services you use.
                </p>
              </div>
            </Card>

            <Card className="p-8 lg:p-12 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy or our data 
                  practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@shaithilyog.tech</p>
                  <p><strong>Website:</strong> shaithilyog.tech</p>
                  <p><strong>Support:</strong> support@shaithilyog.tech</p>
                </div>
                <p>
                  We will respond to your inquiry within 30 days and work with you 
                  to address any concerns about your privacy and data protection.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
