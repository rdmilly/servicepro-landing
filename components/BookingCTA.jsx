'use client'

import { ArrowRight, Clock, Shield, Zap } from 'lucide-react'

export default function BookingCTA({ prospect, industry }) {
  const tidycalUrl = process.env.NEXT_PUBLIC_TIDYCAL_URL || 'https://tidycal.com/revenuefirst/discovery'
  
  return (
    <section className="py-24 px-6 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-emerald-400 font-medium">
            Limited spots available this week
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Stop the Leak, {prospect.firstName}?
        </h2>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Let's talk about how {prospect.companyName} can capture every lead and close more jobs—without hiring more staff.
        </p>
        
        {/* CTA Button */}
        <a
          href={tidycalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3 px-10 py-5 ${industry.accentClass} hover:opacity-90 text-white font-semibold rounded-xl transition-all text-xl shadow-lg shadow-emerald-500/20`}
        >
          Book Your Free Strategy Call
          <ArrowRight className="w-6 h-6" />
        </a>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>15 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>No obligation</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Get a custom action plan</span>
          </div>
        </div>
        
        {/* Embedded calendar option */}
        <div className="mt-16 p-8 bg-slate-800 rounded-2xl border border-slate-700">
          <h3 className="text-lg font-semibold mb-4">Or Pick a Time Now</h3>
          <p className="text-gray-400 text-sm mb-6">
            Choose a 15-minute slot that works for your schedule
          </p>
          
          {/* TidyCal embed placeholder - will be replaced with actual embed */}
          <div 
            className="bg-slate-900 rounded-xl p-8 border border-slate-600 min-h-[300px] flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-gray-400 mb-4">Calendar loads here</p>
              <a
                href={tidycalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                Open booking page →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}