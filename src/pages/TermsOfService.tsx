import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FileText, AlertTriangle, Users, Shield } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const TermsOfService = () => {
  const sections = [
    {
      title: "Platform Usage",
      icon: Users,
      content: [
        "You must be 18 years or older to use our services",
        "Provide accurate and current information when creating an account",
        "Use the platform only for lawful purposes and in accordance with these terms",
        "Do not attempt to gain unauthorized access to any part of the platform"
      ]
    },
    {
      title: "User Responsibilities",
      icon: FileText,
      content: [
        "Maintain the confidentiality of your account credentials",
        "Notify us immediately of any unauthorized use of your account",
        "Ensure all health information you provide is accurate and current",
        "Comply with all applicable laws and regulations in your jurisdiction"
      ]
    },
    {
      title: "Service Limitations",
      icon: AlertTriangle,
      content: [
        "Our services are for informational purposes and do not replace professional medical advice",
        "Always consult with qualified healthcare professionals for medical decisions",
        "We do not guarantee the accuracy of AI-generated recommendations",
        "Emergency situations require immediate professional medical attention"
      ]
    },
    {
      title: "Data and Privacy",
      icon: Shield,
      content: [
        "Your data is protected according to our Privacy Policy",
        "We use industry-standard security measures to protect your information",
        "You retain ownership of your health data",
        "We may use aggregated, anonymized data for research and improvement purposes"
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
              <span className="text-gradient">Terms of</span> Service
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Please read these terms carefully before using ShaithilYog's healthcare 
              technology platform and services.
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
                Welcome to <span className="text-gradient">ShaithilYog</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These Terms of Service ("Terms") govern your use of ShaithilYog's healthcare 
                  technology platform, including our AI-powered diagnostics, telemedicine services, 
                  health data analytics, and related services (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms. 
                  If you disagree with any part of these terms, then you may not access the Services.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and ShaithilYog. 
                  We may update these Terms from time to time, and we will notify you of any 
                  material changes.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Additional Terms */}
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
              <h3 className="text-2xl font-bold mb-6">Intellectual Property</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All content, features, and functionality of the ShaithilYog platform, 
                  including but not limited to text, graphics, logos, images, and software, 
                  are owned by ShaithilYog and are protected by copyright, trademark, and 
                  other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create derivative works 
                  of our content without explicit written permission from ShaithilYog.
                </p>
              </div>
            </Card>

            <Card className="p-8 lg:p-12 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Service Availability</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We strive to maintain high availability of our services, but we cannot 
                  guarantee uninterrupted access. Our services may be temporarily unavailable 
                  due to maintenance, updates, or unforeseen technical issues.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our 
                  services at any time with reasonable notice to users.
                </p>
              </div>
            </Card>

            <Card className="p-8 lg:p-12 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Limitation of Liability</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ShaithilYog's services are provided "as is" without warranties of any kind. 
                  We do not warrant that our services will be error-free, secure, or continuously 
                  available.
                </p>
                <p>
                  To the maximum extent permitted by law, ShaithilYog shall not be liable for 
                  any indirect, incidental, special, or consequential damages arising from 
                  your use of our services.
                </p>
                <p className="font-semibold text-primary">
                  Important: Our services are not intended to replace professional medical 
                  advice, diagnosis, or treatment. Always seek the advice of qualified 
                  healthcare providers with any questions regarding medical conditions.
                </p>
              </div>
            </Card>

            <Card className="p-8 lg:p-12 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Termination</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  You may terminate your account at any time by contacting us. Upon termination, 
                  your right to use the services will cease immediately.
                </p>
                <p>
                  We may terminate or suspend your account if you violate these Terms or engage 
                  in activities that could harm our platform or other users.
                </p>
                <p>
                  Upon termination, we will securely delete your personal data in accordance 
                  with our Privacy Policy and applicable legal requirements.
                </p>
              </div>
            </Card>

            <Card className="p-8 lg:p-12 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@shaithilyog.tech</p>
                  <p><strong>Support:</strong> support@shaithilyog.tech</p>
                  <p><strong>Website:</strong> shaithilyog.tech</p>
                </div>
                <p>
                  We will respond to your inquiry within 30 days and work to address 
                  any questions or concerns you may have.
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

export default TermsOfService;
