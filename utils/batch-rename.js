const fs = require('fs')
const path = require('path')
const zpad = require('zpad')

const BASE_PATH = 'static/images/stories/annamariaclaudio'

for (let i = 1; i < 51; i++) {
  fs.rename(
    path.join(BASE_PATH, 'min', `${zpad(i)}-min.jpg`),
    path.join(BASE_PATH, `${zpad(i)}.jpg`),
    err => {
      if (err) throw err
    }
  )
}
