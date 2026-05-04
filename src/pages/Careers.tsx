import { motion } from 'framer-motion';
import { ArrowRight, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Careers = () => {
  const handleSayHi = () => {
    const subject = encodeURIComponent('Future hiring — keep me in mind');
    const body = encodeURIComponent(
      `Hi —\n\nI'd like to be on the list for when Shaithilyog Labs starts hiring. Here's a bit about me:\n\n[Background and what you've shipped]\n\n[What roles or kinds of problems you'd want to work on]\n\n[How to reach you]\n\nThanks,\n`,
    );
    const mailto = `mailto:hello@shaithilyog.tech?subject=${subject}&body=${body}`;
    try {
      window.location.href = mailto;
    } catch {
      navigator.clipboard?.writeText('hello@shaithilyog.tech');
      alert('Send a note to hello@shaithilyog.tech (address copied to clipboard).');
    }
  };

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
              Working at Shaithilyog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Honest answer: <strong>Shaithilyog Labs is one person right now.</strong> No team
              page yet. No open roles. No fake job listings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-primary/20">
              <CardContent className="p-8 space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  We'd rather show what we've shipped than describe a team that doesn't exist.
                  Our first product —{' '}
                  <a
                    href="https://kavach.shaithilyog.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    Kavach
                  </a>{' '}
                  — went live in early access in 2026. The next ones are in research.
                </p>
                <p>
                  When real roles open — likely a medical co-founder first, then ML and design —
                  we'll post them here with honest scope, comp, and equity. Until then, this page
                  exists mainly to be honest with you.
                </p>
                <p>
                  If you do this kind of work and want to be on the list when we start hiring,
                  send a note. We read every one.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="w-5 h-5" />
                  <h3 className="font-semibold">Get in touch</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Want to be on the list when we hire?
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSayHi}
                  className="mt-2 group"
                >
                  Say hi
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-secondary">
                  <Clock className="w-5 h-5" />
                  <h3 className="font-semibold">Track us</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Watch what we ship instead of what we promise.
                </p>
                <Link to="/products">
                  <Button variant="outline" size="sm" className="mt-2 group">
                    See our products
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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
