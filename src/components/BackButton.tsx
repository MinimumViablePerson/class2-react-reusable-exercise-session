type Props = {
  children: any
  size?: 'small' | 'medium' | 'big'
  [x: string]: any
}

export function Button ({ children, size = 'medium', ...props }: Props) {
  return (
    <button className={`button ${size}`} {...props}>
      {children}
    </button>
  )
}
