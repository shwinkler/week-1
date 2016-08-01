/** JS Fundamentals Review
 *  Complete these exercises for a review on JavaScript fundamentals. Test your
 *  work as you go by running `npm test` in a terminal open to this
 *  project folder.
 */

// declare a variable `fruit` and assign it the string 'apple'
var fruit = 'apple'

// declare a variable `apple` and assign `fruit` to it
var apple = fruit


/* write a function `repeater` that takes a string `str` and a number `N` and returns an
* array with `str` repeated `N` times
* example: repeater('beep', 4) // => ['beep', 'beep', 'beep', 'beep']
*/
var repeater = function (str, N) {
  return N <= 0
    ? []
    : [str].concat(repeater(str, N - 1))
}

/* write a function while */


module.exports = {
  fruit: fruit,
  apple: apple,
  repeater: repeater
}

