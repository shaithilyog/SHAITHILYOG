import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene3D from '@/components/3d/Scene3D';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D className="w-full h-full" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 lg:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Shaithilyog</span>
                <br />
                <span className="text-foreground">Labs</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                We build careful, evidence-grounded AI tools for the people big tech ignores —
                <span className="text-primary font-semibold"> caregivers, patients, and families</span>{' '}
                navigating
                <span className="text-secondary font-semibold"> the healthcare system</span>.
                Our first product is live.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start"
            >
              <a href="https://kavach.shaithilyog.tech" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                  Try Kavach
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <Link to="/products">
                <Button variant="neural" size="lg" className="group w-full sm:w-auto">
                  <Play className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  See what we're building
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 lg:pt-8 max-w-sm mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">1</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Product live</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">$0</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Outside funding</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">NYC</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Building solo</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-64 sm:h-80 lg:h-[600px] rounded-2xl overflow-hidden shadow-neural order-first lg:order-last"
          >
            <Scene3D className="w-full h-full" />
            
            {/* Floating Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-2 sm:p-4 shadow-neural"
            >
              <div className="text-xs sm:text-sm font-semibold text-primary">Live: Kavach</div>
              <div className="text-xs text-muted-foreground hidden sm:block">AI care brief for caregivers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-card/80 backdrop-blur-sm border border-secondary/20 rounded-lg p-2 sm:p-4 shadow-neural"
            >
              <div className="text-xs sm:text-sm font-semibold text-secondary">Building in public</div>
              <div className="text-xs text-muted-foreground hidden sm:block">More products on the way</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;