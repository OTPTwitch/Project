let a = 13.12345, b = 2.123, n = 5;
let e = a % 13;
let f = e*(10**n)
let c = b % 2;
let v = c*(10**n)
console.log(Math.floor(f))
console.log(Math.floor(v))
console.log(Math.floor(f > v))