import { cn } from '@/lib/utils'

export function Component({ className }: { className?: string }) {
  return (
    <div className={cn('geometric-loader', className)} role="status" aria-label="Loading Vanguard">
      <div className="loader" aria-hidden="true">
        <svg viewBox="0 0 80 80">
          <circle r="32" cy="40" cx="40" />
        </svg>
      </div>
      <div className="loader triangle" aria-hidden="true">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72" />
        </svg>
      </div>
      <div className="loader" aria-hidden="true">
        <svg viewBox="0 0 80 80">
          <rect height="64" width="64" y="8" x="8" />
        </svg>
      </div>
    </div>
  )
}
