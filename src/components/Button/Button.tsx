import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  clickFN?: () => void
  children: ReactNode
}

export function Button({
  variant = 'primary',
  clickFN,
  children,
  ...rest
}: ButtonProps) {
  if (variant === 'primary') {
    return (
      <button
        {...rest}
        className="flex items-center gap-1 bg-clicksUI-gold-900 text-zinc-200 text-lg font-medium rounded px-4 py-2 hover:bg-clicksUI-gold-700 "
      >
        {children}
      </button>
    )
  }

  return (
    <button
      {...rest}
      className="flex items-center gap-1 text-clicksUI-green-900 text-lg font-medium"
    >
      {children}
    </button>
  )
}
