const test = require('tape')
const spawn = require('tape-spawn')
const Talk = require('../closures/talk.js')


test('Talk function', (t) => {
  var st = spawn(t, 'printf "hi"')
  var talk = Talk.talk
  var hi = new RegExp(talk('hi'))
  st.stdout.match(hi, 'talk should print arguments to the console')
  st.end()
})

test('Talk2 function', (t) => {
  var st = spawn(t, 'printf "every\nbody\ndance\"')
  var talk2 = Talk.talk2
  var hi = new RegExp(talk2('every', 'body', 'dance', 'now'))
  st.stdout.match(hi, 'talk should print multiple arguments to the console')
  st.end()
})

test('Greeting function', (t) => {
  t.plan(2)
  var greeting = Talk.greeting('hello')
  t.equal(greeting('alice'), 'hello alice', 'should return "hello" + argument')
  t.equal(greeting('bob'), 'hello bob')
})
