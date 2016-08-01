# Testing
You can run tests to check your work!
In the `test/` directory are files that test the code you're writing in the
`src` directory. The tests are named after the challenge files with '-test.js'
appended at the end. 
<br>
For example: `functions-1.js` is tested by the `test/functions-1.js` file. To
run that test do:
```bash
$ npm test functions-1
```
So when you want to test some code you've written into a file do:
`$ npm run <filename without extension>`

The test output will be printed to the terminal a la:
```bash
  Test repeater function

    ✔ `repeater` function creates an array
    ✔ should make an array of 3 "beeps"
    ✔ Should return empty array if N < 1

    total:     3
    passing:   3
    duration:  16ms
```


