'use strict';

/* Write a function that takes a number n and returns the sum of the numbers 1 to n (inclusive).
 *  sumNums(5) -> 1 + 2 + 3 + 4 + 5 = 15
 */

function sumNums(n) {
  let sum = 0;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  } else {
    for (let i = -1; i >= n; i--) {
      sum += i;
    }
  }
  return sum;
}

/* Modify the function sumNums so that only multiples of three or five are considered in the sum.
 *  sumNumsMultiples(17) ->  3 + 5 + 6 + 9 + 10 + 12 + 15 = 60;
 */

function sumNumsMultiples(n) {
  let sum = 0;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  } else {
    for (let i = -1; i >= n; i--) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
  }
  return sum;
}

/* Write a function that returns the largest element in an array. The numbers in the array can be in any order.
 *  largest([2, 4, 9, 1, 3]) -> 9
 */

function largest(array) {
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max && array[i]) {
      max = array[i];
    }
  }
  return max;
}

/* Write a function that returns a reversed array.
 *  reverseArray([1, 3, 4, 6]) -> [6, 4, 3, 1]
 *  BONUS 1: reverse the array without a for loop
 *  BONUS 2: reverse the array in place
 */

function reverseArray(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

function reverseArrayNoForLoop(array) {
  const reversed = [];
  while (array.length) {
    reversed.push(array.pop());
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

/* Write a function that combines two arrays by alternating elements. Array1 always starts the new array.
 *  zippedArray([a, b, c], [1, 2, 3]) -> [a, 1, b, 2, c, 3]
 *  BONUS: Can handle arrays of different lengths.
 */

function zippedArray(array1, array2) {
  let zipped = [];
  for (let i = 0; i < array1.length; i++) {
    zipped.push(array1[i], array2[i]);
  }
  return zipped;
}

function zippedArrayDiffLengths(array1, array2) {
  let zipped = [];
  const shortest = array1.length < array2.length ? array1 : array2;
  const longest = shortest === array1 ? array2 : array1;
  while (shortest.length) {
    zipped.push(array1.shift(), array2.shift());
  }
  return zipped.concat(longest);
}

/* Create a function that accepts 2 parameters: an object and a desired length (number). If the length of a value in
 *  the object is equal to the desired length, push the corresponding key into an array. Return that array.
 *  keyLength({ cat: [1], dog: [1,2,3,4,5], bird: 'hello', frog: 'hi' }, 5) -> ['dog', 'bird']
 */

function keyLength(obj, len) {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key].length === len) {
        keys.push(key);
      }
    }
  }
  return keys;
}

/* Given an array of integers, return an array where the first element is the count of positive numbers
 *  and the second element is the sum of negative numbers. If the input array is empty or null, return an empty array
 *  countAndSum([-1, 2, 5, 7, -2, -3]) -> [3, -6]
 */

function countAndSum(array) {
  if (array.length === 0 || !array) return [];
  let count = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (i < 0) {
      sum += array[i];
    } else {
      count++;
    }
  }
  return [count, sum];
}

/* Create a function that takes an object as a parameter and returns the number of string values in that object.
 *  countStrings({
 *   apple: "1",
 *   banana: "2",
 *   pair: false,
 *   kiwi: ["anytime", 2, 3, 4],
 *   orange:  null
 *  })
 *   -> 3
 */

function countStrings(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'string') {
        count++;
      }
      if (Array.isArray(obj[key])) {
        let arr = obj[key];
        for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] === 'string') {
            count++;
          }
        }
      }
    }
  }
  return count;
}

/* Write a function that prints a staircase of any given height where 1 <= N <= 100.
 *  The staircase must climb up from left to right. The last line should only consist of asterisks,
 *  without any leading/trailing spaces. The entire staircase should be printed at once.
      
   drawStairs(6) ->          
       *
      **
     ***
    ****
   *****
  ******

 */

function drawStairs(num) {
  let staircase = '';
  for (let i = 0; i < num; i++) {
    let step = '';
    for (let j = 0; j < num; j++) {
      if (i + j < num - 1) {
        step += ' ';
      } else {
        step += '*';
      }
    }
    staircase += step;
    if (i < num - 1) staircase += '\n';
  }
  return staircase;
}

/* Write a function that extracts pieces of data and stores them in an array.
 *  The function accepts two parameters: an array of objects and a string.
 *  Return an array containing the value in which the key matches the given string.
 *  objectValues([
 *   { user: 'sally', color: 'blue' },
 *   { user: 'bob', color: 'green' },
 *   { user: 'joe', color: 'red' },
 *  ], 'user')
 *    -> ['sally', 'bob', 'joe']
 */

function objectValues(array, key) {
  let valueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][key]) {
      valueArray.push(array[i][key]);
    }
  }
  return valueArray;
}

/* Write a function that takes two inputs: a string and a letter.
 *  The function will count the number of times the letter appears in the string.
 *  The count is case insensitive. The character can be any alphanumeric character.
 *  countLetters('foobaro','o') -> 3
 *  countLetters('Sally sings songs sweetly', 's') -> 6
 */

function countLetters(string, letter) {
  let count = 0;
  let lowerString = string.toLowerCase();
  for (let i = 0; i < lowerString.length; i++) {
    if (lowerString[i] === letter) {
      count++;
    }
  }
  return count;
}

/* Create a function that takes a positive integer and returns the smallest palidrome
 *  number higher than the given value.
 *  higherPal(11) == 22
 *  higherPal(188) == 191
 *  higherPal(191) == 202
 *  higherPal(2541) == 2552
 */

function higherPal(value) {
  for (++value; ; value++) {
    let reversedValue = Number(value.toString().split('').reverse().join(''));
    if (value === reversedValue) {
      return value;
    }
  }
}

function higherPalLongWay(value) {
  let flag = true;
  while (flag) {
    value++;
    let stringValue = value.toString();
    for (let i = 0, j = stringValue.length - 1; i < Math.floor(stringValue.length / 2); i++, j--) {
      if (stringValue[i] !== stringValue[j]) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
  }
  return value;
}

module.exports = {
  sumNums,
  sumNumsMultiples,
  largest,
  reverseArray,
  reverseArrayInPlace,
  reverseArrayNoForLoop,
  zippedArray,
  zippedArrayDiffLengths,
  keyLength,
  countAndSum,
  countStrings,
  drawStairs,
  objectValues,
  countLetters,
  higherPal,
  higherPalLongWay,
};

// /* write a function `countUp` that takes a number `N` and returns a string from 1 - N,
//  * separated by commas. The last number should NOT be followed by a comma.
//  * For example: countUp(4) // => '1, 2, 3, 4'
//  */
// var countUp = function (N) {
//   // code here
// }


//  write a function `fizzBuzz` that takes a number `N` and returns an array of
//  * numbers from 1 - N. For multiples of 3, push 'fizz', for multiples of 5 push
//  * 'buzz', for multiples of 3 AND 5 push 'fizzbuzz'.
 
// var fizzBuzz = function (N) {
//   // code here
// }


// module.exports = {
//   countUp: countUp,
//   fizzBuzz: fizzBuzz
// }
