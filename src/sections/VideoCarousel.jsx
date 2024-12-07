import React, { useState } from "react";
import { carouselVideos } from "../constants/index.js"; // Import the carousel data

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Track if the video is playing

  // Navigate to the next slide, loop back to the first one when reaching the end
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselVideos.length);
  };

  // Navigate to the previous slide, loop back to the last one when reaching the start
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselVideos.length - 1 : prevIndex - 1
    );
  };

  // Manage play/pause state for the video
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  const { videoId, title, description } = carouselVideos[currentIndex];

  return (
    <section className="c-space my-20" id="blogs">
      <div className="w-full text-white-600">
        <p className="head-text">My Blogs Projects</p>
        <div className="video-carousel-container">
          {/* Video Iframe */}
          <div className="video-carousel-frame sm-custom:h-[70vh] ">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&mute=1`}
              title={title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              onPlay={handlePlay}
              onPause={handlePause}
            ></iframe>
          </div>

          {/* Conditional rendering of the title and description when the video is not playing */}
          {!isPlaying && (     
            <div className="video-carousel-description sm-custom:hidden sm:block mb-11">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p>{description}</p>
            </div>
          )}

          {/* Navigation buttons */}
          <button onClick={prevSlide} className="video-carousel-btn left-0">
            &#9664;
          </button>
          <button onClick={nextSlide} className="video-carousel-btn right-0">
            &#9654;
          </button>

          {/* Carousel Dots for navigation */}
          <div className="video-carousel-dots">
            {carouselVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`video-carousel-dot ${
                  index === currentIndex
                    ? "video-carousel-dot-active"
                    : "video-carousel-dot-inactive"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
