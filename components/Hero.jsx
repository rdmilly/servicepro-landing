'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero({ prospect, industry }) {
  const { firstName, companyName, painPoint } = prospect
  
  return (
    <section className="relative pt-16 pb-20 px-6 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at top, ${industry.color}20 0%, transparent 50%)`
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Industry badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 ${industry.bgClass} ${industry.borderClass} border rounded-full mb-8`}>
          <span className="text-lg">{industry.icon}</span>
          <span className={`text-sm font-medium ${industry.colorClass}`}>
            Built for {industry.name} Companies
          </span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Hey {firstName},{' '}
          <br className="hidden md:block" />
          <span className={industry.colorClass}>{industry.headline}</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-2xl mx-auto">
          {industry.subheadline}
        </p>
        
        {/* Custom pain point if provided */}
        {painPoint && (
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto bg-slate-800/50 rounded-lg p-4 border border-slate-700">
            "…{painPoint}" — Let's fix that.
          </p>
        )}
        
        {/* Company mention */}
        <p className="text-gray-500 mb-10">
          I put together this page specifically for{' '}
          <span className="text-white font-medium">{companyName}</span>{' '}
          to show you exactly how we can help.
        </p>
        
        {/* CTA Button */}
        <a
          href={process.env.NEXT_PUBLIC_TIDYCAL_URL || '#book'}
          className={`inline-flex items-center gap-2 px-8 py-4 ${industry.accentClass} hover:opacity-90 text-white font-semibold rounded-xl transition-all text-lg`}
        >
          Book a 15-Min Strategy Call
          <ArrowRight className="w-5 h-5" />
        </a>
        
        <p className="text-sm text-gray-500 mt-4">
          No obligation • Get a custom action plan
        </p>
      </div>
    </section>
  )
}