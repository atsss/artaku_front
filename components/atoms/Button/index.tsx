import style from './style.module.sass'

export interface Props {
  // onPress: () => void
  href: string
  size?: string
  children: React.ReactNode
  className?: string
}

const buttonFactory = (role: string) => ({
  href,
  size = 'm',
  children,
  className,
}: Props) => (
  <a className={style.link} href={href}>
    <div
      className={[style.body, style[role], style[size], className].join(' ')}
    >
      {children}
    </div>
  </a>
)

export const Button = buttonFactory('default')
export const SubButton = buttonFactory('sub')
