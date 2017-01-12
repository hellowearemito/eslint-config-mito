// Kész
// best-practices
// variables
// strict
// node
// legacy
// errors
// es6


// standalone
// style

var module1 = require('./rules/style.js');
var module2 = require('./module2.js');

var a = [];
var b = [];
var c = [];

function objectEquals(x, y) {
    'use strict';

    if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
    // after this just checking type of one would be enough
    if (x.constructor !== y.constructor) { return false; }
    // if they are functions, they should exactly refer to same one (because of closures)
    if (x instanceof Function) { return x === y; }
    // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
    if (x instanceof RegExp) { return x === y; }
    if (x === y || x.valueOf() === y.valueOf()) { return true; }
    if (Array.isArray(x) && x.length !== y.length) { return false; }

    // if they are dates, they must had equal valueOf
    if (x instanceof Date) { return false; }

    // if they are strictly equal, they both need to be object at least
    if (!(x instanceof Object)) { return false; }
    if (!(y instanceof Object)) { return false; }

    // recursive object equality check
    var p = Object.keys(x);
    return Object.keys(y).every(function (i) { return p.indexOf(i) !== -1; }) &&
        p.every(function (i) { return objectEquals(x[i], y[i]); });
}

for (var key in module2.rules) {
  if (!module1.rules[key]) {
    a.push(key);
  } else {
    if (!objectEquals(module2.rules[key], module1.rules[key])) {
      b.push(key);
    }
  }
}

console.log('Nem létezik:');
console.log(a);

console.log('Létezik de más az értéke:');
console.log(b);