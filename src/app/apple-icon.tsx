import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f5f5f0',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Letter "n" */}
          <path
            d="M 15 20 L 15 80 L 30 80 L 30 45 Q 30 35 40 35 Q 50 35 50 45 L 50 80 L 65 80 L 65 45 Q 65 20 40 20 Q 30 20 30 25 L 30 20 Z"
            fill="#1a1a1a"
          />
          {/* Top dot */}
          <circle cx="80" cy="30" r="8" fill="#1a1a1a" />
          {/* Bottom dot */}
          <circle cx="80" cy="60" r="8" fill="#1a1a1a" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}

