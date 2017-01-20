/*
var sum = require('./sum');

// assumes both a and b are positive integers
var multiply = function (a, b) {
    var total = 0;
    for (let i = 0; i < b; i++) {
        total = sum(a, total);
    }
    return total;
};
*/

import sum from './sum';

// assumes both a and b are positive integers
const multiply = (a, b) => {
    let total = 0;
    for(let i=0;i<b;i++) {
        total = sum(a, total);
    }
    return total;
};

export default multiply;
