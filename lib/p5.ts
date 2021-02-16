import { useEffect } from 'react'

export const useP5 = (sketch) => {
  useEffect(() => {
    const p5 = require('p5')
    const canvas = new p5(sketch)

    return () => canvas.remove()
  }, [])
}
