
/* write a function `repeater` that takes a string `str` and a number `N` and returns an
* array with `str` repeated `N` times
* example: repeater('beep', 4) // => ['beep', 'beep', 'beep', 'beep']
*/
var repeater = function (str, N) {
  return N <= 0
    ? []
    : [str].concat(repeater(str, N - 1))
}


// leave this code as it is
module.exports = {
  repeater: repeater
}
