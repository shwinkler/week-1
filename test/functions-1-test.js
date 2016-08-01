const test = require('tape')
const fn1 = require('./../functions-1')

test('Test repeater function', (t) => {
  t.plan(3)
  var repeater = fn1.repeater
  var threeBeeps = repeater('beep', 3)

  t.ok(Array.isArray(threeBeeps), '`repeater` function creates an array')
  t.looseEqual(threeBeeps, ['beep', 'beep', 'beep'], 'should make an array of 3 "beeps"')

  var noBeeps = repeater('beep', -1)
  t.looseEqual(noBeeps, [], 'Should return empty array if N < 1')
})
