'use client'

import { CheckCircle, Quote } from 'lucide-react'

const features = [
  "Respond to leads in under 60 seconds—24/7",
  "Automated follow-up sequences that never forget",
  "Smart lead qualification before you call back",
  "Real-time pipeline visibility on your phone",
  "Integration with your existing tools",
  "No long-term contracts—cancel anytime"
]

export default function SocialProof({ industry }) {
  const { testimonial } = industry
  
  return (
    <section className="py-20 px-6 md:px-8 bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Features list */}
          <div>
            <span className={`${industry.colorClass} text-sm font-medium tracking-wider uppercase`}>
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
              AI-Powered Sales Automation
            </h2>
            
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className={`w-5 h-5 ${industry.colorClass} mt-0.5 flex-shrink-0`} />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs text-gray-400"
                  >
                    {i === 1 && '👨'}
                    {i === 2 && '👩'}
                    {i === 3 && '👨‍🦲'}
                    {i === 4 && '👩‍🦰'}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="text-white font-medium">50+ service businesses</span>
                <span className="text-gray-500"> trust RevenueFirst.AI</span>
              </div>
            </div>
          </div>
          
          {/* Testimonial card */}
          <div className={`p-8 bg-slate-800 rounded-2xl border ${industry.borderClass}`}>
            <div className={`w-14 h-14 ${industry.bgClass} rounded-full flex items-center justify-center mb-6`}>
              <Quote className={`w-7 h-7 ${industry.colorClass}`} />
            </div>
            
            <blockquote className="text-xl leading-relaxed mb-6">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${industry.bgClass} rounded-full flex items-center justify-center`}>
                <span className="text-lg">{industry.icon}</span>
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}