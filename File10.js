const prompt=require("prompt-sync")();//import prompt function for input
//Q10.WAP to enter five subjects marks print their marks and average
let maths=parseInt(prompt("Enter maths marks:"));
let english=parseInt(prompt("Enter english name:"));
let hindi=parseInt(prompt("Enter hindi marks:"));
let computer=parseInt(prompt("Enter computer marks:"));
let GK=parseInt(prompt("Enter GK marks:"));
let avg=(maths+english+hindi+computer+GK)/5;
console.log("Maths:",maths);
console.log("English:",english);
console.log("Hindi:",hindi);
console.log("Computer:",computer);
console.log("GK:",GK);
console.log("Average:",avg);



