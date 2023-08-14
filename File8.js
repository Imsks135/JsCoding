const prompt=require("prompt-sync")();//import prompt function for input
//Q8. WAP tp enter salary and print its HRA,DA,PF
let salary=1400000;
let HRA=0.2*salary;
let DA=0.15*salary;
let PF=0.1*salary;
let net_salary=(salary)-(HRA+DA+PF);
console.log("Salary:",salary);
console.log("HRA:",HRA);
console.log("DA:",DA);
console.log("Net Salary in hand:",net_salary);