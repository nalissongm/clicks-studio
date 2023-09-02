import Link, { LinkProps } from 'next/link'
import { IconType } from 'react-icons'

interface SocialLinkProps extends LinkProps {
  Icon: IconType
}

export function SocialLink({ Icon, ...rest }: SocialLinkProps) {
  return (
    <Link {...rest} className="text-zinc-200 text-2xl">
      <Icon />
    </Link>
  )
}
