import style from './style.module.sass'

export interface Props {
  tag?: keyof JSX.IntrinsicElements
  size?: string
  weight?: string
  children: React.ReactNode
  className?: string
}

const txtFactory = (role: string) => ({
  tag: Tag = 'p',
  size = 'm',
  weight = 'normal',
  className,
  children,
}: Props) => (
  <Tag
    className={[style[role], style[size], style[weight], className].join(
      ' '
    )}
  >
    {children}
  </Tag>
)

export const Txt = txtFactory('default')
export const SubTxt = txtFactory('sub')
