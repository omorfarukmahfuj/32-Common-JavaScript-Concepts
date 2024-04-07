
// Statically Typed Language

/*
int a = 5;
string b = 'abcd';
bool c = true;
object = { name : 'Omor', id: 55}
int[] numbers = [12, 45, 78];
string[] friends = ['Faruk', 'Mahfuj'];
*/

// Dynamically Typed Language
// primitive type
const a = 5;
const b = 'abcd';
const c = true;

// non-primitive type
const numbers = [1, 2, 3, 4, 5, 6]
const student = { id: 55, class: 12 }

console.log(typeof a, typeof b, typeof c, typeof numbers, typeof student);

// Reference Types in JavaScript
let x = 5;
let y = 5;
console.log(x, y);
y = 7;
console.log(x, y);

const person = { job: 'Web Developer' };
let anotherPerson = person;
// anotherPerson = { job: 'Back-end Developer' };
// console.log(person, anotherPerson);
anotherPerson.job = 'Back-end Developer';
console.log(person, anotherPerson);