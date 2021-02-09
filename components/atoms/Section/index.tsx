import style from './style.module.sass'

interface Props {
  children: React.ReactNode
  color?: string
  isGray?: boolean
  image?: string
  className?: string
}

export const Section: React.FC<Props> = ({
  children,
  color = null,
  isGray = false,
  image,
  className,
}) => {
  if(isGray && !color) color = "#FAFAFA"

  const backgroundStyle = {
    backgroundColor: color,
    backgroundImage: `url(${image})`,
  }

  return (
    <section
      className={[style.container, className].join(' ')}
      style={backgroundStyle}
    >
      <div className={style.content}>{children}</div>
    </section>
  )
}
