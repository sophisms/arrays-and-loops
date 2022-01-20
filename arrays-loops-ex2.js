/*Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *
*/

// let dot = [""];
// for(let i=0; i<=4; i++){
//     console.log(dot);
//     dot.push("*");
// }

let dot = ["*"];
for(let i=0; i<1; i++){
    console.log(dot);
    for(let j=0; j<=3; j++){
        dot.push("*");
        console.log(dot);
    }
}