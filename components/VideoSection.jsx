'use client'

import { Play } from 'lucide-react'

function getYouTubeId(url) {
  if (!url) return null
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)
  return match ? match[1] : null
}

export default function VideoSection({ videoUrl, prospect }) {
  const youtubeId = getYouTubeId(videoUrl)
  
  if (!videoUrl) return null
  
  return (
    <section className="py-16 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-emerald-500 text-sm font-medium tracking-wider uppercase">
            A Personal Message
          </span>
          <h2 className="text-3xl font-bold mt-3">
            I Recorded This Just for {prospect.firstName}
          </h2>
        </div>
        
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
          {youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
              title="Personal video message"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={videoUrl}
              controls
              className="absolute inset-0 w-full h-full object-cover"
              poster="/video-poster.jpg"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        
        <p className="text-center text-gray-500 mt-4 text-sm">
          Watch the 2-minute overview to see exactly how this works for {prospect.companyName}
        </p>
      </div>
    </section>
  )
}