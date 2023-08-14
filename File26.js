const prompt=require("prompt-sync")();//import prompt function for input
//Q.26 WAP to find whether a year is leap year or not
let year=prompt("Enter an year:");
if(year%400==0){
    console.log("Leap year");
}
else if(year%100==0){
    console.log("Not an Leap year");
}
else if(year%4==0){
    console.log("Leap year");
}
else{
    console.log("Not an Leap year");
}