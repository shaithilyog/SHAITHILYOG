import { motion } from 'framer-motion';
import { ArrowRight, Mail, FlaskConical, Stethoscope, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Careers = () => {
  const handleSayHi = () => {
    const subject = encodeURIComponent('Working with Shaithilyog Labs');
    const body = encodeURIComponent(
      `Hi —\n\nI'd like to be on the list when Shaithilyog Labs starts hiring.\n\n[A bit about you and what you've shipped]\n\n[Which of the rough roles below interests you, or something else]\n\n[How to reach you]\n\nThanks,\n`,
    );
    const mailto = `mailto:hello@shaithilyog.tech?subject=${subject}&body=${body}`;
    try {
      window.location.href = mailto;
    } catch {
      navigator.clipboard?.writeText('hello@shaithilyog.tech');
      alert('Send a note to hello@shaithilyog.tech (address copied to clipboard).');
    }
  };

  const futureRoles = [
    {
      icon: Stethoscope,
      title: 'Medical Co-founder',
      summary: 'MD or PhD-MD with a clinical practice and an opinion about where AI helps and where it doesn\'t. The first hire — and a meaningful equity stake.',
    },
    {
      icon: Code2,
      title: 'ML Engineer',
      summary: 'You ship medical-grade AI without hand-waving. Strong at LLM evals, retrieval, prompt engineering, and treating "no hallucination" as a real engineering target.',
    },
    {
      icon: FlaskConical,
      title: 'Research Partner',
      summary: 'Clinician or researcher who wants to publish, build datasets, or evaluate our open-source tooling on real questions. Part-time, paid in honoraria + equity.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Working with us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Shaithilyog Labs is small and deliberate. We are not actively hiring today,
              but we know what the first three roles will be. If you do this kind of work
              well, get on the list — we'd rather know you in advance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roles we're building toward */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {futureRoles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-glow flex items-center justify-center">
                      <role.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{role.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {role.summary}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-primary/20">
              <CardContent className="p-8 text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gradient">
                  Send a note now, hear from us when there's a real role
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  We&apos;d rather get to know good people early than scramble through cold
                  applications later. Tell us what you&apos;ve shipped and what you&apos;d want to build.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button onClick={handleSayHi} size="lg" className="group">
                    <Mail className="mr-2 w-4 h-4" />
                    Get on the list
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Link to="/products">
                    <Button variant="outline" size="lg" className="w-full">
                      See what we ship
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
