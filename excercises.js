/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in JavaScript.
// ---------------------


function max(num1,num2) {
  if (num1 > num2) {
    return num1;
  }
  else if (num2 > num1) {
    return num2;
  }
  else {
    return "numbers are equal";
  }
};



// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(number1, number2, number3) {
 if (number1 > number2 && number1 > number3) {
    return number1;
  }
  else if (number2 > number1 && number2 > number3) {
    return number2;
  }
  else if (number3 > number1 && number3 > number2) {
    return number3;
  }
  else {
    return "numbers are equal";
  }
};


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------


function getVowels(letter) {
  // var alphabet = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", 
  // "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
  // "w", "x", "y", "z"];
  var vowels = ["a", "e", "i", "o", "u"];
  // vowels.forEach(function(array,i) {
  //     if (letter === array) {
  //       return "vowel";
  //     }
  //  });
  // var getVowels = function(letter) {
    for (vIndex = 0; vIndex < vowels.length; vIndex++) {
        if (letter == vowels[vIndex]) {
        return "vowel";
      }
    };
    return "false";
  // }
}


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
//For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbers) {
// var numbers = [10, 20, 30, 40];
  numbers.reduce(function(memo, item) {
    return memo + item;
  });
}

var numbers = [1, 2, 3, 4];
var multiply = numbers.reduce(function(memo, item) {
  return memo * item;
});

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

// function reverse(string)
var string = "Katherine Trammell";
    string.split("");
    string.split("").reverse();
    string.split("").reverse().join("");
  function reverseString(string) {
    return string.split("").reverse().join("");
  }
  function reverseSentence(string) {
    var words = string.split("");
    var reverseWords = [];
    for (var i = 0; i < words.length; i++) {
       reverseWords.push(reverseString(words[i]));
    }
  return reverseWords.join(" ");
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

//

var colors = ["red", "blue", "green", "yellow", "aquamarine", "pink", "fuschia"];

var findLongestWords = colors.filter(function(words) {
  count = words.length
  colors.forEach(function(count) {
    if
  })
  return words.length >= 10;
});

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

var cities = ["Detroit", "Madison Heights", "Troy", "St. Petersburg", "Las Vegas", "Tampa", "Frankenmeuth"];

var findLongWords = cities.filter(function(words, i){
    return words.length >= 10;
});

function(filterLongWords) {}



// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}
