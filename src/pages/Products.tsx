import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Heart,
  Calendar,
  Clock,
  Shield,
  Brain,
  Stethoscope,
  Users,
  Pill,
  HelpCircle,
  Eye,
  AlertTriangle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const products = [
  {
    id: 'kavach',
    name: 'Kavach',
    subtitle: 'An AI care brief for the parent you\'re caring for',
    status: 'Live',
    statusColor: 'bg-emerald-500',
    description:
      'Drop in your loved one\'s after-visit summary, prescription list, or lab report. Kavach reads it, scrubs personal identifiers, and returns a plain-English brief: what the document says, what to ask the doctor, and what to watch for at home. Built for adult children supporting an aging parent.',
    href: 'https://kavach.shaithilyog.tech',
    available: true,
    features: [
      { icon: Stethoscope, title: 'Care brief', desc: 'Plain-English summary of any medical document the caregiver uploads' },
      { icon: Pill, title: 'Medication map', desc: 'What each prescription is for, dose, prescriber, drug interactions to ask about' },
      { icon: Calendar, title: 'Upcoming & follow-ups', desc: 'Lab dates, vaccines due, next appointment with what to prepare' },
      { icon: HelpCircle, title: 'Questions for the doctor', desc: 'Specific, document-grounded questions to bring to the next visit' },
      { icon: Eye, title: 'Watch-for at home', desc: 'Plain-English signs that mean call the doctor (not 911)' },
      { icon: AlertTriangle, title: 'Red-flag escalation', desc: 'Hard handoff to 911 / 988 / Poison Control when warranted' },
      { icon: Shield, title: 'Transient processing', desc: 'Documents are read once and discarded — never stored' },
      { icon: Heart, title: 'Caregiver-first', desc: 'Speaks to you, not to the patient. Built for the adult child role.' },
    ],
    techSpecs: {
      platform: ['Web (mobile-friendly)'],
      ai: ['Gemini 2.5 Flash', 'Server-side PHI redaction', 'Schema-validated output'],
      privacy: ['No PHI storage', '"Informational only" disclosure', 'Crisis resources surfaced'],
    },
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              What we're building
            </h1>
            <p className="text-xl text-muted-foreground mb-2 leading-relaxed">
              Shaithilyog Labs ships one product at a time, and only after it actually works.
            </p>
            <p className="text-base text-muted-foreground/70 leading-relaxed">
              We're a one-person company in NYC. There's one live product today — Kavach — and the
              next ones land here when they're real. No vaporware on this page.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-6">
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
                <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Product Header */}
                    <div className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
                      <div className="flex flex-col gap-6">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                              {product.name}
                            </h2>
                            <Badge className={`${product.statusColor} text-white`}>
                              {product.status}
                            </Badge>
                          </div>
                          <p className="text-lg text-muted-foreground italic mb-4">
                            {product.subtitle}
                          </p>
                          <p className="text-base text-foreground/80 leading-relaxed mb-6 max-w-3xl">
                            {product.description}
                          </p>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <a
                              href={product.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button size="lg" className="group w-full sm:w-auto">
                                Open {product.name}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gradient mb-6">What it does</h3>
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
                        <h4 className="text-lg font-semibold mb-4">Under the hood</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h5 className="font-medium text-primary mb-2">Platform</h5>
                            <div className="flex flex-wrap gap-2">
                              {product.techSpecs.platform.map((p, i) => (
                                <Badge key={i} variant="secondary">{p}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-primary mb-2">AI</h5>
                            <div className="flex flex-wrap gap-2">
                              {product.techSpecs.ai.map((a, i) => (
                                <Badge key={i} variant="secondary" className="bg-gradient-glow text-primary">{a}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-primary mb-2">Privacy</h5>
                            <div className="flex flex-wrap gap-2">
                              {product.techSpecs.privacy.map((p, i) => (
                                <Badge key={i} variant="outline">{p}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Future placeholder card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-dashed border-primary/20 bg-card/30">
                <CardContent className="p-12 text-center">
                  <Clock className="w-10 h-10 mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="text-xl font-bold text-foreground/70 mb-2">More on the way</h3>
                  <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    The next products under the Shaithilyog Labs umbrella are in early research.
                    They'll appear here when they actually exist — not before.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
              Caring for someone right now?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Kavach is free while in early access. Drop in a medical document and see what comes back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://kavach.shaithilyog.tech" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto">
                  Try Kavach now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact-us">
                  Get in touch
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

export default Products;
