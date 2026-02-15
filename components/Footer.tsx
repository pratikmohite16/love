'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-20 px-4 border-t border-gold/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Text */}
        <motion.div
          className="space-y-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-2xl md:text-3xl font-serif text-offwhite/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Built at ground level.
          </motion.p>

          <motion.p
            className="text-2xl md:text-3xl font-serif text-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Inspired by altitude.
          </motion.p>
        </motion.div>

        {/* Animated Heart */}
        <motion.div
          className="flex justify-center items-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-3 h-3 bg-rose rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#CFA5A5"
              initial={{ pathLength: 0, fill: 'rgba(207, 165, 165, 0)' }}
              animate={{
                pathLength: 1,
                fill: 'rgba(207, 165, 165, 1)',
              }}
              transition={{ duration: 2, delay: 0.8 }}
            />
          </motion.svg>

          <motion.div
            className="w-3 h-3 bg-rose rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.75,
            }}
          />
        </motion.div>

        {/* Subtle Copyright */}
        <motion.p
          className="text-sm text-offwhite/30 mt-12 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          {new Date().getFullYear()} • Crafted with intention
        </motion.p>

        {/* Background Glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-gold/5 rounded-full blur-3xl -z-10"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </footer>
  )
}
