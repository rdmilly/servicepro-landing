'use client'

import { useState, useEffect } from 'react'
import { Calculator, TrendingDown, DollarSign, AlertTriangle } from 'lucide-react'

export default function RevenueCalculator({ industry, companyName }) {
  const defaults = industry.calculatorDefaults
  
  const [leads, setLeads] = useState(defaults.monthlyLeads)
  const [jobValue, setJobValue] = useState(defaults.avgJobValue)
  const [closeRate, setCloseRate] = useState(defaults.closeRate)
  
  // Reset to industry defaults when industry changes
  useEffect(() => {
    setLeads(defaults.monthlyLeads)
    setJobValue(defaults.avgJobValue)
    setCloseRate(defaults.closeRate)
  }, [industry.key])
  
  // Calculate revenue impact (assuming 23% of leads are lost to slow response)
  const missedLeadRate = 0.23
  const missedLeads = Math.round(leads * missedLeadRate)
  const potentialJobs = missedLeads * (closeRate / 100)
  const monthlyLoss = Math.round(potentialJobs * jobValue)
  const annualLoss = monthlyLoss * 12
  
  // What they could recover (assuming 60% recovery with automation)
  const recoveryRate = 0.60
  const monthlyRecovery = Math.round(monthlyLoss * recoveryRate)
  const annualRecovery = monthlyRecovery * 12
  
  return (
    <section className="py-20 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className={`${industry.colorClass} text-sm font-medium tracking-wider uppercase`}>
            See the Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Calculate Your Revenue Leak
          </h2>
          <p className="text-gray-400 mt-4">
            Adjust the sliders to match {companyName}'s numbers
          </p>
        </div>
        
        {/* Calculator card */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          {/* Sliders */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <label className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <span>Monthly Leads</span>
                <span className="text-white font-semibold text-lg">{leads}</span>
              </label>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={leads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>20</span>
                <span>500</span>
              </div>
            </div>
            
            <div>
              <label className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <span>Avg Job Value</span>
                <span className="text-white font-semibold text-lg">${jobValue}</span>
              </label>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$100</span>
                <span>$2,000</span>
              </div>
            </div>
            
            <div>
              <label className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <span>Close Rate</span>
                <span className="text-white font-semibold text-lg">{closeRate}%</span>
              </label>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10%</span>
                <span>60%</span>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className={`p-6 ${industry.bgClass} rounded-xl border ${industry.borderClass}`}>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Missed Leads/Mo</span>
                </div>
                <div className={`text-3xl font-bold ${industry.colorClass}`}>
                  {missedLeads}
                </div>
                <div className="text-xs text-gray-500 mt-1">~23% industry avg</div>
              </div>
              
              <div>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2">
                  <TrendingDown className="w-4 h-4" />
                  <span>Monthly Loss</span>
                </div>
                <div className="text-3xl font-bold text-red-400">
                  ${monthlyLoss.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 mt-1">Potential revenue</div>
              </div>
              
              <div>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Annual Impact</span>
                </div>
                <div className="text-4xl font-bold text-red-400">
                  ${annualLoss.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 mt-1">Walking out your door</div>
              </div>
              
              <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2">
                  <DollarSign className="w-4 h-4 text-emerald-500" />
                  <span>Recoverable</span>
                </div>
                <div className="text-3xl font-bold text-emerald-400">
                  ${annualRecovery.toLocaleString()}
                </div>
                <div className="text-xs text-emerald-400/70 mt-1">With automation</div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-6">
            Based on industry research: 23% of leads lost to slow response, 60% recoverable with AI automation
          </p>
        </div>
      </div>
    </section>
  )
}