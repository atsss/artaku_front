import style from './style.module.sass'

interface Props {
  id: string
  className?: string
}

export const Youtube: React.FC<Props> = ({ id, className }) => (
  <div className={className}>
    <iframe
      className={style.iframe}
      src={`https://www.youtube.com/embed/${id}?rel=0`}
      frameBorder="0"
      allow="autoplay;
      encrypted-media"
      allowFullScreen
    ></iframe>
  </div>
)
