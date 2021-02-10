import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export const FadeInOut: React.FC<Props> = ({ children }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={opacityTransition}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)

const opacityTransition = {
  duration: 0.8,
  ease: 'easeInOut',
}
