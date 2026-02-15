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
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.h1
          className="font-elegant text-5xl md:text-7xl lg:text-9xl font-bold mb-8 leading-tight text-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Some People Were Never Meant To Live
          <br />
          <span className="relative inline-block mt-6">
            <span className="bg-gradient-to-r from-gold via-lightGold to-gold bg-clip-text text-transparent">
              At Sea Level
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-4xl font-romantic font-light text-offwhite/90 mt-16 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          You clearly belong{' '}
          <span className="font-signature text-gold text-4xl md:text-6xl">above the clouds</span>
        </motion.p>

        <motion.button
          onClick={scrollToNext}
          className="group relative px-16 py-5 text-xl font-romantic font-medium text-midnight bg-gradient-to-r from-gold via-lightGold to-gold rounded-full romantic-glow transition-all duration-300 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Explore the Magic</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
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
