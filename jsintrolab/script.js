/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
function isVowel(char) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}

const sum = (data) => {
  let sums = data.reduce((acc, curr) => acc + curr, 0);
  return sums;
};

const multiply = (data) => {
  if (data.length === 0) {
    return 0;
  }
  return data.reduce((acc, curr) => acc * curr, 1);
};

const reverse = (data) => {
  return data.split("").reduce((acc, curr) => curr + acc);
};

const findLongestWord = (data) => {
  return data.reduce((acc, curr) => {
    if (acc < curr.length) return curr.length;
    else return acc;
  }, 0);
};

const findLongWords = (data, length) => {
  return data.filter((str) => str.length > length);
};
/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}
console.log("-------------------- max of 2 --------------------------------");
console.log(
  "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);

console.log("-------------------- max of 3 --------------------------------");
console.log(
  "Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

console.log("-------------------- is Vowel --------------------------------");
console.log(
  "Expected output of isVowel('a') is true  " +
    myFunctionTest(true, isVowel("a"))
);
console.log(
  "Expected output of isVowel('b') is false  " +
    myFunctionTest(false, isVowel("b"))
);
console.log(
  "Expected output of isVowel('e') is true  " +
    myFunctionTest(true, isVowel("e"))
);

console.log(
  "-------------------- sum and multiply --------------------------------"
);
console.log(
  "Expected output of sum([1,2,3,4]) is 10  " +
    myFunctionTest(10, sum([1, 2, 3, 4]))
);
console.log(
  "Expected output of multiply([1,2,3,4]) is 24  " +
    myFunctionTest(24, multiply([1, 2, 3, 4]))
);

console.log("Expected output of sum([]) is 0  " + myFunctionTest(0, sum([])));
console.log(
  "Expected output of multiply([]) is 0  " + myFunctionTest(0, multiply([]))
);

console.log("-------------------- reverse --------------------------------");
console.log(
  "Expected output of reverse(qwert) is trewq  " +
    myFunctionTest("trewq", reverse("qwert"))
);
console.log(
  "Expected output of reverse(jag testar) is ratset gaj  " +
    myFunctionTest("ratset gaj", reverse("jag testar"))
);
console.log(
  "-------------------- findLongestWord --------------------------------"
);
console.log(
  "Expected output of findLongestWord(['golang','java','react']) is 6(golang)  " +
    myFunctionTest(6, findLongestWord(["golang", "java", "react"]))
);
console.log(
  "Expected output of findLongestWord(['Time Travel','length','bing']) is 11(Time Travel)  " +
    myFunctionTest(11, findLongestWord(["Time Travel", "length", "bing"]))
);
console.log(
  "-------------------- findLongWords --------------------------------"
);
console.log(
  "Expected output of findLongWords(['Time Travel','length','bing']) is ['Time Travel','length']  " +
    myFunctionTest(
      ["Time Travel", "length"].toString(),
      findLongWords(["Time Travel", "length", "bing"], 5).toString()
    )
);

console.log(
  "Expected output of findLongWords(['Algorithms','Structures','Data','JavaScript']) is ['Algorithms','Structures','JavaScript']  " +
    myFunctionTest(
      ["Algorithms", "Structures", "JavaScript"].toString(),
      findLongWords(
        ["Algorithms", "Structures", "Data", "JavaScript"],
        8
      ).toString()
    )
);

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem *10;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem == 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue + elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);

