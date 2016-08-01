const rl = require('readline')
const fs = require('fs')
const i = rl.createInterface({
  input: fs.createReadStream('1232.txt')
})

i.on('line', (line) => {
  console.log(`line is ${line}`)
})

i.on('close', () => {
  console.log('fin')
})


