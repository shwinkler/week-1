// npm test loops
'use strict';

const test = require('tape');
const spawn = require('tape-spawn')
const loopFns = require('./../loops.js');

test('sumNums', (t) => {
  const sumNums = loopFns.sumNums;
  t.equal(sumNums(5), 15, 'it should work for positive numbers');
  t.equal(sumNums(0), 0, 'it should return 0 if input is 0');
  t.equal(sumNums(-3), -6, 'it should work with negative numbers');
  t.end();
});

test('sumNumsMultiples', (t) => {
  const sumNumsMultiples = loopFns.sumNumsMultiples;
  t.equal(sumNumsMultiples(17), 60, 'it should work with positive numbers');
  t.equal(sumNumsMultiples(0), 0, 'it should return 0 if input is 0');
  t.equal(sumNumsMultiples(-12), -45, 'it should work with negative numbers');
  t.end();
});

test('largest', (t) => {
  const largest = loopFns.largest;
  t.equal(largest([0, 1, 10, 3]), 10, 'it should work with only positive numbers in the array');
  t.equal(largest([-8, -2, -3, -7]), -2, 'it should work with only negative numbers in the array');
  t.equal(largest([-1, 8, 0, 5]), 8, 'it should work with positive and negative numbers in the array');
  t.equal(largest([undefined, -1, null, -7]), -1, 'it should ignore undefined and null values in the array');
  t.end();
});

test('reverseArray', (t) => {
  const reverseArray = loopFns.reverseArray;
  t.looseEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1], 'it should reverse an array with integers');
  t.looseEqual(reverseArray([]), [], 'it should return an empty array if given an empty array');
  t.end();
});

// HOW TO TEST FOR FUNCTION STRUCTURE??
test('reverseArrayNoForLoop', (t) => {
  const reverseArrayNoForLoop = loopFns.reverseArrayNoForLoop;
  t.looseEqual(reverseArrayNoForLoop([5, 6, 7, 8]), [8, 7, 6, 5], 'it should reverse an array with integers');
  t.looseEqual(reverseArrayNoForLoop([]), [], 'it should return an empty array if given an empty array');
  t.end();
});

test('reverseArrayNoForLoop', (t) => {
  const reverseArrayInPlace = loopFns.reverseArrayInPlace;
  const emptyArray = [];
  let array = [9, 10, 11, 12];
  let backArray = (function (array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
    return array;
  })(array);

  t.equal(reverseArrayInPlace(array), backArray, 'it should reverse an array in place');
  t.notEqual(reverseArrayInPlace(array), [12, 11, 10, 9], 'it should not create a new array');
  t.equal(reverseArrayInPlace(emptyArray), emptyArray, 'it should return the same empty array if given an empty array');
  t.end();
});

test('zippedArray', (t) => {
  const zippedArray = loopFns.zippedArray;
  const arrayTest = ['hello'];
  const objTest = { hi: 'mom' };
  t.looseEqual(zippedArray(['a', 'b', 'c'],[1, 2, 3]), ['a', 1, 'b', 2, 'c', 3], 'it should zip arrays of the same length');
  t.looseEqual(zippedArray(['cat', undefined, 'dog'],[arrayTest, objTest, null]), ['cat', arrayTest, undefined, objTest, 'dog', null], 'it should zip arrays with various data types');
  t.looseEqual(zippedArray([], []), [], 'it should zip two empty arrays');
  t.end();
});

test('zippedArrayDiffLengths', (t) => {
  const zippedArrayDiffLengths = loopFns.zippedArrayDiffLengths;
  const arrayTest = ['hi'];
  const objTest = { hello: 'dad' };
  t.looseEqual(zippedArrayDiffLengths(['d', 'e', 'f'], [4, 5, 6]), ['d', 4, 'e', 5, 'f', 6], 'it should zip arrays of the same length');
  t.looseEqual(zippedArrayDiffLengths([arrayTest, 'shirt', null], [objTest, undefined, 'coat']), [arrayTest, objTest, 'shirt', undefined, null, 'coat'], 'it should zip arrays of the same length with various data types');
  t.looseEqual(zippedArrayDiffLengths(['a', 'b', 'c', 'd', 'e'], [1, 2, 3]), ['a', 1, 'b', 2, 'c', 3, 'd', 'e'], 'it should zip arrays of different lengths - first array longer');
  t.looseEqual(zippedArrayDiffLengths(['a', 'b', 'c'], [1, 2, 3, 4, 5, 6]), ['a', 1, 'b', 2, 'c', 3, 4, 5, 6], 'it should zip arrays of different lengths - second array longer');
  t.looseEqual(zippedArrayDiffLengths([], [1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6], 'it should zip arrays if one array is empty');
  t.looseEqual(zippedArrayDiffLengths([], []), [], 'it should zip two empty arrays');
  t.end();
});

test('keyLength', (t) => {
  const keyLength = loopFns.keyLength;
  const testObj = {
    cat: [1, 2, 3, 4, 5],
    dog: 'growl',
    frog: [1, 2, 3],
    mouse: 'quiet',
    bird: [],
    cow: 'moo',
  };
  t.looseEqual(keyLength(testObj, 5), ['cat', 'dog', 'mouse'], 'it should return an array of keys with value lengths equal to five');
  t.looseEqual(keyLength(testObj, 3), ['frog', 'cow'], 'it should return an array of keys with value lengths equal to three');
  t.looseEqual(keyLength(undefined, 3), [], 'it should return an empty array if object parameter is undefined');
  t.looseEqual(keyLength(testObj, -2), [], 'it should return an empty array if length parameter is negative');
  t.end();
});

test('countAndSum', (t) => {
  const countAndSum = loopFns.countAndSum;
  t.looseEqual(countAndSum([]), [], 'it should return an empty array if the input array is empty');
  t.looseEqual(countAndSum(null), [], 'it should return an empty array if the input array is null');
  t.looseEqual(countAndSum([-4, -2, 3, 5, -7, 4, -3]), [3, -16], 'it should count positive numbers and sum negative numbers');
  t.looseEqual(countAndSum([1, -4, 1, 7, 0, 2, -2]), [4, -6], 'it should handle 0');
  t.end();
});

test('countStrings', (t) => {
  const countStrings = loopFns.countStrings;
  const testObj = {
    cauliflower: '8',
    broccoli: 'three',
    squash: null,
    tomato: [1, 2, 3],
    cucumber: false,
    potato: 'yummy',
    onion: [3, 'fried', 'grilled', null],
  };
  t.equal(countStrings(undefined), 0, 'it should return 0 if input is undefined');
  t.equal(countStrings(testObj), 5, 'it should count the number of string values are contained in a given object');
  t.end();
});

// CANT GET TEST TO FAIL
test('drawStairs', (t) => {
  const drawStairs = loopFns.drawStairs;
  const st = spawn(t, 'printf "   *\n  **\n ***\n****\"');
  const stairs = new RegExp(drawStairs(4));
  st.stdout.match(stairs, 'it should print entire staircase');
  st.end();
});

test('objectValues', (t) => {
  const objectValues = loopFns.objectValues;
  const testArray = [
    { flower: 'sunflower', color: 'yellow' },
    { flower: 'iris', color: 'purple' },
    { flower: 'tulip', color: 'pink' },
    { flower: 'rose', color: 'red' },
  ];
  const testArray2 = [
    { flower: ['sunflower', 'daisy', 'daffodil'], color: 'yellow' },
    { name: 'iris', color: 'purple' },
    { flower: null, color: 'pink' },
    { flower: 'rose', color: 'red' },
  ];
  t.looseEqual(objectValues(testArray, 'flower'), ['sunflower', 'iris', 'tulip', 'rose'], 'it should return an array of all values of a given key');
  t.looseEqual(objectValues(testArray2, 'flower'), [['sunflower', 'daisy', 'daffodil'], null, 'rose'], 'it should return an array of all data type values of a given key');
  t.looseEqual(objectValues([], 'flower'), [], 'it should return an empty array if an empty array is given');
  t.end();
});

test('countLetters', (t) => {
  const countLetters = loopFns.countLetters;
  t.equal(countLetters('foobaropolis', 'o'), 4, 'it should count letter occurances in a word');
  t.equal(countLetters('Samantha\'s spectactular stroke surprises Swimming spectators', 's'), 10, 'it should count letter occurances in a sentence');
  t.equal(countLetters('hello world', 'z'), 0, 'it should return 0 if string does not contain given character');
  t.equal(countLetters('he lived from 1820 - 1888', 8), 4, 'it should handle numeric characters');
  t.end();
});

test('higherPal', (t) => {
  const higherPal = loopFns.higherPal;
  t.notEqual(higherPal(11), 11, 'it should not return input if input is a palindrome');
  t.equal(higherPal(1981), 1991, 'it should return the next highest palidrome value - even number length');
  t.equal(higherPal(2563241), 2563652, 'it should return the next highest palidrome value - odd number length');
  t.end();
});

test('higherPalLongWay', (t) => {
  const higherPalLongWay = loopFns.higherPalLongWay;
  t.notEqual(higherPalLongWay(11), 11, 'it should not return input if input is a palindrome');
  t.equal(higherPalLongWay(1981), 1991, 'it should return the next highest palidrome value - even number length');
  t.equal(higherPalLongWay(2563241), 2563652, 'it should return the next highest palidrome value - odd number length');
  t.end();
});
