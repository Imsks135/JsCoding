const prompt=require("prompt-sync")();//import prompt function for input
//Q.28 WAP to person is eligible for voting or not
let age=prompt("Enter an age:");
if(age>=18){
    console.log("Eligible for vote");
}
else{
    console.log("Not eligible");
}