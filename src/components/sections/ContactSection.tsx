import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send } from 'lucide-react';
import SuccessMessage from '@/components/ui/success-message';
import { useState } from 'react';
import { submitContactForm, ContactFormData } from '@/lib/formService';

const ContactSection = () => {
  // Form state management
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  // Input handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Form submission logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSent(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "support@shaithilyog.tech",
      description: "Get in touch with our healthcare team"
    },
    {
      icon: MapPin,
      title: "Website",
      value: "shaithilyog.tech",
      description: "Visit our online platform"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <span className="text-gradient">Connect</span> With Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to be part of the healthcare revolution? Let's discuss how we can 
            help you take control of your health and wellbeing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-3 lg:mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 lg:mb-8">
                Whether you're a researcher, healthcare professional, or innovator, 
                we're excited to explore collaboration opportunities and share our vision 
                for the future of healthcare.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-3 sm:space-x-4 group"
                >
                  <div className="p-2.5 sm:p-3 bg-gradient-primary rounded-lg shadow-glow group-hover:shadow-neural transition-all duration-300">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">{info.title}</h4>
                    <p className="text-primary font-medium text-sm sm:text-base">{info.value}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Research Partnership CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-neural">
                <h4 className="font-bold text-gradient mb-2">Research Partnership</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  Interested in collaborative research opportunities? 
                  Let's explore how we can advance healthcare together.
                </p>
                <Button variant="innovation" size="sm">
                  Learn More
                </Button>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-4 sm:p-6 lg:p-8 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                    {error}
                  </div>
                )}
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name" 
                    className="bg-background/50 border-primary/20 focus:border-primary/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.tech" 
                    className="bg-background/50 border-primary/20 focus:border-primary/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?" 
                    className="bg-background/50 border-primary/20 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your research interests or collaboration ideas..."
                    rows={4}
                    className="bg-background/50 border-primary/20 focus:border-primary/50 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* Success Message Modal */}
      {isSent && (
        <SuccessMessage
          title="Message Sent!"
          message="Thank you for reaching out! We've received your message."
          onClose={() => setIsSent(false)}
        />
      )}
    </section>
  );
};

export default ContactSection;