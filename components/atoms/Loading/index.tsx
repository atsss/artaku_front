import { motion } from 'framer-motion'
import { Section } from '../Section'
import { SubTxt } from '../Txt'
import style from './style.module.sass'

// FIXME: Loading component should be under organisms
export const Loading = (): JSX.Element => (
  <Section>
    <div className={style.main}>
      <div className="m-auto">
        <div className={style.block}>
          {[...Array(3)].map((_, index) => (
            <motion.span
              key={index}
              style={ballStyle}
              transition={bounceTransition(index)}
              animate={{
                y: ['100%', '-100%', '100%'],
                backgroundColor: ['#918F8F', '#464545', '#918F8F'],
              }}
            />
          ))}
        </div>
        <SubTxt className="block mt-8">
          It takes time becuase the server is waking up now 💤
        </SubTxt>
      </div>
    </div>
  </Section>
)

const ballStyle = {
  display: 'block',
  width: '1rem',
  height: '1rem',
  backgroundColor: 'black',
  borderRadius: '0.5rem',
}

const bounceTransition = (index) => {
  return {
    y: {
      duration: 0.8,
      repeat: Infinity,
      ease: 'easeInOut',
      repeatDelay: 0.1 + index * 0.05,
    },
    backgroundColor: {
      duration: 0.8,
      repeat: Infinity,
      ease: 'easeInOut',
      repeatDelay: 0.8,
    },
  }
}
