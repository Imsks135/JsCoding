const prompt=require("prompt-sync")();//import prompt function for input
//Q.27 WAP to find whether number is odd or even
let num=prompt("Enter an number:");
if(num%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}