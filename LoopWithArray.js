// let num = [22,34,55,1,7,9,4];

// for(let i=0; i<num.length; i++){
//     console.log(num[i]);

// }

// forEach Loop

// num.forEach((Element) =>{
//     console.log(Element*Element)
// })


// array.from

// let name = "tarun"
// let arr = Array.from(name) // make string to array
// console.log(arr)

// for....of

// for (let i of num){
//     console.log(i)
// }


// for....in(givi array key)

// for (let item in num){
//     console.log(item)
// }

//
// Map mathod

// let arr = [45,23,21]
 // console.log(arr)

// let a = arr.map((value, index, array)=>{
//     console.log(value, index, array)
//     return value+1
// })
// console.log(a)


// filter mathod
 
// let arr2 = [45,23,21,0,3,5]

// let a2 = arr2.filter((a)=>{
//     return a<10
// })
// console.log(a2)


// reduce Mathod in Array

let arr3 = [1,2,3,5,2,1]

let newarr3 = arr3.reduce((h1,h2)=>{ 
    return h1+h2
})
console.log(newarr3); // its give value of an value as sum of the array
