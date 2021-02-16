import { useEffect } from 'react'

export interface Props {
  imageUrl: string
}

export const Drawing: React.FC<Props> = ({ imageUrl }) => {
  const Sketch = (p5) => {
    const textColor = 255
    const textSize = 36
    let bg

    p5.preload = () => (bg = p5.loadImage(imageUrl))

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
      p5.background(bg)
    }

    p5.mouseDragged = () => {
      p5.noStroke()
      p5.fill(textColor)
      p5.ellipse(p5.mouseX, p5.mouseY, textSize, textSize)
    }
  }

  useEffect(() => {
    const p5 = require('p5')
    const canvas = new p5(Sketch)

    return () => canvas.remove()
  }, [imageUrl])

  return <div />
}
