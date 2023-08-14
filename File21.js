const prompt=require("prompt-sync")();//import prompt function for input
//Q21.WAP to print large number between teo numbers
let num1=parseInt(prompt("Enter first number:"));
let num2=parseInt(prompt("Enter second number:"));
if(num1>num2){
    console.log("Larger number is:",num1);
}
else{
    console.log("Larger number is:",num2);
}