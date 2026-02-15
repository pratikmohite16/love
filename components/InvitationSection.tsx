'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function InvitationSection() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Text */}
        <motion.div
          className="space-y-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-3xl md:text-5xl font-serif text-offwhite leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            This isn't a grand gesture.
          </motion.p>

          <motion.p
            className="text-3xl md:text-5xl font-serif text-offwhite leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            It's just something beautiful.
          </motion.p>

          <motion.p
            className="text-4xl md:text-6xl font-serif text-gold leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Like you.
          </motion.p>

          {/* Divider */}
          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-12"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-2xl md:text-4xl font-light text-offwhite/90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            If altitude ever feels lonely,
          </motion.p>

          <motion.p
            className="text-2xl md:text-4xl font-light text-rose leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            viewport={{ once: true }}
          >
            I'd still prefer coffee somewhere closer to earth.
          </motion.p>
        </motion.div>

        {/* Interactive Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setRevealed(!revealed)}
            className="relative px-16 py-5 text-xl font-medium text-midnight bg-gold rounded-full overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Maybe Coffee?</span>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold via-white to-gold"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />

            {/* Permanent Glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.4)',
                  '0 0 40px rgba(212, 175, 55, 0.8)',
                  '0 0 20px rgba(212, 175, 55, 0.4)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>

        {/* Hidden Message Reveal */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              className="mt-12 glass rounded-3xl p-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-script text-gold leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                I promise I'm better in person.
              </motion.p>

              {/* Sparkle Effects */}
              <div className="relative mt-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gold rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background Ambient Light */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose/10 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </section>
  )
}
