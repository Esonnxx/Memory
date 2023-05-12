let centerX
let centerY
let radius
const totalDegrees = 400
let r = getRan(0, 255)
let g = getRan(0, 255)
let b = getRan(0, 255)


function getRan (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function setup () {
  createCanvas(
    600,
    600
  )
  background(0)
  centerX = width * 0.5
  centerY = height * 0.5
  radius = height * 0.5
  angleMode(DEGREES)
  translateX = 0
  translateY = 0
  opacity = 255
}
function mousePressed () {
  save('.jpg')
}

function draw () {
  noFill()
  stroke(r, g, b, opacity)
  beginShape()
  for (let i = 0; i <= totalDegrees; i++) {
    let diff = getRan(0, 4)
    let noiseFactor = noise(i / 20, frameCount / 20)
    let x = centerX + radius * cos(i) * noiseFactor - diff
    let y = centerY + radius * sin(i) * noiseFactor + diff
    curveVertex(x, y)
  }
  endShape(CLOSE)
  radius -= 0.55
  if (frameCount > 300) {
    translateX = 0
    translateY = 0
  }
  if (r >= 255) {
    r = 90
  }
  if (g >= 255) {
    g = 10
  }


  if (opacity == 0) {
    opacity = 255
  }
  translateX *= frameCount
  translateY *= frameCount
  opacity -= 1
  r += 5
  g += 5
  b += 5
}