import type { ComponentProps } from 'react'
import { clsx } from 'kotl'

type ButtonProps = Omit<ComponentProps<'button'>, 'disabled'> & {
  variant: 'solid' | 'soft' | 'outline' | 'text' | 'pure' | 'default'
  color: 'primary' | 'success' | 'warning' | 'danger'
  size: 'sm' | 'md' | 'lg'
  pill: boolean
  square: boolean
  block: boolean
  loading: boolean
  disabled: boolean
}

function style(props: ButtonProps) {
  const { variant, color, size, pill, square, block, loading, disabled } = props
  return clsx()
}

function Button(props: ButtonProps) {
  const { variant, color, size, pill, square, block, loading, disabled, className: _className, ...rest } = props
  const className = clsx(
    'btn',
    `btn-${variant}-${color}`,
    `btn-${size}`,
    block && 'block',
    pill && 'rounded-full',
    square && 'square',
    _className
  )
  return (
    <button {...rest} disabled={disabled}>
      Click me
    </button>
  )
}
