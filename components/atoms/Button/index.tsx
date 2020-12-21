import style from './style.module.sass'

export interface Props {
  // onPress: () => void
  href: string
  size?: string
  children: React.ReactNode
  className?: string
}

export const Button: React.FC<Props> = ({ href, size = 'm', children, className }) => (
  <div className={[style.body, style[size], className].join(' ')}>
    <a className={style.link} href={href}>
      {children}
    </a>
  </div>
)
