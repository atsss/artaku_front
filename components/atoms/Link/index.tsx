import style from './style.module.sass'

export interface Props {
  href: string
  size?: string
  children: React.ReactNode
  className?: string
}

const linkFactory = (role: string) => ({
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

export const Link = linkFactory('default')
export const SubLink = linkFactory('sub')
