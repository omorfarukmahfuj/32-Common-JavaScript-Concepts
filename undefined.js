/*
--- 8 ways to get undefined ---

1. Variable that is not initialized will give undefined
2. Function with no return
3. Parameter that is not passed will be undefined
4. If return has nothing on the right side will return undefined
5. Property that doesn't on an object will give you undefined
6. Accessing array elements outside of the index range will give you undefined
7. Deleting an element inside an array will give you undefined
8. Set a value direct to undefined
*/
let first;

function second(a, b) {
  const total = a + b;
}

function third(a, b, c, d) {
  console.log(a, b, c, d);
}

function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return
  }
  return a + b;
}

const fifth = { id: 33, name: 'Mahfuj' };

const sixth = [1, 2, 3, 4, 5, 6, 4];

const eight = undefined;
const ninth = null;
const data = { result: [], updated: null }

console.log(first);
console.log(second());
third(2, 3);
console.log(noNegative(3, -4));
console.log(fifth.id, fifth.age);
delete sixth[1]; // You should not do it. Instead use splice
console.log(sixth[1], sixth[6], sixth[100]);
console.log(typeof undefined);
console.log(typeof null);