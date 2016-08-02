// Program for making a diary on the command line
const fs = require('fs')
const path = require('path')
const util = require('util')

// store the path to diary file in a var for easy access
const diaryPath = path.join(__dirname, 'diary.txt')

// check to see if your diary.txt file is there. if not make it
fs.stat(diaryPath, (err, stat) => {
  if (!stat.isFile()) makeEmptyDiaryFile(diaryPath)
  if (err) throw err
})

// pipe command line into diary.txt file
process.stdin.pipe(fs.createWriteStream(diaryPath))


// helper functions
function makeEmptyDiaryFile (filePath) {
  fs.writeFile(filePath, '', 'utf8', (err) => {
    if (err) throw err
    console.log('created a file')
  })
}

/**extension: input a current date for each entry
*  extension: create a new file with current date for each entry
*  extension: create a directory
*  extension: make a diary module!
*/
