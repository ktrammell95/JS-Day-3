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
  var vowels = ["a", "e", "i", "o", "u"];
  var hasVowel = false;
  vowels.forEach(function(currentVowel) {
      if (letter === currentVowel) {
        hasVowel = true;
      }
   });
  return hasVowel;
}


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
//For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------



function sum(numbers) {
  var length = numbers.length;
  var total = 0;
  for (i = 0; i < length; i++) {
    total += numbers[i];
  }
  return total;
};

var multiply = function(num) {
  var length = num.length;
  var total = 1;
  for (i = 0; i < length;  i++) {
    total *= num[i];
  }
  return total;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string) {
  return string.split("").reverse().join("");
}
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

//allow array input
//take words in array and seperate them out
  //take words and count the characters
//take each count and compare to other counts
//return the word with largest number 

function findLongestWord(words) {
  var longest = 0;
  var longestName = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
        longest = words[i].length;
        longestName = words[i];
    }
  };
  return(longestName);
}; 


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(array, int) {
  var length = array.length;
  var longWords = [];
  for (i = 0; i < length; i++) {
    if (array[i].length > int) {
      longWords[longWords.length] = array[i];
    }
  }
  return longWords;
}

// var cities = ["Detroit", "Madison Heights", "Troy", "St. Petersburg", "Las Vegas", "Tampa", "Frankenmeuth"];


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
function charFreq(string) {
    var count = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (count[character]) {
           count[character]++;
        } else {
           count[character] = 1;
        }
    }

    return count;
};



function getFrequency(string) {
    var freq = {};
    
        var character = string.charAt(i);
        
    }

    return freq;
};

//convert to array of chars
//chars
// create map object
// loop over chars
  //get current char - currentChar
  // does mapObj have property for currentChar?
    //true
      // increment that property
    //false
      //add that property
      //give it the value of one
