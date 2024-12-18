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

function style(props: Pick<ButtonProps, 'variant' | 'color' | 'size' | 'pill' | 'square' | 'block'>) {
  const { variant = 'default', color, size, pill, square, block } = props
  return clsx([
    'inline-flex cursor-pointer appearance-none border items-center justify-center whitespace-nowrap text-center font-medium outline-none transition-[color,background-color,text-decoration-color] focus:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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
