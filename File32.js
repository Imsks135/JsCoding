const prompt=require("prompt-sync")();//import prompt function for input
//LOOPING
//Q.4 WAP to input a number and print its factorial
let num=parseInt(prompt("Enter a number:"));
let fact=1;
for(let i=2;i<=num;i++){
    fact*=i;
}
console.log("Factorial of a number:",fact);