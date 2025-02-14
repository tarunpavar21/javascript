// let fruit = ["banana","apple","graps","mango",null,false,5];
// console.log(fruit);

// console.log(fruit[2]);

// console.log(fruit[3]);

// console.log(fruit);


// adding value in array 

// fruit[8] = "hello" // add new value 

// console.log(fruit.length);

// cahnge the value  

// fruit[0] = 78;

// console.log(fruit[0]);


//Array mathod
// let num = [1,2,3,4,5,6,7,8];
// let b = num.toString(); // b is now string

// console.log(b);

// let c =num.join("_");
// console.log(c, typeof c);

// num.pop();
// let r = num.pop() // return the pop element 
// console.log(num,r);

// let r1 = num.push(12,13,14,15,16,17);
// console.log(num);

// let s1 =num.shift(); // remove an element from the start of the array 
// console.log(s1)


// delete mathods

// let num = [1,2,3,4,5,6,7,8];
// delete num[2]
// console.log(num)

//concat mathod 

// let num = [1,2,3,4,5,6,7,8];
// let nummore = [11,12,13,14,15,16,17,18];
// let newAraay = num.concat(nummore);
// console.log(newAraay);

//short mathod

// let num = [4,54,6,71,8,41,223,333]

// num.sort();
// console.log(num);// sort by alphabetically 

// ascending order sorting using comapre fucntion

// let comapre = (a,b) =>{
//     return a-b;
// }
// let num = [4,54,6,71,8,41,223,333]
// num.sort(comapre);
// console.log(num);


//reverse mathod 

// let comapre = (a,b) =>{
//     return a-b;
// }
// let num = [4,54,6,71,8,41,223,333]
// num.sort(comapre);
// num.reverse();
// console.log(num);

//spilce 

// let num = [4,54,6,71,8,41,223,333]
// num.splice(1,3,5,6,7) // take 4 argument 
// console.log(num);

//slice 

let num = [4,54,6,71,8,41,223,333]

let newArray = num.slice(1)
let newAraay_length = num.slice(2,5)


console.log(newArray);
console.log(newAraay_length)
