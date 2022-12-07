// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.



describe("secretDaVinciCode", () => {
  it("takes in a string and returns a string with a coded message.", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(secretDaVinciCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(secretDaVinciCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(secretDaVinciCode(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// ReferenceError: secretDaVinciCode is not defined
// b) Create the function that makes the test pass.

// Pseudocode 
// One parameter of a string
// Using .replace
  // replace takes 2 arguments - what you are looking to replace, what you are replacing with
  // regex searches string for a specific vowel such as "a"
  // replace with number such as 4
// Chain .replace for each vowel replacement
// return result

// OR

// split string
// map over array 
  // changed current value using a conditional to change letter to number



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// Pseudocode
// Two params: array and letter
// Use .filter to iterate over array
  // use .toLowerCase() on value so it is case sensitive
  // use .includes to check if letter is in current value
// return result


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.


// Pseudocode

// Use placeholders for first unique numbers encountered
// Setup count variable to determine amount of times placeholder is seen
  // Inside forEach - update currentValue to the key in object and count to the value in object
// We can use an object to store the unique numbers and their count
// Use forEach
  // Check against the unique numbers
  // Conditional to check if value is equal to first placeholder or if first placeholder is empty - assign value to placeholder and update count + 1
    // else if - we would check against second placeholder using same logic as above only for second placeholder and count
// After iteration, use conditional to check if count 1 equals 2 AND count 2 equals 3 OR vice versa
