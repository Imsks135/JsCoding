const prompt=require("prompt-sync")();//import prompt function for input
//Q.23 WAP to input a character and check whether vowel or consonant
let ch=prompt("Enter a character:");
if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
    console.log("Character is vowel");
}
else{
    console.log("Character is consonant");
}