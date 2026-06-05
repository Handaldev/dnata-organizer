'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  alt: string
  autoSlideInterval?: number // in milliseconds
  cooldownDuration?: number // in milliseconds (after manual click)
  className?: string
  showControls?: boolean
}

export function ImageCarousel({
  images,
  alt,
  autoSlideInterval = 5000,
  cooldownDuration = 4000,
  className = '',
  showControls = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOnCooldown, setIsOnCooldown] = useState(false)
  const cooldownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-slide effect
  useEffect(() => {
    if (isOnCooldown) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [images.length, autoSlideInterval, isOnCooldown])

  // Cleanup cooldown timeout on unmount
  useEffect(() => {
    return () => {
      if (cooldownTimeoutRef.current) {
        clearTimeout(cooldownTimeoutRef.current)
      }
    }
  }, [])

  const startCooldown = () => {
    setIsOnCooldown(true)
    if (cooldownTimeoutRef.current) {
      clearTimeout(cooldownTimeoutRef.current)
    }
    cooldownTimeoutRef.current = setTimeout(() => {
      setIsOnCooldown(false)
    }, cooldownDuration)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
    startCooldown()
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    startCooldown()
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    startCooldown()
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main image */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image}
              alt={`${alt} - slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === currentIndex}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      {showControls && (
        <>
          {/* Previous button */}
          <button
            onClick={goToPrevious}
            disabled={isOnCooldown}
            aria-label="Gambar sebelumnya"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} className="text-[#1B3A2E]" />
          </button>

          {/* Next button */}
          <button
            onClick={goToNext}
            disabled={isOnCooldown}
            aria-label="Gambar selanjutnya"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} className="text-[#1B3A2E]" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isOnCooldown}
                aria-label={`Ke slide ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${index === currentIndex
                  ? 'bg-[#C8A96E] w-6'
                  : 'bg-white/60 hover:bg-white'
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
