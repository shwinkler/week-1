
const test = require('tape')
const arrays = require('../arrays')


test('Testing everyNth', (t) => {
  t.plan(4)
  var everyNth = arrays.everyNth
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  t.looseEqual(everyNth(arr, 3), [1, 4, 7, 10], 'should take every 3rd element')
  t.looseEqual(everyNth(arr, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  t.looseEqual(everyNth(arr, 2, 5), [6, 8, 10], 'begins at `start` index if provided')
  t.equal(everyNth(arr, 3, 10), -1, 'should return -1 if start is out of range')
})

