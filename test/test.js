const test = require('tape')
const variables = require('./../variables')

test('Test variables challenge', (t) => {
  t.plan(2)
  var apple = variables.apple

  t.equal(apple, 'apple', 'Apple var should be set to "apple"')
  t.notEqual(apple, undefined, 'Apple var should be defined')
})


