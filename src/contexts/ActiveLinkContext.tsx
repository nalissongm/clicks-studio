'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface ActiveLinkProviderProps {
  children: ReactNode
}

type ActiveLinkContextData = {
  activeLink: string
  handleActive: (link: string) => void
  isActive: (link: string) => boolean
}

const ActiveLinkContext = createContext({} as ActiveLinkContextData)

export function ActiveLinkProvider({ children }: ActiveLinkProviderProps) {
  const [activeLink, setActiveLink] = useState('home')

  function handleActive(link: string) {
    setActiveLink(link)
  }

  function isActive(link: string): boolean {
    return link === activeLink
  }

  return (
    <ActiveLinkContext.Provider value={{ activeLink, handleActive, isActive }}>
      {children}
    </ActiveLinkContext.Provider>
  )
}

export const useActiveLink = () => useContext(ActiveLinkContext)
