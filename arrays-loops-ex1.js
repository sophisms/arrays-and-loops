/* Part 1

There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.*/

var names = ["Sofia", "David", "Juan"];
console.log("The people waiting at the bank: " + names);

/*Part 2

Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like? */

names.push("Sara", "Augustin");
console.log("But someone just came: " + names);

/* Part 3

It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?*/

names.splice(2,0,"Renata");
console.log("But David saved a spot for his friend: " + names);
names.push("Elena");
console.log("And someone just came: " + names);