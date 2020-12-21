import style from './style.module.sass'

export interface Props {
  // onPress: () => void
  href: string
  size?: string
  children: React.ReactNode
  className?: string
}

export const Button: React.FC<Props> = ({ href, size = 'm', children, className }) => (
  <a className={style.link} href={href}>
    <div className={[style.body, style[size], "bg-yellow-300", "hover:bg-yellow-200", className].join(' ')}>
      {children}
    </div>
  </a>
)
