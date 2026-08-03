"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  driveUrl: string;
}

export function VideoModal({ isOpen, onClose, driveUrl }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-charcoal-950/90 backdrop-blur-md"
            onClick={onClose}
          />
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] p-2 text-ivory-100/70 hover:text-gold-500 transition-colors bg-charcoal-900/50 rounded-full hover:bg-charcoal-900"
          >
            <X size={28} />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl w-[90vw] bg-charcoal-900 rounded-lg shadow-2xl overflow-hidden border border-charcoal-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="video-wrapper relative w-full aspect-video">
              {driveUrl && (
                <iframe 
                  src={driveUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
