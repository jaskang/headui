import type { ComponentProps } from 'react'
import { clsx } from 'kotl'

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

function style(props: ButtonProps) {
  const { variant, color, size, pill, square, block, loading, disabled } = props
  return clsx([
    'inline-flex cursor-pointer appearance-none items-center justify-center whitespace-nowrap text-center font-medium outline-none transition-[color,background-color,text-decoration-color] focus:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  ])
}

export function Button(props: ButtonProps) {
  const { variant, color, size, pill, square, block, loading, disabled, className: _className, ...rest } = props
  const className = style(props)
  return <button {...rest} className={className} disabled={disabled} />
}
