const test = require('tape')
const variables = require('./../variables')

test('Test variables challenge', (t) => {
  t.plan(4)
  var apple = variables.apple
  var fruit = variables.fruit

  t.notEqual(fruit, undefined, '`fruit` var should be defined')
  t.equal(fruit, 'apple', '`fruit` var should be assigned the string "apple"')

  t.equal(apple, fruit, '`apple` var should be same as `fruit` var')
  t.notEqual(apple, undefined, 'Apple var should be defined')
})

test('Test repeater function', (t) => {
  t.plan(3)
  var repeater = variables.repeater
  var threeBeeps = repeater('beep', 3)

  t.ok(Array.isArray(threeBeeps), '`repeater` function creates an array')
  t.looseEqual(threeBeeps, ['beep', 'beep', 'beep'], 'should make an array of 3 "beeps"')

  var noBeeps = repeater('beep', -1)
  t.looseEqual(noBeeps, [], 'Should return empty array if N < 1')
})
