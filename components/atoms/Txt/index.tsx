import style from './style.module.sass'

export interface Props {
  tag?: keyof JSX.IntrinsicElements
  size?: string
  weight?: string
  font?: 'serif' | 'sans'
  position?: string
  children: React.ReactNode
  className?: string
}

const txtFactory = (role: string) => ({
  tag: Tag = 'p',
  size = 'm',
  weight = 'normal',
  font = 'serif',
  position = 'left',
  className,
  children,
}: Props) => (
  <Tag
    className={[
      style[role],
      style[size],
      style[weight],
      style[position],
      style[font],
      className,
    ].join(' ')}
  >
    {children}
  </Tag>
)

export const Txt = txtFactory('default')
export const SubTxt = txtFactory('sub')
