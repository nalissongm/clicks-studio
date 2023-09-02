'use client'

import { useActiveLink } from '@/contexts/ActiveLinkContext'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactNode
  activeName: string
}

export function ActiveLink({ children, activeName, ...rest }: ActiveLinkProps) {
  const { isActive, handleActive } = useActiveLink()

  return (
    <Link
      {...rest}
      className={
        isActive(activeName)
          ? 'text-clicksUI-gold border-b border-clicksUI-gold-900 pb-0.5'
          : 'text-zinc-200'
      }
      onClick={() => handleActive(activeName)}
    >
      {children}
    </Link>
  )
}
