/* Write a function that logs whether a number is between 0 and 25 (inclusive), between 26 and 100 (inclusive), greater than 100, or less than 0.

numberRange(25);   // '25 is between 0 and 25'
numberRange(75);   // '75 is between 26 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0' */
var number = -2;
function isNumber(number){
    if ((number>=0) && (number<=25)){
        console.log(number + " is between 0 and 25");
    }else if((number>=26) && (number<=100)){
        console.log(number + " is between 26 and 100");
    }else if((number>100)){
        console.log(number + " is grater than 100");
    }else if((number<0)){
        console.log(number + " is less than 0");
    }
}
isNumber(number);

// Additional exercise
var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e; // Estudiar

console.log(f);