'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.push('c');
console.log(stuff);
// console.log(stuff.pop());
console.log(stuff.shift());
