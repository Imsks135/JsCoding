const prompt=require("prompt-sync")();//import prompt function for input
//Q12. WAP to enter principal,rate,time in years and print simple interest
let principal=1000;
let rate=4;
let time=2;
let simple_interest=(principal*rate*time)/100;
console.log("Simple interese:",simple_interest);