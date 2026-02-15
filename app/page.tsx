'use client'

import StardustBackground from '@/components/StardustBackground'
import HeroSection from '@/components/HeroSection'
import ImageShowcase from '@/components/ImageShowcase'
import StorySection from '@/components/StorySection'
import PlayfulSection from '@/components/PlayfulSection'
import InvitationSection from '@/components/InvitationSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <StardustBackground />
      <main className="relative z-10">
        <HeroSection />
        <ImageShowcase />
        <StorySection />
        <PlayfulSection />
        <InvitationSection />
        <Footer />
      </main>
    </>
  )
}
