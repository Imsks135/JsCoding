const prompt=require("prompt-sync")();//import prompt function for input
//Q.24 WAP to input a character and tell type of vowel
let ch=prompt("Enter a character:");
switch(ch){
    case 'a':
        console.log("vowel is a");
        break;
    case 'e':
        console.log("vowel is e");
        break;
    case 'i':
        console.log("vowel is i");
        break;
    case 'o':
        console.log("vowel is o");
        break;
    case 'u':
        console.log("vowel is u");
        break;
    default:
        console.log("not an vowel");
}