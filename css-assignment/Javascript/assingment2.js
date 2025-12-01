/*this is my second assignment of Javascript
Name:Francis Chibueze
Date:28/11/2025*/
//Part2:
//challeng 1:Age Classifier
//write a function classifyAge(age) that returns:
function classifyAge(age){
  if (age < 13) {
    return "child"
  }else if (age >= 13 && age < 19) {
    return "teenager"
  }else if (age >= 20 && age <= 59) {
    return "Adult"
  }else if (age >= 60) {
    return "Senior"
  }
}
/*Before you can get the return u will a have to create a variable that classifies age */
let age1 = 70;
let cartegory = classifyAge(age1);
console.log(`Age ${age1} is classified as: ${cartegory}`);


//challenge 2:Number sum
//write a function sumRange (start,  end)that returns the sum of all numbers from start toend (invlusive)
//Solution:
function sumRange(start,  end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(1,  10));// it will be 55

//challenge 3:Array Statistics:
/*Write a function getstats (numbers) that takes an array of numbers and returns an object with*/
function getstarts(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return "input should be a non-empty array of numbers";
  }
  //calculate the minimum andmaximum using math.min/math.max
  let minVal = Math.min(...numbers);
  let maxVal = Math.max(...numbers);
  //calculate the sum using the array. prototype.reduce method
  let sum = numbers.reduce((total, currentVal)=> total + currentVal, 0);
  //calculate the average
  let average = sum / numbers.length;
  //Return the result in object or array
  return {
    min: minVal,
    max: maxVal,
    average: average
  };
}

let data = [10, 20, 30, 40, 50, 60, 70];
let stats = getstarts(data);
console.log(stats);//you will get {min 10, max 70, average 40}

//challenge 4:String Reverser
/*Write a function reverseString (str) that returns the string reversed*/
//Solution:
function reverseString(str) {
  return str.split('').reverse().join('');
}
let originalStr = "comfortable with me";
let reverseStr = reverseString(originalStr);
console.log(reverseStr);//em htiw elbatrofmoc

//challenge 5:Prime Number Checker
//write a function isprime(num) that returns true is the number is prime, false otherwise
function isprime(num) {
  if (num <= 1) {
    return false;
  }else if(num > 1) {
    return true;
  }
}
let numberTocheck = 17;
console.log(`${numberTocheck} is a prime number: ${isprime(numberTocheck)}`);//it will return true