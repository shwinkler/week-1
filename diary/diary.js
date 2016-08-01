// Program for making a diary on the command line
const fs = require('fs')

// check to see if your diary.txt file is there. if not make it
if (!fs.stat('./diary.txt')) {
  fs.writeFile('./diary/diary.txt', '', (err) => {
    if (err) throw err
    console.log('created a file')
  })
}

process.stdin.pipe(fs.createWriteStream('diary.txt'))
