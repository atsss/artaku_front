interface Props {
  id: string
  className?: string
}

export const Youtube: React.FC<Props> = ({ id, className }) => (
  <div
    className={className}
  >
    <iframe
      className="w-full md:w-6/12 h-40 md:h-96"
      src={`https://www.youtube.com/embed/${id}?rel=0`}
      frameBorder="0"
      allow="autoplay;
      encrypted-media"
      allowFullScreen
    ></iframe>
  </div>
)
