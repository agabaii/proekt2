import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles.css';

// Import videos
import video1 from "../assets/video1.MOV";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.MOV";
import video4 from "../assets/video4.MOV";

const VideosComponent = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);
  
  const videos = [
    { id: 1, src: video1, title: "Мой творческий процесс", description: "Как рождаются идеи" },
    { id: 2, src: video2, title: "Главный влог", description: "История моей повседневной жизни" },
    { id: 3, src: video3, title: "Путешествия", description: "Моменты из поездок" },
    { id: 4, src: video4, title: "Размышления", description: "Мысли вслух" }
  ];

  const mainVideo = videos[1]; // Главный видео влог
  const otherVideos = videos.filter(v => v.id !== 2);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Slow continuous horizontal scroll effect
  useEffect(() => {
    if (!sliderRef.current) return;
    
    let scrollPos = 0;
    const speed = 0.2;
    const sliderWidth = sliderRef.current.scrollWidth;
    const viewportWidth = sliderRef.current.offsetWidth;
    
    const scrollInfinitely = () => {
      if (!sliderRef.current) return;
      
      scrollPos += speed;
      if (scrollPos >= sliderWidth - viewportWidth) {
        scrollPos = 0;
      }
      
      sliderRef.current.scrollLeft = scrollPos;
      requestAnimationFrame(scrollInfinitely);
    };
    
    const animation = requestAnimationFrame(scrollInfinitely);
    
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section id="videos-section" className="videos-section animate-section">
      <motion.div
        className="videos-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>#ВЛОГИ</h2>
        
        {/* Главное видео */}
        <motion.div 
          className="main-video-container"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="main-video" onClick={() => openModal(mainVideo)}>
            <video
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={mainVideo.src} type="video/mp4" />
            </video>
            <div className="video-info">
              <h3>{mainVideo.title}</h3>
              <p>{mainVideo.description}</p>
              <div className="play-button">
                <svg width="80" height="80" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8 5.14v14l11-7-11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Нижние видео (бесконечная карусель) */}
        <div className="bottom-videos-title">
          <h3>Другие видео</h3>
        </div>
        
        <div className="bottom-videos-container">
          <div className="bottom-videos-scroll" ref={sliderRef}>
            {/* Duplicate videos for seamless loop */}
            {[...otherVideos, ...otherVideos].map((video, index) => (
              <motion.div 
                key={index} 
                className="video-card"
                whileHover={{ scale: 1.05 }}
                onClick={() => openModal(video)}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="video-card-info">
                  <h4>{video.title}</h4>
                  <div className="play-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-video-container">
              <video controls autoPlay>
                <source src={selectedVideo.src} type="video/mp4" />
              </video>
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideosComponent;