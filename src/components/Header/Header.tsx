import Image from 'next/image'

import { FaInstagram as InstaICON } from 'react-icons/fa'
import { AiOutlineWhatsApp as WhatsICON } from 'react-icons/ai'

import { ActiveLink } from './ActiveLink'
import { SocialLink } from './SocialLink'

export function Header() {
  return (
    <header className="flex justify-between w-full max-w-clicksUI-screen items-center">
      <Image src="/logo.svg" alt="logo" width={45} height={45} />
      <nav className="space-x-4 font-semibold text-base">
        <ActiveLink href="/#home" activeName={'home'}>
          Home
        </ActiveLink>
        <ActiveLink href="/#about" activeName={'about'}>
          Sobre
        </ActiveLink>
        <ActiveLink href="/#portfolio" activeName={'portfolio'}>
          Portfólio
        </ActiveLink>
        <ActiveLink href="/#contact" activeName={'contact'}>
          Contato
        </ActiveLink>
      </nav>
      <nav className="flex gap-x-4">
        <SocialLink
          Icon={InstaICON}
          href="https://www.instagram.com/nalissongomes.dev/"
        />
        <SocialLink
          Icon={WhatsICON}
          href="https://www.instagram.com/nalissongomes.dev/"
        />
      </nav>
    </header>
  )
}
