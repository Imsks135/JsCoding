const prompt=require("prompt-sync")();//import prompt function for input
//Q13.WAP to enter time in seconds convert it in minuted and hour
let timeinsec=14400;
let timeinminutes=(timeinsec)/60;
let timeinhour=(timeinsec)*(1/60)*(1/60);
console.log("Time in seconds:",timeinsec);
console.log("Time in minutes:",timeinminutes);
console.log("Time in hour:",timeinhour);