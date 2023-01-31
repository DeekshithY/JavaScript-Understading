//slice() Method                          
const fruits = ['apple', 'banana', 'kiwi', 'mango']; // Array of fruits
                                                                          
console.log(fruits.slice(1));   //Output: [ 'banana', 'kiwi', 'mango' ]         elements from 1st index
console.log(fruits.slice(-2));  //Output: [ 'kiwi', 'mango' ]                   last 2 elements
console.log(fruits.slice(-1));  //Output: [ 'mango' ]                           last 1 element
console.log(fruits.slice(1,3)); //Output: [ 'banana', 'kiwi' ]                  ele from fisrt orgument index postion 2nd orgument from index position -1

console.log(fruits[0]);         //Output: [ 'apple' ]

//shift() Method
const car = ['audi', 'bmw', 'benz', 'tata']; // Array of car

console.log(car.shift()); //Output: audi                        return & remove 1st ele from Array
console.log(car);         //Output: [ 'bmw', 'benz', 'tata' ]   Updated Array of car

//Destructuring element from an array is to use assignment
const fruits = ['apple', 'banana', 'kiwi', 'mango'];
const [firstFruit, ...rest] = fruits;

console.log(firstFruit); // Output: 'apple' , will contain the value of the first element in the fruits array
console.log(rest);       // Output:[ 'banana', 'kiwi', 'mango' ] ,             rest will contain an array of the remaining elements in the fruits array.
