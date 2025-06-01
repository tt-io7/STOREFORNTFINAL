"use client"

import React, { useState, useEffect } from "react"

// Array of slide images - update these paths to match your actual image files
const slideImages = [
  "/images/slideshow/slide1.jpg",
  "/images/slideshow/slide2.jpg", 
  "/images/slideshow/slide3.jpg",
  "/images/slideshow/slide4.jpg"
]

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slideImages.length)
        setIsTransitioning(false)
      }, 500) // Match this to the CSS transition duration
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentSlide])

  // Manual navigation functions
  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 500)
  }

  const goToPrevSlide = () => {
    goToSlide(currentSlide === 0 ? slideImages.length - 1 : currentSlide - 1)
  }

  const goToNextSlide = () => {
    goToSlide((currentSlide + 1) % slideImages.length)
  }

  return (
    <div className="h-full relative">
      {/* Main slide image */}
      <div 
        className={`bg-cover bg-center h-full w-full transition-opacity duration-500 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`} 
        style={{ backgroundImage: `url(${slideImages[currentSlide]})` }}
      />

      {/* Navigation controls */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous/Next buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all duration-300"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </div>
  )
}

export default HeroSlideshow 