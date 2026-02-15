'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [stars, setStars] = useState<Array<{ left: string; top: string; delay: number }>>([])

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 4,
    }))
    setStars(generatedStars)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.querySelector('#showcase')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: star.left, top: star.top }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + star.delay,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/50 to-midnight" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Some People Were Never Meant To Live
          <br />
          <span className="relative inline-block mt-4">
            At Sea Level
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl font-light text-offwhite/90 mt-12 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          You clearly belong{' '}
          <span className="font-script text-gold text-3xl md:text-4xl">above the clouds</span>
        </motion.p>

        <motion.button
          onClick={scrollToNext}
          className="group relative px-12 py-4 text-lg font-medium text-gold border-2 border-gold rounded-full hover:bg-gold hover:text-midnight transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore
          <motion.span
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                '0 0 0px rgba(212, 175, 55, 0)',
                '0 0 20px rgba(212, 175, 55, 0.5)',
                '0 0 0px rgba(212, 175, 55, 0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-gold rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
