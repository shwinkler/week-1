
/** write a function `everyNth` that takes 2 arguments--an array `A` and a
* number `N`--and returns an array with every `N`th value from `A`. 
* For example: everyNth([3, 4, 5, 6, 7, 8], 2) // => [3, 5, 7]
* BONUS: write it to take an optional 3rd argument that sets the starting index
* For example: everyNth(['a', 'B', 'c', 'd', 'e'], 1, 2) // => ['c', 'd', 'e']
*/
var everyNth = function (A, N, start) {
// do code here
  if (start >= A.length) return -1
  var res = []
  var i = start || 0

  while (A[i]) {
    res.push(A[i])
    i += N
  }
  return res
}













// leave this code as it is
module.exports = {
  everyNth: everyNth
}
