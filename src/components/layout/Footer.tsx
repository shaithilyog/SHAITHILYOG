import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoBlack from '@/assets/logo-black.png';

const Footer = () => {
  const socialLinks = [
    // { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/shaithilyog/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/orgs/shaithilyog/repositories', label: 'GitHub' },
    { icon: Mail, href: 'mailto:support@shaithilyog.live', label: 'Email' },
  ];

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI-Powered Diagnostics', href: '/learn-more' },
        { name: 'Telemedicine Platform', href: '/learn-more' },
        { name: 'Health Data Analytics', href: '/learn-more' },
        { name: 'Wearable Integration', href: '/learn-more' }
      ]
    },
    {
      title: 'Technology',
      links: [
        { name: 'Personalized Treatment', href: '/learn-more' },
        { name: 'Secure Health Records', href: '/learn-more' },
        { name: 'Blockchain Security', href: '/learn-more' },
        { name: 'IoT Integration', href: '/learn-more' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/learn-more' },
        { name: 'Careers', href: '/careers' },
        { name: 'Learn More', href: '/learn-more' },
        { name: 'Join the Future', href: '/join-the-future' },
        { name: 'Privacy Policy', href: '/privacy-policy' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Products', href: '/products' },
        { name: 'Community', href: '/join-the-future' }
      ]
    }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background border-t border-primary/20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-glow opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-secondary opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-glow overflow-hidden">
                  <img 
                    src={logoBlack} 
                    alt="ShaithilYog Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient">ShaithilYog</div>
                  <div className="text-sm text-muted-foreground">Healthcare Technology</div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-muted-foreground leading-relaxed"
              >
                Revolutionizing the healthcare industry by creating a holistic and interconnected ecosystem 
                that empowers individuals to take control of their health and wellbeing.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -2, scale: 1.1 }}
                    className="w-10 h-10 bg-card border border-primary/20 rounded-lg flex items-center justify-center hover:border-primary/40 hover:shadow-glow transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="font-semibold text-foreground">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.div whileHover={{ x: 4 }}>
                        <Link
                          to={link.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-primary/10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-gradient mb-2">
                Stay Updated with Our Research
              </h3>
              <p className="text-sm text-muted-foreground">
                Get the latest insights, breakthroughs, and research updates delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-2 w-full lg:w-auto lg:min-w-[300px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:border-primary/50 focus:outline-none text-sm"
              />
              <button className="px-6 py-2 bg-gradient-primary text-background rounded-lg hover:shadow-glow transition-all duration-300 font-medium text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="text-sm text-muted-foreground">
            © 2023 ShaithilYog. All Rights Reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact-us" className="text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;