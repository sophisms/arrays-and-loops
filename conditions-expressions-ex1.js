/*You have a list of names: var names = ["Maria", "Antony", "Joy", "Juan"]

Part 1

Write a function to insert a name to the end of the list. Add your own name to the end of the list. */
var names = ["Maria", "Antony", "Joy", "Juan"];
function addName(array){
    array.push("Sofia");
    console.log(array);
}
addName(names);

/*Part 2

Write a function that takes in a name and checks if the list has that name. It should return back a boolean - true/false. */
function checkName(array){
    if(array.indexOf("Maria")!==-1){
        console.log(true);
    }else{
        console.log(false);
    }
}
checkName(names);

/*Part 3

Write a function that takes in a list of names. This function should compare the list taken into the names list you currently have. The function should pass back an array with the names that are in both lists. */
var newNames = ["Sofia","Maria","Roberto","Alfonso","Juan"]; // Estudiar
var common = names.filter(x => newNames.indexOf(x) !== -1)
console.log("The common elements are: " + common);

/*Part 4

Write a function that takes in a list of names and returns a list of Integers with the length of the names in the same order as received. Hint use the push function */
names.forEach(function(element){ // Preguntar
    let len = element.length;
    let arr = new Array(len).fill([1]);
    console.log(arr);
})