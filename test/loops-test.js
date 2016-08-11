// npm test loops
'use strict';

const test = require('tape');
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
  t.deepEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1], 'it should reverse an array with integers');
  t.deepEqual(reverseArray([]), [], 'it should return an empty array if given an empty array');
  t.end();
});

// HOW TO TEST FOR FUNCTION STRUCTURE??
test('reverseArrayNoForLoop', (t) => {
  const reverseArrayNoForLoop = loopFns.reverseArrayNoForLoop;
  t.deepEqual(reverseArrayNoForLoop([5, 6, 7, 8]), [8, 7, 6, 5], 'it should reverse an array with integers');
  t.deepEqual(reverseArrayNoForLoop([]), [], 'it should return an empty array if given an empty array');
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
  const objTest = {hi: 'mom'};
  t.deepEqual(zippedArray(['a', 'b', 'c'],[1, 2, 3]), ['a', 1, 'b', 2, 'c', 3], 'it should zip arrays of the same length');
  t.deepEqual(zippedArray(['cat', undefined, 'dog'],[arrayTest, objTest, null]), ['cat', arrayTest, undefined, objTest, 'dog', null], 'it should zip arrays with various data types');
  t.end();
});

test('zippedArray', (t) => {
  const zippedArray = loopFns.zippedArray;
  const arrayTest = ['hello'];
  const objTest = { hi: 'mom' };
  t.deepEqual(zippedArray(['a', 'b', 'c'],[1, 2, 3]), ['a', 1, 'b', 2, 'c', 3], 'it should zip arrays of the same length');
  t.deepEqual(zippedArray(['cat', undefined, 'dog'],[arrayTest, objTest, null]), ['cat', arrayTest, undefined, objTest, 'dog', null], 'it should zip arrays with various data types');
  t.deepEqual(zippedArray([], []), [], 'it should zip two empty arrays');
  t.end();
});

test('zippedArrayDiffLengths', (t) => {
  const zippedArrayDiffLengths = loopFns.zippedArrayDiffLengths;
  const arrayTest = ['hi'];
  const objTest = { hello: 'dad' };
  t.deepEqual(zippedArrayDiffLengths(['d', 'e', 'f'], [4, 5, 6]), ['d', 4, 'e', 5, 'f', 6], 'it should zip arrays of the same length');
  t.deepEqual(zippedArrayDiffLengths([arrayTest, 'shirt', null], [objTest, undefined, 'coat']), [arrayTest, objTest, 'shirt', undefined, null, 'coat'], 'it should zip arrays of the same length with various data types');
  t.deepEqual(zippedArrayDiffLengths(['a', 'b', 'c', 'd', 'e'], [1, 2, 3]), ['a', 1, 'b', 2, 'c', 3, 'd', 'e'], 'it should zip arrays of the different lengths - first array longer');
  t.deepEqual(zippedArrayDiffLengths(['a', 'b', 'c'], [1, 2, 3, 4, 5, 6]), ['a', 1, 'b', 2, 'c', 3, 4, 5, 6], 'it should zip arrays of the different lengths - second array longer');
  t.deepEqual(zippedArrayDiffLengths([], [1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6], 'it should zip arrays if one array is empty');
  t.deepEqual(zippedArrayDiffLengths([], []), [], 'it should zip two empty arrays');
  t.end();
});

