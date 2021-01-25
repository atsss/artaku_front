import style from './style.module.sass'

export interface Props {
  tag?: keyof JSX.IntrinsicElements
  size?: string
  weight?: string
  font?: 'serif' | 'sans'
  children: React.ReactNode
  className?: string
}

const txtFactory = (role: string) => ({
  tag: Tag = 'p',
  size = 'm',
  weight = 'normal',
  font = 'serif',
  className,
  children,
}: Props) => (
  <Tag
    className={[style[role], style[size], style[weight], style[font], className].join(
      ' '
    )}
  >
    {children}
  </Tag>
)

export const Txt = txtFactory('default')
export const SubTxt = txtFactory('sub')
