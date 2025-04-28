import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles.css";

// Import your images
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import image15 from "../assets/image15.jpg";
import image16 from "../assets/image16.jpeg";
import image17 from "../assets/image17.jpeg";
import image18 from "../assets/image18.jpeg";
import image19 from "../assets/image19.jpeg";
import image20 from "../assets/image20.jpeg";
import image21 from "../assets/image21.jpeg";

const images = [
  { src: image1, size: "large", category: "work" },
  { src: image2, size: "small", category: "chill" },
  { src: image3, size: "small", category: "flowers" },
  { src: image4, size: "large", category: "fam" },
  { src: image5, size: "small", category: "work" },
  { src: image6, size: "large", category: "flowers" },
  { src: image7, size: "small", category: "chill" },
  { src: image8, size: "large", category: "flowers" },
  { src: image9, size: "large", category: "flowers" },
  { src: image10, size: "small", category: "fam" },
  { src: image11, size: "large", category: "work" },
  { src: image12, size: "large", category: "подарили квартиру" },
  { src: image13, size: "small", category: "flowers" },
  { src: image14, size: "large", category: "chill" },
  { src: image15, size: "small", category: "work" },
  { src: image16, size: "large", category: "flowers" },
  { src: image17, size: "large", category: "work" },
  { src: image18, size: "small", category: "flowers" },
  { src: image19, size: "large", category: "work" },
  { src: image20, size: "small", category: "flowers" },
  { src: image21, size: "small", category: "chill" },
];

const Moments = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="Moments" className="moments-section animate-section">
      <motion.div 
        className="moments-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>#MOMENTS</h2>
        <div className="moments-filters">
          <button 
            className={filter === "all" ? "active" : ""} 
            onClick={() => setFilter("all")}
          >
            Все
          </button>
          <button 
            className={filter === "fam" ? "active" : ""} 
            onClick={() => setFilter("fam")}
          >
            Семья
          </button>
          <button 
            className={filter === "work" ? "active" : ""} 
            onClick={() => setFilter("work")}
          >
            На работе
          </button>
          <button 
            className={filter === "flowers" ? "active" : ""} 
            onClick={() => setFilter("flowers")}
          >
            Цветочки
          </button>
          <button 
            className={filter === "chill" ? "active" : ""} 
            onClick={() => setFilter("chill")}
          >
            Просто
          </button>
        </div>
      </motion.div>

      <motion.div 
        className="moments-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
      >
        {filteredImages.map((img, index) => (
          <motion.div 
            key={index} 
            className={`moment-container ${img.size}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => openLightbox(img)}
          >
            <div className="moment-overlay">
              <span>{img.category}</span>
            </div>
            <img src={img.src} alt={`moment-${index}`} className="moment-image" />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>×</button>
              <img src={selectedImage.src} alt="Selected moment" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Moments;