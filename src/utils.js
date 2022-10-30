export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += (arr[random(0, arr.length - 1)])
  }

  return color
}