const prompt=require("prompt-sync")();//import prompt function for input
//Q22.WAP to print largest number among three numbers
let num1=parseInt(prompt("Enter first number:"));
let num2=parseInt(prompt("Enter second number:"));
let num3=parseInt(prompt("Enter third number:"));
if(num1>num2){
    if(num1>num3){
        console.log("Largest number:",num1);
    }
    else{
        console.log("Largest number:",num3);
    }
}
else{
    if(num2>num3){
        console.log("Largest number:",num2);
    }
    else{
        console.log("Largest number:",num3);
    }
}