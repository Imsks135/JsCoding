const prompt=require("prompt-sync")();//import prompt function for input
//Q11.WAP to input two number and print their remainder
let num1=parseInt(prompt("Enter first number:"));
let num2=parseInt(prompt("Enter second number:"));
let rem=num1%num2;
console.log("Remainder is:",rem);