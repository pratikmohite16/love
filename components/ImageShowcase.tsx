'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function ImageShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        style={{ opacity }}
      >
        {/* Image with Glass Card */}
        <motion.div
          className="relative group"
          style={{ y }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-3xl p-6 animate-float">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/love/image1.jpeg"
                alt="Grace at altitude"
                width={600}
                height={800}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gold Border Glow */}
              <div className="absolute inset-0 border-4 border-gold/30 rounded-2xl group-hover:border-gold/60 transition-all duration-500" />
            </div>
          </div>

          {/* Floating Accent */}
          <motion.div
            className="absolute -top-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-4xl md:text-6xl font-romantic font-light leading-relaxed text-offwhite/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Independence looks different on different people.
          </motion.p>

          <motion.p
            className="text-4xl md:text-6xl font-romantic leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            On you, it looks like{' '}
            <span className="font-signature text-5xl md:text-7xl bg-gradient-to-r from-gold via-lightGold to-gold bg-clip-text text-transparent relative">
              grace at 30,000 feet
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.p>

          {/* Decorative Quote Mark */}
          <motion.div
            className="text-9xl font-signature text-gold/30 leading-none"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            &ldquo;
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
