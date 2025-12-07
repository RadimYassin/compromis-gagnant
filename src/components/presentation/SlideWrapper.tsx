import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

const SlideWrapper = ({ children, className = '' }: SlideWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`slide-container ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default SlideWrapper;
