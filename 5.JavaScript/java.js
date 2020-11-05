

for (let i = 0; i < 23; i++) 
if (i % 2 == 0) //pokud po dělení 2 nezbyde nic = sudé číslo
  // i++ znamená že přidá jedno číslo - tak se značí smyčka
// otázka za modrýho bludišťáka: proč to nefunguej v JS souboru?
 {  console.log(i);} ;

//Use your previous for loops and create a function which print the first N numbers:
  function printnumbers(x) {
  for (y = 0; y < x; y++) {
console.log(y) }
  }

printnumbers(9);
console.log('///////////////////////////////')

function getGreetingTo(name)
{return 'Hello '+ name +'!'}

console.log(getGreetingTo('Mark')); // Should print 'Hello Mark!'
//zadání:**Create a function which gets an array as parameter and prints each value from it.

//printValues([0, 3, 6, 7, 9]); // prints the following lines:
//  0
//  3
//  6
//  7
//  9**
array = [0, 3, 6, 7, 9]  
let printValues = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
console.log(printValues);
printValues(array);
console.log(array);
//???????????????????????????????????????

let myNumbers = [10, 20, 30, 50, 12];

// here we say, we want to do something with each item
myNumbers.forEach((number) => {
  // within the function I can tell what I want to do with the items
  console.log(number);
});
number = [0, 3, 6, 7, 9];
array.forEach((number) => {console.log(number)});