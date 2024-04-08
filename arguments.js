function sum(a, b, c, d) {
  const args = [...arguments];
  console.log(args);
  const result = a + b + c + d;
  return result;
}

const total = sum(1, 2, 4, 5, 45, 6, 7, 23);
console.log(total);
console.log(sum.length);