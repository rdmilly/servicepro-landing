import './globals.css'

export const metadata = {
  title: 'RevenueFirst.AI - AI Sales Automation for Service Businesses',
  description: 'Stop leaving money on the table. AI-powered systems that respond instantly, follow up relentlessly, and close more deals.',
  keywords: 'AI automation, service business, HVAC, plumbing, electrical, moving, sales automation',
  openGraph: {
    title: 'RevenueFirst.AI - AI Sales Automation',
    description: 'Stop leaving money on the table with AI-powered sales automation.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://demo.revenuefirst.ai',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RevenueFirst.AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RevenueFirst.AI - AI Sales Automation',
    description: 'Stop leaving money on the table with AI-powered sales automation.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-brand-navy antialiased">
        {/* Noise overlay for texture */}
        <div className="fixed inset-0 noise-overlay z-0" aria-hidden="true" />
        
        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}