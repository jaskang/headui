import type { ComponentProps } from 'react'
import { clsx } from 'kotl'
import { createVariantClass } from '../internal-style'

type ButtonProps = Omit<ComponentProps<'button'>, 'disabled'> & {
  variant?: 'solid' | 'soft' | 'outline' | 'text' | 'pure' | 'default'
  color?: 'primary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  pill?: boolean
  square?: boolean
  block?: boolean
  loading?: boolean
  disabled?: boolean
}

// Dependencies: pnpm install lucide-react

function style(props: Pick<ButtonProps, 'variant' | 'color' | 'size' | 'pill' | 'square' | 'block'>) {
  const { variant = 'default', color, size, pill, square, block } = props

  return clsx([
    `inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors cursor-pointer 
    outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary-500/70 
    disabled:pointer-events-none disabled:opacity-50
    [&_svg]:pointer-events-none
    [&_svg]:shrink-0 
    shadow-sm shadow-black/5 h-9 px-4 py-2`,
    pill ? 'rounded-full' : 'rounded-md',
    block && 'block',
    createVariantClass(variant, ''),
  ])
}

export function Button(props: ButtonProps) {
  const {
    variant,
    color,
    size,
    pill,
    square,
    block,
    loading,
    disabled,
    className: _className,
    children,
    ...rest
  } = props
  const fullClassName = style(props)
  return (
    <button {...rest} className={fullClassName} disabled={disabled}>
      {children}
    </button>
  )
}
