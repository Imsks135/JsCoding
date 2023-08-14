const prompt=require("prompt-sync")();//import prompt function for input
//Q15.WAP to input and print 75% of that number
let num=parseInt(prompt("Enter the number:"));
let res=0.75*num;
console.log("75% of entered number:",res);