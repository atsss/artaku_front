import { useEffect } from 'react'
import { db } from '../../../../lib/firebase'

const saveDrawing = (drawing) => {
  const date = new Date()
  const today = date.valueOf().toString()
  db.collection('drawings').doc(today).set({
    drawing,
    date: date.valueOf(),
  })

  db.collection('drawings').doc(today).delete()
}

export const Drawing = (): JSX.Element => {
  const Sketch = (p5) => {
    const drawings = []
    const drawSize = 30
    let itr = 0 // noise生成の種

    const update = (drawing) => (drawing.a -= 1)
    const render = (drawing) => {
      p5.noStroke()
      p5.drawingContext.shadowOffsetX = 0
      p5.drawingContext.shadowOffsetY = 0
      p5.drawingContext.shadowBlur = 8
      p5.drawingContext.shadowColor = p5.color(drawing.c, 255, 255)
      p5.fill(drawing.c, 255, 255, drawing.a)
      p5.ellipse(drawing.x, drawing.y, drawSize)
    }

    const initSetup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
      p5.background(0, 0, 0, 0)
    }

    db.collection('drawings').onSnapshot((snapshots) => {
      snapshots.forEach((snapshot) => {
        const drawingHistory = {
          x: snapshot.data().drawing.x * p5.windowWidth,
          y: snapshot.data().drawing.y * p5.windowHeight,
          c: snapshot.data().drawing.c,
          a: 50,
        }
        drawings.push(drawingHistory)
      })
    })

    p5.setup = () => {
      initSetup()
      window.onresize = () => {
        initSetup()
      }
    }

    p5.draw = () => {
      for (let i = 0; i < drawings.length; i++) {
        update(drawings[i])
        render(drawings[i])
        if (drawings[i].a < 0) {
          drawings.splice(i, 1)
        }
      }

      itr++
    }

    p5.touchMoved = () => {
      const posX = p5.mouseX / p5.windowWidth
      const posY = p5.mouseY / p5.windowHeight
      const color = p5.floor(p5.noise(itr / 50) * 300)
      const dbDrawing = {
        x: posX,
        y: posY,
        c: color,
      }
      saveDrawing(dbDrawing)
    }

    p5.doubleClicked = () => {
      p5.clear()
    }
  }

  useEffect(() => {
    const p5 = require('p5')
    const canvas = new p5(Sketch)

    return () => canvas.remove()
  }, [])

  return <div />
}
