import style from './style.module.sass'
import { motion, useMotionValue, AnimatePresence } from 'framer-motion'

interface Props {
  children: React.ReactNode
  open: boolean
  onClose: () => void
  onTop?: () => void
  onButtom?: () => void
}

export const Modal: React.FC<Props> = ({
  children,
  open,
  onClose,
  onTop = null,
  onButtom = null,
}) => {
  const y = useMotionValue(0)
  const close = (e: any) => {
    onClose()
    e.stopPropagation()
  }

  y.onChange((current) => {
    if (current < -250) {
      if (onTop) onTop()
      onClose()
    }
    if (current > 100) {
      if (onButtom) onButtom()
      onClose()
    }
  })

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div onClick={(e) => close(e)} className={style.overlay}>
            <motion.div
              onClick={stopPropagation}
              className={style.body}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.8}
              style={{ y }}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const stopPropagation = (e: any) => e.stopPropagation()
