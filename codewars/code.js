'use strict'

// ############################################################

//                      8 kyu

// ############################################################


//t Pre-FizzBuzz Workout #1

// function preFizz(n) {
//   let arr = [];
//   for (i=0; i < n; i++) {
//     arr.push(i+1)
//   };
//   return arr
// }

// or

// const preFizz = n => Array.from({length: n}, (_, i) => i + 1)

// or 

// let preFizz = n => [...Array(n)].map((x, i) => i+1);

// preFizz(1);
// preFizz(8);




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

//t sum of positive 

function positiveSum(arr) {  
  let x;
  x = arr.filter(mov => mov > 0);
  return x.length ? x.reduce((a,b) => a+b) : 0;
  }

let array = [1,-1,2,-2,3,4,5,10];

// console.log(positiveSum(array));

console.log(array);




// t############################################################
// t                                                            
// t                     7 kyu                                  
// t                                                            
// t############################################################


//t Sort by Last Char: 
// todo sorting alphabeticaly by last char 

// users.sort(function(a, b){
//     if(a.firstname < b.firstname) { return -1; }
//     if(a.firstname > b.firstname) { return 1; }
//     return 0;
// })

let last = (x) => x.split(' ').sort((a, b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1));

console.log(last('man i need a taxi up to ubud'));


let xyz = ['aaz', 'aamac', 'ajb', 'waja'];
console.log((xyz[0].charCodeAt(0)));

//t Disemvowel Trolls (string manipulation) 
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




//t Equal Sides Of An Array
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

//t Regex validate PIN code 

/*

let pinCheck = function validatePIN (pin) {
  let reg = /^\d+$/;
  let length = pin.toString().length;
  console.log(length);
  return reg.test(pin) && (length == 4 || length == 6)  ? true : false
}

console.log(pinCheck('2222'));

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

*/

//t Life Path Number 

// from: "1879-03-14"

// year: 1 + 8 + 7 + 9 = 25; 2 + 5 = 7
// month: 0 + 3 = 3
// day: 1 + 4 = 5
// final result: 7 + 3 + 5 = 15; 1 + 5 = 6

// solution framework

    // 1. Sprowadzenie stringa do tablicy z trzema elementami typu int (rok, miesiąc, dzień)

    // 2. Stworzenie nowej tablicy w której przechowane będą dodane do siebie cyft z każdego elementu z tablicy pierwotnej 

    // 3/ Napisanie funkcji, której za argument podajemy liczkę, której cyfry zostaną zsumowane 

      // Jeśli argument jest > 9 to odpal funkcje, jeśli w przedziale od 0-9 - return (agr). 
      
      // By zsumować cyfry składowe dowolnej liczby, należy z liczby stworzyć stringa, następnie z tego stringa stworzyć tabele, następnie oddzielne stringi tej tabeli zmienić na typ Number

      // 
    // 4. dodanie do siebie trzech elementów 

//todo rozwiązanie z neta: 

// const birthDate = "1879-03-14"

// const reduceToOne = (x) => {
//   if (x > 9) {
//     let digits = x.toString().split('').map(mov => parseInt(mov));
//     let y = digits.reduce((a, b) => a + b);
//     return reduceToOne(y)
//   }

//   return x;

// }

// const lifePathNumber = (dateOfBirth) => {
//   let arr = dateOfBirth
//     .split('-')
//     .map(mov => parseInt(mov)); // [1879, 3, 14]
//   let arr2 = arr.map(mov => reduceToOne(mov));
//   return reduceToOne(arr2.reduce((a, b) => a + b));
// }
  
//todo ------------------- moje rozwiązanie: 

// const birthDate = "1879-03-14"

// const reduceToOne = (num) => {
//   if (num > 9) {
//     let arr = num.toString().split('').map(mov => Number(mov));
//     let reduced = arr.reduce((a,b) => a+b)
//     return reduceToOne(reduced)
//   }

//   return num
// } 

// const lifePathNumber = function (birthDate) {
//   let dateOfBirth = birthDate
//     .split('-')
//     .map(mov => +mov)
//   let numbers = dateOfBirth.map(mov => reduceToOne(mov));
//   let lpn = numbers.map(mov => reduceToOne(mov));
//   let y = lpn.reduce((a,b) => a+b);

//   return reduceToOne(y)
// }


//---------------- to samo: 

// function lifePathNumber(dateOfBirth) {
//   return dateOfBirth.replace(/\D/g,'') % 9 || 9;
// }

//----------------

// function lifePathNumber(dateOfBirth) {
//   var num = dateOfBirth.split("-").join("");
//   console.log(num);
  
//   do {
//     num = (""+num).split("").reduce((p,c) => +p+ +c);
//   } while(num > 9);
  
//   return num;
// }

// function lifePathNumber(dateOfBirth) {

//   var number = dateOfBirth.split('-').join("");
  
//   do {
//   number = (''+number).split('').reduce((a,b) => +a + +b)
//   console.log('number2 ->', number);

//   } while (number > 9);

//   return number
// };
// //-----------------

// console.log(lifePathNumber(birthDate));

//t Correct the time-string
//todo time formating, regex 

// Null or Empty
//  Test.assertEquals(timeCorrect(null), null);
//  Test.assertEquals(timeCorrect(""), "");

// Invalid Format
//  Test.assertEquals(timeCorrect("001122"), null);
//  Test.assertEquals(timeCorrect("00;11;22"), null);
//  Test.assertEquals(timeCorrect("0a:1c:22"), null);

// // Correction Tests
//  Test.assertEquals(timeCorrect("09:10:01"), "09:10:01");
//  Test.assertEquals(timeCorrect("11:70:10"), "12:10:10");
//  Test.assertEquals(timeCorrect("19:99:09"), "20:39:09");
//  Test.assertEquals(timeCorrect("19:99:99"), "20:40:39");
//  Test.assertEquals(timeCorrect("24:01:01"), "00:01:01");
//  Test.assertEquals(timeCorrect("52:01:01"), "04:01:01");

// 1. Przetwarzać tylko dane z tymi znakami: 0-9 oraz :, w przypadku błednego formatu - return null oraz dodatkowo jak wyżej

//todo mój program, działający, bez refaktoryzacji 

/* 

let addMin = 0
let addHour = 0

let decToTime = (number, index) => {
   number = +number + addMin
   index == 2 && addMin > 0 ? addHour = 1 : 1;
   addMin = 0;

   if (index == 2 && number > 23) 
   {

    do 
    {
    number = number - 24;
    number < 10 ? number = '0' + number : 1;
    }
    while (number > 24)
    return number;

   } else if (index == 2 && number < 24) 

   {
      number < 10 ? number = '0' + number : 1;
      return number;
   }

   if (number > 59) 
   {
     number = number - 60;
     addMin = 1;
     index == 2 && addHour > 0 ? number = number + addHour : 1; 
     number < 10 ? number = '0' + number : 1;
     return number;

   } else {

     number = +number + addMin;
     number < 10 ? number = '0' + number : number;
     return number;
   }
};

let resetTime = (string) => {

  let arr = string.split(':').reverse();

  let convertedArray = arr.map(function(mov, i) {   
    return decToTime(mov, i)
  }); 
  let end = convertedArray.reverse().join(':');
  return end;

  }

function timeCorrect(timestring) {

let acceptableFormat = /^([0-9]?[0-9]|2[0-9]):([0-9][0-9])(:[0-9][0-9])?$/.test(timestring);

  if (acceptableFormat) {
    return resetTime(timestring);
  } if (timestring === '') {
    return '';
  } return null;
}

console.log(timeCorrect('24:99:22'));
// console.log(timeCorrect("19:99-09"));

// console.log(("00:00:00").split(':'));

*/

//todo analogiczny przykład: 

/*

function timeCorrect(timestring) {
  if(!timestring) {
      return timestring;
  };
  
  if (!/\d\d:\d\d:\d\d/.test(timestring)) {
    return null
 }
 let arr = timestring.split(':');
 
  if(arr[2] > 59) {
      var least = Math.floor(arr[2] / 60);

        // jeżeli zapis będzie błędny (ponad 59, np 79), to funkcja Math.floor(79 / 60); zwróci zaokrąglenie w dół w zakresie od 99/60 do 0/60 będzie to zawsze albo 1 albo 0! 

      arr[2] = arr[2] % 60;
      arr[1] = 1*arr[1] + least;

        // przekonwertowanie arr[1] (minuty) na number oraz dodanie reszty z sekund (jeśli istnieje)
  }
  if(arr[1] > 59) {
      least = Math.floor(arr[1] / 60);
      arr[1] = arr[1] % 60;

      arr[0] = 1*arr[0] + least;

        // dodanie ewentualnej reszty z minut do godzin

      console.log(arr[0]);
  }
  if(arr[0] > 23) {
      arr[0] = arr[0] % 24;

        // modulo 24 z dowolnej godziny zawsze poda resztę, odpowiadającą prawidłowemu przeliczeniu godzin

  }
  
  return arr.map(function(item){
      if (item < 10) {
          item = '0' + item;
      }
      return item;
  }).join(':');
};

console.log(timeCorrect('22:99:99'));

*/

//t Spoonerize Me 

// function spoonerize(words) {
  
//   let arr = words.split(' ');
//   let first = arr[0].charAt(0);
//   let second = arr[arr.length -1].charAt(0);

//   arr = arr.map((mov, i) => {
//     return i == 0 ? mov.replace(mov[0], second) : i == arr.length-1 ? mov.replace(mov[0], first) : 1;
//   });
//   return arr.join(' ')
// };


// let Test;

//  Test.describe("Basic Tests", function() {
//   Test.assertEquals(spoonerize("nit picking"), "pit nicking");
//   Test.assertEquals(spoonerize("wedding bells"), "bedding wells");
//   Test.assertEquals(spoonerize("jelly beans"), "belly jeans");
// });

// function spoonerize(words) {
//   let word = words.split(' ');
//   console.log(word[0].slice(1));
//   return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ')
// }

// console.log(spoonerize("nit picking"));

//t Double Trouble 
// i-- o jeden wstecz w tabeli podczas pętli
// one iteration back by for loop

/*

let trouble = (x, y) => { 

  for (let i=0; i<x.length; i++) {
    console.log(i);
    if (x[i] + x[i+1] === y) {
      x.splice(i+1, 1);
      i--; // go one iteration back to check condition with new numbers after deleting x[x+1];
    }
  }

  return x;
};


let arr = [4, 1, 1, 1, 4];

console.log(trouble(arr, 2));

// console.log(arr.slice([], 1));

*/

// t############################################################
// t                                                            
// t                     6 kyu                                  
// t                                                            
// t############################################################


//t Unique In Order:
//todo array filter 
/*

const uniqueInOrder=function(iterable) {
  let output = [];

  const arrProcessing = (arr) => {
    for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i+1]) {
		   continue;
		  } else {
			output.push(arr[i]);
		  }
	  }
    return output;
  }

  typeof iterable == 'object' ? arrProcessing(iterable) : arrProcessing(iterable.split(''));

return output;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1, 1, 2, 3]));

*/ 

  //todo better way:

/*
  
  function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i]) //fixme good practice 
      }
    }
    
    return result
  };
  
*/

  //todo also good one #filter #[...] 

  
// const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])

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

//t sort the odd 
//todo moving element in array 

/*

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const oddsArr = [5, 3, 2, 8, 1, 4];

// 1. Stworzyć tabelę z nieparzystymi elementami
// 2. Posortować tabelę z niep el w rosnącej kolejności
// 3. Loop przez tabele i przy negatywnych wstawić je z tabeli odd:

function sortArray(array) {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b);
  console.log(odd);
  return array.map(x => x % 2 ? odd.shift() : x);
  // 1%2 = 1 czyli true czyli dla neg wstaw pierwszy element z tabeli odd
}

console.log(sortArray(oddsArr));

*/

//t Format a string of names like 'Bart, Lisa & Maggie'

// objects operations

/*

let obj = ([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]);

  let output = [];
  let oLth = obj.length;

  for (let i = 0; i < obj.length; i++) {
    i == oLth -1 || i == oLth -2 ? output.push(obj[i].name) : output.push(obj[i].name + ',')
    i == oLth -2 ? output.push('&') : 1;
  }

console.log(output.join(' '));

*/

//t Who likes it? 

// first atempt with switch case: 

/*

function likes(names) {
  
  let output;
  
  switch (true) {
      case (names.length == 0):
        output = 'no one likes this';
        break
      case (names.length == 1):
        output = `${names[0]} like this`;
        break
      case names.length == 2:
        output = `${names[0]} and ${names[1]} like this`;
        break
      case names.length == 3:
        output = `${names[0]}, ${names[1]} and ${names[2]} like this`;
        break
      case names.length > 3:
        output = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
        break
      
  }
  
  return output;
}

*/ 

// atempt with Math.min()

/*

function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]

  //todo [Math.min(4, names.length)] 

  // This will either be 0-4 with anything more than four being 4. From there that value dictates which template in the return object to use...

  // return {1: "I'm value one"}[1]

// this gives you "I'm value one"

}

let names = ['Krzysztof', 'Mariusz'];

// console.log('Math.min() -', Math.min(4, names.length));

/*

// another switch atempt: more readable: 

/*

function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

*/

// console.log(likes(['Krzysztof', 'Mariusz']));

//t Title Case 

/*

function titleCase(title, minorWords) {
  let arr = title.toLowerCase().split(' ');
  let output = [];

  if (minorWords) {
    
    arr.map((mov, i) => {
      if (i == 0) {
        output.push(mov[0].toUpperCase() + mov.slice(1))
      } else {
      minorWords.toLowerCase().split(' ').includes(mov) && i > 0 ? output.push(mov) : output.push(mov[0].toUpperCase() + mov.slice(1));
      }
    })
    
  } else {
     arr.map((mov, i) => {
        output.push(mov[0].toUpperCase() + mov.slice(1))
       });
  }

  return output.join(' ');
};

// console.log(['into', 'a', 'b'].includes('in')); !!!!!

*/

//todo best practice: 

/*

function titleCase(title, minorWords) {
  var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];

    // jeśli minorWords jest różny od undefined - przypisz jako 'minorWords.toLowerCase().split(' ')', jeśli undefined przypisz pustą tablice 

  return title.toLowerCase().split(' ').map(function(v, i) {
    if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
}

console.log(titleCase("First a of in", "an often into")); // expected "First A Of In"

*/


//  Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
//  Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
//  Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')


//t IQ Test 

// moje

/*

function iqTest(numbers){
  let odd = 0;
  let even = 0;
  let x;
  let arr = numbers.split(' ');
  arr.forEach(mov => mov % 2 ? odd += 1 : even += 1);
  odd == 1 ? arr.forEach((mov, i) => mov % 2 ? x = i+1 : 1) : arr.forEach((mov, i) => mov % 2 == 0 ? x = i+1 : 1);
  return x
  
}

*/

// another approach:

function iqTest(numbers){
  let odd = [];
  let even = [];
  let x;
  let arr = numbers.split(' ');
  
  arr.forEach(mov => mov % 2 ? odd.push(mov) : even.push(mov));
  x = odd.length == 1 ? odd[0] : even[0];
  return toString(x);
}

// better: 

/*

function iqTest(numbers){
  numbers = numbers.split(' ')
  
  var evens = []
  var odds = []
  
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] & 1) {

      // Because the number 1 bits are 00000001, when number & 1, will keep the number last bit is previous, and others bit change to 0.

      // So if the number is odd, the last bit will be 1, the number & 1 result will be 1. Otherwise, the last bit will be 0, the result will be 0.

      odds.push(i + 1)
    } else {
      evens.push(i + 1)
    }
  }
  
  return evens.length === 1 ? evens[0] : odds[0]
}

*/

iqTest("2 4 7 8 10");
iqTest("1 2 2");