// import Image from 'next/image'

import Image from 'next/image'

interface PortraitProps {
  w: number
  h: number
  src: string
  className?: string
}

export function Portrait({ w, h, src, className }: PortraitProps) {
  return (
    <div
      className={`bg-slate-200 overflow-hidden`}
      style={{ width: w, height: h }}
    >
      <Image
        src={src}
        alt=""
        width={1080}
        height={1080}
        className={`object-cover w-full h-full ${className}`}
      />
    </div>
  )
}
