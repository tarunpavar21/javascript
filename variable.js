// fullName = "Tarun pavar";
// age = 23;
// price = 99.55;
// x = null;
// y= undefined;
// yes = true;
// no = false;

// console.log(fullName);
// console.log(age);
// console.log(price);
// console.log(x);
// console.log(y);
// console.log(yes);
// console.log(no);


/* Variable Rules
Variable names are case sensitive;
“a” & “A” is different.
Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
Only a letter, underscore( _ ) or $ should be 1st character.
Reserved words cannot be variable names.



decalre variable with let, coonst and var
-var : Variable can be re-declared & updated. A global scope variable.
-let : Variable cannot be re-declared but can be updated. A block scope variable.
-const : Variable cannot be re-declared or updated. A block scope variable.
*/

// let fullName = "Pavar Tarun";
// console.log(fullName);


var A = 20;

console.log(A);

let B = 990.22;
console.log(B);

const isIknow = true;
console.log(isIknow);

// declaring an object in js
const studentInfo = {
    fullName : "tarun pavar",
    age : 23,
    cgpa : 8.2,
    isPass : true

}; 
// three type we can get output
console.log(studentInfo["age"]);
console.log(studentInfo);
console.log(studentInfo.cgpa)

