import style from './style.module.sass'

interface Props {
  children?: React.ReactNode
  color?: string
  isGray?: boolean
  isPadding?: boolean
  image?: string
  className?: string
}

export const Section: React.FC<Props> = ({
  children,
  color = null,
  isGray = false,
  isPadding = false,
  image = null,
  className,
}) => {
  if (isGray && !color) color = '#FAFAFA'
  const backgroundImage = image
    ? {
        backgroundImage: `url(${image})`,
        backgroundColor: 'rgba(255,255,255,0.63)',
        backgroundBlendMode: 'overlay',
        backgroundPosition: 'top',
      }
    : {}

  const backgroundStyle = {
    backgroundColor: color,
    ...backgroundImage,
  }

  const sectionClassNames = [style.container, className]
  if (isPadding) sectionClassNames.push(style.padding)

  return (
    <section className={sectionClassNames.join(' ')} style={backgroundStyle}>
      <div className={style.content}>{children}</div>
    </section>
  )
}
