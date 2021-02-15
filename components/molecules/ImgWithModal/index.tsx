import { useState } from 'react'
import Image from 'next/image'
import { Modal } from '../../atoms/Modal'

interface Props {
  width?: number
  height?: number
  src: string
  className?: string
}

export const ImgWithModal: React.FC<Props> = ({
  width = 800,
  height = 450,
  src,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <div className={className} onClick={() => open()}>
      <Image src={src} width={width} height={height} />
      <Modal open={isOpen} onClose={() => close()}>
        <Image src={src} width={width * 1.5} height={height * 1.5} />
      </Modal>
    </div>
  )
}
