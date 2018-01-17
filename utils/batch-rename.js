const fs = require('fs')
const path = require('path')
const zpad = require('zpad')

const BASE_PATH = 'static/images/photos/martina_salvador'

for (let i = 92; i < 93; i++) {
  fs.rename(
    path.join(BASE_PATH, `${zpad(i)}-min.jpg`),
    path.join(BASE_PATH, 'renamed', `${zpad(i)}.jpg`),
    err => {
      if (err) throw err
    }
  )
}
