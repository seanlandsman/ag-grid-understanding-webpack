/*
 var multiply = require('./multiply');
 var sum = require('./sum');

 var totalMultiply = multiply(5, 3);
 var totalSum = sum(5, 3);

 console.log('Product of 5 and 3 = ' + totalMultiply);
 console.log('Sum of 5 and 3 = ' + totalSum);
 */

import multiply from './multiply';
import sum from './sum';
import addImageToPage from './image_util';

import multiplyImg from '../images/multiply.png';
import sumImg from '../images/sum.png';

import './math_output.css';

const totalMultiply = multiply(5, 3);
const totalSum = sum(5, 3);

// create the body
const body = document.createElement("body");
document.documentElement.appendChild(body);

// calculate the product and add it to a span
const multiplyResultsSpan = document.createElement('span');
multiplyResultsSpan.appendChild(document.createTextNode(`Product of 5 and 3 = ${totalMultiply}`));

// calculate the sum and add it to a span
const sumResultSpan = document.createElement('span');
sumResultSpan.appendChild(document.createTextNode(`Sum of 5 and 3 = ${totalSum}`));

// add the results to the page
addImageToPage(multiplyImg);
document.body.appendChild(multiplyResultsSpan);

addImageToPage(sumImg);
document.body.appendChild(sumResultSpan);

document.body.appendChild(document.createElement("p"););

//import jQuery from 'jquery'; as it seems no import is needed?!
$(document).ready(function() {
  $('body').css("background-color", "red");
});
