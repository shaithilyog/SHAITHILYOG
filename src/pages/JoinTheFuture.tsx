import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Send, Users, Lightbulb, Heart } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SuccessMessage from '@/components/ui/success-message';
import { useState } from 'react';
import { submitJoinForm, JoinFormData } from '@/lib/formService';

const JoinTheFuture = () => {
  // Form state management
  const [formData, setFormData] = useState<JoinFormData>({
    name: '',
    email: '',
    profession: '',
    interest: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  // Enhanced input handler for all input types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Checkbox handler (for better type safety)
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prevState => ({
      ...prevState,
      newsletter: checked
    }));
  };

  // Form submission logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await submitJoinForm(formData);
      setFormData({
        name: '',
        email: '',
        profession: '',
        interest: '',
        newsletter: false
      });
      setIsSent(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <span className="text-gradient">Join the Future</span> of Healthcare
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
              Be part of the healthcare revolution. Connect with us to explore opportunities, 
              share your expertise, and help shape the future of personalized healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
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
              Why <span className="text-gradient">Join Us?</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Together, we're building a healthcare ecosystem that puts patients first
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full p-6 lg:p-8 shadow-card hover:shadow-neural transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Users className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-3">Collaborative Innovation</h3>
                <p className="text-muted-foreground">
                  Work with leading healthcare professionals and technology experts to create 
                  breakthrough solutions that make a real difference.
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
                  <Lightbulb className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cutting-Edge Technology</h3>
                <p className="text-muted-foreground">
                  Access to the latest AI, blockchain, and IoT technologies to build 
                  next-generation healthcare solutions.
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
                  <Heart className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-3">Impact Lives</h3>
                <p className="text-muted-foreground">
                  Make a meaningful impact by helping millions of people take control 
                  of their health and wellbeing.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Form Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 lg:space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-bold">
                  Ready to <span className="text-gradient">Get Started?</span>
                </h3>
                <p className="text-muted-foreground text-lg">
                  Fill out the form to join our community of healthcare innovators. 
                  Whether you're a healthcare professional, technology expert, or 
                  someone passionate about improving healthcare, we want to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">
                  What happens next?
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>We'll review your application and interests</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>You'll receive updates about relevant opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Connect with our team and community members</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Start collaborating on innovative healthcare solutions</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Join Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 lg:p-8 shadow-neural border-primary/20 bg-card/50 backdrop-blur-sm">
                <h4 className="text-2xl font-bold mb-6 text-center">Join Our Community</h4>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                      {error}
                    </div>
                  )}
                  
                  <div className="space-y-4">
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
                        placeholder="your.email@example.tech" 
                        className="border-primary/20 focus:border-primary/50"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Profession
                      </label>
                      <Input 
                        name="profession"
                        value={formData.profession}
                        onChange={handleInputChange}
                        placeholder="Your profession or field of expertise" 
                        className="border-primary/20 focus:border-primary/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Interest/Area of Interest
                      </label>
                      <Textarea 
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        placeholder="Tell us about your interests and how you'd like to contribute..." 
                        rows={4}
                        className="border-primary/20 focus:border-primary/50 resize-none"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <label 
                        htmlFor="newsletter" 
                        className="text-sm text-muted-foreground cursor-pointer"
                      >
                        Subscribe to our newsletter for updates and opportunities
                      </label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full group" 
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Joining...' : 'Join the Future'}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By joining, you agree to our terms and confirm you are 18+ years old. 
                    Your data will be handled according to our privacy policy.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Success Message Modal */}
      {isSent && (
        <SuccessMessage
          title="Welcome Aboard!"
          message="Thank you for joining our community! We're excited to have you with us on this journey to revolutionize healthcare. You'll receive updates about opportunities and developments soon."
          onClose={() => setIsSent(false)}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default JoinTheFuture;
