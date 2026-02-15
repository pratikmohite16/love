'use client'

import HeroSection from '@/components/HeroSection'
import ImageShowcase from '@/components/ImageShowcase'
import StorySection from '@/components/StorySection'
import PlayfulSection from '@/components/PlayfulSection'
import InvitationSection from '@/components/InvitationSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ImageShowcase />
      <StorySection />
      <PlayfulSection />
      <InvitationSection />
      <Footer />
    </main>
  )
}
