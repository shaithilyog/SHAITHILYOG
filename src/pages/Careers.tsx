import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Users, Building, Heart, Lightbulb, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Careers = () => {
  const scrollToPositions = () => {
    const element = document.getElementById('open-positions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyNow = (position: string) => {
    const subject = encodeURIComponent(`Application for ${position} Position`);
    const body = encodeURIComponent(`Dear Applicant,

Please use the following format for your application:

[Introduction - Brief introduction about yourself]

[Interest - Why you're interested in this specific position]

[Qualifications - Key qualifications and relevant experience]

[Attachment - Mention that resume/portfolio is attached]

[Closing - Professional closing and contact information]

Thank You,
Shaithilyog Team`);
    
    const mailtoLink = `mailto:careers@shaithilyog.live?subject=${subject}&body=${body}`;
    
    try {
      window.location.href = mailtoLink;
    } catch (error) {
      // Fallback: copy email to clipboard and show alert
      navigator.clipboard.writeText('careers@shaithilyog.live').then(() => {
        alert(`Please send your resume to: careers@shaithilyog.live\n\nSubject: Application for ${position} Position\n\n(Email address copied to clipboard)`);
      }).catch(() => {
        alert(`Please send your resume to: careers@shaithilyog.live\n\nSubject: Application for ${position} Position`);
      });
    }
  };

  const handleGeneralApplication = () => {
    const subject = encodeURIComponent('General Application - Shaithilyog');
    const body = encodeURIComponent(`Dear Applicant,

Please use the following format for your general application:

[Introduction - Brief introduction about yourself and your background]

[Interest - Why you're interested in working with Shaithilyog]

[Skills & Experience - Overview of your relevant skills and experience]

[Contribution - How you believe you can contribute to Shaithilyog's mission]

[Availability - Your availability and preferred work arrangement]

[Attachment - Mention that resume/portfolio is attached]

[Closing - Professional closing and contact information]

Thank You,
Shaithilyog Team`);
    
    const mailtoLink = `mailto:careers@shaithilyog.live?subject=${subject}&body=${body}`;
    
    try {
      window.location.href = mailtoLink;
    } catch (error) {
      navigator.clipboard.writeText('careers@shaithilyog.live').then(() => {
        alert(`Please send your resume to: careers@shaithilyog.live\n\nSubject: General Application - Shaithilyog\n\n(Email address copied to clipboard)`);
      }).catch(() => {
        alert(`Please send your resume to: careers@shaithilyog.live\n\nSubject: General Application - Shaithilyog`);
      });
    }
  };

  const openPositions = [
    {
      title: "Senior AI/ML Engineer",
      department: "Research & Development",
      location: "Hybrid",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of AI-powered diagnostic solutions and machine learning algorithms for healthcare applications.",
      requirements: [
        "PhD/MS in Computer Science, AI, or related field",
        "5+ years experience in machine learning and AI",
        "Experience with healthcare data and medical imaging",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Published research in medical AI (preferred)"
      ]
    },
    {
      title: "Biomedical Data Scientist",
      department: "Data Science",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Analyze complex biomedical datasets to extract insights for drug discovery and personalized medicine initiatives.",
      requirements: [
        "PhD in Bioinformatics, Computational Biology, or related field",
        "3+ years experience in biomedical data analysis",
        "Proficiency in R, Python, and statistical analysis",
        "Experience with genomics and proteomics data",
        "Strong publication record in peer-reviewed journals"
      ]
    },
    {
      title: "Healthcare UX Designer",
      department: "Product Design",
      location: "Hybrid",
      type: "Full-time",
      experience: "4+ years",
      description: "Design intuitive and accessible healthcare interfaces that improve patient outcomes and healthcare provider efficiency.",
      requirements: [
        "Bachelor's in Design, HCI, or related field",
        "4+ years UX design experience in healthcare",
        "Expertise in Figma, Sketch, and prototyping tools",
        "Understanding of healthcare workflows and compliance",
        "Portfolio demonstrating healthcare design solutions"
      ]
    },
    {
      title: "Regulatory Affairs Specialist",
      department: "Compliance",
      location: "On-site",
      type: "Full-time",
      experience: "3+ years",
      description: "Ensure all products and research comply with healthcare regulations including FDA, HIPAA, and international standards.",
      requirements: [
        "Bachelor's in Life Sciences, Law, or related field",
        "3+ years regulatory affairs experience in healthcare/biotech",
        "Knowledge of FDA, EMA, and international regulations",
        "Experience with medical device or pharmaceutical regulations",
        "RAC certification preferred"
      ]
    },
    {
      title: "Research Intern",
      department: "Research & Development",
      location: "Hybrid",
      type: "Internship",
      experience: "Student",
      description: "Support cutting-edge research projects in biotechnology and digital health innovation.",
      requirements: [
        "Currently pursuing PhD/MS in relevant field",
        "Strong academic background in biology, computer science, or engineering",
        "Research experience in biotechnology or digital health",
        "Excellent analytical and communication skills",
        "Passion for healthcare innovation"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Lightbulb,
      title: "Innovation Time",
      description: "20% time for personal research projects and innovation initiatives"
    },
    {
      icon: Building,
      title: "Flexible Work",
      description: "Hybrid work options with state-of-the-art lab and office facilities"
    },
    {
      icon: Target,
      title: "Professional Growth",
      description: "Conference attendance, continuing education, and leadership development"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with world-class researchers and healthcare professionals"
    },
    {
      icon: Award,
      title: "Competitive Package",
      description: "Equity participation, performance bonuses, and comprehensive benefits"
    }
  ];

  const coreValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible in healthcare technology"
    },
    {
      title: "Patient-Centric",
      description: "Every decision we make prioritizes patient outcomes and wellbeing"
    },
    {
      title: "Scientific Rigor",
      description: "We maintain the highest standards of research and evidence-based development"
    },
    {
      title: "Collaborative Excellence",
      description: "We believe the best solutions come from diverse, multidisciplinary teams"
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
              Shape the Future of Healthcare
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our mission to revolutionize healthcare through innovative technology, 
              groundbreaking research, and compassionate care. Be part of a team that's 
              making a real difference in people's lives.
            </p>
            <Button size="lg" className="group" onClick={scrollToPositions}>
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape the culture we're building together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-3 text-gradient">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in our team's success with comprehensive benefits and a supportive work environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-glow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore exciting opportunities to make a meaningful impact in healthcare innovation.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Building className="w-3 h-3" />
                            {position.department}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {position.location}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {position.type}
                          </Badge>
                          <Badge variant="outline">
                            {position.experience}
                          </Badge>
                        </div>
                      </div>
                      <Button 
                        className="lg:ml-4 mt-4 lg:mt-0" 
                        onClick={() => handleApplyNow(position.title)}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {position.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Key Requirements:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
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
              Don't See Your Perfect Role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for exceptional talent to join our mission. 
              Send us your resume and tell us how you'd like to contribute to the future of healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" onClick={handleGeneralApplication}>
                Send Us Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" asChild>
                <Link to="/join-the-future">
                  Join Our Community
                  <Users className="ml-2 h-4 w-4" />
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

export default Careers;
