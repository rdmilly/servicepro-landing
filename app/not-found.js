import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-emerald-500 mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          The personalized page you're looking for doesn't exist or may have expired.
        </p>
        <Link
          href="/"
          className="btn-primary"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}