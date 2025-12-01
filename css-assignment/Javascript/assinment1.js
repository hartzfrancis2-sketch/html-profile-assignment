/*Name:Francis Chibueze
Date:29/11/2025
                                              Assignment 3*/
/*Challenge 1 part 2
create an array of 5 product with properties name,price,quantity, cartegory
Answer*/
let cart = [
  {name:"laptop", price:300, quantity: 30, cartegory:"electronics"},
  {name:"trouser", price:100, quantity:25, cartegory:"clothes"},
  {name:"television", price:400, quantity: 40, cartegory:"electronics"},
  {name:"mouse", price:50, quantity: 100, cartegory:"electronics"},
  {name:"shirt", price:150, quantity:50, cartegory:"clothes"},
]             
//calculating price
let totalPrice = cart.reduce((sum,item)=> {
  return sum +(item.price * item.quantity);}, 0);
  console.log(`Total: $${totalPrice}`);//it will be 40000
let product = cart.map(item => item.cartegory);
console.log(product);//after finding the cartegories u will get electronics and clothes
let lowStock = cart.filter(item => item.quantity < 40);
console.log(lowStock);//you will get laptop and trouser
let expensive = cart.filter(item => item.price >= 390);
console.log(expensive);//television
let lowProduct = cart.some(item => item.quantity === 0);
console.log(lowProduct);
//Challenge 2:student Grading Processor
//Given an array of Student with name,score (array of 3 test score);
let students = [
  {id:1, name: "chuks", scores:[85,90,78]},
  {id:2, name: "obi", scores:[92,88,95]},
  {id:3, name: "ikenna", scores:[78,82,75]}
];

  //challenge 3:Array Transformation
//get sum of even numbers
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let evenNumbers = numbers.filter(num=> num % 2 === 0);
  console.log(evenNumbers);
  //creating arrays with squres of odd numbers
  let oddNumbers = numbers.filter(num => num %2 !== 0)
  .map(oddNumber => oddNumber * oddNumber);
  console.log(oddNumbers);
  //find number greater than 7
  let getNumber = numbers.find(num => num > 7);
  console.log(getNumber);
//checking if all numbers are greater than zero
let check = numbers.every(num => num > 0);
console.log(check);
//create array with "even"or "odd" labels for each
// in this process i prefer using fuction
function seperateEvenOdd(numbers){
  let even = [];
  let odd = [];
  for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
  }else {
    odd.push(numbers[i]);
  }
  }
  return {even: even, odd: odd};
}
let seperated = seperateEvenOdd(numbers);
console.log(seperated.even);//you will get 2,4,6,8 and 10
console.log(seperated.odd);// you will get 1,3,5,7,9
//challenge 4:Shopping Cart
//Build a shopping cart system with these operations
let cart2 = [
  {id:1, product: "laptop", price:1000, quantity: 1},
  {id:2, product: "mouse", price:25, quantity: 2},
  {id:3, product: "Keyboard", price:75, quantity: 1}
]
cart2.push({id:4, product:"Phone", price:230, quantity:2});
console.log(cart2);
//removing item using filter
let removeItem = cart2.filter(item => item.id !== 1);
console.log(removeItem);
// updating using map
let updateItem = cart2.map (item =>{
if (item.id === 2) {
  return{...item, quantity:5};
}
return item;
});
console.log(updateItem);
//calculate total cart value
let totalItem = cart2.reduce((sum, item) =>{
  return sum + (item.price * item.quantity);
}, 0);
console.log(totalItem);
//apply 10% discount to items over $50
//i will use function method
function applyDiscount (cart2) {
  let discount_rate = 0.10;
  let price_trsh = 50;

  // using map method to update discount

  let updatedCart = cart2.map (item => {
    if (item.price > price_trsh) {

      //here you multipl the price item with the discount_rate

      let discountAmount = item.price * discount_rate;

      //you create new variables to to substract item price to the already multiplied discountamount
      let newPrice = item.price - discountAmount;
      return {
        item,
        price:parseFloat(newPrice.toFixed(2)),
        //here i identified the discount amount applied
        discountApplied: '10% goods over 50'
      };
    }
    return item;
  })
  return updatedCart;
}

let discountedCart = applyDiscount(cart2);
console.log("discounted Cart:", discountedCart);


//challenge 5:Data Analysis
let sales=[
  {month:"jan", amount: 15000, region:"Lagos"},
  {month:"feb", amount: 18000, region:"abuja"},
  {month:"jan", amount: 12000, region:"Lagos"},
  {month:"feb", amount: 20000, region:"abuja"},
]

let monthSale = sales.reduce((sum, item)=> {
  return sum + item.amount;
}, 0);
console.log(monthSale);

let lagosOnly = sales.filter(sales => sales.region === "Lagos");
console.log(lagosOnly);
let averageMonth = sales.reduce ((sum, item) => {
  return sum + item.amount;
}, 0)/ sales.length;
console.log(averageMonth);
let monthHighest = sales.find(sales=> sales.amount >= 20000);
console.log(monthHighest);
let ifany = sales.some(sales => sales.amount > 25000);
console.log(ifany);





