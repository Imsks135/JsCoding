const prompt=require("prompt-sync")();//import prompt function for input
//LOOPING
//Q2.WAP to print INDIA 10 times(using for,while,do while)
let name1="INDIA";
console.log("using for loop");
for(let i=1;i<=10;i++){
    console.log(name1);
}
console.log("using while loop");
let j=1;
while(j<=10){
    console.log(name1);
    j++;
}
console.log("using do while loop");
let k=1;
do{
    console.log(name1);
    k++;
}
while(k<=10);