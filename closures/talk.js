
// write a function `talk` that takes a string and returns it
var talk = function (saying) {
  console.log(saying);
}

/* write a function `talk2` that takes any number of arguments and logs them to
* the console.
*/
var talk2 = function (args) {
  var ar = Array.from(arguments)
  ar.forEach(a => { console.log(a) })
}

/** Write a function called `greeting` that 1 string parameter
* and returns a function. The `greeting` function should use closure to store or
* "remember" its string argument, and apply it to any argument passed to the
* returned function. 
* For example:
*   var sayHello = greeting('hello')
*   sayHello('alice')--> 'hello alice'
*
*   var sayGoodbye = greeting('goodbye')
*   sayGoodbye('bob') --> 'goodbye bob'
*/
var greeting = function (str) {
  return function (name) {
    return `${str} ${name}`;
  }
}

// do not alter the code below
module.exports = {
  talk: talk,
  talk2: talk2,
  greeting: greeting
}
