import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, X } from 'lucide-react';

interface SuccessMessageProps {
  title: string;
  message: string;
  onClose: () => void;
}

const SuccessMessage = ({ title, message, onClose }: SuccessMessageProps) => {
  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-card border border-primary/20 rounded-lg p-8 text-center max-w-md mx-4 shadow-neural"
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-foreground">{title}</h2>
          <p className="mb-6 text-muted-foreground leading-relaxed">{message}</p>
          
          <div className="flex justify-center gap-4">
            <Button 
              onClick={onClose}
              variant="hero"
              className="px-6"
            >
              Continue
            </Button>
          </div>
        </motion.div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SuccessMessage;
