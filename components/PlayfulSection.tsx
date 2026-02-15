'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PlayfulSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Circular Image with Glow */}
        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold shadow-2xl">
            <Image
              src="/love/image3.jpeg"
              alt="When you care"
              fill
              className="object-cover"
            />
          </div>

          {/* Animated Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-gold"
            animate={{
              boxShadow: [
                '0 0 20px rgba(212, 175, 55, 0.3)',
                '0 0 60px rgba(212, 175, 55, 0.8)',
                '0 0 20px rgba(212, 175, 55, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold rounded-full"
              style={{
                top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>

        {/* Text Content */}
        <div className="space-y-8">
          <motion.p
            className="text-4xl md:text-6xl font-serif text-rose leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Non-chalant?
          </motion.p>

          <motion.p
            className="text-3xl md:text-5xl font-light text-offwhite/80 italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Maybe.
          </motion.p>

          <motion.div
            className="pt-8 space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-5xl font-serif text-offwhite leading-relaxed">
              But I've seen the way you light up
            </p>
            <p className="text-4xl md:text-6xl font-serif text-gold leading-relaxed">
              when you truly care.
            </p>

            {/* Decorative Underline */}
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.3 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        {/* Background Accent */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
    </section>
  )
}
