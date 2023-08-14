const prompt=require("prompt-sync")();//import prompt function for input
// WAP tp swap the values of variable without using third variable
let num1=parseInt(prompt("Enter first number:"));
let num2=parseInt(prompt("Enter second number:"));
num1=num1+num2;
num2=num1-num2;
num1=num1-num2;
console.log("After swap:","\n","First number:",num1,"\n","Second number:",num2);