'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import VideoSection from '@/components/VideoSection'
import RevenueCalculator from '@/components/RevenueCalculator'
import SocialProof from '@/components/SocialProof'
import BookingCTA from '@/components/BookingCTA'
import Footer from '@/components/Footer'
import { getIndustryContent } from '@/lib/industry-content'

function WelcomeContent() {
  const searchParams = useSearchParams()
  
  // Get personalization from URL params
  const firstName = searchParams.get('name') || searchParams.get('first_name') || 'there'
  const companyName = searchParams.get('company') || searchParams.get('company_name') || 'your company'
  const industryKey = searchParams.get('industry') || 'default'
  const painPoint = searchParams.get('pain') || searchParams.get('pain_point') || null
  const videoUrl = searchParams.get('video') || searchParams.get('video_url') || null
  
  // Get industry-specific content
  const industry = getIndustryContent(industryKey)
  
  const prospect = {
    firstName,
    companyName,
    industry: industryKey,
    painPoint,
    videoUrl
  }
  
  return (
    <main className="min-h-screen">
      <Hero prospect={prospect} industry={industry} />
      <PainPoints industry={industry} />
      {videoUrl && <VideoSection videoUrl={videoUrl} prospect={prospect} />}
      <RevenueCalculator industry={industry} companyName={companyName} />
      <SocialProof industry={industry} />
      <BookingCTA prospect={prospect} industry={industry} />
      <Footer />
    </main>
  )
}

export default function WelcomePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-emerald-500">Loading...</div>
      </div>
    }>
      <WelcomeContent />
    </Suspense>
  )
}