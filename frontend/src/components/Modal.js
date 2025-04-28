// src/components/Modal.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles.css';

const Modal = ({ children, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;