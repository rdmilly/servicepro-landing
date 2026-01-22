import Link from 'next/link'

const industries = [
  { key: 'hvac', name: 'HVAC', icon: '❄️', color: 'border-blue-500/30 hover:border-blue-500' },
  { key: 'plumbing', name: 'Plumbing', icon: '🔧', color: 'border-teal-500/30 hover:border-teal-500' },
  { key: 'electrical', name: 'Electrical', icon: '⚡', color: 'border-amber-500/30 hover:border-amber-500' },
  { key: 'moving', name: 'Moving', icon: '📦', color: 'border-purple-500/30 hover:border-purple-500' },
  { key: 'landscaping', name: 'Landscaping', icon: '🌳', color: 'border-green-500/30 hover:border-green-500' },
  { key: 'default', name: 'General', icon: '🏢', color: 'border-emerald-500/30 hover:border-emerald-500' },
]

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <span className="section-label mb-6 inline-block">ServicePro Landing</span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Personalized Landing Pages for{' '}
          <span className="text-gradient">Service Businesses</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Dynamic pages that adapt to each prospect's industry, pain points, and business needs.
          Click any industry below to see a demo.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {industries.map((industry) => (
            <Link
              key={industry.key}
              href={`/welcome?name=Demo&company=Sample%20Co&industry=${industry.key}`}
              className={`card ${industry.color} transition-all duration-300 group flex flex-col items-center py-6`}
            >
              <span className="text-3xl mb-2">{industry.icon}</span>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                {industry.name}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold mb-3">How to Use</h3>
          <div className="text-left space-y-3 text-sm text-gray-400">
            <p>
              <strong className="text-white">URL Parameters:</strong>{' '}
              <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">
                /welcome?name=John&company=Acme&industry=hvac
              </code>
            </p>
            <p>
              <strong className="text-white">Available params:</strong>{' '}
              name, company, industry, pain (custom pain point), video (video URL)
            </p>
            <p>
              <strong className="text-white">Database Mode:</strong>{' '}
              <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">
                /welcome/john-acme-hvac-a3b4
              </code>{' '}
              (requires PostgreSQL)
            </p>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-8">
          Built by{' '}
          <a href="https://revenuefirst.ai" className="text-emerald-500 hover:underline">
            RevenueFirst.AI
          </a>{' '}
          | Powered by{' '}
          <a href="https://millyweb.com" className="text-emerald-500 hover:underline">
            Millyweb Development
          </a>
        </p>
      </div>
    </main>
  )
}