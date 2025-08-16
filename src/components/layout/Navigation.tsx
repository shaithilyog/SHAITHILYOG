import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Learn More', href: '/learn-more' },
    { label: 'Contact', href: '/contact-us' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-primary/20 shadow-neural' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow relative">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-background absolute" />
              <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-background/70 absolute top-1 right-1" />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg sm:text-xl font-bold text-gradient">ShaithilYog</div>
              <div className="text-xs text-muted-foreground">Healthcare Technology</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div key={index} whileHover={{ y: -2 }}>
                <Link
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link to="/join-the-future">
              <Button variant="neural" size="sm">
                Join the Future
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button variant="hero" size="sm">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-card border border-primary/20 shadow-neural"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3 border-t border-primary/20">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-1 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="pt-3 space-y-2">
              <Link to="/join-the-future">
                <Button variant="neural" size="sm" className="w-full">
                  Join the Future
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button variant="hero" size="sm" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;