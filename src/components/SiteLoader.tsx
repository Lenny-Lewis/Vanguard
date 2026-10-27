import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Component } from '@/components/ui/loader-2'

export default function SiteLoader({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const startedAt = performance.now()
    let minimumTimer: ReturnType<typeof setTimeout>

    const finish = () => {
      clearTimeout(minimumTimer)
      minimumTimer = setTimeout(() => setLoading(false), Math.max(0, 3000 - (performance.now() - startedAt)))
    }

    // Slow third-party media must never leave the visitor stuck on the loader.
    const fallbackTimer = setTimeout(finish, 5000)
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })

    return () => {
      clearTimeout(minimumTimer)
      clearTimeout(fallbackTimer)
      window.removeEventListener('load', finish)
    }
  }, [])

  useEffect(() => {
    if (!loading) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [loading])

  return (
    <>
      {loading && (
        <div className="site-loader dark">
          <Component />
        </div>
      )}
      <div inert={loading} aria-hidden={loading || undefined}>
        {children}
      </div>
    </>
  )
}
