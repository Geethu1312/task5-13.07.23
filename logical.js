// 1.Write a function removeVowels(str) that takes a string as input and returns a new string where all the vowels (a, e, i, o, u) are removed.
// Example:
// removeVowels("javascript");  // "jvscrpt"

function removeVowels(str) {
  const regex = /[aeiouAEIOU]/g;

  const result = str.replace(regex, "");

  return result;
}
const inputString = "javascript";
const resultString = removeVowels(inputString);
console.log(resultString);

// 2.Write a function isPangram(str) that takes a string as input and returns true if the string is a pangram (contains every letter of the alphabet at least once), and false otherwise.
// Example:
// isPangram("Hello world");                                       // false

function isPangram(str) {
  str = str.toLowerCase();
  const alphabet = Array(26).fill(false);
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    if (char >= 97 && char <= 122) {
      alphabet[char - 97] = true;
    }
  }
  return alphabet.every((letter) => letter === true);
}
const inputStr = "Hello world";
const result = isPangram(inputStr);
console.log(result);

// 3.Write a function getUniqueValues(arr) that takes an array as input and returns a new array with only the unique values (removing any duplicates).
// Example:
// getUniqueValues(["a", "b", "a", "c", "b"]);         // ["a", "b", "c"]
function getUniqueValues(arr) {
  const uniqueSet = new Set(arr);
  const uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}
const inputArray = ["a", "b", "a", "c", "b"];
const resultArray = getUniqueValues(inputArray);
console.log(resultArray);

// 4.Write a function findCommonElements(arr1, arr2) that takes two arrays as input and returns a new array containing the common elements that appear in both arrays.
// Example:
// findCommonElements(["apple", "banana", "pear"], ["banana", "orange"]);    // ["banana"]

function findCommonElements(arr1, arr2) {
  const commonElements = arr1.filter((element) => arr2.includes(element));
  return commonElements;
}

const array1 = ["apple", "banana", "pear"];
const array2 = ["banana", "orange"];
const resultArr = findCommonElements(array1, array2);
console.log(resultArr);

// 5.Write a function isPerfectNumber(n) that takes a positive integer n as input and returns true if n is a perfect number, and false otherwise. A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself).
// Example:
// isPerfectNumber(28);    // true (28 = 1 + 2 + 4 + 7 + 14)

function isPerfectNumber(n) {
  if (n <= 0) {
    return false; // Perfect numbers are positive integers
  }
  // Initialize the sum of divisors to 0
  let sumOfDivisors = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      sumOfDivisors += i;
      if (i !== n / i) {
        sumOfDivisors += n / i;
      }
    }
  }

  return sumOfDivisors - n === n;
}
const number = 28;
const isPerfect = isPerfectNumber(number);
console.log(isPerfect);
