import type { ComponentProps } from 'react'

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

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

function Button(props: ButtonProps) {
  const { variant, color, size, pill, square, block, loading, disabled, ...rest } = props

  return (
    <button {...rest} disabled={disabled}>
      Click me
    </button>
  )
}
