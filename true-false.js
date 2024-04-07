/*
Truthy:
1. truthy
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. empty object {}
6. empty array []


Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null

*/

const x = false;
if (x) {
  console.log('value of x is truthy');
}
else {
  console.log('value of x is falsy');
}

// check truthy
if (!!x) {
  console.log('value is truthy');
}


// check falsy
const y = null;
if (!y) {
  console.log('value is falsy');
}

