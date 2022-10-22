// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//Do not use numbers to reference the last element, find it programmatically,  ages[7] – ages[0] is not allowed! 
console.log ('1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.') 
console.log ('1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.')
console.log ('Do not use numbers to reference the last element, find it programmatically,  ages[7] – ages[0] is not allowed!')

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

function lastMinusFirst (ages){
  return ages[ages.length-1] - ages [0];
}

console.log(lastMinusFirst(ages));

// 1.b Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
console.log('1.b Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).' );

ages.push(5);
console.log(lastMinusFirst(ages));

// 1.c Use a loop to iterate through the array and calculate the average age.
console.log('1.c Use a loop to iterate through the array and calculate the average age.');

let total = 0
for (i=0; i < ages.length; i++) {
  total += ages[i];
}
var averageAge = total / ages.length;
console.log(averageAge);

// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
console.log('2. Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob.');
console.log('2a. Use a loop to iterate through the array and calculate the average number of letters per name.');

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let lengths = names.map(function (element){
  return element.length;
});

let totalLetters = lengths.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
});

let avgLetters = totalLetters / names.length;

console.log(avgLetters);

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
console.log ('2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.');

let allNames = "";

  for (let i = 0; i < names.length; i++) {
      allNames += names[i] + ' '
   }

console.log(allNames);

// 3. How do you access the last element of any array?
console.log ('3. How do you access the last element of any array? ANSWER: You access the last element in an array using the pop() method or .length -1.');

// 4. How do you access the first element of any array?
console.log ('4. How do you access the first element of any array? ANSWER: You access the last element in an array using the shift() method or array [0].');

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log('5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.');

let nameLengths = names.map(function (element) {
    return element.length;
});
console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
console.log ('6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.');

let sum = nameLengths.reduce(function (accumulator, currentValue) {
return accumulator + currentValue;  
});
console.log (sum);

//.7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
console.log('7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.');

function wordRepeat(word, n) {
  let result = '';
  for (i = 0; i < n; i++) {
      result += word;
  }
  return result;
}
console.log(wordRepeat('test', 7))

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
//The full name should be the first and the last name separated by a space.
console.log('8. Write a function that takes two parameters, firstName and lastName, and returns a full name.');
console.log('The full name should be the first and the last name separated by a space.');

function fullName (firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log (fullName ('Drew', 'Weisel'));

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log ('9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.');

let numbersArray = [1, 10, 220]
let sumNumbers = numbersArray.reduce(function (accumulator, currentValue){
return accumulator + currentValue;  
})
if(sumNumbers > 100) {
  console.log('True')
};

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log('10. Write a function that takes an array of numbers and returns the average of all the elements in the array.')

let numArray2 = [1, 2, 3, 4, 5, 3, 3, 500];

let numArray2Sum = numArray2.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
});

let numArray2Avg = numArray2Sum / numArray2.length;

console.log(numArray2Avg);

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
console.log('11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.');

let array1 = [1, 2, 3, 4, 5, 3, 3, 10];

let array1Sum = array1.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
});

let array1Avg = array1Sum / array1.length;

let array2 = [1, 2, 3, 4, 5, 3, 3, 1];

let array2Sum = array2.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
});

let array2Avg = array2Sum / array2.length;

function arrayCompare() {
  if(array1Avg > array2Avg) {
   return true
}};

console.log(arrayCompare());

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log('12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.');

let isHotOutside = true;
let moneyInPocket = 11;

function willBuyDrink() {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true}
};
console.log(willBuyDrink());

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
console.log('13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.');

function codingHoursTilExhaustion(n) {
  let codingHoursTilExhaustion = n;

  for (codingHours = 1; codingHours < codingHoursTilExhaustion; codingHours++) {
  console.log('You have only been coding ' + codingHours + ' hour(s). Keep coding!');
  } 
  return 'Nice work, now keep coding!';
}
console.log(codingHoursTilExhaustion(10))

//This function enumerates the value for codingHours using a for loop and returns a messagge until it is no longer less than the value for codingHoursTilExhaustion. 
//Then it returns a different message. I created it because I'm exhausted, but I must keep coding!