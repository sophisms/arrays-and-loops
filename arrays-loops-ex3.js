/* Write while loops to do the following:

– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive. */
console.log("Part 1:");
let xValue = 5;
while (xValue > 0) {
    console.log(xValue);
    xValue = xValue - 0.5;
}
/*- Print all the odd numbers between 1 - 100.*/
console.log("Part 2:");
let yValue = 0;
while (yValue < 100) {
    yValue++;
    if (yValue % 2 != 0){
        console.log(yValue);
    }
}
/*- Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]*/
console.log("Part 3:") // Preguntar
let m = [6];
aux = [0];
add = [""];
while(m>0){
    aux += m-1;
    m -= 1;
}
console.log(aux);

/*
- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190
 */
console.log("Part 4:") // Estudiar
let n = 5;
sum = 0;
while(n>0){
    sum += n;
    n -= 1;
}
console.log(sum);