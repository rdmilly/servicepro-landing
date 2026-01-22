export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-10 px-6 md:px-8 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-semibold text-lg mb-1">
              Revenue<span className="text-emerald-500">First</span>.AI
            </div>
            <p className="text-sm text-gray-500">
              AI-powered sales automation for service businesses
            </p>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="https://revenuefirst.ai" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Main Site
            </a>
            <a 
              href="https://revenuefirst.ai/privacy" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a 
              href="https://revenuefirst.ai/terms" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} RevenueFirst.AI. All rights reserved.</p>
          <p>
            Powered by{' '}
            <a 
              href="https://millyweb.com" 
              className="text-emerald-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Millyweb Development
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}