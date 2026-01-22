'use client'

import { Phone, Calendar, Clock, Repeat, Calculator } from 'lucide-react'

const iconMap = {
  Phone,
  Calendar,
  Clock,
  Repeat,
  Calculator
}

export default function PainPoints({ industry }) {
  return (
    <section className="py-20 px-6 md:px-8 bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className={`${industry.colorClass} text-sm font-medium tracking-wider uppercase`}>
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            The Revenue Leaks Costing You Thousands
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Every day, these issues drain money from your business. Let's plug the leaks.
          </p>
        </div>
        
        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {industry.painPoints.map((pain, idx) => {
            const Icon = iconMap[pain.icon] || Phone
            return (
              <div 
                key={idx}
                className={`p-6 bg-slate-800 rounded-xl border ${industry.borderClass} hover:border-opacity-100 transition-all duration-300`}
              >
                <div className={`w-14 h-14 ${industry.bgClass} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${industry.colorClass}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{pain.title}</h3>
                <p className="text-gray-400 leading-relaxed">{pain.description}</p>
              </div>
            )
          })}
        </div>
        
        {/* Stats row */}
        {industry.stats && (
          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className={`text-2xl md:text-3xl font-bold ${industry.colorClass}`}>
                {industry.stats.avgResponseTime}
              </div>
              <div className="text-sm text-gray-500 mt-1">Avg. Response Time</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-2xl md:text-3xl font-bold text-red-400">
                {industry.stats.missedCallRate}
              </div>
              <div className="text-sm text-gray-500 mt-1">Calls Missed</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                {industry.stats.followUpRate}
              </div>
              <div className="text-sm text-gray-500 mt-1">Follow-Up Rate</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}