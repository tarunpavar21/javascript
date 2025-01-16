// Qs1. Get user to input a number using prompt(“Enter a number: ”). Check if the number isa multiple of 5 or not.

// let number = prompt("enter a number !");
// console.log(number);

// if (number% 5 == 0){
//     console.log("given number is multiple of 5");
// }else{
//     console.log("given number is not multiple too 5");
// }



/* Qs2. Write a code which can give grades to students according to their scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

let score = 91;
let gread ;

if (score >= 90 && score<= 100){
    gread = "A";
}else if (score >= 70 && score<= 89){
    gread = "B";
}else if (score >= 60 && score<= 69){
    gread = "C";
}else if (score >= 50 && score<= 59){
    gread = "D";
}else if (score >= 0 && score<=49)
{
    gread = "F";
}
console.log(gread);
