import { useEffect } from 'react'

export const Drawing = (): JSX.Element => {
  const Sketch = (p5) => {
    const textColor = 255
    const textSize = 36

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
      p5.background(0, 0, 0, 0)
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
  }, [])

  return <div />
}
