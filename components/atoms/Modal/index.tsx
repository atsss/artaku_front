import style from './style.module.sass'
import { motion, useMotionValue, AnimatePresence } from 'framer-motion'

interface Props {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

export const Modal: React.FC<Props> = ({ children, open, onClose }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const close = (e: any) => {
    onClose()
    e.stopPropagation()
  }

  x.onChange((current) => {
    if (Math.abs(current) > 100) {
      onClose()
    }
  })
  y.onChange((current) => {
    if (Math.abs(current) > 100) {
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
              drag
              dragConstraints={{ top: 1, right: 1, bottom: -1, left: -1 }}
              style={{ x, y }}
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
