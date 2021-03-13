import style from './style.module.sass'

interface Props {
  children?: React.ReactNode
  color?: string
  isGray?: boolean
  image?: string
  className?: string
}

export const Section: React.FC<Props> = ({
  children,
  color = null,
  isGray = false,
  image = null,
  className,
}) => {
  if (isGray && !color) color = '#FAFAFA'
  const backgroundImage = image
    ? { backgroundImage: `url(${image})`, backgroundPosition: 'top' }
    : {}

  const backgroundStyle = {
    backgroundColor: color,
    ...backgroundImage,
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
