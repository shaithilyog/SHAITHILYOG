import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SuccessMessage from '@/components/ui/success-message';
import { useState } from 'react';
import { submitContactForm, ContactFormData } from '@/lib/formService';

const ContactUs = () => {
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
      value: "support@shaithilyog.live",
      description: "Get in touch with our healthcare team"
    },
    {
      icon: MapPin,
      title: "Website",
      value: "shaithilyog.live",
      description: "Visit our online platform"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
              <span className="text-gradient">Contact</span> Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Ready to be part of the healthcare revolution? Let's discuss how we can 
              help you take control of your health and wellbeing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground">
                  We're here to help you on your healthcare journey. Reach out to us 
                  and let's create a healthier future together.
                </p>
              </div>

              <div className="space-y-4 lg:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-primary font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-6 lg:p-8 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Name *
                        </label>
                        <Input 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name" 
                          className="border-primary/20 focus:border-primary/50"
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
                          placeholder="your.email@example.live" 
                          className="border-primary/20 focus:border-primary/50"
                          required
                        />
                      </div>
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
                        className="border-primary/20 focus:border-primary/50"
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
                        placeholder="Tell us how we can help you..." 
                        rows={6}
                        className="border-primary/20 focus:border-primary/50 resize-none"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full group" 
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Success Message Modal */}
      {isSent && (
        <SuccessMessage
          title="Message Sent!"
          message="Thank you for reaching out! We've received your message and will get back to you within 24 hours."
          onClose={() => setIsSent(false)}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default ContactUs;
