'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function StorySection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const lines = [
    'You move between cities.',
    'Between skies.',
    'Between worlds.',
    'And somehow,',
    'you still act like none of it impresses you.',
  ]

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/95 to-midnight" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        style={{ scale, opacity }}
      >
        <div className="relative">
          {/* Image Container */}
          <motion.div
            className="relative w-full max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/love/image2.jpeg"
                alt="Between worlds"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
            </div>

            {/* Floating Light Effect */}
            <motion.div
              className="absolute top-1/4 right-0 w-64 h-64 bg-rose/20 rounded-full blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.div>

          {/* Animated Text Lines */}
          <div className="space-y-4 text-center">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                className={`font-serif ${
                  index === lines.length - 1
                    ? 'text-2xl md:text-4xl text-gold'
                    : 'text-3xl md:text-5xl text-offwhite'
                } leading-relaxed`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                }}
                viewport={{ once: true }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="mt-12 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gold rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
