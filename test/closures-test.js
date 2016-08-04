const test = require('tape')
const spawn = require('tape-spawn')
const talk = require('../closures/talk.js').talk

test('tests talk ', (t) => {
  t.plan(1)
  talk('hi')
  spawn.stdout.match(/hi/)

  // t.equal(talk('hi'), 'hi', 'should return arg')
})
