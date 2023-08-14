const prompt=require("prompt-sync")();//import prompt function for input
//Q14.WAP to enter days convert it into months and years
let days=730;
let month=Math.floor(days/30);
let year=days/365;
console.log("Days:",days);
console.log("Months:",month);
console.log("Years:",year);