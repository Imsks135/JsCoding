const prompt=require("prompt-sync")();//import prompt function for input
//Q4.WAP to input three number and print their product
let num1=parseInt(prompt("Enter first number:"));
let num2=parseInt(prompt("Enter second number:"));
let num3=parseInt(prompt("Enter third number:"));
let prod=num1*num2*num3;
console.log("product:",prod);