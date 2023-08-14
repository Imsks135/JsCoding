const prompt=require("prompt-sync")();//import prompt function for input
//Q5.WAP to input four number print their average
let num1=parseInt(prompt("Enter first number:"));
let num2=parseInt(prompt("Enter second number:"));
let num3=parseInt(prompt("Enter third number:"));
let num4=parseInt(prompt("Enter fourth number:"));
let avg=(num1+num2+num3+num4)/4;
console.log("Average:",avg);