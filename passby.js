// primitive types are pass by value
let num1 = 4;
let num2 = 5;

function multiply(a, b) {
  a = 27;
  const multiply = a * b;
  return multiply;
}
console.log(num1);
const output = multiply(num1, num2);
console.log(output);

// non-primitive types: object and array are pass by reference
let person1 = { name: 'Omor', age: 20 };
let person2 = { name: 'Faruk', age: 21 };

function personFnc(person1, person2) {
  person1.name = 'Mahfuj';
  person2.age = 19;
}

console.log(person1, person2);
personFnc(person1, person2);
console.log(person1, person2);