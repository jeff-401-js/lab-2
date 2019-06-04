'use strict';

const List = require('./list-constructor.js');
// const List = require('./list.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.push('c');
// console.log(stuff);
// console.log(stuff.pop());
console.log(stuff.shift());
// console.log(stuff.unshift(1));
// stuff.foreach((item) => {
//   return item+=2;
// });
console.log(stuff);
