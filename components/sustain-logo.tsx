type LogoProps = {
  className?: string
  showWordmark?: boolean
  showTagline?: boolean
}

/**
 * SustainEstates brand mark: a house outline with a leaf inside.
 * The house outline and wordmark use `currentColor` so the logo adapts to
 * dark or light sections; the leaf uses the brand accent color.
 */
export function SustainLogo({
  className,
  showWordmark = true,
  showTagline = false,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ''}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="h-8 w-8 shrink-0"
      >
        {/* House outline */}
        <path
          d="M7 21.5 24 6.5l17 15V41a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V21.5Z"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Leaf body */}
        <path
          d="M30 20c-9 1-16 8-14 18 10-1 17-8 14-18Z"
          fill="#2f9e8f"
        />
        {/* Leaf vein */}
        <path
          d="M17 38 27 23"
          stroke="#134e45"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-semibold tracking-tight">
            SustainEstates
          </span>
          {showTagline && (
            <span className="mt-1 text-[11px] font-normal tracking-wide text-muted-foreground">
              Added Value in Built Environment
            </span>
          )}
        </span>
      )}
    </span>
  )
}
