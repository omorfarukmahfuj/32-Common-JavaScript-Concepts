print5();
console.log(a);
print10();

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// console.log('outside', i);

function print5() {
  console.log('inside print5', 5);
}

const print10 = function () {
  console.log('inside print10', 10);
}

var a = 5;