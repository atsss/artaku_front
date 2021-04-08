import { useState } from 'react'
import Image from 'next/image'
import { Modal } from '../../atoms/Modal'

interface Props {
  width?: number
  height?: number
  src: string
  onTop?: () => void
  onButtom?: () => void
  className?: string
}

export const ImgWithModal: React.FC<Props> = ({
  width = 1600,
  height = 900,
  src,
  onTop = null,
  onButtom = null,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <div className={className} onClick={open}>
      <Image src={src} width={width} height={height} />
      <Modal open={isOpen} onClose={close} onTop={onTop} onButtom={onButtom}>
        <Image src={src} width={width * 1.5} height={height * 1.5} />
      </Modal>
    </div>
  )
}
