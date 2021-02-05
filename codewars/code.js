'use strict'

// ############################################################

//                      8 kyu

// ############################################################








// Quarter of the year
///////////////////////////////////////////////////////////////////

// const quarterOf = (month) => {
//   let a = 0;
//   if (month <= 3) {a = 1}
//   else if (month <= 6) {a = 2}
//   else if (month <= 9) {a = 3}
//   else if (month <= 12) {a = 4}
//   return a;
// }
// console.log(quarterOf(12));

// N-th Power
///////////////////////////////////////////////////////////////////

// a = [1, 2, 3, 4]

// function index(array, n){
//   if (array.includes(array[n])) {
//     let x = array[n] ** n;
//     return x
//   } else {
//     return -1
//   }
// }

// console.log(index(a, 2));

// Multiplication table for number
///////////////////////////////////////////////////////////////////

// function multiTable(number) {
//   let string = "";
//   let a = "";
//   for (i = 1; i < 11; i++) {
//     if (i < 10) {
//       a = (`${i} * ${number} = ${i * number}`) + ('\n');
//       string += a;
//     } else {
//       a = (`${i} * ${number} = ${i * number}`);
//       string += a;
//     }
//   }  
//   return string;
// }

// console.log(multiTable(5));

//  Square(n) Sum
///////////////////////////////////////////////////////////////////


// function squareSum(numbers){
//  return numbers.reduce((a, b) => a * b)
// }

// let a = [1, 2, 3, 4, 5, 6];
// let b = squareSum(a);
// console.log(b); 

// Gravity Flip (sort an array)
///////////////////////////////////////////////////////////////////

// let arr = [1, 2, 33, 4, 3, 10, 5];

// const flip = (d, a) => {
//   let output = 0;
//   let sorted = d.sort(function(x, y) {return x - y});
//   a === "R" ? output = sorted : output = sorted.reverse();
//   return output;
// }



// const flip=(d, a)=>{
// return a.sort((x,y) => d === "R" ? x-y : y-x)
// }

// console.log(flip("R", arr));

// Filling an array (part 1)
///////////////////////////////////////////////////////////////////
// adding numbers to array

// function arr(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(i);
//   }
//   return arr
// }

// console.log(arr(5));

// A wolf in sheep's clothing
///////////////////////////////////////////////////////////////////

// let array =  ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]


// function warnTheSheep(queue) {
//   let sheep = queue.length - queue.indexOf('wolf') - 1;
//   return queue.indexOf('wolf') === queue.length - 1 ? `Pls go away and stop eating my sheep` : `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`
// }

// // best practice / clever

// function warnTheSheep(queue) {
//   const position = queue.reverse().indexOf('wolf');
//   return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
// }

// console.log(warnTheSheep(array));



// Are You Playing Banjo?
///////////////////////////////////////////////////////////////////
// regex 

// function areYouPlayingBanjo(name) {
//   if (name.split("").indexOf('R') === 0 || name.split("").indexOf('r') === 0) {
//     return `${name} plays banjo`;
//   }
//   return `${name} does not play banjo`;
// }

// // or

// function areYouPlayingBanjo(name) {
//   return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }

// // or

// function areYouPlayingBanjo(name) {
//   if (name[0].toLowerCase() === 'r') {
//     return name + ' plays banjo';
//   } else {
//     return name + ' does not play banjo';
//   }
// }

// // or

// function areYouPlayingBanjo(name) {
//   return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
// }


// Invert values
///////////////////////////////////////////////////////////////////

// let numbers = [];

// function invert(array) {
//   let inverted = [];
//   for (let i = 0; i < array.length; i++) {
//     inverted.push(-array[i]);
//   }
//   return inverted;
// }

// console.log(invert(numbers));

// // or .map()

// function invert(array) {
//   return array.map( x => x === 0 ? x : -x);
// }

// // or 

// function invert(array) {
//   return array.map(i => 0 - i);
// }

// // or

// const invert = array => array.map(num => -num);

//t My head is at the wrong end!

/*

// function fixTheMeerkat(arr) {
//   return arr.reverse();
// }

function fixTheMeerkat(arr) {
  return [arr[2], arr[1], arr[0]];
}

// const fixTheMeerkat = (arr) => {
//   let x = []
//   x.push(arr[2], arr[1], arr[0])
//   return x
// }
 


console.log(fixTheMeerkat(["tail", "body", "head"]));

*/


// t############################################################
// t                                                            
// t                     7 kyu                                  
// t                                                            
// t############################################################

// Disemvowel Trolls (string manipulation)
///////////////////////////////////////////////////////////////////


// const str = "This website is for losers LOL!"

// function disemvowel(str) {
//   let a = str.replace(/A|E|I|O|U|a|e|i|o|u/g, '')
//   return a
// }
// console.log(disemvowel(str));
// disemvowel(str)

// Regular expressions, regex, multiple






// function songDecoder(song) {
// 	return (
//         song.split('WUB')
//             .filter(Boolean)
//             .join(' ')

//             // // Step 1
// 			// .replace(/WUB/g, ' ')
// 			// // Step 2
// 			// .replace(/\s+/, ' ')
// 			// // Step 3
// 			// .trim()
// 	);
// }

// // Another approach to remove all the 'WUB' appearances is to use the split method which converts it into an array, then we'd remove all the empty strings from the array using the filter method and finally we'll join the remaining words from the array back into a string.

// // So basically the steps here would be:

// // Split the string into an array
// // Filter / remove all the empty strings (' ')
// // Join the words from the array back into a string

// console.log(songDecoder("AWUBBWUBC"));
// console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
// console.log(songDecoder("WUBAWUBBWUBCWUB"));

// Unique In Order:

// var uniqueInOrder=function(iterable) {
// 	var list = iterable.split("");
// 	var list2 = [];
// 	  for (i = 0; i < list.length; i++) {
// 		if (list[i] === list[i+1]) {
// 		   continue;
// 		  } else {
// 			list2.push(list[i]);
// 		  }
// 	  }
// 	return list2;
	
//   }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder([1, 2, 3]));

// Equal Sides Of An Array
////////////////////////////////////////////////////////////

// function findEvenIndex(arr)
// {
//   let left = 0;
//   let right = arr.reduce((a, b) => a + b, 0);
//   let iteration = 0;
//   for (i = 0; i < arr.length; i++) {
//     if ((left - arr[i]) !== (right - arr[i])) {
// 	  left += arr[i];
//     iteration++;
// 	  if (left === right) {
// 		return iteration - 1;
//     }
//       right -= arr[i];
//     }
//   }
// }

// console.log(findEvenIndex([1,2,3,4,5,6]));


  // Find the odd int
  ////////////////////////////////////////////////////////////
  // https://medium.com/@jonghyeoklee90/find-the-odd-int-360100f3222c


/* 

What I am trying to find out here is to return the number which is the ‘odd’ meaning a number left without another pair. By using nested loops, the elements are being compared and will return ‘true’ if they are paired.
Since only two ‘true’ will be returned for the paired elements, the odd number will return odd(one or three) ‘true’. Thus,

findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
if (count % 2 !== 0) {
      return arr[i];
    }
    
because three ‘true’ are returned for ‘5’, it will return ‘5’ which is the odd int in this array.


*/

// const a = [1, 1, 2,]

// function findOdd(array) {
//   let count = 0;
//   let arr = array.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         count++;
//       }
//     }
//     if (count % 2 !== 0) {
//       return arr[i];
//     }
//   }
// }

// console.log(findOdd(a));

//t Number to digit tiers 

/*

// 420 should return ["4", "42", "420"]
// 2017 should return ["2", "20", "201", "2017"]
// 2010 should return ["2", "20", "201", "2010"]

// function createArrayOfTiers(num) {
// let y = [];
// let x = num
//   .toString();

// for (let i = 0; i < x.length ; i++) {
//   y.push(x.slice(0, i + 1))
// }

//   return y
// }


//  tutaj dzięki spread operator mamy od razu tablicę z odpowiedniej ilości el (3 cyfry - 3 el) - i nastepnie .map() robi loop przez tablicę załóżmy 3 razy i za każdym loop dodaje value do stringa prev

function createArrayOfTiers(num) {
  let prev = '';
  return [...num + ''].map((value) => { 
      return prev += value;
  });
}

console.log(createArrayOfTiers(420));

// let x = 234
// let prev = ''
// console.log([...x + ''].map((value => prev = prev + value )));

*/ 

// t############################################################
// t                                                            
// t                     6 kyu                                  
// t                                                            
// t############################################################


//t Replace With Alphabet Position
//todo regex array methods map match charCodeAt()

/*

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let replaced = [];
  text
    .toLowerCase()
    .split('')
    .filter(mov => alphabet.includes(mov) ? replaced.push(alphabet.indexOf(mov) + 1) : 1)

  return replaced.join(' ')
}

// 1.

// const x = alphabetPosition("The sunset sets at twelve o' clock.");
// console.log(x);

// function alphabetPosition(text) {
//   return text
//     .toUpperCase()
//     .match(/[a-z]/gi)
//     .map( (c) => c.charCodeAt() - 64)
//     .join(' ');
// }

// 2.

// function alphabetPosition(text) {
//   return text.match(/[a-zA-Z]/g).map( (el) => el.toLowerCase().charCodeAt() - 96 ).join(' ');
// }

*/