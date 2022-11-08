let a = [];
let n = -10;
let m = 50;
let count = 100;
for ( let i = n; i < count; ++i ) {
    a.push( Math.round(Math.random() * m) );
}
console.log(a);